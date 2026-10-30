// JoshLabs unified analytics dashboard · /tj (admin only)
// Calls /api/stats?product=<id>&days=N with Authorization: Bearer <JL_ADMIN_KEY>
// Key stored in localStorage under "jl_admin_key" (never transmitted to 3rd parties).
(() => {
  const PRODUCTS = {
    shouwang: {
      name: "守望",
      id: "shouwang",
      pageMap: { "/": "首页", "/ep": "节目", "/map": "网络图", "/people": "人物", "/jing": "经文", "/tip": "线索", "/links": "推荐", "/about": "关于" },
      pageName(p) {
        return this.pageMap[p]
          || (/^\/\d+$/.test(p) ? `第${p.slice(1)}集 全文` : /^\/ep\d+$/.test(p) ? `第${p.slice(3)}集` : /^\/s\/\d+$/.test(p) ? `第${p.slice(3)}集 出处` : p);
      },
    },
  };

  const KEY_STORE = "jl_admin_key";
  const getKey = () => { try { return localStorage.getItem(KEY_STORE) || ""; } catch { return ""; } };
  const setKey = v => { try { localStorage.setItem(KEY_STORE, v); } catch {} };

  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt = s => { s = Math.round(s); return s < 60 ? `${s}秒` : s < 3600 ? `${Math.floor(s / 60)}分${s % 60 ? s % 60 + "秒" : ""}` : `${Math.floor(s / 3600)}小时${Math.floor(s % 3600 / 60)}分`; };
  const DUR_LABELS = ["10 秒以内", "10–30 秒", "30 秒–1 分", "1–3 分", "3–10 分", "10–30 分", "30 分以上"];
  const when = ts => { const d = new Date(ts), p = n => String(n).padStart(2, "0"); return `${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`; };

  let world = null, worldNames = {};
  let currentProduct = "shouwang";
  let days = 7;

  const authUI   = document.getElementById("tj-auth-ui");
  const mainUI   = document.getElementById("tj-main");
  const authForm = document.getElementById("tj-auth-form");
  const authErr  = document.getElementById("tj-auth-err");
  const keyBtn   = document.getElementById("tj-key-btn");
  const content  = document.getElementById("tj-content");

  function showAuth() {
    authUI.hidden = false; mainUI.hidden = true;
    authErr.textContent = "";
    document.getElementById("tj-key-input").value = "";
    requestAnimationFrame(() => document.getElementById("tj-key-input").focus());
  }
  function showMain() { authUI.hidden = true; mainUI.hidden = false; }

  async function load(product, d) {
    const p = PRODUCTS[product]; if (!p) return;
    const key = getKey();
    if (!key) { showAuth(); return; }
    content.innerHTML = `<p class="tj-msg">载入中…</p>`;
    let j;
    try {
      const r = await fetch(`/api/stats?product=${product}&days=${d}`, {
        headers: { "Authorization": `Bearer ${key}` },
      });
      if (r.status === 401) { authErr.textContent = "密钥不正确，请重新输入。"; showAuth(); return; }
      if (!r.ok) throw new Error(`${r.status}`);
      j = await r.json();
    } catch (e) {
      content.innerHTML = `<p class="tj-msg">载入失败（${esc(String(e.message))}）。<br>如在本地开发，请先 <code>npx wrangler pages dev . --binding JL_ADMIN_KEY=test --binding SW_ADMIN_KEY=your_key</code></p>`;
      return;
    }
    render(j, p, d);
  }

  function listItems(rows, label) {
    return rows.length
      ? rows.map(r => `<li><span>${esc(label(r))}</span><b>${r.n}${r.d ? " · " + fmt(r.d) : ""}</b></li>`).join("")
      : `<li><span style="color:var(--muted)">暂无数据</span></li>`;
  }

  function render(j, p, d) {
    const dmax = Math.max(1, ...(j.durs || []).map(r => r.n));
    const durHTML = (j.durs || []).length
      ? j.durs.map(r => `<li><div class="tj-bar" style="width:${Math.max(4, (100 * r.n / dmax) * 0.55).toFixed(1)}px"></div><span>${DUR_LABELS[r.k]}</span><b>${r.n}</b></li>`).join("")
      : `<li><span style="color:var(--muted)">暂无数据</span></li>`;

    const recentHTML = (j.recent || []).length
      ? j.recent.map(r =>
          `<li><div><time>${esc(when(r.ts))}</time><span class="rpage">${esc(p.pageName(r.path))}</span><div class="rmeta">${esc([r.city, worldNames[r.country] || r.country].filter(Boolean).join("，") || "未知")} · ${esc(r.device)}${r.ref ? " · 来自 " + esc(r.ref) : ""}</div></div><b>${r.dur ? fmt(r.dur) : "—"}</b></li>`
        ).join("")
      : `<li style="color:var(--muted);font-size:0.875rem;padding:0.6rem 0">暂无数据</li>`;

    content.innerHTML = `
<div class="tj-range" id="tj-range" role="group" aria-label="时间范围">
  <button type="button" data-d="1"${d === 1 ? ' aria-pressed="true"' : ""}>今天</button>
  <button type="button" data-d="7"${d === 7 ? ' aria-pressed="true"' : ""}>7 天</button>
  <button type="button" data-d="30"${d === 30 ? ' aria-pressed="true"' : ""}>30 天</button>
  <button type="button" data-d="365"${d === 365 ? ' aria-pressed="true"' : ""}>一年</button>
</div>
<div class="tj-kpi">
  <div class="tj-kpi-card"><b>${j.total}</b><span>浏览次数</span></div>
  <div class="tj-kpi-card"><b>${j.visitors}</b><span>访客（按天估算）</span></div>
  <div class="tj-kpi-card"><b>${(j.countries || []).length}</b><span>国家和地区</span></div>
  <div class="tj-kpi-card"><b>${j.measured ? fmt(j.avg_dur) : "—"}</b><span>平均停留</span></div>
  <div class="tj-kpi-card"><b>${j.measured ? fmt(j.sum_dur) : "—"}</b><span>停留总时长</span></div>
</div>
<div class="tj-map-wrap">
  <svg id="tjmap" viewBox="0 0 1000 480" role="img" aria-label="访问来源世界地图"></svg>
  <div class="tj-tip" id="tj-tip" hidden></div>
</div>
<div class="tj-grid">
  <div class="tj-section"><h2>国家和地区</h2><ol class="tj-list">${listItems(j.countries || [], r => worldNames[r.k] || r.k || "未知")}</ol></div>
  <div class="tj-section"><h2>城市</h2><ol class="tj-list">${listItems(j.cities || [], r => [r.city, r.region, worldNames[r.k] || r.k].filter(Boolean).join("，") || "未知")}</ol></div>
  <div class="tj-section"><h2>页面</h2><ol class="tj-list">${listItems(j.pages || [], r => p.pageName(r.k))}</ol></div>
  <div class="tj-section"><h2>从哪里来</h2><ol class="tj-list">${listItems(j.refs || [], r => r.k || "直接打开")}</ol></div>
  <div class="tj-section"><h2>设备</h2><ol class="tj-list">${listItems(j.devices || [], r => r.k)}</ol></div>
  <div class="tj-section"><h2>每天</h2><ol class="tj-list">${listItems(j.days || [], r => r.k)}</ol></div>
  <div class="tj-section"><h2>停留分布</h2><ol class="tj-list tj-bars">${durHTML}</ol></div>
</div>
<div class="tj-recent-title">最近访问</div>
<ol class="tj-recent">${recentHTML}</ol>
<p class="tj-note">停留时长：只算页面在前台的秒数，2026-10-29 起才有。时间按本地时区显示。</p>`;

    // Wire range buttons
    document.getElementById("tj-range").addEventListener("click", ev => {
      const b = ev.target.closest("button[data-d]"); if (!b) return;
      days = +b.dataset.d; load(currentProduct, days);
    });

    // Draw map
    drawMap(j);
  }

  function drawMap(j) {
    const map = document.getElementById("tjmap");
    const tip  = document.getElementById("tj-tip");
    if (!map || !world) return;

    const by   = Object.fromEntries((j.countries || []).map(r => [r.k, r.n]));
    const max  = Math.max(1, ...(j.countries || []).map(r => r.n));
    const cmax = Math.max(1, ...(j.cities || []).map(r => r.n));
    const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const shade = n => {
      if (!n) return dark ? "#2a2928" : "#e8e7e4";
      const t = 0.2 + 0.8 * Math.sqrt(n / max);
      return dark
        ? `rgb(${Math.round(212 * t)},${Math.round(146 * t)},0)`
        : `rgb(${Math.round(247 - 35 * t)},${Math.round(246 - 100 * t)},${Math.round(243 - 243 * t)})`;
    };

    const X = lon => (lon + 180) / 360 * 1000;
    const Y = lat => (84 - Math.max(Math.min(lat, 84), -60)) / 144 * 480;

    map.innerHTML = world.c.map(([k, nm, d]) =>
      `<path d="${d}" fill="${shade(by[k] || 0)}" data-t="${esc(nm)}${by[k] ? "：" + by[k] : ""}"></path>`
    ).join("") + (j.cities || []).filter(r => r.lat != null && r.lon != null).map(r =>
      `<circle cx="${X(r.lon).toFixed(1)}" cy="${Y(r.lat).toFixed(1)}" r="${(2.5 + 7 * Math.sqrt(r.n / cmax)).toFixed(1)}" data-t="${esc([r.city, worldNames[r.k] || r.k].filter(Boolean).join("，"))}：${r.n}"></circle>`
    ).join("");

    map.addEventListener("pointermove", ev => {
      const t = ev.target.closest("[data-t]"); if (!t) { tip.hidden = true; return; }
      const b = map.parentNode.getBoundingClientRect();
      tip.textContent = t.dataset.t; tip.hidden = false;
      tip.style.left = Math.min(ev.clientX - b.left + 14, b.width - tip.offsetWidth - 4) + "px";
      tip.style.top  = (ev.clientY - b.top + 14) + "px";
    });
    map.addEventListener("pointerleave", () => { tip.hidden = true; });
  }

  // Auth form submit
  authForm.addEventListener("submit", e => {
    e.preventDefault();
    const key = document.getElementById("tj-key-input").value.trim();
    if (!key) { authErr.textContent = "请输入密钥。"; return; }
    setKey(key);
    showMain();
    load(currentProduct, days);
  });

  // Product tab switching
  document.getElementById("tj-products").addEventListener("click", ev => {
    const t = ev.target.closest(".tj-tab[data-product]"); if (!t) return;
    document.querySelectorAll(".tj-tab").forEach(b => b.setAttribute("aria-selected", "false"));
    t.setAttribute("aria-selected", "true");
    currentProduct = t.dataset.product;
    load(currentProduct, days);
  });

  // Key reset button
  keyBtn.addEventListener("click", () => showAuth());

  // Load world map (local copy)
  fetch("assets/world.json").then(r => r.json()).then(w => {
    world = w;
    worldNames = { ...(w.n || {}), ...Object.fromEntries(w.c.map(([k, n]) => [k, n])) };
    // Re-draw if stats already loaded
    const map = document.getElementById("tjmap");
    if (map && map.children.length === 0 && content.querySelector(".tj-map-wrap")) {
      // stats rendered but map was empty because world not yet loaded
      load(currentProduct, days);
    }
  }).catch(() => {});

  // Init
  if (getKey()) { showMain(); load(currentProduct, days); }
  else showAuth();
})();
