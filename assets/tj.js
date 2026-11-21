// JoshLabs unified analytics dashboard · /tj (admin only)
// Auth: Google Identity Services one-tap login. ID token sent as Bearer to /api/stats.
(() => {
  const GOOGLE_CLIENT_ID = "584910137845-jneeasl3tjefegse0k3gnj8aefb9dtf6.apps.googleusercontent.com";
  const TOKEN_STORE = "jl_google_id_token";

  const PRODUCTS = {
    overview:  { name: "总览",      id: "overview",   color: "#64748b" },
    cabinetx:  { name: "Cabinet-X", id: "cabinetx",  color: "#f97316" },
    joshmoney: { name: "JoshMoney", id: "joshmoney", color: "#10b981" },
  };

  // Country centroids [lon, lat] for dot placement on map
  const CENTROIDS = {
    US:[-98.6,39.5],CN:[104.2,35.9],IN:[78.0,20.6],BR:[-51.9,-14.2],AU:[133.8,-24.8],
    CA:[-96.8,60.7],GB:[-1.8,52.4],DE:[10.5,51.2],FR:[2.2,46.2],JP:[138.3,36.2],
    RU:[105.3,61.5],MX:[-102.5,23.6],ID:[117.2,-2.5],SA:[45.1,23.9],NG:[8.0,9.1],
    KR:[127.8,35.9],ZA:[25.1,-29.0],AR:[-63.6,-38.4],TW:[120.9,23.7],NL:[5.3,52.1],
    SG:[103.8,1.4],HK:[114.2,22.4],MY:[109.7,3.5],TH:[100.9,15.1],PH:[122.9,12.9],
    SE:[15.2,62.2],NO:[8.5,60.5],IT:[12.6,42.0],ES:[-3.7,40.5],PL:[19.1,51.9],
    PT:[-8.2,39.4],CH:[8.2,46.8],AT:[14.6,47.6],BE:[4.5,50.5],DK:[10.0,56.3],
    FI:[26.3,64.4],NZ:[172.0,-42.0],PK:[69.3,30.4],VN:[108.3,14.1],UA:[31.2,48.4],
    IR:[53.7,32.4],EG:[30.8,26.8],TR:[35.2,38.9],GR:[21.8,39.1],CZ:[15.5,49.8],
    RO:[24.9,45.9],HU:[19.5,47.2],IL:[34.9,31.5],AE:[53.8,23.4],ZW:[29.2,-19.0],
    KE:[37.9,0.0],GH:[-1.0,7.9],ET:[40.5,9.1],TZ:[34.9,-6.4],MA:[-5.4,31.8],
    CO:[-74.3,4.1],CL:[-71.5,-35.7],PE:[-75.0,-9.2],VE:[-66.1,8.0],EC:[-77.9,-1.8],
    SK:[19.7,48.7],HR:[15.2,45.1],RS:[20.9,44.0],BG:[25.5,42.8],
    LT:[23.9,55.2],LV:[24.6,57.0],EE:[25.0,58.7],IS:[-18.1,64.1],
  };

  const getToken   = () => { try { return sessionStorage.getItem(TOKEN_STORE) || ""; } catch { return ""; } };
  const setToken   = v  => { try { sessionStorage.setItem(TOKEN_STORE, v); } catch {} };
  const clearToken = () => { try { sessionStorage.removeItem(TOKEN_STORE); } catch {} };

  const esc  = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const fmt  = s => { s=Math.round(s); return s<60?`${s}秒`:s<3600?`${Math.floor(s/60)}分${s%60?s%60+"秒":""}`: `${Math.floor(s/3600)}小时${Math.floor(s%3600/60)}分`; };
  const fmtN = n => { if(n==null||n==="—")return"—"; n=+n; return n>=10000?(n/10000).toFixed(1)+"万":n>=1000?(n/1000).toFixed(1)+"k":String(n); };
  const DUR_LABELS = ["10 秒以内","10–30 秒","30 秒–1 分","1–3 分","3–10 分","10–30 分","30 分以上"];
  const when = ts => { const d=new Date(ts),p=n=>String(n).padStart(2,"0"); return `${p(d.getMonth()+1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`; };

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
  function showAuth() { authUI.hidden=false; mainUI.hidden=true; authErr.textContent=""; if(!googleBtnRendered&&window.google?.accounts?.id) renderGoogleBtn(); }
  function showMain() { authUI.hidden=true; mainUI.hidden=false; }

  function renderGoogleBtn() {
    const c = document.getElementById("tj-google-btn");
    if(!c||!window.google?.accounts?.id) return;
    googleBtnRendered = true;
    google.accounts.id.initialize({ client_id:GOOGLE_CLIENT_ID, callback:onGoogleCredential, auto_select:true });
    google.accounts.id.renderButton(c, { theme:"outline", size:"large", text:"signin_with", locale:"zh-CN" });
    google.accounts.id.prompt();
  }

  function onGoogleCredential(response) { setToken(response.credential); authErr.textContent=""; showMain(); load(currentProduct,days); }

  // ─── CHART ENGINE ─────────────────────────────────────────────────────────────

  function lineChart(rows, keys, labels, colors, opts={}) {
    const W=660, H=opts.h||180;
    const P={t:8,r:12,b:34,l:44};
    const cW=W-P.l-P.r, cH=H-P.t-P.b;
    const n=rows.length;
    if(!n) return `<div class="tj-chart-empty">暂无数据</div>`;
    const getDay = r=>(r.day||r.k||"").slice(5);
    const getVal = (r,k)=>+r[k]||0;
    const allVals = rows.flatMap(r=>keys.map(k=>getVal(r,k)));
    const maxV = Math.max(1,...allVals);
    const rawStep=maxV/4, mag=Math.pow(10,Math.floor(Math.log10(rawStep||1)));
    const niceTick=Math.max(1,Math.ceil(rawStep/mag)*mag);
    const nTicks=Math.min(5,Math.ceil(maxV/niceTick));
    const adjustedMax=niceTick*nTicks;
    const yTicks=Array.from({length:nTicks+1},(_,i)=>i*niceTick);
    const X=i=>P.l+(n>1?i/(n-1):0.5)*cW;
    const Y=v=>P.t+cH*(1-v/adjustedMax);
    const grid=yTicks.map(v=>{
      const y=Y(v).toFixed(1);
      const lbl=v>=10000?(v/10000).toFixed(1)+"万":v>=1000?(v/1000).toFixed(1)+"k":v;
      return `<line x1="${P.l}" y1="${y}" x2="${W-P.r}" y2="${y}" stroke="var(--line)" stroke-width="${v===0?1:0.5}" stroke-dasharray="${v===0?"none":"3 3"}"/>` +
             `<text x="${P.l-5}" y="${y}" text-anchor="end" dominant-baseline="middle" font-size="9" fill="var(--muted)">${lbl}</text>`;
    }).join("");
    const labelStep=Math.max(1,Math.ceil(n/7));
    const xLabels=rows.map((r,i)=>{
      if(i%labelStep!==0&&i!==n-1) return "";
      return `<text x="${X(i).toFixed(1)}" y="${H-P.b+14}" text-anchor="middle" font-size="9" fill="var(--muted)">${getDay(r)}</text>`;
    }).join("");
    const paths=keys.map((k,ki)=>{
      const col=colors[ki]||"#888";
      const pts=rows.map((r,i)=>`${X(i).toFixed(1)},${Y(getVal(r,k)).toFixed(1)}`);
      const linePts=pts.join(" ");
      const areaPts=`${X(0).toFixed(1)},${Y(0).toFixed(1)} ${linePts} ${X(n-1).toFixed(1)},${Y(0).toFixed(1)}`;
      return `<polygon points="${areaPts}" fill="${col}" opacity="0.08"/>` +
             `<polyline points="${linePts}" fill="none" stroke="${col}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
    }).join("");
    let legend="";
    if(keys.length>1){
      const items=keys.map((k,ki)=>`<g transform="translate(${ki*90},0)"><rect x="0" y="-5" width="10" height="2.5" rx="1.25" fill="${colors[ki]}"/><text x="14" y="-3" font-size="9" fill="var(--muted)">${labels[k]||k}</text></g>`).join("");
      legend=`<g transform="translate(${P.l},${H-2})">${items}</g>`;
    }
    return `<div class="tj-chart-wrap"><svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;overflow:visible">${grid}${paths}${xLabels}${legend}</svg></div>`;
  }

  function sparkline(rows, key, color) {
    if(!rows||!rows.length) return "";
    const vals=rows.map(r=>+r[key]||0);
    const max=Math.max(1,...vals);
    const W=72,H=26,P=2,n=vals.length;
    const pts=vals.map((v,i)=>`${(P+(n>1?i/(n-1):0.5)*(W-2*P)).toFixed(1)},${(P+(1-v/max)*(H-2*P)).toFixed(1)}`).join(" ");
    return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="display:block;flex-shrink:0"><polyline points="${pts}" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  }

  function trendBadge(series, key, compN) {
    const n=Math.min(series.length,compN||series.length);
    const half=Math.floor(n/2); if(half<1) return "";
    const recent=series.slice(-half).reduce((s,r)=>s+(+r[key]||0),0);
    const prior=series.slice(-n,-half).reduce((s,r)=>s+(+r[key]||0),0);
    if(!prior) return "";
    const pct=Math.round((recent-prior)/prior*100);
    const up=pct>=0;
    return `<span class="tj-trend-${up?"up":"dn"}">${up?"↑":"↓"}${Math.abs(pct)}%</span>`;
  }

  function kpiCard(v, label, badge, accentColor) {
    const accent = accentColor ? `style="--card-accent:${accentColor}"` : "";
    return `<div class="tj-kpi-card${accentColor?" tj-kpi-accent":""}" ${accent}>${badge||""}<b>${v}</b><span>${esc(label)}</span></div>`;
  }

  // ─── MAP ENGINE ───────────────────────────────────────────────────────────────

  const mapX = lon => (lon+180)/360*1000;
  const mapY = lat => (84-Math.max(Math.min(lat,84),-60))/144*480;

  function buildMap(svgEl, tipEl, opts={}) {
    // opts: { countries, cities, color, dark, productDots }
    if(!svgEl||!world) return;
    const { countries=[], cities=[], color="#3b82f6", productDots=[] } = opts;
    const dark = window.matchMedia("(prefers-color-scheme:dark)").matches;
    const by   = Object.fromEntries(countries.map(r=>[r.k,r.n]));
    const max  = Math.max(1,...countries.map(r=>r.n));
    const cmax = Math.max(1,...cities.map(r=>r.n));

    const shade = (n, col) => {
      if(!n) return dark?"#232322":"#ebebea";
      const t=0.15+0.85*Math.sqrt(n/max);
      // Parse hex color → shade with alpha-like effect
      const hex=col.replace("#","");
      const ri=parseInt(hex.slice(0,2),16), gi=parseInt(hex.slice(2,4),16), bi=parseInt(hex.slice(4,6),16);
      if(dark) return `rgba(${ri},${gi},${bi},${(0.15+0.65*t).toFixed(2)})`;
      const bg=250;
      return `rgb(${Math.round(bg+(ri-bg)*t)},${Math.round(bg+(gi-bg)*t)},${Math.round(bg+(bi-bg)*t)})`;
    };

    // Base countries choropleth
    let html = world.c.map(([k,nm,d])=>
      `<path d="${d}" fill="${shade(by[k]||0,color)}" data-k="${k}" data-t="${esc(nm)}${by[k]?"："+by[k]:""}"></path>`
    ).join("");

    // City circles
    if(cities.length) {
      html += cities.filter(r=>r.lat!=null&&r.lon!=null).map(r=>
        `<circle class="tj-map-city" cx="${mapX(r.lon).toFixed(1)}" cy="${mapY(r.lat).toFixed(1)}" r="${(2+6*Math.sqrt(r.n/cmax)).toFixed(1)}" fill="${color}" opacity="0.7" data-t="${esc([r.city,worldNames[r.k]||r.k].filter(Boolean).join("，"))}：${r.n}"></circle>`
      ).join("");
    }

    // Product dots (for unified map)
    for(const { countries:pc=[], color:pc_col, name:pname } of productDots) {
      const pmax=Math.max(1,...pc.map(r=>r.n));
      for(const { k,n } of pc) {
        const c=CENTROIDS[k]; if(!c) continue;
        const r=(3+8*Math.sqrt(n/pmax)).toFixed(1);
        html+=`<circle class="tj-dot-${pname}" cx="${mapX(c[0]).toFixed(1)}" cy="${mapY(c[1]).toFixed(1)}" r="${r}" fill="${pc_col}" opacity="0.75" stroke="var(--bg)" stroke-width="1" data-t="${esc(worldNames[k]||k)} · ${esc(pname)}：${n}"></circle>`;
      }
    }

    svgEl.innerHTML = html;

    svgEl.addEventListener("pointermove", ev=>{
      const t=ev.target.closest("[data-t]"); if(!t){tipEl.hidden=true;return;}
      const b=svgEl.parentNode.getBoundingClientRect();
      tipEl.textContent=t.dataset.t; tipEl.hidden=false;
      tipEl.style.left=Math.min(ev.clientX-b.left+14,b.width-tipEl.offsetWidth-4)+"px";
      tipEl.style.top=(ev.clientY-b.top+14)+"px";
    });
    svgEl.addEventListener("pointerleave",()=>{tipEl.hidden=true;});
  }

  function mapHTML(id) {
    return `<div class="tj-map-wrap">
  <svg id="${id}" class="tjmap" viewBox="0 0 1000 480" role="img" aria-label="世界地图"></svg>
  <div class="tj-tip" id="${id}-tip" hidden></div>
</div>`;
  }

  // ─── OVERVIEW ─────────────────────────────────────────────────────────────────

  async function loadOverview() {
    content.innerHTML = `<p class="tj-msg">载入所有产品数据中…</p>`;
    const token = getToken();
    const fetchP = async id => {
      try {
        const r=await fetch(`/api/stats?product=${id}&days=30`,{headers:{"Authorization":`Bearer ${token}`}});
        if(r.status===401){clearToken();showAuth();return null;}
        if(!r.ok) return null;
        return await r.json();
      } catch{return null;}
    };
    const [cx,jm]=await Promise.all([fetchP("cabinetx"),fetchP("joshmoney")]);

    // Summary stats
    const totalUsers=[cx?.totals?.signups,jm?.totals?.users_total].filter(v=>v!=null).reduce((s,v)=>s+(+v),0);
    const totalActive7=[cx?.totals?.active7,jm?.totals?.active_7d].filter(v=>v!=null).reduce((s,v)=>s+(+v),0);

    const cards=[
      ovCard("cabinetx","Cabinet-X", cx, d=>d.totals?.active7,    d=>d.series||[],"active", "7天活跃"),
      ovCard("joshmoney","JoshMoney",jm, d=>d.totals?.users_total, d=>d.series||[],"signups","累计用户"),
    ].join("");

    // Collect country data for each product (for unified map)
    const productDots=[
      {name:"cabinetx", color:PRODUCTS.cabinetx.color,  countries:cx?.countries||[]},
      {name:"joshmoney",color:PRODUCTS.joshmoney.color, countries:jm?.countries||[]},
    ].filter(p=>p.countries.length);

    // Legend for unified map
    const allProducts=[
      {name:"Cabinet-X",color:PRODUCTS.cabinetx.color, shape:"dot"},
      {name:"JoshMoney",color:PRODUCTS.joshmoney.color,shape:"dot"},
    ];
    const legendHTML=allProducts.map(p=>{
      const sym=p.shape==="fill"
        ?`<span class="tj-legend-fill" style="background:${p.color};opacity:0.4"></span>`
        :`<span class="tj-legend-dot" style="background:${p.color}"></span>`;
      return `<span class="tj-legend-item">${sym}<span>${esc(p.name)}</span></span>`;
    }).join("");

    content.innerHTML=`
<div class="tj-ov-header">
  <div class="tj-ov-stat"><b>${fmtN(totalUsers)}</b><span>APP 累计用户合计</span></div>
  <div class="tj-ov-stat"><b>${fmtN(totalActive7)}</b><span>APP 7 天活跃合计</span></div>
</div>
<div class="tj-ov-grid">${cards}</div>
<div class="tj-section-hd"><span>全球覆盖</span><div class="tj-map-legend" id="tj-ov-legend">${legendHTML}</div></div>
${mapHTML("tjmap-ov")}`;

    // Bind card clicks
    content.querySelectorAll(".tj-pcard[data-goto]").forEach(el=>{
      el.addEventListener("click",()=>{
        const pid=el.dataset.goto;
        document.querySelectorAll(".tj-tab").forEach(b=>b.setAttribute("aria-selected",String(b.dataset.product===pid)));
        currentProduct=pid; load(currentProduct,days);
      });
      el.addEventListener("keydown",ev=>{if(ev.key==="Enter"||ev.key===" ")el.click();});
    });

    // Draw unified map
    if(world){
      buildMap(document.getElementById("tjmap-ov"),document.getElementById("tjmap-ov-tip"),{
        countries:[], cities:[], color:PRODUCTS.cabinetx.color, productDots,
      });
    }
  }

  function ovCard(id,name,data,getKpi,getSeries,seriesKey,kpiLabel){
    const col=PRODUCTS[id].color;
    if(!data) return `<div class="tj-pcard" data-goto="${id}"><div class="tj-pcard-name" style="--pc:${col}">${esc(name)}</div><div class="tj-pcard-row"><div><div class="tj-pcard-kpi">—</div><div class="tj-pcard-lbl">载入失败</div></div></div></div>`;
    const series=getSeries(data);
    const kpi=getKpi(data)??0;
    const badge=trendBadge(series,seriesKey,series.length);
    const spark=sparkline(series.slice(-30),seriesKey,col);
    return `<div class="tj-pcard" data-goto="${id}" role="button" tabindex="0" style="--pc:${col}">
  <div class="tj-pcard-name">${esc(name)}</div>
  <div class="tj-pcard-row">
    <div><div class="tj-pcard-kpi">${fmtN(kpi)}</div><div class="tj-pcard-lbl">${kpiLabel}</div></div>
    ${spark}
  </div>
  ${badge?`<div class="tj-pcard-foot">${badge}<span>较前半期</span></div>`:""}
</div>`;
  }

  // ─── Cabinet-X ────────────────────────────────────────────────────────────────

  function renderCX(j,d){
    const t=j.totals||{}, series=j.series||[], links=j.links||[], bucket=j.bucket||"day";
    const col=PRODUCTS.cabinetx.color;
    const chartHTML=lineChart(series.slice(-30),["active","signups"],{active:"活跃",signups:"注册"},[col,"#94a3b8"]);
    const activeBadge=trendBadge(series,"active",series.length);
    const engRate=t.signups&&t.active7?Math.round(+t.active7/+t.activeups*100)+"%":"—";
    const engRateSafe=t.signups&&t.active7?Math.round(+t.active7/+t.signups*100)+"%":"—";
    const metrics=["active","signups","downloads","projects","designs","shares"];
    const mLabels={active:"活跃",signups:"注册",downloads:"下载",projects:"项目",designs:"设计",shares:"分享"};
    const seriesRows=series.slice(-14).reverse().map(row=>`<tr><th>${esc(row.k)}</th>${metrics.map(m=>`<td>${row[m]??0}</td>`).join("")}</tr>`).join("");
    const tableHTML=series.length?`<div class="tj-cx-table-wrap"><table class="tj-cx-table"><thead><tr><th>${bucket==="week"?"周":"日"}</th>${metrics.map(m=>`<th>${mLabels[m]}</th>`).join("")}</tr></thead><tbody>${seriesRows}</tbody></table></div>`:`<p class="tj-msg">暂无数据</p>`;
    const linksHTML=links.length?links.slice(0,20).map(l=>{
      const kind=l.kind==="s"?"分享":"报价";
      const rev=l.revoked?` <span style="color:var(--muted)">(已撤销)</span>`:"";
      return `<li><div><time>${esc(when(l.at))}</time> <span class="rpage">${esc(kind)}</span>${rev}<div class="rmeta">${esc(l.email||"—")} · ${l.views||0} 次查看${l.lastViewed?" · 最近 "+when(l.lastViewed):""}</div></div></li>`;
    }).join(""):`<li style="color:var(--muted);font-size:0.875rem;padding:0.6rem 0">暂无分享</li>`;

    content.innerHTML=`
${rangeBar(d,[[7,"7天"],[30,"30天"],[365,"一年"]])}
<div class="tj-kpi">
  ${kpiCard(t.active7??"—","7天活跃用户",activeBadge,col)}
  ${kpiCard(t.signups??"—","累计注册","",col)}
  ${kpiCard(t.downloads??"—","累计下载","",col)}
  ${kpiCard(t.projects??"—","累计项目","",col)}
  ${kpiCard(t.designs??"—","累计设计","",col)}
  ${kpiCard(t.shares??"—","累计分享","",col)}
  ${kpiCard(engRateSafe,"活跃率（7d/总）","",col)}
</div>
<div class="tj-chart-section"><h2>活跃 & 注册趋势</h2>${chartHTML}</div>
<div class="tj-section-hd"><span>用户地理分布</span></div>
${mapHTML("tjmap-cx")}
<div class="tj-cx-section"><h2>详细数据（${bucket==="week"?"按周":"按天"}，近 14 期）</h2>${tableHTML}</div>
<div class="tj-recent-title">最近分享链接</div>
<ol class="tj-recent">${linksHTML}</ol>`;

    bindRange();
    buildMap(document.getElementById("tjmap-cx"),document.getElementById("tjmap-cx-tip"),{countries:j.countries||[],color:col});
  }

  // ─── JoshMoney ────────────────────────────────────────────────────────────────

  function renderJM(j,d){
    const t=j.totals||{}, series=j.series||[];
    const col=PRODUCTS.joshmoney.color;
    const chartHTML=lineChart(series,["signups","businesses"],{signups:"新用户",businesses:"新公司"},[col,"#94a3b8"]);
    const signupBadge=trendBadge(series,"signups",series.length);
    const bizRate=t.users_total&&t.businesses_total?Math.round(+t.businesses_total/+t.users_total*100)+"%":"—";

    content.innerHTML=`
${rangeBar(d,[[7,"7天"],[30,"30天"],[90,"90天"]])}
<div class="tj-kpi">
  ${kpiCard(t.users_total??"—","累计用户","",col)}
  ${kpiCard(t.users_7d??"—","7天新用户",signupBadge,col)}
  ${kpiCard(t.businesses_total??"—","累计公司","",col)}
  ${kpiCard(t.businesses_7d??"—","7天新公司","",col)}
  ${kpiCard(t.active_7d??"—","7天活跃用户","",col)}
  ${kpiCard(bizRate,"企业注册率","",col)}
</div>
<div class="tj-chart-section"><h2>用户 & 公司增长趋势</h2>${chartHTML}</div>
<div class="tj-section-hd"><span>用户地理分布</span></div>
${mapHTML("tjmap-jm")}
<div class="tj-cx-section"><h2>每日明细（近 14 天）</h2>
  ${simpleSeries(series,["signups","businesses"],{signups:"新用户",businesses:"新公司"})}
</div>`;
    bindRange();
    buildMap(document.getElementById("tjmap-jm"),document.getElementById("tjmap-jm-tip"),{countries:j.countries||[],color:col});
  }

  // ─── HELPERS ──────────────────────────────────────────────────────────────────

  function listItems(rows,label){
    return rows.length
      ?rows.map(r=>`<li><span>${esc(label(r))}</span><b>${r.n}${r.d?" · "+fmt(r.d):""}</b></li>`).join("")
      :`<li><span style="color:var(--muted)">暂无数据</span></li>`;
  }

  function rangeBar(d,opts){
    return `<div class="tj-range" id="tj-range" role="group" aria-label="时间范围">
  ${opts.map(([v,label])=>`<button type="button" data-d="${v}"${d===v?' aria-pressed="true"':""}>${label}</button>`).join("")}
</div>`;
  }

  function bindRange(){
    document.getElementById("tj-range")?.addEventListener("click",ev=>{
      const b=ev.target.closest("button[data-d]"); if(!b) return;
      days=+b.dataset.d; load(currentProduct,days);
    });
  }

  function simpleSeries(series,cols,labels){
    if(!series||!series.length) return `<p class="tj-msg">暂无数据</p>`;
    const head=cols.map(c=>`<th>${labels[c]||c}</th>`).join("");
    const rows=series.slice(-14).reverse().map(row=>{
      const cells=cols.map(c=>`<td>${row[c]??0}</td>`).join("");
      return `<tr><th>${esc(row.day||row.k)}</th>${cells}</tr>`;
    }).join("");
    return `<div class="tj-cx-table-wrap"><table class="tj-cx-table"><thead><tr><th>日期</th>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
  }

  // ─── LOAD ─────────────────────────────────────────────────────────────────────

  async function load(product,d){
    if(product==="overview"){loadOverview();return;}
    const p=PRODUCTS[product]; if(!p) return;
    const token=getToken(); if(!token){showAuth();return;}
    content.innerHTML=`<p class="tj-msg">载入中…</p>`;
    let j;
    try{
      const r=await fetch(`/api/stats?product=${product}&days=${d}`,{headers:{"Authorization":`Bearer ${token}`}});
      if(r.status===401){clearToken();authErr.textContent="登录已过期，请重新登录。";showAuth();return;}
      if(!r.ok) throw new Error(`${r.status}`);
      j=await r.json();
    }catch(e){
      content.innerHTML=`<p class="tj-msg">载入失败（${esc(String(e.message))}）。</p>`;
      return;
    }
    if     (product==="cabinetx"||j._type==="cx_stats") renderCX(j,d);
    else renderJM(j,d);
  }

  // ─── TAB + SIGN OUT ───────────────────────────────────────────────────────────

  document.getElementById("tj-products").addEventListener("click",ev=>{
    const t=ev.target.closest(".tj-tab[data-product]"); if(!t) return;
    document.querySelectorAll(".tj-tab").forEach(b=>b.setAttribute("aria-selected","false"));
    t.setAttribute("aria-selected","true");
    currentProduct=t.dataset.product; load(currentProduct,days);
  });

  keyBtn.addEventListener("click",()=>{
    clearToken();
    if(window.google?.accounts?.id) google.accounts.id.disableAutoSelect();
    showAuth();
  });

  // Load world.json; redraw if overview map is visible
  fetch("assets/world.json").then(r=>r.json()).then(w=>{
    world=w;
    worldNames={...(w.n||{}),...Object.fromEntries(w.c.map(([k,n])=>[k,n]))};
    if(currentProduct==="overview"&&content.querySelector(".tj-map-wrap")){
      loadOverview();
    }
  }).catch(()=>{});

  window.addEventListener("load",()=>{
    if(getToken()){showMain();load(currentProduct,days);}
    else{showAuth();renderGoogleBtn();}
  });

  window.__tjGoogleReady=()=>{ if(!getToken()) renderGoogleBtn(); };
})();
