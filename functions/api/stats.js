// JoshLabs Pages Function: proxy admin stats for each product.
// Env vars required (set in Cloudflare Pages → Settings → Environment variables):
//   JL_ADMIN_KEY   — password for the /tj admin page (you choose)
//   SW_ADMIN_KEY   — 守望 shouwang.org admin key (copy from .admin_key file)

const PRODUCTS = {
  shouwang: {
    api: "https://shouwang.org/api/admin/stats",
    keyVar: "SW_ADMIN_KEY",
  },
};

function same(a, b) {
  if (!a || !b || a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}

export async function onRequest(ctx) {
  const { request, env } = ctx;
  const url = new URL(request.url);

  // CORS preflight
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders(request) });
  }

  // Auth: Authorization: Bearer <JL_ADMIN_KEY>
  const auth = request.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (!env.JL_ADMIN_KEY || !same(token, env.JL_ADMIN_KEY)) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "content-type": "application/json", ...corsHeaders(request) },
    });
  }

  const product = url.searchParams.get("product") || "shouwang";
  const days = Math.max(1, Math.min(3660, Number(url.searchParams.get("days")) || 7));
  const p = PRODUCTS[product];
  if (!p) {
    return new Response(JSON.stringify({ error: "Unknown product" }), {
      status: 400,
      headers: { "content-type": "application/json", ...corsHeaders(request) },
    });
  }

  const key = env[p.keyVar];
  if (!key) {
    return new Response(JSON.stringify({ error: "Product key not configured" }), {
      status: 503,
      headers: { "content-type": "application/json", ...corsHeaders(request) },
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
  } catch (e) {
    return new Response(JSON.stringify({ error: "Upstream error" }), {
      status: 502,
      headers: { "content-type": "application/json", ...corsHeaders(request) },
    });
  }
}

function corsHeaders(req) {
  const origin = req.headers.get("origin") || "";
  // Only allow from joshlabs.app itself (same origin, but include for local dev)
  const allowed = ["https://joshlabs.app", "http://localhost:8788", "http://localhost:8080"];
  return allowed.includes(origin)
    ? { "access-control-allow-origin": origin, "access-control-allow-headers": "Authorization, Content-Type" }
    : {};
}
