// JoshLabs Pages Function: proxy admin stats for each product.
// Env vars required (set in Cloudflare Pages → Settings → Environment variables):
//   GOOGLE_CLIENT_ID                — OAuth 2.0 Web Application Client ID
//   CX_SUPABASE_URL                 — Cabinet-X Supabase project URL
//   CX_SUPABASE_SERVICE_KEY         — Cabinet-X Supabase service role key (never leaves this server)
//   JOSHLABS_SUPABASE_URL           — Shared Supabase URL (JoshMoney)
//   JOSHLABS_SUPABASE_SERVICE_KEY   — Shared Supabase service role key (never leaves this server)

const ALLOWED_EMAIL = "josh.zeng.ca@gmail.com";

export async function onRequest(ctx) {
  const { request, env } = ctx;
  const url = new URL(request.url);

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders(request) });
  }

  // Verify Google ID token
  const auth = request.headers.get("authorization") || "";
  const idToken = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (!idToken) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401, headers: { "content-type": "application/json", ...corsHeaders(request) },
    });
  }

  const email = await verifyGoogleToken(idToken, env.GOOGLE_CLIENT_ID);
  if (!email || email !== ALLOWED_EMAIL) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401, headers: { "content-type": "application/json", ...corsHeaders(request) },
    });
  }

  const product = url.searchParams.get("product") || "cabinetx";
  const days = Math.max(1, Math.min(3660, Number(url.searchParams.get("days")) || 7));

  // Cabinet-X: call Supabase RPC directly with service role key
  if (product === "cabinetx") {
    return handleCabinetX(env, days, request);
  }

  // Shared Supabase products (JoshMoney)
  const JOSHLABS_RPC = {
    joshmoney: "joshmoney_tj_stats_srv",
  };
  if (JOSHLABS_RPC[product]) {
    return handleJoshlabsSupabase(env, product, JOSHLABS_RPC[product], days, request);
  }

  return new Response(JSON.stringify({ error: "Unknown product" }), {
    status: 400, headers: { "content-type": "application/json", ...corsHeaders(request) },
  });
}

async function handleCabinetX(env, days, request) {
  const supabaseUrl = env.CX_SUPABASE_URL;
  const serviceKey = env.CX_SUPABASE_SERVICE_KEY;
  if (!supabaseUrl || !serviceKey) {
    return new Response(JSON.stringify({ error: "Cabinet-X not configured" }), {
      status: 503, headers: { "content-type": "application/json", ...corsHeaders(request) },
    });
  }

  // Map days → bucket + count
  let bucket, count;
  if (days >= 180) { bucket = "week"; count = Math.min(Math.ceil(days / 7), 52); }
  else              { bucket = "day";  count = Math.min(days, 90); }

  try {
    const [r, countries] = await Promise.all([
      fetch(`${supabaseUrl}/rest/v1/rpc/cx_admin_stats_srv`, {
        method: "POST",
        headers: { "content-type": "application/json", "apikey": serviceKey, "authorization": `Bearer ${serviceKey}` },
        body: JSON.stringify({ p_bucket: bucket, p_count: count, p_exclude: [] }),
      }),
      fetchGeo(supabaseUrl, serviceKey, [
        { table: "profiles",  col: "country_code" },
        { table: "profiles",  col: "country" },
        { table: "users",     col: "country_code" },
      ]),
    ]);
    if (!r.ok) {
      const txt = await r.text();
      return new Response(JSON.stringify({ error: `Supabase error ${r.status}`, detail: txt }), {
        status: 502, headers: { "content-type": "application/json", ...corsHeaders(request) },
      });
    }
    const data = await r.json();
    return new Response(JSON.stringify({ _type: "cx_stats", countries, ...data }), {
      headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...corsHeaders(request) },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Upstream error", detail: String(e) }), {
      status: 502, headers: { "content-type": "application/json", ...corsHeaders(request) },
    });
  }
}

async function handleJoshlabsSupabase(env, product, rpcName, days, request) {
  const supabaseUrl = env.JOSHLABS_SUPABASE_URL;
  const serviceKey = env.JOSHLABS_SUPABASE_SERVICE_KEY;
  if (!supabaseUrl || !serviceKey) {
    return new Response(JSON.stringify({ error: `${product} not configured` }), {
      status: 503, headers: { "content-type": "application/json", ...corsHeaders(request) },
    });
  }

  const count = Math.min(days, 90);

  try {
    const [r, countries] = await Promise.all([
      fetch(`${supabaseUrl}/rest/v1/rpc/${rpcName}`, {
        method: "POST",
        headers: { "content-type": "application/json", "apikey": serviceKey, "authorization": `Bearer ${serviceKey}` },
        body: JSON.stringify({ p_days: count }),
      }),
      fetchGeo(supabaseUrl, serviceKey, [
        { table: "profiles",  col: "country_code" },
        { table: "profiles",  col: "country" },
        { table: "app_users", col: "country_code" },
      ]),
    ]);
    if (!r.ok) {
      const txt = await r.text();
      return new Response(JSON.stringify({ error: `Supabase error ${r.status}`, detail: txt }), {
        status: 502, headers: { "content-type": "application/json", ...corsHeaders(request) },
      });
    }
    const data = await r.json();
    return new Response(JSON.stringify({ ...data, countries }), {
      headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...corsHeaders(request) },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Upstream error", detail: String(e) }), {
      status: 502, headers: { "content-type": "application/json", ...corsHeaders(request) },
    });
  }
}

// Try multiple table/column combinations; returns [{k:"US",n:5},…] or []
async function fetchGeo(supabaseUrl, serviceKey, attempts) {
  for (const { table, col } of attempts) {
    try {
      const r = await fetch(
        `${supabaseUrl}/rest/v1/${table}?select=${col}&${col}=not.is.null&limit=5000`,
        { headers: { "apikey": serviceKey, "authorization": `Bearer ${serviceKey}` } }
      );
      if (!r.ok) continue;
      const rows = await r.json();
      if (!Array.isArray(rows) || !rows.length) continue;
      const map = {};
      for (const row of rows) {
        const c = String(row[col] || "").trim().toUpperCase().slice(0, 2);
        if (/^[A-Z]{2}$/.test(c)) map[c] = (map[c] || 0) + 1;
      }
      const result = Object.entries(map).map(([k, n]) => ({ k, n })).sort((a, b) => b.n - a.n);
      if (result.length) return result;
    } catch { /* try next */ }
  }
  return [];
}

async function verifyGoogleToken(idToken, clientId) {
  try {
    const r = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(idToken)}`);
    if (!r.ok) return null;
    const payload = await r.json();
    if (clientId && payload.aud !== clientId) return null;
    if (payload.exp && Number(payload.exp) < Date.now() / 1000) return null;
    return payload.email || null;
  } catch {
    return null;
  }
}

function corsHeaders(req) {
  const origin = req.headers.get("origin") || "";
  const allowed = ["https://joshlabs.app", "http://localhost:8788", "http://localhost:8080"];
  return allowed.includes(origin)
    ? { "access-control-allow-origin": origin, "access-control-allow-headers": "Authorization, Content-Type" }
    : {};
}
