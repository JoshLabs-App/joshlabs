// JoshLabs unified analytics dashboard · /tj (admin only)
// Auth: Google Identity Services one-tap login. ID token sent as Bearer to /api/stats.
// Token stored in sessionStorage — refreshed on next visit via Google silent flow.
(() => {
  const GOOGLE_CLIENT_ID = "584910137845-jneeasl3tjefegse0k3gnj8aefb9dtf6.apps.googleusercontent.com";
  const TOKEN_STORE = "jl_google_id_token";

  const PRODUCTS = {
    overview:  { name: "总览",      id: "overview",   color: "#64748b" },
    shouwang:  { name: "守望",      id: "shouwang",   type: "pageview", color: "#3b82f6",
      pageMap: { "/": "首页", "/ep": "节目", "/map": "网络图", "/people": "人物", "/jing": "经文", "/tip": "线索", "/links": "推荐", "/about": "关于" },
      pageName(p) {
        return this.pageMap[p]
          || (/^\/\d+$/.test(p)    ? `第${p.slice(1)}集 全文`
            : /^\/ep\d+$/.test(p)  ? `第${p.slice(3)}集`
            : /^\/s\/\d+$/.test(p) ? `第${p.slice(3)}集 出处` : p);
      },
    },
    cabinetx:  { name: "Cabinet-X", id: "cabinetx",  type: "app_stats", color: "#f97316" },
    tingdao:   { name: "听到",      id: "tingdao",   type: "app_stats", color: "#8b5cf6" },
    askbible:  { name: "AskBible",  id: "askbible",  type: "app_stats", color: "#f59e0b" },
    joshmoney: { name: "JoshMoney", id: "joshmoney", type: "app_stats", color: "#10b981" },
  };

  const getToken  = () => { try { return sessionStorage.getItem(TOKEN_STORE) || ""; } catch { return ""; } };
  const setToken  = v => { try { sessionStorage.setItem(TOKEN_STORE, v); } catch {} };
  const clearToken = () => { try { sessionStorage.removeItem(TOKEN_STORE); } catch {} };

  const esc  = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt  = s => { s = Math.round(s); return s < 60 ? `${s}秒` : s < 3600 ? `${Math.floor(s / 60)}分${s % 60 ? s % 60 + "秒" : ""}` : `${Math.floor(s / 3600)}小时${Math.floor(s % 3600 / 60)}分`; };
  const fmtN = n => { if (n == null || n === "—") return "—"; n = +n; return n >= 10000 ? (n / 10000).toFixed(1) + "万" : n >= 1000 ? (n / 1000).toFixed(1) + "k" : String(n); };
  const DUR_LABELS = ["10 秒以内", "10–30 秒", "30 秒–1 分", "1–3 分", "3–10 分", "10–30 分", "30 分以上"];
  const when = ts => { const d = new Date(ts), p = n => String(n).padStart(2, "0"); return `${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`; };

  let world = null, worldNames = {};
  let currentProduct = "overview";
  let days = 30;

  const authUI  = document.getElementById("tj-auth-ui");
  const mainUI  = document.getElementById("tj-main");
  const authErr = document.getElementById("tj-auth-err");
  const keyBtn  = document.getElementById("tj-key-btn");
  const content = document.getElementById("tj-content");

  // ─── AUTH ─────────────────────────────────────────────────────────────────────

  let googleBtnRendered = false;
  function showAuth() {
    authUI.hidden = false; mainUI.hidden = true;
    authErr.textContent = "";
    if (!googleBtnRendered && window.google?.accounts?.id) renderGoogleBtn();
  }
  function showMain() { authUI.hidden = true; mainUI.hidden = false; }

  function renderGoogleBtn() {
    const container = document.getElementById("tj-google-btn");
    if (!container || !window.google?.accounts?.id) return;
    googleBtnRendered = true;
    google.accounts.id.initialize({ client_id: GOOGLE_CLIENT_ID, callback: onGoogleCredential, auto_select: true });
    google.accounts.id.renderButton(container, { theme: "outline", size: "large", text: "signin_with", locale: "zh-CN" });
    google.accounts.id.prompt();
  }

  function onGoogleCredential(response) {
    setToken(response.credential);
    authErr.textContent = "";
    showMain();
    load(currentProduct, days);
  }

  // ─── CHART ENGINE ─────────────────────────────────────────────────────────────

  function lineChart(rows, keys, labels, colors, opts = {}) {
    const W = 660, H = opts.h || 180;
    const P = { t: 8, r: 12, b: 34, l: 44 };
    const cW = W - P.l - P.r, cH = H - P.t - P.b;
    const n = rows.length;

    if (!n) return `<div class="tj-chart-empty">暂无数据</div>`;

    const getDay = r => (r.day || r.k || "").slice(5);
    const getVal = (r, k) => +r[k] || 0;

    const allVals = rows.flatMap(r => keys.map(k => getVal(r, k)));
    const maxV = Math.max(1, ...allVals);

    // Nice Y ticks
    const rawStep = maxV / 4;
    const mag = Math.pow(10, Math.floor(Math.log10(rawStep || 1)));
    const niceTick = Math.max(1, Math.ceil(rawStep / mag) * mag);
    const nTicks = Math.min(5, Math.ceil(maxV / niceTick));
    const adjustedMax = niceTick * nTicks;
    const yTicks = Array.from({ length: nTicks + 1 }, (_, i) => i * niceTick);

    const X = i => P.l + (n > 1 ? i / (n - 1) : 0.5) * cW;
    const Y = v => P.t + cH * (1 - v / adjustedMax);

    // Grid lines + Y axis labels
    const grid = yTicks.map(v => {
      const y = Y(v).toFixed(1);
      const lbl = v >= 10000 ? (v / 10000).toFixed(1) + "万" : v >= 1000 ? (v / 1000).toFixed(1) + "k" : v;
      return `<line x1="${P.l}" y1="${y}" x2="${W - P.r}" y2="${y}" stroke="var(--line)" stroke-width="${v === 0 ? 1 : 0.5}" stroke-dasharray="${v === 0 ? "none" : "3 3"}"/>` +
             `<text x="${P.l - 5}" y="${y}" text-anchor="end" dominant-baseline="middle" font-size="9" fill="var(--muted)">${lbl}</text>`;
    }).join("");

    // X axis labels (max 7 labels)
    const labelStep = Math.max(1, Math.ceil(n / 7));
    const xLabels = rows.map((r, i) => {
      if (i % labelStep !== 0 && i !== n - 1) return "";
      return `<text x="${X(i).toFixed(1)}" y="${H - P.b + 14}" text-anchor="middle" font-size="9" fill="var(--muted)">${getDay(r)}</text>`;
    }).join("");

    // Area fill + line paths
    const paths = keys.map((k, ki) => {
      const col = colors[ki] || "#888";
      const pts = rows.map((r, i) => `${X(i).toFixed(1)},${Y(getVal(r, k)).toFixed(1)}`);
      const linePts = pts.join(" ");
      const areaPts = `${X(0).toFixed(1)},${Y(0).toFixed(1)} ${linePts} ${X(n - 1).toFixed(1)},${Y(0).toFixed(1)}`;
      return `<polygon points="${areaPts}" fill="${col}" opacity="0.08"/>` +
             `<polyline points="${linePts}" fill="none" stroke="${col}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
    }).join("");

    // Legend (only if multiple series)
    let legend = "";
    if (keys.length > 1) {
      const items = keys.map((k, ki) =>
        `<g transform="translate(${ki * 88}, 0)"><rect x="0" y="-5" width="10" height="2.5" rx="1.25" fill="${colors[ki]}"/>` +
        `<text x="14" y="-3" font-size="9" fill="var(--muted)">${labels[k] || k}</text></g>`
      ).join("");
      legend = `<g transform="translate(${P.l}, ${H - 2})">${items}</g>`;
    }

    return `<div class="tj-chart-wrap"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;overflow:visible">${grid}${paths}${xLabels}${legend}</svg></div>`;
  }

  function sparkline(rows, key, color) {
    if (!rows || !rows.length) return "";
    const vals = rows.map(r => +r[key] || 0);
    const max = Math.max(1, ...vals);
    const W = 72, H = 26, P = 2;
    const n = vals.length;
    const pts = vals.map((v, i) =>
      `${(P + (n > 1 ? i / (n - 1) : 0.5) * (W - 2 * P)).toFixed(1)},${(P + (1 - v / max) * (H - 2 * P)).toFixed(1)}`
    ).join(" ");
    return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="display:block;flex-shrink:0"><polyline points="${pts}" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  }

  function trendBadge(series, key, compN) {
    const n = Math.min(series.length, compN || series.length);
    const half = Math.floor(n / 2);
    if (half < 1) return "";
    const recent = series.slice(-half).reduce((s, r) => s + (+r[key] || 0), 0);
    const prior  = series.slice(-n, -half).reduce((s, r) => s + (+r[key] || 0), 0);
    if (!prior) return "";
    const pct = Math.round((recent - prior) / prior * 100);
    const up = pct >= 0;
    return `<span class="tj-trend-${up ? "up" : "dn"}">${up ? "↑" : "↓"}${Math.abs(pct)}%</span>`;
  }

  function kpiCard(v, label, badge) {
    return `<div class="tj-kpi-card">${badge || ""}<b>${v}</b><span>${esc(label)}</span></div>`;
  }

  // ─── OVERVIEW ─────────────────────────────────────────────────────────────────

  async function loadOverview() {
    content.innerHTML = `<p class="tj-msg">载入所有产品数据中…</p>`;
    const token = getToken();

    const fetchP = async id => {
      try {
        const r = await fetch(`/api/stats?product=${id}&days=30`, { headers: { "Authorization": `Bearer ${token}` } });
        if (r.status === 401) { clearToken(); showAuth(); return null; }
        if (!r.ok) return null;
        return await r.json();
      } catch { return null; }
    };

    const [sw, cx, td, ab, jm] = await Promise.all([
      fetchP("shouwang"), fetchP("cabinetx"), fetchP("tingdao"), fetchP("askbible"), fetchP("joshmoney"),
    ]);

    const cards = [
      ovCard("shouwang", "守望",      sw, d => d.total,              d => d.days  || [], "n",       "30天浏览"),
      ovCard("cabinetx", "Cabinet-X", cx, d => d.totals?.active7,    d => d.series|| [], "active",  "7天活跃"),
      ovCard("tingdao",  "听到",      td, d => d.totals?.plays_total, d => d.series|| [], "plays",   "累计播放"),
      ovCard("askbible", "AskBible",  ab, d => d.totals?.users_total, d => d.series|| [], "dau",     "累计会员"),
      ovCard("joshmoney","JoshMoney", jm, d => d.totals?.users_total, d => d.series|| [], "signups", "累计用户"),
    ].join("");

    // Cross-product aggregated stats
    const totalUsers = [cx?.totals?.signups, td?.totals?.users_total, ab?.totals?.users_total, jm?.totals?.users_total]
      .filter(v => v != null).reduce((s, v) => s + +v, 0);
    const totalActive7 = [cx?.totals?.active7, td?.totals?.active_7d, ab?.totals?.active_7d, jm?.totals?.active_7d]
      .filter(v => v != null).reduce((s, v) => s + +v, 0);

    content.innerHTML = `
<div class="tj-ov-header">
  <div class="tj-ov-stat"><b>${fmtN(sw?.total || 0)}</b><span>守望 30 天浏览</span></div>
  <div class="tj-ov-stat"><b>${fmtN(totalUsers)}</b><span>APP 累计用户合计</span></div>
  <div class="tj-ov-stat"><b>${fmtN(totalActive7)}</b><span>APP 7 天活跃合计</span></div>
</div>
<div class="tj-ov-grid">${cards}</div>`;

    // Click card → switch to product tab
    content.querySelectorAll(".tj-pcard[data-goto]").forEach(el => {
      el.addEventListener("click", () => {
        const pid = el.dataset.goto;
        document.querySelectorAll(".tj-tab").forEach(b => b.setAttribute("aria-selected", String(b.dataset.product === pid)));
        currentProduct = pid;
        load(currentProduct, days);
      });
      el.addEventListener("keydown", ev => { if (ev.key === "Enter" || ev.key === " ") el.click(); });
    });
  }

  function ovCard(id, name, data, getKpi, getSeries, seriesKey, kpiLabel) {
    const col = PRODUCTS[id].color;
    if (!data) return `<div class="tj-pcard" data-goto="${id}">
      <div class="tj-pcard-name" style="--pc:${col}">${esc(name)}</div>
      <div class="tj-pcard-row"><div><div class="tj-pcard-kpi">—</div><div class="tj-pcard-lbl">载入失败</div></div></div></div>`;
    const series = getSeries(data);
    const kpi = getKpi(data) ?? 0;
    const badge = trendBadge(series, seriesKey, series.length);
    const spark = sparkline(series.slice(-30), seriesKey, col);
    return `<div class="tj-pcard" data-goto="${id}" role="button" tabindex="0">
  <div class="tj-pcard-name" style="--pc:${col}">${esc(name)}</div>
  <div class="tj-pcard-row">
    <div><div class="tj-pcard-kpi">${fmtN(kpi)}</div><div class="tj-pcard-lbl">${kpiLabel}</div></div>
    ${spark}
  </div>
  ${badge ? `<div class="tj-pcard-foot">${badge}<span>较前半期</span></div>` : ""}
</div>`;
  }

  // ─── 守望 ─────────────────────────────────────────────────────────────────────

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

    const daysData  = j.days || [];
    const daysBadge = trendBadge(daysData, "n", daysData.length);
    const engRate   = j.total && j.visitors ? (j.total / j.visitors).toFixed(1) : "—";
    const chartHTML = lineChart(daysData, ["n"], { n: "浏览" }, [PRODUCTS.shouwang.color]);

    content.innerHTML = `
${rangeBar(d, [[1,"今天"],[7,"7天"],[30,"30天"],[365,"一年"]])}
<div class="tj-kpi">
  ${kpiCard(j.total, "浏览次数", daysBadge)}
  ${kpiCard(j.visitors, "访客（按天估算）", "")}
  ${kpiCard((j.countries || []).length, "国家和地区", "")}
  ${kpiCard(j.measured ? fmt(j.avg_dur) : "—", "平均停留", "")}
  ${kpiCard(j.measured ? fmt(j.sum_dur) : "—", "停留总时长", "")}
  ${kpiCard(engRate, "浏览/访客比", "")}
</div>
<div class="tj-chart-section"><h2>每日浏览趋势</h2>${chartHTML}</div>
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
  <div class="tj-section"><h2>停留分布</h2><ol class="tj-list tj-bars">${durHTML}</ol></div>
</div>
<div class="tj-recent-title">最近访问</div>
<ol class="tj-recent">${recentHTML}</ol>
<p class="tj-note">停留时长：只算页面在前台的秒数，2026-10-29 起才有。时间按本地时区显示。</p>`;

    bindRange();
    drawMap(j);
  }

  // ─── Cabinet-X ────────────────────────────────────────────────────────────────

  function renderCX(j, d) {
    const t = j.totals || {};
    const series  = j.series || [];
    const links   = j.links  || [];
    const bucket  = j.bucket || "day";

    const chartHTML   = lineChart(series.slice(-30), ["active", "signups"], { active: "活跃", signups: "注册" }, [PRODUCTS.cabinetx.color, "#94a3b8"]);
    const activeBadge = trendBadge(series, "active", series.length);
    const engRate     = t.signups && t.active7 ? Math.round(+t.active7 / +t.signups * 100) + "%" : "—";

    const metrics = ["active", "signups", "downloads", "projects", "designs", "shares"];
    const mLabels = { active: "活跃", signups: "注册", downloads: "下载", projects: "项目", designs: "设计", shares: "分享" };
    const seriesRows = series.slice(-14).reverse().map(row =>
      `<tr><th>${esc(row.k)}</th>${metrics.map(m => `<td>${row[m] ?? 0}</td>`).join("")}</tr>`
    ).join("");
    const tableHTML = series.length
      ? `<div class="tj-cx-table-wrap"><table class="tj-cx-table"><thead><tr><th>${bucket === "week" ? "周" : "日"}</th>${metrics.map(m => `<th>${mLabels[m]}</th>`).join("")}</tr></thead><tbody>${seriesRows}</tbody></table></div>`
      : `<p class="tj-msg">暂无数据</p>`;

    const linksHTML = links.length
      ? links.slice(0, 20).map(l => {
          const kind    = l.kind === "s" ? "分享" : "报价";
          const revoked = l.revoked ? ' <span style="color:var(--muted)">(已撤销)</span>' : "";
          return `<li><div><time>${esc(when(l.at))}</time> <span class="rpage">${esc(kind)}</span>${revoked}<div class="rmeta">${esc(l.email || "—")} · ${l.views || 0} 次查看${l.lastViewed ? " · 最近 " + when(l.lastViewed) : ""}</div></div></li>`;
        }).join("")
      : `<li style="color:var(--muted);font-size:0.875rem;padding:0.6rem 0">暂无分享</li>`;

    content.innerHTML = `
${rangeBar(d, [[7,"7天"],[30,"30天"],[365,"一年"]])}
<div class="tj-kpi">
  ${kpiCard(t.active7 ?? "—", "7天活跃用户", activeBadge)}
  ${kpiCard(t.signups ?? "—", "累计注册", "")}
  ${kpiCard(t.downloads ?? "—", "累计下载", "")}
  ${kpiCard(t.projects ?? "—", "累计项目", "")}
  ${kpiCard(t.designs ?? "—", "累计设计", "")}
  ${kpiCard(t.shares ?? "—", "累计分享", "")}
  ${kpiCard(engRate, "活跃率（7d/总）", "")}
</div>
<div class="tj-chart-section"><h2>活跃 & 注册趋势</h2>${chartHTML}</div>
<div class="tj-cx-section"><h2>详细数据（${bucket === "week" ? "按周" : "按天"}，近 14 期）</h2>${tableHTML}</div>
<div class="tj-recent-title">最近分享链接</div>
<ol class="tj-recent">${linksHTML}</ol>`;

    bindRange();
  }

  // ─── 听到 ─────────────────────────────────────────────────────────────────────

  function renderTD(j, d) {
    const t      = j.totals || {};
    const series = j.series || [];
    const chartHTML  = lineChart(series, ["plays", "visitors"], { plays: "播放", visitors: "访客" }, [PRODUCTS.tingdao.color, "#94a3b8"]);
    const playsBadge = trendBadge(series, "plays", series.length);
    const engRate    = t.plays_7d && t.visitors_7d ? (t.plays_7d / t.visitors_7d).toFixed(1) : "—";
    const avgDaily   = series.length ? Math.round(series.reduce((s, r) => s + (+r.plays || 0), 0) / series.length) : 0;

    content.innerHTML = `
${rangeBar(d, [[7,"7天"],[30,"30天"],[90,"90天"]])}
<div class="tj-kpi">
  ${kpiCard(t.active_7d ?? "—", "7天活跃用户", playsBadge)}
  ${kpiCard(t.users_total ?? "—", "累计注册", "")}
  ${kpiCard(t.users_7d ?? "—", "7天新用户", "")}
  ${kpiCard(t.plays_7d ?? "—", "7天播放", "")}
  ${kpiCard(t.plays_total ?? "—", "累计播放", "")}
  ${kpiCard(t.visitors_7d ?? "—", "7天访客设备", "")}
  ${kpiCard(engRate, "播放/设备比", "")}
  ${kpiCard(avgDaily, "日均播放", "")}
</div>
<div class="tj-chart-section"><h2>播放 & 访客趋势</h2>${chartHTML}</div>
<div class="tj-cx-section"><h2>每日明细（近 14 天）</h2>
  ${simpleSeries(series, ["plays", "visitors", "signups"], { plays: "播放", visitors: "访客", signups: "注册" })}
</div>`;
    bindRange();
  }

  // ─── AskBible ─────────────────────────────────────────────────────────────────

  function renderAB(j, d) {
    const t      = j.totals || {};
    const series = j.series || [];
    const chartHTML = lineChart(series, ["dau", "events"], { dau: "活跃设备", events: "事件" }, [PRODUCTS.askbible.color, "#94a3b8"]);
    const dauBadge  = trendBadge(series, "dau", series.length);
    const evtPerU   = t.users_total ? (+(t.events_7d || 0) / +t.users_total).toFixed(2) : "—";

    content.innerHTML = `
${rangeBar(d, [[7,"7天"],[30,"30天"],[90,"90天"]])}
<div class="tj-kpi">
  ${kpiCard(t.active_7d ?? "—", "7天活跃设备", dauBadge)}
  ${kpiCard(t.active_today ?? "—", "今日活跃", "")}
  ${kpiCard(t.users_total ?? "—", "累计会员", "")}
  ${kpiCard(t.users_7d ?? "—", "7天新会员", "")}
  ${kpiCard(t.events_7d ?? "—", "7天事件", "")}
  ${kpiCard(evtPerU, "事件/会员", "")}
</div>
<div class="tj-chart-section"><h2>活跃 & 事件趋势</h2>${chartHTML}</div>
<div class="tj-cx-section"><h2>每日明细（近 14 天）</h2>
  ${simpleSeries(series, ["dau", "events"], { dau: "活跃设备", events: "事件" })}
</div>`;
    bindRange();
  }

  // ─── JoshMoney ────────────────────────────────────────────────────────────────

  function renderJM(j, d) {
    const t      = j.totals || {};
    const series = j.series || [];
    const chartHTML    = lineChart(series, ["signups", "businesses"], { signups: "新用户", businesses: "新公司" }, [PRODUCTS.joshmoney.color, "#94a3b8"]);
    const signupBadge  = trendBadge(series, "signups", series.length);
    const bizRate      = t.users_total && t.businesses_total ? Math.round(+t.businesses_total / +t.users_total * 100) + "%" : "—";

    content.innerHTML = `
${rangeBar(d, [[7,"7天"],[30,"30天"],[90,"90天"]])}
<div class="tj-kpi">
  ${kpiCard(t.users_total ?? "—", "累计用户", "")}
  ${kpiCard(t.users_7d ?? "—", "7天新用户", signupBadge)}
  ${kpiCard(t.businesses_total ?? "—", "累计公司", "")}
  ${kpiCard(t.businesses_7d ?? "—", "7天新公司", "")}
  ${kpiCard(t.active_7d ?? "—", "7天活跃用户", "")}
  ${kpiCard(bizRate, "企业注册率", "")}
</div>
<div class="tj-chart-section"><h2>用户 & 公司增长趋势</h2>${chartHTML}</div>
<div class="tj-cx-section"><h2>每日明细（近 14 天）</h2>
  ${simpleSeries(series, ["signups", "businesses"], { signups: "新用户", businesses: "新公司" })}
</div>`;
    bindRange();
  }

  // ─── SHARED HELPERS ───────────────────────────────────────────────────────────

  function listItems(rows, label) {
    return rows.length
      ? rows.map(r => `<li><span>${esc(label(r))}</span><b>${r.n}${r.d ? " · " + fmt(r.d) : ""}</b></li>`).join("")
      : `<li><span style="color:var(--muted)">暂无数据</span></li>`;
  }

  function rangeBar(d, opts) {
    return `<div class="tj-range" id="tj-range" role="group" aria-label="时间范围">
  ${opts.map(([v, label]) => `<button type="button" data-d="${v}"${d === v ? ' aria-pressed="true"' : ""}>${label}</button>`).join("")}
</div>`;
  }

  function bindRange() {
    document.getElementById("tj-range")?.addEventListener("click", ev => {
      const b = ev.target.closest("button[data-d]"); if (!b) return;
      days = +b.dataset.d; load(currentProduct, days);
    });
  }

  function simpleSeries(series, cols, labels) {
    if (!series || !series.length) return `<p class="tj-msg">暂无数据</p>`;
    const head = cols.map(c => `<th>${labels[c] || c}</th>`).join("");
    const rows = series.slice(-14).reverse().map(row => {
      const cells = cols.map(c => `<td>${row[c] ?? 0}</td>`).join("");
      return `<tr><th>${esc(row.day || row.k)}</th>${cells}</tr>`;
    }).join("");
    return `<div class="tj-cx-table-wrap"><table class="tj-cx-table"><thead><tr><th>日期</th>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
  }

  // ─── WORLD MAP ────────────────────────────────────────────────────────────────

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

  // ─── LOAD ─────────────────────────────────────────────────────────────────────

  async function load(product, d) {
    if (product === "overview") { loadOverview(); return; }
    const p = PRODUCTS[product]; if (!p) return;
    const token = getToken();
    if (!token) { showAuth(); return; }
    content.innerHTML = `<p class="tj-msg">载入中…</p>`;
    let j;
    try {
      const r = await fetch(`/api/stats?product=${product}&days=${d}`, {
        headers: { "Authorization": `Bearer ${token}` },
      });
      if (r.status === 401) { clearToken(); authErr.textContent = "登录已过期，请重新登录。"; showAuth(); return; }
      if (!r.ok) throw new Error(`${r.status}`);
      j = await r.json();
    } catch (e) {
      content.innerHTML = `<p class="tj-msg">载入失败（${esc(String(e.message))}）。<br>如在本地开发，请先 <code>npx wrangler pages dev .</code></p>`;
      return;
    }
    if      (j._type === "cx_stats") renderCX(j, d);
    else if (j._type === "td_stats") renderTD(j, d);
    else if (j._type === "ab_stats") renderAB(j, d);
    else if (j._type === "jm_stats") renderJM(j, d);
    else render(j, p, d);
  }

  // ─── EVENT BINDING ────────────────────────────────────────────────────────────

  document.getElementById("tj-products").addEventListener("click", ev => {
    const t = ev.target.closest(".tj-tab[data-product]"); if (!t) return;
    document.querySelectorAll(".tj-tab").forEach(b => b.setAttribute("aria-selected", "false"));
    t.setAttribute("aria-selected", "true");
    currentProduct = t.dataset.product;
    load(currentProduct, days);
  });

  keyBtn.addEventListener("click", () => {
    clearToken();
    if (window.google?.accounts?.id) google.accounts.id.disableAutoSelect();
    showAuth();
  });

  // Load world map JSON — redraw if 守望 is currently showing
  fetch("assets/world.json").then(r => r.json()).then(w => {
    world = w;
    worldNames = { ...(w.n || {}), ...Object.fromEntries(w.c.map(([k, n]) => [k, n])) };
    if (currentProduct === "shouwang" && content.querySelector(".tj-map-wrap")) {
      load("shouwang", days);
    }
  }).catch(() => {});

  // Init: check for stored token → show dashboard, else show auth
  window.addEventListener("load", () => {
    if (getToken()) {
      showMain();
      load(currentProduct, days);
    } else {
      showAuth();
      renderGoogleBtn();
    }
  });

  // Google GIS loaded callback (script may load after window load)
  window.__tjGoogleReady = () => {
    if (!getToken()) renderGoogleBtn();
  };
})();
