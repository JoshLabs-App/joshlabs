// JoshLabs Pages Function: proxy admin stats for each product.
// Env vars required (set in Cloudflare Pages → Settings → Environment variables):
//   GOOGLE_CLIENT_ID          — OAuth 2.0 Web Application Client ID
//   SW_ADMIN_KEY              — 守望 shouwang.org admin key (never leaves this server)
//   CX_SUPABASE_URL           — Cabinet-X Supabase project URL
//   CX_SUPABASE_SERVICE_KEY   — Cabinet-X Supabase service role key (never leaves this server)

const ALLOWED_EMAIL = "josh.zeng.ca@gmail.com";

// Products backed by a simple bearer-key API (shouwang pattern)
const BEARER_PRODUCTS = {
  shouwang: {
    api: "https://shouwang.org/api/admin/stats",
    keyVar: "SW_ADMIN_KEY",
  },
};

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

  const product = url.searchParams.get("product") || "shouwang";
  const days = Math.max(1, Math.min(3660, Number(url.searchParams.get("days")) || 7));

  // Cabinet-X: call Supabase RPC directly with service role key
  if (product === "cabinetx") {
    return handleCabinetX(env, days, request);
  }

  const p = BEARER_PRODUCTS[product];
  if (!p) {
    return new Response(JSON.stringify({ error: "Unknown product" }), {
      status: 400, headers: { "content-type": "application/json", ...corsHeaders(request) },
    });
  }

  const key = env[p.keyVar];
  if (!key) {
    return new Response(JSON.stringify({ error: "Product key not configured" }), {
      status: 503, headers: { "content-type": "application/json", ...corsHeaders(request) },
    });
  }

  try {
    const upstream = await fetch(`${p.api}?days=${days}`, {
      headers: {
        "Authorization": `Bearer ${key}`,
        "User-Agent": "Mozilla/5.0 (compatible; JoshLabs-Stats/1.0)",
      },
    });
    const body = await upstream.arrayBuffer();
    return new Response(body, {
      status: upstream.status,
      headers: {
        "content-type": upstream.headers.get("content-type") || "application/json",
        "cache-control": "no-store",
        ...corsHeaders(request),
      },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Upstream error" }), {
      status: 502, headers: { "content-type": "application/json", ...corsHeaders(request) },
    });
  }
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
  if (days >= 180) {
    bucket = "week";
    count = Math.min(Math.ceil(days / 7), 52);
  } else {
    bucket = "day";
    count = Math.min(days, 90);
  }

  try {
    const r = await fetch(`${supabaseUrl}/rest/v1/rpc/cx_admin_stats_srv`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "apikey": serviceKey,
        "authorization": `Bearer ${serviceKey}`,
      },
      body: JSON.stringify({ p_bucket: bucket, p_count: count, p_exclude: [] }),
    });
    if (!r.ok) {
      const txt = await r.text();
      return new Response(JSON.stringify({ error: `Supabase error ${r.status}`, detail: txt }), {
        status: 502, headers: { "content-type": "application/json", ...corsHeaders(request) },
      });
    }
    const data = await r.json();
    return new Response(JSON.stringify({ _type: "cx_stats", ...data }), {
      headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...corsHeaders(request) },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Upstream error", detail: String(e) }), {
      status: 502, headers: { "content-type": "application/json", ...corsHeaders(request) },
    });
  }
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
