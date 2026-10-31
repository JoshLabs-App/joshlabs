// JoshLabs unified analytics dashboard · /tj (admin only)
// Auth: Google Identity Services one-tap login. ID token sent as Bearer to /api/stats.
// Token stored in sessionStorage — refreshed on next visit via Google silent flow.
(() => {
  const GOOGLE_CLIENT_ID = "584910137845-jneeasl3tjefegse0k3gnj8aefb9dtf6.apps.googleusercontent.com";
  const TOKEN_STORE = "jl_google_id_token";

  const PRODUCTS = {
    shouwang: {
      name: "守望",
      id: "shouwang",
      type: "pageview",
      pageMap: { "/": "首页", "/ep": "节目", "/map": "网络图", "/people": "人物", "/jing": "经文", "/tip": "线索", "/links": "推荐", "/about": "关于" },
      pageName(p) {
        return this.pageMap[p]
          || (/^\/\d+$/.test(p) ? `第${p.slice(1)}集 全文` : /^\/ep\d+$/.test(p) ? `第${p.slice(3)}集` : /^\/s\/\d+$/.test(p) ? `第${p.slice(3)}集 出处` : p);
      },
    },
    cabinetx: { name: "Cabinet-X", id: "cabinetx", type: "app_stats" },
    tingdao:  { name: "听到",       id: "tingdao",  type: "app_stats" },
    askbible: { name: "AskBible",  id: "askbible", type: "app_stats" },
    joshmoney:{ name: "JoshMoney", id: "joshmoney", type: "app_stats" },
  };

  const getToken = () => { try { return sessionStorage.getItem(TOKEN_STORE) || ""; } catch { return ""; } };
  const setToken = v => { try { sessionStorage.setItem(TOKEN_STORE, v); } catch {} };
  const clearToken = () => { try { sessionStorage.removeItem(TOKEN_STORE); } catch {} };

  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt = s => { s = Math.round(s); return s < 60 ? `${s}秒` : s < 3600 ? `${Math.floor(s / 60)}分${s % 60 ? s % 60 + "秒" : ""}` : `${Math.floor(s / 3600)}小时${Math.floor(s % 3600 / 60)}分`; };
  const DUR_LABELS = ["10 秒以内", "10–30 秒", "30 秒–1 分", "1–3 分", "3–10 分", "10–30 分", "30 分以上"];
  const when = ts => { const d = new Date(ts), p = n => String(n).padStart(2, "0"); return `${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`; };

  let world = null, worldNames = {};
  let currentProduct = "shouwang";
  let days = 7;

  const authUI   = document.getElementById("tj-auth-ui");
  const mainUI   = document.getElementById("tj-main");
  const authErr  = document.getElementById("tj-auth-err");
  const keyBtn   = document.getElementById("tj-key-btn");
  const content  = document.getElementById("tj-content");

  let googleBtnRendered = false;
  function showAuth() {
    authUI.hidden = false; mainUI.hidden = true;
    authErr.textContent = "";
    if (!googleBtnRendered && window.google?.accounts?.id) {
      renderGoogleBtn();
    }
  }
  function showMain() { authUI.hidden = true; mainUI.hidden = false; }

  function renderGoogleBtn() {
    const container = document.getElementById("tj-google-btn");
    if (!container || !window.google?.accounts?.id) return;
    googleBtnRendered = true;
    google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: onGoogleCredential,
      auto_select: true,
    });
    google.accounts.id.renderButton(container, {
      theme: "outline",
      size: "large",
      text: "signin_with",
      locale: "zh-CN",
    });
    // Also try one-tap prompt
    google.accounts.id.prompt();
  }

  function onGoogleCredential(response) {
    const idToken = response.credential;
    setToken(idToken);
    authErr.textContent = "";
    showMain();
    load(currentProduct, days);
  }

  async function load(product, d) {
    const p = PRODUCTS[product]; if (!p) return;
    const token = getToken();
    if (!token) { showAuth(); return; }
    content.innerHTML = `<p class="tj-msg">载入中…</p>`;
    let j;
    try {
      const r = await fetch(`/api/stats?product=${product}&days=${d}`, {
        headers: { "Authorization": `Bearer ${token}` },
      });
      if (r.status === 401) {
        clearToken();
        authErr.textContent = "登录已过期，请重新登录。";
        showAuth();
        return;
      }
      if (!r.ok) throw new Error(`${r.status}`);
      j = await r.json();
    } catch (e) {
      content.innerHTML = `<p class="tj-msg">载入失败（${esc(String(e.message))}）。<br>如在本地开发，请先 <code>npx wrangler pages dev . --binding GOOGLE_CLIENT_ID=xxx --binding SW_ADMIN_KEY=your_key</code></p>`;
      return;
    }
    if (j._type === "cx_stats") { renderCX(j, d); }
    else if (j._type === "td_stats") { renderTD(j, d); }
    else if (j._type === "ab_stats") { renderAB(j, d); }
    else if (j._type === "jm_stats") { renderJM(j, d); }
    else { render(j, p, d); }
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

    document.getElementById("tj-range").addEventListener("click", ev => {
      const b = ev.target.closest("button[data-d]"); if (!b) return;
      days = +b.dataset.d; load(currentProduct, days);
    });

    drawMap(j);
  }

  function renderCX(j, d) {
    const t = j.totals || {};
    const series = j.series || [];
    const links = j.links || [];
    const bucket = j.bucket || "day";

    // KPI cards
    const kpiCards = [
      { v: t.active7 ?? "—", label: "7 天活跃用户" },
      { v: t.signups ?? "—", label: "累计注册" },
      { v: t.downloads ?? "—", label: "累计下载" },
      { v: t.projects ?? "—", label: "累计项目" },
      { v: t.designs ?? "—", label: "累计设计" },
      { v: t.shares ?? "—", label: "累计分享" },
    ].map(c => `<div class="tj-kpi-card"><b>${c.v}</b><span>${esc(c.label)}</span></div>`).join("");

    // Time series table: show last N rows
    const metrics = ["active", "signups", "downloads", "projects", "designs", "shares"];
    const metricLabels = { active: "活跃", signups: "注册", downloads: "下载", projects: "项目", designs: "设计", shares: "分享" };
    const seriesRows = series.slice(-14).reverse().map(row => {
      const cells = metrics.map(m => `<td>${row[m] ?? 0}</td>`).join("");
      return `<tr><th>${esc(row.k)}</th>${cells}</tr>`;
    }).join("");
    const seriesHead = metrics.map(m => `<th>${metricLabels[m]}</th>`).join("");
    const seriesHTML = series.length
      ? `<div class="tj-cx-table-wrap"><table class="tj-cx-table"><thead><tr><th>${bucket === "week" ? "周" : "日"}</th>${seriesHead}</tr></thead><tbody>${seriesRows}</tbody></table></div>`
      : `<p class="tj-msg">暂无数据</p>`;

    // Recent shared links
    const linksHTML = links.length
      ? links.slice(0, 20).map(l => {
          const kind = l.kind === "s" ? "分享" : "报价";
          const revoked = l.revoked ? ' <span style="color:var(--muted)">(已撤销)</span>' : "";
          const views = l.views ? `${l.views} 次查看` : "0 次查看";
          const lastViewed = l.lastViewed ? `· 最近 ${when(l.lastViewed)}` : "";
          return `<li><div><time>${esc(when(l.at))}</time> <span class="rpage">${esc(kind)}</span>${revoked}<div class="rmeta">${esc(l.email || "—")} · ${views} ${esc(lastViewed)}</div></div></li>`;
        }).join("")
      : `<li style="color:var(--muted);font-size:0.875rem;padding:0.6rem 0">暂无分享</li>`;

    content.innerHTML = `
<div class="tj-range" id="tj-range" role="group" aria-label="时间范围">
  <button type="button" data-d="7"${d === 7 ? ' aria-pressed="true"' : ""}>7 天</button>
  <button type="button" data-d="30"${d === 30 ? ' aria-pressed="true"' : ""}>30 天</button>
  <button type="button" data-d="365"${d === 365 ? ' aria-pressed="true"' : ""}>一年</button>
</div>
<div class="tj-kpi">${kpiCards}</div>
<div class="tj-cx-section"><h2>趋势（${bucket === "week" ? "按周" : "按天"}）</h2>${seriesHTML}</div>
<div class="tj-recent-title">最近分享链接</div>
<ol class="tj-recent">${linksHTML}</ol>`;

    document.getElementById("tj-range").addEventListener("click", ev => {
      const b = ev.target.closest("button[data-d]"); if (!b) return;
      days = +b.dataset.d; load(currentProduct, days);
    });
  }

  function rangeBar(d, opts) {
    return `<div class="tj-range" id="tj-range" role="group" aria-label="时间范围">
  ${opts.map(([v, label]) => `<button type="button" data-d="${v}"${d === v ? ' aria-pressed="true"' : ""}>${label}</button>`).join("")}
</div>`;
  }

  function simpleSeries(series, cols, labels) {
    if (!series || !series.length) return `<p class="tj-msg">暂无数据</p>`;
    const head = cols.map(c => `<th>${labels[c] || c}</th>`).join("");
    const rows = series.slice(-14).reverse().map(row => {
      const cells = cols.map(c => `<td>${row[c] ?? 0}</td>`).join("");
      return `<tr><th>${esc(row.day)}</th>${cells}</tr>`;
    }).join("");
    return `<div class="tj-cx-table-wrap"><table class="tj-cx-table"><thead><tr><th>日期</th>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
  }

  function renderTD(j, d) {
    const t = j.totals || {};
    const kpiCards = [
      { v: t.active_7d ?? "—", label: "7 天活跃用户" },
      { v: t.users_total ?? "—", label: "累计注册" },
      { v: t.users_7d ?? "—", label: "7 天新用户" },
      { v: t.plays_7d ?? "—", label: "7 天播放" },
      { v: t.plays_total ?? "—", label: "累计播放" },
      { v: t.visitors_7d ?? "—", label: "7 天访客设备" },
    ].map(c => `<div class="tj-kpi-card"><b>${c.v}</b><span>${esc(c.label)}</span></div>`).join("");

    content.innerHTML = `${rangeBar(d, [[7,"7天"],[30,"30天"],[90,"90天"]])}
<div class="tj-kpi">${kpiCards}</div>
<div class="tj-cx-section"><h2>趋势（按天，近 14 天）</h2>
  ${simpleSeries(j.series, ["plays", "visitors", "signups"], { plays: "播放", visitors: "访客", signups: "注册" })}
</div>`;
    document.getElementById("tj-range").addEventListener("click", ev => {
      const b = ev.target.closest("button[data-d]"); if (!b) return;
      days = +b.dataset.d; load(currentProduct, days);
    });
  }

  function renderAB(j, d) {
    const t = j.totals || {};
    const kpiCards = [
      { v: t.active_7d ?? "—", label: "7 天活跃设备" },
      { v: t.active_today ?? "—", label: "今日活跃" },
      { v: t.users_total ?? "—", label: "累计会员" },
      { v: t.users_7d ?? "—", label: "7 天新会员" },
      { v: t.events_7d ?? "—", label: "7 天事件" },
    ].map(c => `<div class="tj-kpi-card"><b>${c.v}</b><span>${esc(c.label)}</span></div>`).join("");

    content.innerHTML = `${rangeBar(d, [[7,"7天"],[30,"30天"],[90,"90天"]])}
<div class="tj-kpi">${kpiCards}</div>
<div class="tj-cx-section"><h2>趋势（按天，近 14 天）</h2>
  ${simpleSeries(j.series, ["dau", "events"], { dau: "活跃设备", events: "事件" })}
</div>`;
    document.getElementById("tj-range").addEventListener("click", ev => {
      const b = ev.target.closest("button[data-d]"); if (!b) return;
      days = +b.dataset.d; load(currentProduct, days);
    });
  }

  function renderJM(j, d) {
    const t = j.totals || {};
    const kpiCards = [
      { v: t.users_total ?? "—", label: "累计用户" },
      { v: t.users_7d ?? "—", label: "7 天新用户" },
      { v: t.businesses_total ?? "—", label: "累计公司" },
      { v: t.businesses_7d ?? "—", label: "7 天新公司" },
      { v: t.active_7d ?? "—", label: "7 天活跃用户" },
    ].map(c => `<div class="tj-kpi-card"><b>${c.v}</b><span>${esc(c.label)}</span></div>`).join("");

    content.innerHTML = `${rangeBar(d, [[7,"7天"],[30,"30天"],[90,"90天"]])}
<div class="tj-kpi">${kpiCards}</div>
<div class="tj-cx-section"><h2>趋势（按天，近 14 天）</h2>
  ${simpleSeries(j.series, ["signups", "businesses"], { signups: "新用户", businesses: "新公司" })}
</div>`;
    document.getElementById("tj-range").addEventListener("click", ev => {
      const b = ev.target.closest("button[data-d]"); if (!b) return;
      days = +b.dataset.d; load(currentProduct, days);
    });
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

  // Product tab switching
  document.getElementById("tj-products").addEventListener("click", ev => {
    const t = ev.target.closest(".tj-tab[data-product]"); if (!t) return;
    document.querySelectorAll(".tj-tab").forEach(b => b.setAttribute("aria-selected", "false"));
    t.setAttribute("aria-selected", "true");
    currentProduct = t.dataset.product;
    load(currentProduct, days);
  });

  // Sign out button
  keyBtn.addEventListener("click", () => {
    clearToken();
    if (window.google?.accounts?.id) google.accounts.id.disableAutoSelect();
    showAuth();
  });

  // Load world map
  fetch("assets/world.json").then(r => r.json()).then(w => {
    world = w;
    worldNames = { ...(w.n || {}), ...Object.fromEntries(w.c.map(([k, n]) => [k, n])) };
    const map = document.getElementById("tjmap");
    if (map && map.children.length === 0 && content.querySelector(".tj-map-wrap")) {
      load(currentProduct, days);
    }
  }).catch(() => {});

  // Init: check for stored token first, then render Google button
  window.addEventListener("load", () => {
    if (getToken()) {
      showMain();
      load(currentProduct, days);
    } else {
      showAuth();
      renderGoogleBtn();
    }
  });

  // Google GIS loaded callback (in case script loads after window load)
  window.__tjGoogleReady = () => {
    if (!getToken()) renderGoogleBtn();
  };
})();
