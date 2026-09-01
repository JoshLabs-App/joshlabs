const chapters = window.courseChapters || [];

const titleEl = document.getElementById("chapter-title");
const metaEl = document.getElementById("chapter-meta");
const badgeEl = document.getElementById("page-badge");
const bodyEl = document.getElementById("lesson-body");
const progressTextEl = document.getElementById("progress-text");
const progressFillEl = document.getElementById("progress-fill");
const catalogBtn = document.getElementById("catalog-btn");
const catalogModal = document.getElementById("catalog-modal");
const catalogBackdrop = document.getElementById("catalog-backdrop");
const catalogClose = document.getElementById("catalog-close");
const catalogList = document.getElementById("catalog-list");
const shareBtn = document.getElementById("share-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const fontDecBtn = document.getElementById("font-dec-btn");
const fontIncBtn = document.getElementById("font-inc-btn");
const cardEl = document.getElementById("card");
const siteTitleEl = document.getElementById("site-title");

const READER_SCALE_MIN = 0.82;
const READER_SCALE_MAX = 1.5;
const READER_SCALE_STEP = 0.04;
const READER_SCALE_STORAGE_KEY = "readerScaleV2";
const READER_SCALE_DEFAULT = 1.08;

let currentIndex = 0;
let readerScale = Number(window.localStorage.getItem(READER_SCALE_STORAGE_KEY) || READER_SCALE_DEFAULT);
let shareFeedbackTimer = null;

function lessonIndexFromUrl() {
  const params = new URLSearchParams(location.search);
  const n = Number(params.get("n") || params.get("p"));
  if (!Number.isFinite(n)) return 0;
  const byN = chapters.findIndex((chapter) => Number(chapter.n) === n);
  if (byN >= 0) return byN;
  return Math.max(0, Math.min(chapters.length - 1, n - 1));
}

function currentShareUrl() {
  const chapter = chapters[currentIndex];
  const url = new URL(location.pathname, location.origin);
  url.search = "";
  if (Number.isFinite(Number(chapter?.n))) {
    url.searchParams.set("n", String(chapter.n));
  }
  return url.href;
}

function syncShareUrl() {
  const next = currentShareUrl();
  const current = `${location.origin}${location.pathname}${location.search}`;
  if (next !== current && next !== location.href) {
    history.replaceState(null, "", next);
  }
}

function showShareFeedback(message) {
  if (!shareBtn) return;
  shareBtn.setAttribute("aria-label", message);
  shareBtn.title = message;
  window.clearTimeout(shareFeedbackTimer);
  shareFeedbackTimer = window.setTimeout(() => {
    shareBtn.setAttribute("aria-label", "复制本页网址");
    shareBtn.title = "复制本页网址";
  }, 1800);
}

async function shareCurrentPage() {
  syncShareUrl();
  const url = currentShareUrl();
  try {
    if (!navigator.clipboard?.writeText) throw new Error("clipboard unavailable");
    await navigator.clipboard.writeText(url);
    showShareFeedback("已复制");
  } catch {
    showShareFeedback("复制失败");
  }
}

function fitSiteTitle() {
  if (!siteTitleEl) return;
  const parent = siteTitleEl.parentElement;
  if (!parent) return;

  const parentStyles = window.getComputedStyle(parent);
  const available =
    parent.clientWidth -
    parseFloat(parentStyles.paddingLeft) -
    parseFloat(parentStyles.paddingRight);
  if (!available) return;

  let size = Math.min(76, Math.max(22, available / 8.1));
  siteTitleEl.style.fontSize = `${size}px`;

  while (siteTitleEl.scrollWidth > available && size > 18) {
    size -= 1;
    siteTitleEl.style.fontSize = `${size}px`;
  }
}

function applyReaderScale() {
  readerScale = Math.min(READER_SCALE_MAX, Math.max(READER_SCALE_MIN, readerScale));
  document.documentElement.style.setProperty("--reader-scale", readerScale.toFixed(2));
  window.localStorage.setItem(READER_SCALE_STORAGE_KEY, readerScale.toFixed(2));
  if (fontDecBtn) fontDecBtn.disabled = readerScale <= READER_SCALE_MIN;
  if (fontIncBtn) fontIncBtn.disabled = readerScale >= READER_SCALE_MAX;
}

function normalize(value) {
  return String(value).toLowerCase().replace(/\s+/g, "");
}

function chapterText(chapter) {
  const sectionsText = (chapter.sections || [])
    .flatMap((section) => [section.title, ...(section.items || [])])
    .join(" ");
  const summaryText = (chapter.summary || []).join(" ");
  const questionsText = (chapter.questions || []).join(" ");
  return normalize([chapter.title, chapter.meta, sectionsText, summaryText, questionsText].join(" "));
}

function renderQuestions(chapter) {
  if (!chapter.questions || !chapter.questions.length) return "";
  return `
    <section class="section-block">
      <div class="section-label">问题思考</div>
      <div class="question-grid">
        ${chapter.questions.map((q) => `<div class="question-card">${q}</div>`).join("")}
      </div>
    </section>
  `;
}

function nestedIdentityPoints(items) {
  return `<ul class="identity-points identity-points-nested">${items
    .map((item) => {
      if (typeof item === "string") return `<li>${item}</li>`;
      return `<li class="${item.className || ""}">${item.text}</li>`;
    })
    .join("")}</ul>`;
}

function card(title, body, opts = {}) {
  const kicker = opts.kicker ? `<div class="concept-step">${opts.kicker}</div>` : "";
  const notes = (opts.notes || [])
    .map((note) => `<p class="concept-note">${note}</p>`)
    .join("");
  const bullets = (opts.bullets || [])
    .map((item) => `<li>${item}</li>`)
    .join("");
  const bulletHtml = bullets ? `<ul class="identity-points">${bullets}</ul>` : "";
  const className = opts.className || "concept-card";
  const tail = opts.tail ? `<p class="pair-tail">${opts.tail}</p>` : "";
  return `
    <article class="${className}">
      ${kicker}
      <div class="concept-title">${title}</div>
      <p>${body}</p>
      ${notes}
      ${bulletHtml}
      ${tail}
    </article>
  `;
}

function pairCard(head, body, tail) {
  const labelMatch = head.match(/^([A-Z]\.)\s*(.+)$/);
  const headHtml = labelMatch
    ? `<div class="pair-head pair-title-row"><span class="pair-label">${labelMatch[1]}</span><span>${labelMatch[2]}</span></div>`
    : `<div class="pair-head">${head}</div>`;
  return `
    <article class="pair-card">
      ${headHtml}
      <div class="pair-body">${body}</div>
      <div class="pair-tail">${tail}</div>
    </article>
  `;
}

function layeredConceptCard(step, title, primaryLine, featureLabel, featureItems, scriptureLabel, scriptureItems) {
  return `
    <article class="concept-card concept-card-hierarchy">
      <div class="concept-step">${step}</div>
      <div class="concept-title">${title}</div>
      <div class="lesson-hierarchy">
        <div class="lesson-hierarchy-item lesson-hierarchy-major">
          <span class="lesson-hierarchy-number">1.</span>
          <span class="lesson-hierarchy-text">${primaryLine}</span>
        </div>
        <div class="lesson-hierarchy-item lesson-hierarchy-major">
          <span class="lesson-hierarchy-number">2.</span>
          <span class="lesson-hierarchy-text">${featureLabel}</span>
        </div>
        ${nestedIdentityPoints(featureItems)}
        <div class="lesson-hierarchy-item lesson-hierarchy-major">
          <span class="lesson-hierarchy-number">3.</span>
          <span class="lesson-hierarchy-text">${scriptureLabel}</span>
        </div>
        ${nestedIdentityPoints(scriptureItems)}
      </div>
    </article>
  `;
}

function sectionBlock(label, innerHtml) {
  return `
    <section class="section-block">
      <div class="section-label">${label}</div>
      ${innerHtml}
    </section>
  `;
}

function diagramFigure(src, alt) {
  return `
    <figure class="diagram-image-frame">
      <img class="diagram-image" src="${src}" alt="${alt}">
    </figure>
  `;
}

function lessonTable({ title, headers, rows, rowLabels = [] }) {
  const hasRowLabels = rowLabels.length > 0;
  return `
    <div class="table-wrap">
      ${title ? `<div class="table-hint">${title}</div>` : ""}
      <table class="lesson-table">
        <thead>
          <tr>
            ${hasRowLabels ? "<th scope=\"col\"></th>" : ""}
            ${headers.map((header) => `<th scope=\"col\">${header}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row, index) => `
                <tr>
                  ${hasRowLabels ? `<th scope="row">${rowLabels[index] || ""}</th>` : ""}
                  ${row.map((cell) => `<td>${cell}</td>`).join("")}
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function courseOverviewTable() {
  return `
    <div class="table-wrap">
      <table class="lesson-table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">MF1</th>
            <th scope="col">MF2</th>
            <th scope="col">MF3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">课程名称</th>
            <td>真正的男人的探索</td>
            <td>男人在工作和家庭中</td>
            <td>巨大的挑战</td>
          </tr>
          <tr>
            <th scope="row">侧重点</th>
            <td>男人的核心定义</td>
            <td>男人的首要责任</td>
            <td>男人被赋予的使命</td>
          </tr>
          <tr>
            <th scope="row">主要因素</th>
            <td>• 男人的伤害<br>• 男人的定义<br>• 男人问题的概览</td>
            <td>• 男人怎样享受他的工作<br>• 男人怎样成功处理与妻子间的关系</td>
            <td>• 重新发现生活的挑战<br>• 理解他的设计<br>• 发展满意的人生目标</td>
          </tr>
          <tr>
            <th scope="row">主要挑战</th>
            <td>你生命中的男孩气必须死掉</td>
            <td>你生命中的男人形象必须向前走</td>
            <td>你生命中的挑战必须存在</td>
          </tr>
          <tr>
            <th scope="row">目标</th>
            <td>拥有你的男人形象</td>
            <td>建立你的男人形象</td>
            <td>强化你的男人形象</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

function fatherMemoryStatsTable() {
  return `
    <div class="table-wrap">
      <div class="table-hint">1960 到 1990 年，孩子与亲身父亲同住和分开住的百分比</div>
      <table class="lesson-table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">1960</th>
            <th scope="col">1970</th>
            <th scope="col">1980</th>
            <th scope="col">1990</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">与亲身父亲住在一起的孩子的百分比</th>
            <td>82.5%</td>
            <td>77.6%</td>
            <td>67.8%</td>
            <td>61.7%</td>
          </tr>
          <tr>
            <th scope="row">与亲身父亲分开住的孩子的百分比</th>
            <td>17.5%</td>
            <td>22.4%</td>
            <td>32.2%</td>
            <td>38.3%</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

function fatherWoundTwoAspectsTable() {
  return `
    <div class="table-wrap">
      <div class="table-hint">如果你已作了父亲，请让你儿子具有以下两个方面</div>
      <table class="lesson-table">
        <thead>
          <tr>
            <th scope="col">让他听到</th>
            <th scope="col">让他具有</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">我爱你</th>
            <td>真正男人的追求</td>
          </tr>
          <tr>
            <th scope="row">我因你而自豪</th>
            <td>行为准则</td>
          </tr>
          <tr>
            <th scope="row">你做得真好</th>
            <td>坚定的信念（超越自我的价值观）</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

function marriageModelsSection() {
  return `
    <div class="concept-grid mode-grid">
      <article class="mode-card mode-card-one">
        <div class="mode-tag">A.</div>
        <h4>上-下传统模式</h4>
        <ul class="mode-points">
          <li>丈夫：君王</li>
          <li>领导：上帝</li>
          <li>目标：个人利益</li>
          <li>影响：一方胜利</li>
          <li>另一方失败</li>
        </ul>
        <p>上 / 下</p>
      </article>
      <article class="mode-card mode-card-two">
        <div class="mode-tag">B.</div>
        <h4>50/50 相同模式</h4>
        <ul class="mode-points">
          <li>丈夫：伙伴</li>
          <li>领导：群龙无首</li>
          <li>目标：平等</li>
          <li>影响：难以平衡</li>
          <li>难以谦卑</li>
        </ul>
        <p>并列但拉扯</p>
      </article>
      <article class="mode-card mode-card-three">
        <div class="mode-tag">C.</div>
        <h4>并排圣经模式</h4>
        <ul class="mode-points">
          <li>丈夫：头</li>
          <li>领导：责任和牺牲</li>
          <li>目标：合一</li>
          <li>影响：健康、幸福、和谐</li>
        </ul>
        ${diagramFigure("assets/marriage-models-diagram.svg", "并排圣经模式示意图")}
      </article>
    </div>
  `;
}

function motherSeparationSection() {
  return `
    <div class="concept-grid concept-grid-4">
      ${card("母子一体", "起点：母子连在一起。", { kicker: "1." })}
      ${card("健康的身体上分离", "分娩让身体先分开。", { kicker: "2." })}
      ${card("健康的情感上分离", "建立边界，情感也慢慢分开。", { kicker: "3." })}
      ${card("与妻子联合", "离开父母，进入新的联合。", { kicker: "4." })}
    </div>
  `;
}

function lifeCycleSection() {
  return `
    <div class="concept-grid concept-grid-2">
      ${card("春天", "0–22 青少年：开始、成长、学习。", { kicker: "A." })}
      ${card("夏天", "17–45 成人早期：行动、承担、建造。", { kicker: "B." })}
      ${card("秋天", "40–65 成人中期：收成、整理、成熟。", { kicker: "C." })}
      ${card("冬天", "60+ 成人晚期：沉淀、传递、回顾。", { kicker: "D." })}
    </div>
  `;
}

function lifeStagesSection() {
  return `
    <div class="concept-grid" style="grid-template-columns: repeat(3, minmax(0, 1fr));">
      ${card("Adam", "创造阶段 0–20：接受恩赐和天赋。", { kicker: "1." })}
      ${card("Zakar", "青春期 13–25：面对性能量，学习精通。", { kicker: "2." })}
      ${card("Gibbor", "战士阶段 20–40：进入战斗中的生命。", { kicker: "3." })}
      ${card("Enosh", "受伤阶段 40–50：经历强大的再评价。", { kicker: "4." })}
      ${card("Ish", "成熟阶段 50–60：成为行为模范。", { kicker: "5." })}
      ${card("Zaken", "智者阶段 60+：留下传奇。", { kicker: "6." })}
    </div>
  `;
}

function renderSpecialLesson(chapter) {
  if (chapter.n === 0) {
    return `
      <section class="section-block">
        <div class="section-label">I. 欢迎参加“真正的男人”的探索：什么是“真正的男人”？</div>
        <div class="subsection">
          <h4>先认识整套课程的方向</h4>
          <p>这一套内容不是只讲“知识点”，而是按三个阶段一步一步帮助男人看见自己、重建自己、并活出责任。</p>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">II. 课程的简单介绍</div>
        ${courseOverviewTable()}
      </section>
      <section class="section-block">
        <div class="section-label">III. 本课程的几个基本的参考因素：</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card concept-card-soft">
            <div class="concept-step">A</div>
            <div class="concept-title">男人处在一个充满困惑的时代</div>
            <p>很多男人没有清晰路径，也带着伤害、失败和迷茫。</p>
          </article>
          <article class="concept-card concept-card-soft">
            <div class="concept-step">B</div>
            <div class="concept-title">困惑会带来问题</div>
            <p>男人一旦失去方向，家庭、工作和关系都会被拖进更大的压力里。</p>
          </article>
          <article class="concept-card concept-card-soft">
            <div class="concept-step">C</div>
            <div class="concept-title">困惑也会带来不满足</div>
            <p>人不只是“不知道”，更常常是“想做却做不出来”。</p>
          </article>
          <article class="concept-card concept-card-soft">
            <div class="concept-step">D</div>
            <div class="concept-title">圣经提供了见解</div>
            <p>这套课程的核心，是把男人重新放回上帝的设计里去理解。</p>
          </article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">IV. 产生困惑的几个历史原因</div>
        <div class="pair-grid">
          <article class="pair-card">
            <div class="pair-head">工业革命</div>
            <div class="pair-body">父亲从家庭劳动转向工厂劳动</div>
            <div class="pair-tail">亲子陪伴被切断，感情连结变弱。</div>
          </article>
          <article class="pair-card">
            <div class="pair-head">二战</div>
            <div class="pair-body">许多男人被战争打散</div>
            <div class="pair-tail">父子联系中断，创伤被带回家庭。</div>
          </article>
          <article class="pair-card">
            <div class="pair-head">女权主义</div>
            <div class="pair-body">平等被误读成“完全一样”</div>
            <div class="pair-tail">不同分工被混淆，角色边界变得模糊。</div>
          </article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">V. 五个承诺</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card concept-card-strong"><div class="concept-step">1</div><div class="concept-title">清晰的男人定义</div><p>学完后你会知道什么是真正的男人，也能对别人讲清楚。</p></article>
          <article class="concept-card concept-card-strong"><div class="concept-step">2</div><div class="concept-title">新的表达方式</div><p>你会开始用更成熟的方式表达男人的价值。</p></article>
          <article class="concept-card concept-card-strong"><div class="concept-step">3</div><div class="concept-title">看见自己的价值</div><p>这门课像工具，把被压住的个人价值再打开。</p></article>
          <article class="concept-card concept-card-strong"><div class="concept-step">4</div><div class="concept-title">结交同行的朋友</div><p>你不再是一个人走，而是有一群同路的人。</p></article>
          <article class="concept-card concept-card-strong"><div class="concept-step">5</div><div class="concept-title">拥有自己的计划</div><p>你会开始为人生、家庭和责任制定更清楚的路径。</p></article>
        </div>
      </section>
      ${renderQuestions(chapter)}
    `;
  }

  if (chapter.n === 1) {
    return `
      <section class="section-block source-block">
        <div class="section-label">原课程连接与版权说明</div>
        <a class="official-link" href="https://www.mensfraternity.com/" target="_blank" rel="noopener noreferrer">
          <span>Official Course Website</span>
          <strong>Men's Fraternity Classic · The Quest for Authentic Manhood</strong>
          <em>https://www.mensfraternity.com/</em>
          <span class="copyright-note">本中文网页为课程学习与排版整理用途，方便小组阅读和讨论；原课程、视频、教材内容、名称及相关权利归原作者 Dr. Robert Lewis、Men's Fraternity / Authentic Manhood 及其相关权利方所有。若需观看、购买或引用原课程，请以官方发布渠道为准。</span>
        </a>
      </section>
      <section class="section-block">
        <div class="section-label">I. 欢迎参加“真正的男人”的探索：什么是“真正的男人”？</div>
      </section>
      <section class="section-block">
        <div class="section-label">II. 课程的简单介绍</div>
        ${courseOverviewTable()}
      </section>
      <section class="section-block">
        <div class="section-label">III. 本课程的几个基本的参考因素：</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card concept-card-soft"><div class="concept-step">A.</div><div class="concept-title">男人处在一个充满困惑的时代：</div><p>例子：几年前成千的男人去华盛顿请愿；成千的男人参加Promise Keeper 25%男人没有清晰地步骤去实现如何成为一个真正地男人；很多地男人有各种各样地伤害，如父亲伤害、梦想的破灭、生活中失败、不知道如何扑救等；虽然科技在进步，人的技能正在逐渐地散失。</p></article>
          <article class="concept-card concept-card-soft"><div class="concept-step">B.</div><div class="concept-title">困惑的男人会产生很大的问题：</div><p>统计表明很多的问题是男人做出来的；漫画--猪头男人身</p></article>
          <article class="concept-card concept-card-soft"><div class="concept-step">C.</div><div class="concept-title">困惑的男人很少会感到满足：</div><p>我们不喜欢但不知道如何去做？</p></article>
          <article class="concept-card concept-card-soft"><div class="concept-step">D.</div><div class="concept-title">当今的男人在竞争当中缺少远大的理想：</div><p>我们在童年时有童年的乐趣，但我们成为男人后有乐趣吗？</p></article>
          <article class="concept-card concept-card-soft"><div class="concept-step">E.</div><div class="concept-title">圣经-我相信它对上面的所有问题都有很好地见解。</div></article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">IV. 产生困惑的几个历史原因：</div>
        <div class="pair-grid">
          ${pairCard("A. 工业革命：", "以前爸爸带着儿子在田间一起工作，从而建立很好的感情，自从工业革命，爸爸不得不去工厂上班，回到家后已是精疲力尽了，哪有时间和精力与儿女共建感情。", "")}
          ${pairCard("B. 第二次世界大战：", "很多优秀的男人被招去战场，从而打断与儿子间联系；即使能回来的，大多带着满身的心灵创伤，如何再建父子间的联系显得尤为困难。", "")}
          ${pairCard("C. 女权主义：", "圣经上说男人、女人是平等的，但男人与女人的分工是不同的；但女权主义的兴起，她们追求绝对地平等：男人能做的，女人一定能做，从而混淆 了男女间的职能。", "")}
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">V. 五个承诺</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card concept-card-strong"><div class="concept-step">A.</div><div class="concept-title">你对男人有清晰地的定义：</div><p>很多男人不知道男人的准确的定义，当你学完这个课程后你就知道什么才是真正的男人，你也愿意同他人分享。</p></article>
          <article class="concept-card concept-card-strong"><div class="concept-step">B.</div><div class="concept-title">你会发展一个全新地男人表达方式：</div><p>新的桥梁、为仆的领袖、男人核心价值、男孩气必须死掉等。</p></article>
          <article class="concept-card concept-card-strong"><div class="concept-step">C.</div><div class="concept-title">你会做一些关于你自己的、显著地个人价值的发现：</div><p>井盖(manhole)的比喻：太重不能打开，需特殊的工具；同样这个课程就是那把工具/钥匙帮助你打开你个人世界中的价值。</p></article>
          <article class="concept-card concept-card-strong"><div class="concept-step">D.</div><div class="concept-title">你会结交一些有共同理想的朋友：</div><p>和其他男人间一个全新的交流方式</p></article>
          <article class="concept-card concept-card-strong"><div class="concept-step">E.</div><div class="concept-title">为成为一个真正男人，你会拥有属于你个人的规划：</div><p>你将制定属于你自己的计划，步骤；有效地生活每一天；你知道你将去哪里等。</p></article>
        </div>
      </section>
      <section class="section-block reflection-block">
        <div class="section-label">问题思考：</div>
        <div class="reflection-grid">
          <article class="reflection-card">
            <span>1</span>
            <p>你为什么选择参加此课程的学习？你想达到什么样期望？</p>
          </article>
          <article class="reflection-card">
            <span>2</span>
            <p>你对5个承诺中哪一条很感兴趣？</p>
          </article>
        </div>
      </section>
    `;
  }

  if (chapter.n === 2) {
    return `
      <section class="section-block">
        <div class="section-label">I. 简短的回顾：</div>
      </section>
      <section class="section-block">
        <div class="section-label">II. 男人的四个层面：</div>
        <div class="concept-grid concept-grid-2">
          ${layeredConceptCard(
            "A.",
            "第一个层面：君王",
            "这个层面代表了男人正直的能量",
            "这个层面有以下特点：",
            ["坚定的信念", "敢于选择高尚的道德", "服侍人的奉献精神", "正直/公义的领袖"],
            "圣经的解释",
            ["箴言4章18节", "箴言20章7节"],
          )}
          ${layeredConceptCard(
            "B.",
            "第二个层面：战士",
            "这个层面代表了男人征服的能量",
            "这个层面有以下特点：",
            ["采取主动/勇于发起", "提供保护", "供养", "坚持不懈", "勇于战斗"],
            "圣经的解释",
            ["提摩太前书6章11、12节"],
          )}
          ${layeredConceptCard(
            "C.",
            "第三个层面：爱人",
            "这个层面代表了男人营造浪漫的能量",
            "这个层面有以下特点：",
            ["温柔", "敏感", "牺牲自己去关怀对方", "感情的直接流露", "身体亲密"],
            "圣经的解释",
            ["以弗所书5章25节"],
          )}
          ${layeredConceptCard(
            "D.",
            "第四个层面：朋友",
            "这个层面代表了男人维系关系的能量",
            "这个层面有以下特点：",
            ["忠诚", "督责", "挑战", "有趣"],
            "圣经的解释",
            ["箴言17章17节", "箴言27章17节"],
          )}
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">III. 有关这四个层面的一些关键性的现象</div>
        <div class="concept-grid">
          <article class="concept-card">
            <div class="concept-step">A.</div>
            <div class="concept-title">常常，男人这些荣耀的特性被丑化</div>
            <ul class="identity-points">
              <li>君王的两个极端是：暴君和放弃者</li>
              <li>战士的两个极端是：毁坏者和懦夫</li>
              <li>爱人的两个极端是：挑剔批评者和冷酷者</li>
              <li>朋友的两个极端是：利用者和孤独者</li>
            </ul>
          </article>
          <article class="concept-card">
            <div class="concept-step">B.</div>
            <div class="concept-title">因为我们处在道德妥协的文化下，很多男人失去了君王的层面；没有了君王的一面，战士的 层面就会变得毫无限制，伤害他人，甚至包括自己</div>
          </article>
          <article class="concept-card">
            <div class="concept-step">C.</div>
            <div class="concept-title">渐渐女性化的文化已使很多年轻男人失去了男人的特质。这个结果衍生出所谓的懦弱的男人，无法下决策的男人，和无领导力的男人</div>
          </article>
          <article class="concept-card">
            <div class="concept-step">D.</div>
            <div class="concept-title">这个世界极度需要具有四个层面的真正男人</div>
          </article>
        </div>
      </section>
    `;
  }

  if (chapter.n === 3) {
    return `
      <section class="section-block">
        <div class="section-label">I. 简短的回顾</div>
      </section>
      <section class="section-block">
        <div class="section-label">II. 你成为真男人的计划表 （92页）</div>
      </section>
      <section class="section-block">
        <div class="section-label">III. 对自己的零距离观察和审视</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card">
            <div class="concept-step">A.</div>
            <div class="concept-title">每个人都有自己的故事</div>
          </article>
          <article class="concept-card">
            <div class="concept-step">B.</div>
            <div class="concept-title">自己的故事</div>
          </article>
          <article class="concept-card">
            <div class="concept-step">C.</div>
            <div class="concept-title">塑造我人生的那些时光</div>
            ${nestedIdentityPoints([
              "（1） 对我有积极影响的那段时间",
              "（2） 对我崇高道德塑造的那段时间",
              "（3） 失去珍贵东西的那段时间",
              "（4） 受到伤害的那段时间",
              "（5） 在人生需要做决定的关键时刻",
            ])}
          </article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">IV. 观察过去</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">作为一个男人，我的故事并非独特，我并不孤单。</div></article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">当一个男孩子不和父亲沟通，心灵就会空虚，到那时魔鬼或者其它的一些东西就会填满这个空虚</div></article>
          <article class="concept-card"><div class="concept-step">C.</div><div class="concept-title">很多男人还没有对付自己的老我和还没有完成那些没有做完的事情。</div></article>
          <article class="concept-card"><div class="concept-step">D.</div><div class="concept-title">男人直到面对和处理那些过去的观念和伤痛，才能成为真正的男人。</div></article>
          <article class="concept-card"><div class="concept-step">E.</div><div class="concept-title">如果男人没有来自周围的帮助，也不可能成为真正男人。不可能有自己就能成为真男人的</div></article>
          <article class="concept-card"><div class="concept-step">F.</div><div class="concept-title">或好或坏，我们被塑造成什么样子，和我们家庭生活经历息息相关。</div></article>
        </div>
      </section>
      <section class="section-block reflection-block">
        <div class="section-label">小组讨论</div>
        <div class="reflection-grid">
          <article class="reflection-card"><span>1</span><p>在你离开家之前，你的家庭生活经历带给你的宝贵经历是什么或者你养成了什么品格？</p></article>
          <article class="reflection-card"><span>2</span><p>当你离开家的时候，你的人生观是什么？从积极和消极的两个方面讨论这些你所持有的观念是怎么塑造你的人生的？</p></article>
          <article class="reflection-card"><span>3</span><p>假如你有机会改变一个受教养机会，那将会是什么？</p></article>
        </div>
      </section>
    `;
  }

  if (chapter.n === 4) {
    return `
      <section class="section-block">
        <div class="section-label">I. 当代男人为什么挣扎的原因的总结</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">社会原因</div></article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">家庭成员间的互动模式</div></article>
          <article class="concept-card"><div class="concept-step">C.</div><div class="concept-title">父亲的原因</div></article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">II. 真正男人需解决的三个重要方面</div>
        <div class="concept-grid">
          <article class="concept-card">
            <div class="concept-step">A.</div>
            <div class="concept-title">我个人的过去未解决的东西</div>
            <p class="concept-note">1. 伤害对于我们来说意味着什么？</p>
            <p>伤害 是指一些未解决的问题，缺少终止不利的影响，从而造成男人现有生活的方向和动机。</p>
            <p class="concept-note">2. 未打包的过去：男人必须处理以下5种伤害</p>
            ${nestedIdentityPoints([
              "a. 父亲不在的伤害",
              "b. 过份依赖母亲的伤害",
              "c. 所有个人的伤害",
              "d. 缺乏男人理想的伤害",
              "e. 心灵的伤害",
            ])}
          </article>
          <article class="concept-card">
            <div class="concept-step">B.</div>
            <div class="concept-title">建立一个清晰地、有挑战地的奋斗目标</div>
          </article>
          <article class="concept-card">
            <div class="concept-step">C.</div>
            <div class="concept-title">创建一个高标准的且可行地个人计划</div>
          </article>
        </div>
      </section>
      <section class="section-block reflection-block">
        <div class="section-label">问题思考：</div>
        <div class="reflection-grid">
          <article class="reflection-card"><span>1</span><p>你目前正携带多大的“行李箱”？是小号的？是中号的？是大号的？还是不知道？请解释。</p></article>
          <article class="reflection-card"><span>2</span><p>今天早上我们谈到的5个未打包的伤害，你认为你需要立即解决是哪一个，为什么？</p></article>
          <article class="reflection-card"><span>3</span><p>如果你想改变你的“行李箱”里的一些东西，那将是什么？请解释。</p></article>
        </div>
      </section>
    `;
  }

  if (chapter.n === 7) {
    return `
      <section class="section-block">
        <div class="section-label">本周金句：</div>
        <div class="callout-card">“因此，人要离开父母，与妻子连合，二人成为一体” 创世纪2：24</div>
      </section>
      <section class="section-block">
        <div class="section-label">I. “母亲”的原因：</div>
      </section>
      <section class="section-block">
        <div class="section-label">II. 两个明显地与母亲分开的方面</div>
        <div class="concept-grid">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">从身体上</div></article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">从情感上</div></article>
          <article class="concept-card concept-card-full">
            <div class="concept-title">C. 男人与母亲的真正健康分开的关系图：</div>
            ${motherSeparationSection()}
          </article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">III. 母亲的伤害的展开</div>
        <div class="concept-grid">
          <article class="concept-card">
            <div class="concept-step">A.</div>
            <div class="concept-title">定义：</div>
            <p>一种由于与母亲间不健康的情感关系导致儿子被后来女人（指妻子）的影响所胁迫，或过分顺服这种影响（历来顺受）。</p>
          </article>
          <article class="concept-card">
            <div class="concept-step">B.</div>
            <div class="concept-title">重要的特征：</div>
            ${nestedIdentityPoints([
              "1. 不容易看出来，是很微妙的",
              "2. 不是欺骗、疏忽和怠慢中一种，更伪装像一种关爱",
              "3. 不是视而不见，而是过份地关注",
              "4. 看似爱其实是控制",
              "5. 具有很强的作用，它能错误地塑造或扭曲男性的心灵。",
            ])}
          </article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">IV. 如何的产生的：</div>
        <div class="concept-grid">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">经常开始产生于父亲不在或与父亲离得远</div></article>
          <article class="concept-card">
            <div class="concept-step">B.</div>
            <div class="concept-title">也可能产生于下列四种类型的母亲</div>
            ${nestedIdentityPoints([
              "1. 无知的母亲",
              "2. 受伤的、需要爱的母亲",
              "3. 不愿放手的母亲",
              "4. 填补空缺的母亲（由于父亲的不在）",
            ])}
          </article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">V. 这种伤害的两种表现</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">男性变得对女性很强势和大男子主义</div></article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">男性变得对女性很弱势和小男孩形象</div></article>
        </div>
      </section>
      <section class="section-block reflection-block">
        <div class="section-label">问题思考：</div>
        <div class="reflection-grid">
          <article class="reflection-card"><span>1</span><p>这一课对你印象最深的是什么？请解释。</p></article>
          <article class="reflection-card"><span>2</span><p>详细说明在你的成长的过程中你和你母亲的关系。</p></article>
          <article class="reflection-card"><span>3</span><p>你能斩钉截铁地说你已经与你母亲“断开”了吗？你的母亲对你的生活产生了不健康的影响吗？你的婚姻如何？你的妻子怎么说？</p></article>
          <article class="reflection-card"><span>4</span><p>你可以看到你与你母亲，和你如何与别的女人在你的生活的方式之间的连接吗？</p></article>
        </div>
      </section>
    `;
  }

  if (chapter.n === 8) {
    return `
      <section class="section-block">
        <div class="section-label">I. 回顾</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">男人的“后腿”</div></article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">“过度的恋母情结”的伤害定义</div></article>
          <article class="concept-card">
            <div class="concept-step">C.</div>
            <div class="concept-title">这种伤害的两个很严重后果</div>
            ${nestedIdentityPoints([
              "1. 儿子面对女人变得过于被动",
              { text: "柔弱的男性（性幻想）", className: "identity-points-subitem" },
              { text: "女性化的男人", className: "identity-points-subitem" },
              { text: "被动的丈夫", className: "identity-points-subitem" },
              "2. 儿子会对女人过于强势",
              {
                text: "征服欲强的男性（极端的例子：暴力，虐待，婚外情，强奸等等）",
                className: "identity-points-subitem",
              },
              { text: "激烈的独立性（害怕受伤害）", className: "identity-points-subitem" },
              { text: "苛求的丈夫", className: "identity-points-subitem" },
            ])}
          </article>
          <article class="concept-card"><div class="concept-step">D.</div><div class="concept-title">面对这种伤害的困难之处</div></article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">II. 耶稣和祂的母亲</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">关系清晰度---路加福音 2:43-50</div></article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">社会清晰度---约翰福音 2:1-4</div></article>
          <article class="concept-card"><div class="concept-step">C.</div><div class="concept-title">灵性清晰度--马太福音 12:46-50</div></article>
          <article class="concept-card"><div class="concept-step">D.</div><div class="concept-title">健康的结局---约翰福音 19:25-27</div></article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">III. 处理这种伤害的七个建议</div>
        <div class="concept-grid">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">你要始终谨记：打破母亲的过度干预对你和她都有好处。没有这个突破真正的男人无法产生。</div></article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">要认清你的最终目标是成为一个有男子气概的人，他的人生观是基于神，而不是妈妈的想法。</div></article>
          <article class="concept-card">
            <div class="concept-step">C.</div>
            <div class="concept-title">停止对妈妈的抱怨或者纠结。如果你有这种伤害，寻求支持，鼓励或其他人的帮助，以建立一个健康的、独立于母亲的计划。邀请他们给你反馈，为了健康的与母亲分开而避免严重的错误。</div>
            ${nestedIdentityPoints([
              "1. 这个计划应解决那些具体问题，它们在具体应用上会特别麻烦。",
              "2. 这个计划需要建立一个被时间考验而有效的界限，指导你在未来的时间里和妈妈互动",
              "3. 这个计划应包括一个清楚的后果，如果一方违反这个界限。",
            ])}
          </article>
          <article class="concept-card">
            <div class="concept-step">D.</div>
            <div class="concept-title">通过下列方法和你妈妈讨论这个计划，坚持原则，不要太在意她的反应。</div>
            ${nestedIdentityPoints([
              "1. 通过一个新的方法来彼此互动",
              "2. 通过一个面对面的谈话（如果必要的话）",
            ])}
          </article>
          <article class="concept-card"><div class="concept-step">E.</div><div class="concept-title">通过你生命中的一些男人去反馈给你，以便给你澄清，鼓励和督责。</div></article>
          <article class="concept-card"><div class="concept-step">F.</div><div class="concept-title">假如你已经结婚，告诉你的妻子你已经认识到过分干预的妈妈给你带来的问题，你会负起责任去改变它。请妻子帮助和为你祷告，但是不可以让她卷入这个问题内，因为这是你的问题，而不是她的。</div></article>
          <article class="concept-card"><div class="concept-step">G.</div><div class="concept-title">在有些情况下，你努力和妈妈建立一个健康的关系，可能会导致一段时间的情绪制裁，甚至妈妈愤愤的撒手不管。不要因此举步不前，经过一段时间后，她会做出改变。</div></article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">IV. 当前迫切需要的是爸爸把青少年儿子从依赖母亲的身边带出来</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">这个带出来需要非常清楚和直接</div></article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">这种带出来需要孩子，爸爸和妈妈都接受才能有效。</div></article>
          <article class="concept-card"><div class="concept-step">C.</div><div class="concept-title">这个带出来需要运用一种仪式。</div></article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">V. 总结</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">这个支撑男性的“后腿”，不论是强或弱，都是在家里造成的。</div></article>
          <article class="concept-card">
            <div class="concept-step">B.</div>
            <div class="concept-title">现在就开始你真正男人的计划</div>
            <ul class="identity-points">
              <li>1. 怎么去处理没有父亲这个伤害？</li>
              <li>2. 怎么去处理“过度恋母情结”所带来的伤害？</li>
            </ul>
          </article>
        </div>
      </section>
      <section class="section-block reflection-block">
        <div class="section-label">问题思考：</div>
        <div class="reflection-grid">
          <article class="reflection-card"><span>1</span><p>这一课给你带来什么样的帮助？你有什么新的看见？请阐述。</p></article>
          <article class="reflection-card"><span>2</span><p>你还在纠结妈妈带来的伤害吗？你去运用这一课中建议的哪些步骤去解决这个伤害？</p></article>
          <article class="reflection-card"><span>3</span><p>其他男人怎么样才能帮助你呢？</p></article>
          <article class="reflection-card"><span>4</span><p>你要怎么帮助你的儿子开始和妈妈有一个健康的断开？</p></article>
        </div>
      </section>
    `;
  }

  if (chapter.n === 9) {
    return `
      <section class="section-block">
        <div class="section-label">I. 使男人一生得祝福和受激励的三个非常有意义的关系——</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">始终赏识你的良师</div></article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">与你肩并肩的朋友</div></article>
          <article class="concept-card"><div class="concept-step">C.</div><div class="concept-title">随时需要的保护者</div></article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">II. 孤独无友的伤痛的定义</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card">
            <div class="concept-step">A.</div>
            <div class="concept-title">缺乏健康和志同道合的男人朋友，导致人际、情感和精神的迷失，带来以下几种结果</div>
            ${nestedIdentityPoints([
              "1. 孤独和沮丧",
              "2. 愚蠢的行为和人生的盲点",
              "3. 目光短浅的男人意识",
            ])}
          </article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">III. 一个要点：每个男人都需要其他男人，并从中受益</div>
        <div class="concept-grid">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">没有朋友的美国男人</div></article>
          <article class="concept-card">
            <div class="concept-step">B.</div>
            <div class="concept-title">孤立无友的男人带来以下明显的不良后果</div>
            ${nestedIdentityPoints([
              "1. 对人生的扭曲观念",
              "2. 放纵无忌的生活",
              "3. 失去了追求人生崇高理想的动力",
              "4. 无法找到袒露真情的各种机会",
            ])}
          </article>
          <article class="concept-card">
            <div class="concept-step">C.</div>
            <div class="concept-title">圣经怎么回答以上问题：</div>
            <ul class="identity-points">
              <li>箴言书27:17</li>
              <li>箴言书18:24</li>
              <li>传道书4:9-10</li>
              <li>箴言书17:17</li>
              <li>希伯来书10:24</li>
              <li>撒母耳书20:17</li>
            </ul>
          </article>
          <article class="concept-card">
            <div class="concept-step">D.</div>
            <div class="concept-title">你能做什么</div>
            ${nestedIdentityPoints([
              "1. 学会建立友谊的3个关键因素",
              { text: "忠诚", className: "identity-points-subitem" },
              { text: "信实（对于我们的价值观）", className: "identity-points-subitem" },
              { text: "激励", className: "identity-points-subitem" },
              "2. 向朋友打开心扉",
              "3. 挑战你的好朋友，固定和你聚会，为了一起成长成熟起来",
              "4. 要对朋友真诚，与他分享你的内心",
              "5. 和朋友一起享受生活",
            ])}
          </article>
        </div>
      </section>
      <section class="section-block reflection-block">
        <div class="section-label">问题思考：</div>
        <div class="reflection-grid">
          <article class="reflection-card"><span>1</span><p>这课给你印象最深的是什么？请描述一下。</p></article>
          <article class="reflection-card"><span>2</span><p>现在是什么因素阻碍你与其他男人建立一个强有力的友谊关系？请描述一下。</p></article>
          <article class="reflection-card"><span>3</span><p>你当下会采取什么样的方法去交一个真正的朋友？请描述一下。请将这些揽括在你男人计划当中。</p></article>
        </div>
      </section>
    `;
  }

  if (chapter.n === 10) {
    return `
      <section class="section-block">
        <div class="section-label">I. 一位年长导师带来的巨大影响，让你惊讶和倍受鼓励</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">他的话带出你人生远景</div></article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">激励你成就人生大志</div></article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">II. 探讨“导师”的丰富内涵</div>
        <div class="concept-grid">
          <article class="concept-card">
            <div class="concept-step">A.</div>
            <div class="concept-title">从父亲到你？</div>
            <ul class="identity-points">
              <li>1. 父亲为你师表只是一个阶段。</li>
              <li>2. 其他男人各有所长，弥补父亲没有的。</li>
            </ul>
          </article>
          <article class="concept-card">
            <div class="concept-step">B.</div>
            <div class="concept-title">对导师的五个评述</div>
            <ul class="identity-points">
              <li>1. 他是你的支持者，而不是你的竞争者。</li>
              <li>2. 他是你热心的吹鼓手，而不是你的批评者。</li>
              <li>3. 他寻求鼓励你发展你的恩赐，并寻求保护你免犯带来巨大损失的错误。</li>
              <li>4. 他是你的欣赏者，以你为快乐，因为他本能的看到你的价值和尚待发挥的潜力。</li>
              <li>5. 他不必是你亲密朋友，但他是你可以倾诉心中一切的人。</li>
            </ul>
          </article>
          <article class="concept-card"><div class="concept-step">C.</div><div class="concept-title">为人师表和培训门徒分别在哪里？</div></article>
          <article class="concept-card">
            <div class="concept-step">D.</div>
            <div class="concept-title">导师带给你怎样的福祉</div>
            <ul class="identity-points">
              <li>1. 从丰富的人生经历中产生的智慧</li>
              <li>2. 给你及时的忠告</li>
              <li>3. 一个深深信赖你的人</li>
              <li>4. 一个称赞你并使你有成就的人</li>
              <li>5. 一个自己有建树的人，是你心目中的英雄。</li>
            </ul>
          </article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">III. 圣经有关导师和为人师表的例子很多</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">几个实例</div></article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">几个圣经的实例</div></article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">IV. 导师的十个特质</div>
        <div class="callout-card">（引自Dr. Howard Hendricks 的著作《铁磨铁的结果》，慕迪出版社，1995.）</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">他确实拥有你本人真正需要的东西</div></article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">他主动栽培与你的关系</div></article>
          <article class="concept-card"><div class="concept-step">C.</div><div class="concept-title">他愿意为你承担风险</div></article>
          <article class="concept-card"><div class="concept-step">D.</div><div class="concept-title">他是一位受到其他男人尊重的人</div></article>
          <article class="concept-card"><div class="concept-step">E.</div><div class="concept-title">他拥有丰富的资源网络</div></article>
          <article class="concept-card"><div class="concept-step">F.</div><div class="concept-title">他常常辅导他人</div></article>
          <article class="concept-card"><div class="concept-step">G.</div><div class="concept-title">他既是咨询者，又是聆听着。</div></article>
          <article class="concept-card"><div class="concept-step">H.</div><div class="concept-title">他待人接物持之以恒</div></article>
          <article class="concept-card"><div class="concept-step">I.</div><div class="concept-title">他能够分析并看到你需要的是什么</div></article>
          <article class="concept-card"><div class="concept-step">J.</div><div class="concept-title">他为你的利益着想</div></article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">V. 为人师表的影响</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card">
            <div class="concept-step">A.</div>
            <div class="concept-title">对导师</div>
            <ul class="identity-points">
              <li>1. 完成自已人生的重要一环</li>
              <li>2. 年长的人和年轻的人彼此联盟，带出一个互惠的积极关系。</li>
              <li>3. 自然的去引导学生，通过分享丰富经历，这都是学生非常需要和非常想要的。</li>
              <li>4. 给年长的人，在他后半生中，一个很有意义的目标。</li>
              <li>5. 弥补年长的人人生中的一个缺憾</li>
            </ul>
          </article>
          <article class="concept-card">
            <div class="concept-step">B.</div>
            <div class="concept-title">对学生</div>
            <ul class="identity-points">
              <li>1. 给他希望</li>
              <li>2. 给他智慧</li>
              <li>3. 给他一个伟大的人生远景</li>
              <li>4. 给他鼓励</li>
            </ul>
          </article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">VI. 怎么开始，如果你</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card">
            <div class="concept-step">A.</div>
            <div class="concept-title">想要作导师</div>
            <ul class="identity-points">
              <li>1. 数算一下你自己的特长和经验，来帮助一个年轻人的人生。这一点非常重要。</li>
              <li>2. 估计一下你能腾出的时间</li>
              <li>3. 祷告，然后选择一位年轻人，你想在一起并主动帮助的人。</li>
              <li>4. 如果双方有默契，主动建议在固定时间交往，直到你所保护的人得到他需要的。然后你就放手。</li>
            </ul>
          </article>
          <article class="concept-card">
            <div class="concept-step">B.</div>
            <div class="concept-title">想要但是还没有导师</div>
            <ul class="identity-points">
              <li>1. 祷告寻去智慧和引导</li>
              <li>2. 要敢于寻找和邀请吧</li>
              <li>3. 不要泄气，如果遭到谢绝。</li>
              <li>4. 召集几位长者 ，请一位长者带领我们。</li>
            </ul>
          </article>
        </div>
      </section>
      <section class="section-block reflection-block">
        <div class="section-label">问题思考</div>
        <div class="reflection-grid">
          <article class="reflection-card"><span>1</span><p>你一生中经历过的导师是哪一位？请解释。这些导师给你带来怎样的改变？请解释。</p></article>
          <article class="reflection-card"><span>2</span><p>你认为你自己现在是谁的导师？为什么是？为什么不是？</p></article>
          <article class="reflection-card"><span>3</span><p>在你身边有没有这样的男人你想请他们成为你的导师？是什么拦阻你不愿意请他们在你的生命中投资？</p></article>
          <article class="reflection-card"><span>4</span><p>你是否开始认识到在一个年轻人的生命中投资带来的巨大力量？请解释</p></article>
        </div>
      </section>
    `;
  }

  if (chapter.n === 11) {
    return `
      <section class="section-block">
        <div class="section-label">I. 后天（原生家庭）与先天（本性的）的心灵疮疤</div>
      </section>
      <section class="section-block">
        <div class="section-label">II. 事是而非的道理</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">我们迷失是因为自我否定</div></article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">我们迷失是别人的问题</div></article>
          <article class="concept-card"><div class="concept-step">C.</div><div class="concept-title">我们迷失因为缺少教育</div></article>
          <article class="concept-card"><div class="concept-step">D.</div><div class="concept-title">我们迷失因为基因缺陷</div></article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">III. 隐藏在所有的生活问题背后的真相</div>
        <div class="concept-grid">
          <article class="concept-card">
            <div class="concept-step">A.</div>
            <div class="concept-title">我们被生来就有的缺陷所诅咒</div>
            <ul class="identity-points">
              <li>1. 耶利米书17：9</li>
              <li>2. 传道书9：3</li>
            </ul>
          </article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">这个缺陷的定义：我们是有缺陷的堕落的生物并生来和造我们的主分离</div></article>
          <article class="concept-card">
            <div class="concept-step">C.</div>
            <div class="concept-title">理解败坏的意思：</div>
            <ul class="identity-points">
              <li>1. 我们和上帝分开并受他的审批</li>
              <li>2. 我们继承了任何人无法治愈的败坏的天性</li>
              <li>3. 我们并不解决这个问题，所以这个问题不可避免的导致我们的生活处于罪中</li>
            </ul>
          </article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">IV. 这个致命的缺陷的两个含义</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">这个败坏的缺陷需要只能由神来治愈</div></article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">承认这个缺陷是找到真正与神和好的第一步（不是由更多的宗教来取代）</div></article>
        </div>
      </section>
      <section class="section-block reflection-block">
        <div class="section-label">问题：</div>
        <div class="reflection-grid">
          <article class="reflection-card"><span>1</span><p>你认同今天关于人性的缺陷的见解吗？ 解释</p></article>
          <article class="reflection-card"><span>2</span><p>这个缺陷如何影响你的生活？</p></article>
          <article class="reflection-card"><span>3</span><p>你觉今天讲的那一点对你冲击最大？ 解释</p></article>
        </div>
      </section>
    `;
  }

  if (chapter.n === 12) {
    return `
      <section class="section-block">
        <div class="section-label">I. 有三个在男人生命中非常重要的关系——使男人得祝福和受激励</div>
        <div class="concept-grid">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">一个真诚的忏悔</div></article>
          <article class="concept-card">
            <div class="concept-step">B.</div>
            <div class="concept-title">心灵疮疤的定义：我们都是沉沦的和有瑕疵的被造物，我们的品性与造物主还有其它被造物都是不和谐的。</div>
            <ul class="identity-points">
              <li>1. 以弗所书2:3</li>
              <li>2. 罗马书3:10-12</li>
            </ul>
          </article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">II. 来自这个疮疤的不断痛苦</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">我们生来就与 神分离。</div><p>以弗所书2:12</p></article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">我们一生注定要徒劳无益。</div><p>传道书1:14</p></article>
          <article class="concept-card"><div class="concept-step">C.</div><div class="concept-title">我们被腐败堕落的本性所奴役。</div><p>约伯记5:7</p></article>
          <article class="concept-card"><div class="concept-step">D.</div><div class="concept-title">我们执意要行恶。</div><p>加拉太书5:19-21</p></article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">III. 这个疮疤带来社会的种种问题</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">在旧约中</div><p>何西亚书4:1-4,9:9</p></article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">在新约中</div><p>罗马书1:28-32</p></article>
          <article class="concept-card"><div class="concept-step">C.</div><div class="concept-title">在我们的生活岁月中</div></article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">IV. 被称为“败坏”的这个疮疤的种种含义</div>
        <div class="concept-grid">
          <article class="concept-card">
            <div class="concept-step">A.</div>
            <div class="concept-title">通常情况：</div>
            ${nestedIdentityPoints([
              "1. 败坏是我们生来就要偏离正道。",
              "2. 败坏多数是由于自己出了问题，而不是由于其他人或者事物。",
              { text: "创世纪3:9-13", className: "identity-points-subitem" },
              "3. 败坏是不可能因为好的教育，好的环境，自我意志力，或者理性而被根除。我们活在败坏之中，唯一得救的方法就是被拯救。",
              "4. 败坏可以用各种各样所谓圆滑世故的和诡辩的面具去隐藏自己。",
              { text: "教育的面具", className: "identity-points-subitem" },
              { text: "个性的面具", className: "identity-points-subitem" },
              { text: "循规蹈矩的面具", className: "identity-points-subitem" },
              { text: "宗教的面具", className: "identity-points-subitem" },
              { text: "马太福音23:25,27", className: "identity-points-subitem" },
              "5. 败坏意味着我们不能仅仅靠自己。",
              { text: "箴言书14:12", className: "identity-points-subitem" },
              "6. 为了寻找一个真正与神的关系，第一步就是要承认自己的败坏。",
              { text: "马太福音5:3", className: "identity-points-subitem" },
              "7. 一个真正男人的成长是从深度和广度两方面，越来越深的看到自己的败坏。",
              { text: "提摩太前书1:15", className: "identity-points-subitem" },
            ])}
          </article>
          <article class="concept-card">
            <div class="concept-step">B.</div>
            <div class="concept-title">男人的特殊情况：</div>
            ${nestedIdentityPoints([
              "1. 败坏是男人天生就倾向于逃避自己该承担的家庭责任。",
              "2. 败坏是男人天生就倾向于残酷地支配女人和孩子。",
              { text: "创世纪3:16", className: "identity-points-subitem" },
              { text: "以弗所书6:4", className: "identity-points-subitem" },
              "3. 败坏是男人乐于在职业生涯当中以及对于物质追求中迷失了自己，从而在生命中忽视了 神创造人的伟大目的。",
              { text: "传道书2:4-11", className: "identity-points-subitem" },
            ])}
          </article>
        </div>
      </section>
      <section class="section-block reflection-block">
        <div class="section-label">问题思考：</div>
        <div class="reflection-grid">
          <article class="reflection-card"><span>1</span><p>在7个对于败坏的通常含义中，你最认同哪几个？请阐述</p></article>
          <article class="reflection-card"><span>2</span><p>在3个对于败坏的男性的具体含义中，你最认同哪几个？请阐述</p></article>
          <article class="reflection-card"><span>3</span><p>在过去的两个课程学习中（心灵疮疤叫做败坏），有没有看见你自己的改变，或者生命的改变？请阐述。</p></article>
        </div>
      </section>
    `;
  }

  if (chapter.n === 13) {
    return `
      <section class="section-block">
        <div class="section-label">I. 两个重要的提醒</div>
        <div class="concept-grid">
          <article class="concept-card concept-card-readable"><div class="concept-step">A.</div><div class="concept-title">本节课是男人的第一部分的最后一节课。如果你错过了第一部分，我们欢迎你参加第二部分，因此欢迎你邀请你的朋友来。如果你是爸爸, 请将你的处在青少年期中儿子带来一起学习第二部分。我们强烈建议那些在校的初中生或高中生学习此部分，他们将从中受益。</div></article>
          <article class="concept-card concept-card-readable"><div class="concept-step">B.</div><div class="concept-title">请完成男人计划中的第一部分（第92页），你能否完成“回顾过去” 是很重要的，因为它涉及到你生命中一些尚未打开的伤害。我建议你用半天的时间仔细地去完成它，并且尽可能的开始去实施。我们已观察到一些人按照计划去做并取得巨大的进步，并且带动身边的人。</div></article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">II. 两点</div>
        <div class="concept-grid">
          <article class="concept-card">
            <div class="concept-step">A.</div>
            <div class="concept-title">从左边-----我的故事：</div>
            <ul class="identity-points">
              <li>1. 我知道不多，但我知道我已经迷失了</li>
              <li>2. 我没有太大的信心，但我所拥有的是耶稣</li>
              <li>3. 我不能改变外面的事情， 但我知道一些内在的东西能够改变</li>
            </ul>
          </article>
          <article class="concept-card">
            <div class="concept-step">B.</div>
            <div class="concept-title">从右边-----尼哥底母的故事</div>
            <p>有一个法利赛人，名叫尼哥底母，是犹太人的官。这人夜里来见耶稣，说，拉比，我们知道你是由神那里来作师傅的。因为你所行的神迹，若没有神同在，无人能行。耶稣回答说，我实实在在地告诉你，人若不重生，就不能见神的国。尼哥底母说，人已经老了，如何能重生呢？岂能再进母腹生出来吗？（约3：1-4）</p>
            <p>耶稣说，我实实在在地告诉你，人若不是从水和圣灵生的，就不能进神的国。从肉身生的，就是肉身。从灵生的，就是灵。我说，你们必须重生，你不要以为希奇。风随着意思吹，你听见风的响声，却不晓得从哪里来，往哪里去。凡从圣灵生的，也是如此。尼哥底母问他说，怎能有这事呢？耶稣回答说，你是以色列人的先生，还不明白这事吗？（约3：5-10）</p>
            <ul class="identity-points">
              <li>1. “从圣灵生的”（5、7节）：一个超自然的重生</li>
              <li>2. “必须”（7节）：无法替换的重生</li>
              <li>3. “你”（7节）： 一个人的重生</li>
            </ul>
          </article>
        </div>
      </section>
      <section class="section-block reflection-block">
        <div class="section-label">问题思考：</div>
        <div class="reflection-grid">
          <article class="reflection-card"><span>1</span><p>请解释你在你个人的属灵的哪个阶段？</p></article>
          <article class="reflection-card"><span>2</span><p>你相信你已经重生了吗？什么时候？</p></article>
          <article class="reflection-card"><span>3</span><p>如果你今天晚上死了，你能确信你能上天堂吗？为什么？</p></article>
        </div>
      </section>
    `;
  }

  if (chapter.n === 14) {
    return `
      <section class="section-block">
        <div class="section-label">I. 欢迎回来，也欢迎新人的加入</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">上半部分的弟兄团契主要注重回顾过去</div></article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">下半部分主要是关于理想和展望未来</div></article>
          <article class="concept-card"><div class="concept-step">C.</div><div class="concept-title">我们将继续去完成我们“成为一个真正男人的计划”（92页）</div></article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">II. 一个对最初的预想和承诺的回顾</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card">
            <div class="concept-step">A.</div>
            <div class="concept-title">预想</div>
            <ul class="identity-points">
              <li>1. 今天，男人处在一个混沌的状态</li>
              <li>2. 困惑的男人创造了主要的问题</li>
              <li>3. 困惑的男人满足于眼前的成果</li>
              <li>4. 今天，男人没有一个崇高的理想</li>
              <li>5. 圣经洞察了这一切并且有了一切的答案</li>
            </ul>
          </article>
          <article class="concept-card">
            <div class="concept-step">B.</div>
            <div class="concept-title">承诺</div>
            <ul class="identity-points">
              <li>1. 你将对真正男人有一个清晰的定义</li>
              <li>2. 你将对自己有一个重大的个人发现</li>
              <li>3. 你将交到新朋友</li>
              <li>4. 你将学习到新的男人语言</li>
              <li>5. 你将有个私人定制的计划去成为一个真正的男人</li>
            </ul>
          </article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">III. 复习一下之前学习的</div>
        <div class="concept-grid">
          <article class="concept-card">
            <div class="concept-step">A.</div>
            <div class="concept-title">弟兄团契的一开始我们学习如何打开男人所受的伤害的包裹</div>
            <ul class="identity-points">
              <li>1. 父亲不在的伤害</li>
              <li>2. 与母亲过度捆绑的伤害</li>
              <li>3. 孤独的伤害</li>
              <li>4. 心灵的伤害</li>
            </ul>
          </article>
          <article class="concept-card">
            <div class="concept-step">B.</div>
            <div class="concept-title">有两个方法每个男人可以忍受这些伤害：</div>
          </article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">1. 你能在你的伤痛中变顽固</div>
        <div class="concept-grid">
          <article class="concept-card concept-card-readable"><div class="concept-step">第一步</div><div class="concept-title">每个人的生命都是从没有神开始的。他的天性是自私是以自我为中心</div></article>
          <article class="concept-card concept-card-readable"><div class="concept-step">第二步</div><div class="concept-title">作为一个儿子，每个人都会多少经历一些伤痛在长大过程中</div></article>
          <article class="concept-card concept-card-readable"><div class="concept-step">第三步</div><div class="concept-title">作为一个年轻人，他以自私和受伤害的视野来构建一个男人。通常他会用这些伤痛去作为过度和邪恶行为的借口和驱动力</div></article>
          <article class="concept-card concept-card-readable"><div class="concept-step">第四步</div><div class="concept-title">一个男人，他通常被这些他不理解也不去检查的力量驱使。他把他的失败归咎于环境或者他人。这种生活的方式使他痛苦也使他周围的人痛苦</div></article>
          <article class="concept-card concept-card-readable"><div class="concept-step">第五步</div><div class="concept-title">有钱的人通常用钱去使他们不在这个痛苦中。其他男人则试图用毒品、酒精、色情、电视、风流、娱乐等等方式来逃避。两种人都持续地拒绝承认事实</div></article>
          <article class="concept-card concept-card-readable"><div class="concept-step">第六步</div><div class="concept-title">适时，自私和受伤的男人变得顽固。当一个男人越来越老，生命显得越来越小、空虚、世俗、痛苦或者狂妄</div></article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">2. 你也可以从你的伤痛中释放出来</div>
        <div class="concept-grid">
          <article class="concept-card concept-card-readable"><div class="concept-step">第一步</div><div class="concept-title">生命从没有神开始，天性是自私的</div></article>
          <article class="concept-card concept-card-readable"><div class="concept-step">第二步</div><div class="concept-title">作为一个儿子，经历一些伤痛</div></article>
          <article class="concept-card concept-card-readable"><div class="concept-step">第三步</div><div class="concept-title">作为一个年轻人，他以自私和受伤害的视野来构建一个男人</div></article>
          <article class="concept-card concept-card-readable"><div class="concept-step">第四步</div><div class="concept-title">一个男人，他通常被这些他不理解也不检查的力量驱使</div></article>
          <article class="concept-card concept-card-readable"><div class="concept-step">第五步</div><div class="concept-title">作为一个男人，用不健康的方式去躲避这些伤害</div></article>
          <article class="concept-card concept-card-readable"><div class="concept-step">第六步</div><div class="concept-title">自私和受伤的男人变得顽固</div></article>
          <article class="concept-card concept-card-readable">
            <div class="concept-step">真实的自己</div>
            <div class="concept-title">发现真实的自己，承认自己的自私和无神的天性；接受对生命和问题的责任；停止对其他人的责备；对过往生活的迷失和错误的选择感到苦恼</div>
            <p>路加福音 15:11-24</p>
          </article>
          <article class="concept-card concept-card-readable"><div class="concept-step">故事</div><div class="concept-title">真正男人的故事在信心中向耶稣基督寻求帮助</div></article>
          <article class="concept-card concept-card-readable"><div class="concept-step">新生命</div><div class="concept-title">约翰福音 3:3 重生；哥林多后书 5:17；和主基督一起追求一个新生命：希望、健康、开心</div></article>
        </div>
      </section>
      <section class="section-block reflection-block">
        <div class="section-label">小组讨论：</div>
        <div class="reflection-grid">
          <article class="reflection-card"><span>1</span><p>你已经制定了一个正确的处理这些过去伤痛的计划了吗？这些计划已经写在“如何成为一个真正男人”计划了吗？</p></article>
          <article class="reflection-card"><span>2</span><p>你今天学习的最触动你的是哪一部分？为什么？</p></article>
          <article class="reflection-card"><span>3</span><p>作为一个男人，什么东西是你最挣扎的而且希望在下半部分的学习中找到答案？</p></article>
        </div>
      </section>
    `;
  }

  if (chapter.n === 15) {
    return `
      <section class="section-block">
        <div class="section-label">I. 创世纪的“神话”</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">神话不是幻想的同义词</div></article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">真正的神话解释并且衡量现实</div></article>
          <article class="concept-card"><div class="concept-step">C.</div><div class="concept-title">创世纪的“神话”解释并且衡量男人，包括男人最初的理想状态和后来不断的沦落。</div></article>
          <article class="concept-card">
            <div class="concept-step">D.</div>
            <div class="concept-title">创世纪描写我们古代的根</div>
            <p>1－2－3   广角，拉近镜头，聚焦</p>
          </article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">II. 创世纪第一章里关于男人说了些什么</div>
        <div class="concept-grid">
          <article class="concept-card">
            <div class="concept-step">A.</div>
            <div class="concept-title">它讲述男人和女人的价值（创世纪1：26,27）</div>
            <ul class="identity-points">
              <li>1. 形象</li>
              <li>2. 同样的恩赐／同等价值</li>
              <li>3. 独特又特殊</li>
            </ul>
          </article>
          <article class="concept-card">
            <div class="concept-step">B.</div>
            <div class="concept-title">它讲述对于男人和女人的呼召（创世纪1：28）</div>
            <ul class="identity-points">
              <li>1. “要生养众多，遍满全地”</li>
              <li>2. 治理这地</li>
              <li>3. 管理世上的一切</li>
            </ul>
          </article>
          <article class="concept-card"><div class="concept-step">C.</div><div class="concept-title">它暗示了一个重要的社会结构（创世纪1：26－27； 5：2）</div></article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">III. 创世纪第二章关于男人讲述了什么</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">注意，亚当首先被造（2：7）</div></article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">注意，亚当在夏娃被造之前就被授予了职业和责任（2：15）</div></article>
          <article class="concept-card"><div class="concept-step">C.</div><div class="concept-title">注意，神教导亚当要用神的话来领导人（2：16－17）</div></article>
          <article class="concept-card"><div class="concept-step">D.</div><div class="concept-title">注意，亚当为动物起名，这显示了他的领导权（2：19）</div></article>
          <article class="concept-card"><div class="concept-step">E.</div><div class="concept-title">注意，亚当被赐予一个“配偶帮助他”，这进一步证明了神最初对于男人和女人的社会定位（2：18）</div></article>
        </div>
      </section>
      <section class="section-block reflection-block">
        <div class="section-label">问题思考：</div>
        <div class="reflection-grid">
          <article class="reflection-card"><span>1</span><p>今天你听到的最重要的真理是什么？</p></article>
          <article class="reflection-card"><span>2</span><p>今天这一课是怎样扩展了你对创世纪的理解？对男人的理解？请具体一些</p></article>
          <article class="reflection-card"><span>3</span><p>这些来自创世纪的信息如何用来定义男人？请解释</p></article>
        </div>
      </section>
    `;
  }

  if (chapter.n === 16) {
    return `
      <section class="section-block">
        <div class="section-label">I. 简单的回顾</div>
        <div class="callout-card">男人统治是个人道德上的失败，不是圣经的教导</div>
      </section>
      <section class="section-block">
        <div class="section-label">II. 创世纪第二章关于男人讲了什么（继续上周的课）</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">注意，亚当命名他的帮助者（2：23）</div></article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">注意，被神告知要离开并成立一个家的是男人 （2：24）</div></article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">III. 创世纪第三章关于男人讲了什么</div>
        <div class="concept-grid">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">注意，诱惑的目的是腐化和扭转神最初所定的社会和灵性秩序 （3： 1－6）</div></article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">注意，神让亚当，而不是女人，来承担第一次犯罪的责任（3： 8－9）</div></article>
          <article class="concept-card"><div class="concept-step">C.</div><div class="concept-title">注意，亚当的罪里包含一个不可接受的消极性（3： 11－12）</div></article>
          <article class="concept-card"><div class="concept-step">D.</div><div class="concept-title">注意，亚当受到诅咒是基于他违反了神创世所定的秩序（3： 17）</div><p>（夏娃受到诅咒也是基于她扭转了神创世所定的秩序）</p></article>
          <article class="concept-card"><div class="concept-step">E.</div><div class="concept-title">注意，亚当的罪释放出对于男人统治的破坏性诅咒（3： 16b）</div></article>
          <article class="concept-card"><div class="concept-step">F.</div><div class="concept-title">注意， 亚当死了（2： 16－17）。这种死亡审判也适用在所有他的后继者（罗马书5：19）。他，而不是夏娃，要对人类的堕落负责任。我们的人性来自于亚当的罪</div></article>
          <article class="concept-card"><div class="concept-step">G.</div><div class="concept-title">注意， 亚当为他的妻子起名体现了他在堕落之后仍然具有的领导权（3： 20）</div></article>
        </div>
      </section>
      <section class="section-block reflection-block">
        <div class="section-label">问题思考：</div>
        <div class="reflection-grid">
          <article class="reflection-card"><span>1</span><p>创世纪的故事使你作为男人有什么感触？请解释</p></article>
          <article class="reflection-card"><span>2</span><p>基于创世纪的真理你感到有什么增加的责任？请解释。</p></article>
          <article class="reflection-card"><span>3</span><p>你个人生活中有没有经历过亚当罪中的消极性？请解释。</p></article>
        </div>
      </section>
    `;
  }

  if (chapter.n === 18) {
    return `
      <section class="section-block">
        <div class="section-label">I. 简短的回顾：</div>
        <div class="concept-grid concept-grid-2">
          ${card("真正男人计划的样本", "(在领导的指南 CD-ROM)", { kicker: "A" })}
          ${card("男人领导的测试题", "（p.63）", { kicker: "B" })}
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">II. 亚当与基督之间的四个不同：</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">第一个亚当陷入被动当中；第二个亚当拒绝被动。</div></article>
          <article class="concept-card">
            <div class="concept-step">B.</div>
            <div class="concept-title">第一个亚当忽视他自己的责任；第二个亚当接受履行自己的责任。</div>
            <p class="concept-note">1. 他所接受的责任：</p>
            <ul class="identity-points">
              <li>有意志要服从。</li>
              <li>有工作要做</li>
              <li>有女人要爱</li>
            </ul>
            <p class="concept-note">2. 什么造成男人去担当社会和属灵的责任？</p>
            <ul class="identity-points">
              <li>当他从幼年就清晰他在社会和属灵上，他要承担有益于他人（像妻子, 孩子）的首要责任。</li>
              <li>当他从幼年被其他男人训练去认知和承担这些责任。</li>
              <li>当他担当这些责任时被尊敬，尤其是被其他男人尊敬。</li>
              <li>当他信靠耶稣在内心已经完成属灵的转变，去渴望为了荣耀神而担当这些责任。</li>
            </ul>
          </article>
          <article class="concept-card">
            <div class="concept-step">C.</div>
            <div class="concept-title">第一个亚当放弃了他的领导地位；第二个亚当选择去勇敢的领导。</div>
            ${nestedIdentityPoints([
              "1. 男人被造成为领导者， 但它需要勇敢的去完成。",
              "2. 耶稣领导亚当没有的完成",
              { text: "他设立方向", className: "identity-points-subitem" },
              { text: "他提供保护", className: "identity-points-subitem" },
              { text: "他要供养一家", className: "identity-points-subitem" },
              "3. 要成为勇敢的领导者，每个男人必须克服一个明显的障碍： 感觉",
            ])}
          </article>
          <article class="concept-card">
            <div class="concept-step">D.</div>
            <div class="concept-title">第一个亚当靠自己寻找更大的赏赐；第二个亚当期待更大的从神而来的赏赐。</div>
            <p class="concept-note">1. 第二个亚当活出来的例子：</p>
            <ul class="identity-points">
              <li>希伯来书 12:1,2 （耶稣）</li>
              <li>诗篇27:13 （大卫）</li>
              <li>希伯来书 11:24-26 （摩西）</li>
              <li>提摩太后书 4:7-8 (保罗)</li>
            </ul>
            <p class="concept-note">2. 第二个亚当活出来生命给我们的劝诫：</p>
            <ul class="identity-points">
              <li>提摩太前书 4:8</li>
              <li>希伯来书 11:6</li>
            </ul>
          </article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">III. 什么是圣经的角度真正男人的模型？</div>
        <div class="section-paragraph"><strong>一个真正男人是……</strong></div>
        <div class="man-model-list">
          <div class="man-model-row"><strong>拒绝被动</strong><span></span></div>
          <div class="man-model-row"><strong>接受责任</strong><span>（有意志要服从，有工作要做，有女人要爱）</span></div>
          <div class="man-model-row"><strong>勇敢的领导</strong><span></span></div>
          <div class="man-model-row"><strong>期待更大的赏赐</strong><span>从神而来的赏赐</span></div>
        </div>
      </section>
      <section class="section-block reflection-block">
        <div class="section-label">问题思考：</div>
        <div class="reflection-grid">
          <article class="reflection-card"><span>1</span><p>一起重温领导力的问题。</p></article>
          <article class="reflection-card"><span>2</span><p>回应今天所给出的男人的定义。 它可以在你的人生中被采纳吗？为什么可以或者为什么不可以？</p></article>
        </div>
      </section>
    `;
  }

  if (chapter.n === 19) {
    return `
      <section class="section-block">
        <div class="section-label">I. 丈夫或将要做丈夫的钥节</div>
        <div class="callout-card">(彼得前书3:7: 同样，你们做丈夫的，要按情理与妻子同住，将女性当做比较软弱的器皿而尊重她们，也当做是生命之恩的共同继承人。这样，你们的祷告就不会受拦阻。)</div>
        <div class="concept-grid concept-grid-2">
          ${card("“…在理解的方式”", "洞察力和技巧", { kicker: "A" })}
          ${card("“…授予她的荣誉”", "欣赏和价值", { kicker: "B" })}
          ${card("“…恩典生命中继承”", "平等和值得", { kicker: "C" })}
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">II. 婚姻的三种模式</div>
        ${marriageModelsSection()}
      </section>
      <section class="section-block">
        <div class="section-label">III. 近距离看看圣经的婚姻模式</div>
        <div class="concept-grid">
          <article class="concept-card">
            <div class="concept-step">A.</div>
            <div class="concept-title">圣经中的核心定义：</div>
            <p>“核心”的定义：经营成功的婚姻中的一个小而重要的成分，它是决不能妥协、忽视或忽略的。</p>
          </article>
          <article class="concept-card">
            <div class="concept-step">B.</div>
            <div class="concept-title">每个婚姻中的三个核心要素：</div>
            <ul class="identity-points">
              <li>1. 核心角色</li>
              <li>2. 核心关系</li>
              <li>3. 核心需求</li>
            </ul>
          </article>
          <article class="concept-card">
            <div class="concept-step">C.</div>
            <div class="concept-title">简短看看核心角色</div>
            ${nestedIdentityPoints([
              "1. 丈夫是头(路加22:25-27:耶稣说：外邦人有君王为主治理他们，那掌权管他们的称为恩主。但你们不可这样；你们里头为大的，倒要像年幼的；为首领的，倒要像服事人的。是谁为大﹖是坐席的呢﹖是服事人的呢﹖不是坐席的大吗﹖然而，我在你们中间如同服事人的。)",
              { text: "头=仆人式领导者", className: "identity-points-subitem" },
              "2. 妻子是帮助者(提多书2:4-5:好指教少年妇人，爱丈夫，爱儿女，谨守，贞洁，料理家务，待人有恩，顺服自己的丈夫，免得神的道理被毁谤。）",
              { text: "帮助者=仆人式爱人", className: "identity-points-subitem" },
            ])}
          </article>
        </div>
      </section>
      <section class="section-block reflection-block">
        <div class="section-label">问题思考：</div>
        <div class="reflection-grid">
          <article class="reflection-card"><span>1</span><p>你属于三种婚姻模式中哪一种？你妻子是什么意见？请解释。</p></article>
          <article class="reflection-card"><span>2</span><p>今天你通过这次课的学习，你有何新的发现？请解释。</p></article>
          <article class="reflection-card"><span>3</span><p>接下来的一周你如何使你的妻子或女朋友感觉到很重要、很光荣？试着做一点。</p></article>
        </div>
      </section>
    `;
  }

  if (chapter.n === 20) {
    return `
      <section class="section-block">
        <div class="section-label">I. 简短的回顾</div>
        <div class="concept-grid review-grid">
          ${card("我们的金句：", "彼得前书3:7: 同样，你们做丈夫的，要按情理与妻子同住，将女性当做比较软弱的器皿而尊重她们，也当做是生命之恩的共同继承人。这样，你们的祷告就不会受拦阻。", { kicker: "A" })}
          ${card("我们的三种婚姻模式", "", { kicker: "B", bullets: ["1. 上-下传统的婚姻模式", "2. 50/50相同的婚姻模式", "3. 并排的圣经的婚姻模式"] })}
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">II. 圣经的婚姻模式的核心需求</div>
        <div class="concept-grid">
          <article class="concept-card concept-card-full">
            <div class="concept-title">A. 核心角色</div>
            <p>核心角色…上帝赋予丈夫和妻子在婚姻中的角色</p>
            ${diagramFigure("assets/marriage-core-roles.svg", "丈夫和妻子的核心角色图")}
          </article>
          <article class="concept-card concept-card-full">
            <div class="concept-step">B</div>
            <div class="concept-title">核心关系</div>
            <p>核心关系…赋予你的伴侣的角色</p>
            ${diagramFigure("assets/marriage-core-relationship.svg", "妻子和丈夫之间的核心关系图")}
          </article>
          <article class="concept-card concept-card-full">
            <div class="concept-step">C</div>
            <div class="concept-title">核心需求</div>
            <p>核心需求…这是你伴侣的最深层地需要</p>
            ${diagramFigure("assets/marriage-core-needs.svg", "妻子和丈夫之间的核心需求关系图")}
          </article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">III. 我们为什么需要重点介绍“并排的圣经的婚姻模式”</div>
        <div style="min-height: 170px;"></div>
      </section>
      <section class="section-block reflection-block">
        <div class="section-label">问题思考：</div>
        <div class="reflection-grid">
          <article class="reflection-card"><span>1</span><p>今天你听到的，你认为哪一点是最重要的？请解释。</p></article>
          <article class="reflection-card"><span>2</span><p>请你给你自己在你符合妻子的核心需求上打分（1代表差，10代表很好）。</p></article>
          <article class="reflection-card reflection-subcard"><span>•</span><p>陪伴　得分　解释</p></article>
          <article class="reflection-card reflection-subcard"><span>•</span><p>安全　得分　解释</p></article>
          <article class="reflection-card reflection-subcard"><span>•</span><p>欣赏　得分　解释</p></article>
          <article class="reflection-card reflection-subcard"><span>•</span><p>情感需求　得分　解释</p></article>
          <article class="reflection-card"><span>3</span><p>接下来的一周你将做哪一点改进？请分享。</p></article>
        </div>
      </section>
    `;
  }

  if (chapter.n === 21) {
    return `
      <section class="section-block">
        <div class="section-label">I. 你的男人成长计划（….倒计时开始了）</div>
      </section>
      <section class="section-block">
        <div class="section-label">II. 婚姻在核心当中（…..一个简短的回顾）</div>
        <div class="concept-grid">
          <article class="concept-card">
            <div class="concept-step">A.</div>
            <div class="concept-title">两个平等但是不同的功能</div>
            <ul class="identity-points">
              <li>妻子/帮助者：一个关心和支持的养育者的角色</li>
              <li>丈夫/头    ：一个勇敢和责任的领导者的角色</li>
            </ul>
          </article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">摇动着的角色（Robert and William Hendricks, NavPress, 1991）</div></article>
          <article class="concept-card"><div class="concept-step">C.</div><div class="concept-title">头领=服侍者-领袖</div></article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">III. 25个方法成为一个服侍者-领袖</div>
        <div class="concept-grid concept-grid-2 leader-list">
          <article class="concept-card"><div class="concept-step">1.</div><div class="concept-title">一个服侍者-领袖与他的妻子有共同在可展望的未来。</div></article>
          <article class="concept-card"><div class="concept-step">2.</div><div class="concept-title">一个服侍者-领袖在家庭当中接受属灵（领导）的责任。</div></article>
          <article class="concept-card"><div class="concept-step">3.</div><div class="concept-title">一个服侍者-领袖在家庭当中要情愿的说我很抱歉和请原谅我。</div></article>
          <article class="concept-card"><div class="concept-step">4.</div><div class="concept-title">一个服侍者-领袖要和他的妻子讨论日常生活的责任并且公平的分配。</div></article>
          <article class="concept-card"><div class="concept-step">5.</div><div class="concept-title">一个服侍者-领袖在所有的主要的家庭财政决策上要寻求妻子的建议。</div></article>
          <article class="concept-card"><div class="concept-step">6.</div><div class="concept-title">一个服侍者-领袖要落实他向妻子所许下的承诺。</div></article>
          <article class="concept-card"><div class="concept-step">7.</div><div class="concept-title">一个服侍者-领袖要提前预知他的婚姻要度过的不同阶段。</div></article>
          <article class="concept-card"><div class="concept-step">8.</div><div class="concept-title">一个服侍者-领袖要过早预知他的孩子们要度过的人生不同阶段。</div></article>
          <article class="concept-card"><div class="concept-step">9.</div><div class="concept-title">一个服侍者-领袖多多的告诉他的妻子他喜欢的地方。</div></article>
          <article class="concept-card"><div class="concept-step">10.</div><div class="concept-title">一个服侍者-领袖要在财政上提供家庭生活基本开销。</div></article>
          <article class="concept-card"><div class="concept-step">11.</div><div class="concept-title">一个服侍者-领袖负责家庭的娱乐使他能够和妻子和家庭有足够的交流谈话。</div></article>
          <article class="concept-card"><div class="concept-step">12.</div><div class="concept-title">一个服侍者-领袖要和他的妻子为日常基本属灵原则一起祷告。</div></article>
          <article class="concept-card"><div class="concept-step">13.</div><div class="concept-title">一个服侍者-领袖要建立有意义的家庭传统。</div></article>
          <article class="concept-card"><div class="concept-step">14.</div><div class="concept-title">一个服侍者-领袖要为家庭在基本生活上计划有趣的远游。</div></article>
          <article class="concept-card"><div class="concept-step">15.</div><div class="concept-title">一个服侍者-领袖要在他的儿女成长的实践指导上花费时间， 以至于他们能够在同辈人当中建立自信。</div></article>
          <article class="concept-card"><div class="concept-step">16.</div><div class="concept-title">一个服侍者-领袖要管理家庭的时间表并且预知任何（生活，属灵的挑战）压力的来源。</div></article>
          <article class="concept-card"><div class="concept-step">17.</div><div class="concept-title">一个服侍者-领袖要保证他的家庭有健全的财政收入并远离有伤害的负债。</div></article>
          <article class="concept-card"><div class="concept-step">18.</div><div class="concept-title">一个服侍者-领袖要确保他和她的妻子已经坚定一个意志并且为孩子准备了一个规划周详的计划以防不测（死亡）。</div></article>
          <article class="concept-card"><div class="concept-step">19.</div><div class="concept-title">一个服侍者-领袖要让他的妻子和孩子进入他的生命的深处（内部）。</div></article>
          <article class="concept-card"><div class="concept-step">20.</div><div class="concept-title">一个服侍者-领袖要在公共场合褒扬她的妻子。</div></article>
          <article class="concept-card"><div class="concept-step">21.</div><div class="concept-title">一个服侍者-领袖要给他们每一个子女从正规全面的角度解释性。</div></article>
          <article class="concept-card"><div class="concept-step">22.</div><div class="concept-title">一个服侍者-领袖要鼓励他的妻子（共同彼此）成长如一人。</div></article>
          <article class="concept-card"><div class="concept-step">23.</div><div class="concept-title">一个服侍者-领袖要承担起带领妻子建立有属灵支持的家庭的价值观的责任。</div></article>
          <article class="concept-card"><div class="concept-step">24.</div><div class="concept-title">一个服侍者-领袖要参加委身于一个治理与提高男人， 丈夫， 父亲的技能的弟兄小组。</div></article>
          <article class="concept-card"><div class="concept-step">25.</div><div class="concept-title">一个服侍者-领袖要为妻子贡献时间在她的个人益处上讨她的喜欢。</div></article>
        </div>
      </section>
      <section class="section-block reflection-block">
        <div class="section-label">问题思考：</div>
        <div class="reflection-grid">
          <article class="reflection-card"><span>1</span><p>回顾所列的“25个方法成为一个服侍者-领袖”， 哪一个或者两个方法显明出来成为你今天“须要行动”来提高你的领导力的？请解释。</p></article>
          <article class="reflection-card"><span>2</span><p>以上列举的25项最震惊你的是什么？为什么？</p></article>
          <article class="reflection-card"><span>3</span><p>在这25项当中哪些是你妻子最需要从你那里得到的（或者说希望改变的）？为什么？</p></article>
        </div>
      </section>
    `;
  }

  if (chapter.n === 22) {
    return `
      <section class="section-block">
        <div class="section-label">I. 父亲的能力</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card">
            <div class="concept-step">A.</div>
            <div class="concept-title">教育子女的三种情况</div>
            <ul class="identity-points">
              <li>1. 父亲缺席的育儿方式</li>
              <li>2. 积极参与的育儿方式</li>
              <li>3. 富有策略的育儿方式</li>
            </ul>
          </article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">父亲就是命运</div><p>箴言17:6 父亲是儿女的荣耀</p></article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">II. 富有策略的育儿方式的三个成分</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">垫球（救球）: 父亲让人顺服的性格</div></article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">传球：父亲清晰的教导</div></article>
          <article class="concept-card"><div class="concept-step">C.</div><div class="concept-title">扣杀：父亲富有创意的仪式</div></article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">III. 富有能力的仪式的五个特点</div>
        <div class="concept-grid">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">让人纪念的仪式是要付出高价的</div></article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">让人纪念的仪式归因于被庆祝的人的价值</div></article>
          <article class="concept-card"><div class="concept-step">C.</div><div class="concept-title">让人纪念的仪式使用符号</div></article>
          <article class="concept-card"><div class="concept-step">D.</div><div class="concept-title">让人纪念的仪式涉及其他人，其对被庆祝的人有很深意义</div></article>
          <article class="concept-card"><div class="concept-step">E.</div><div class="concept-title">让人纪念的仪式给生活赋予了意象</div></article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">IV. 我所使用过的仪式</div>
        <div class="concept-grid">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">我的故事</div></article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">骑士模式</div></article>
          <article class="concept-card">
            <div class="concept-step">C.</div>
            <div class="concept-title">四个仪式</div>
            ${nestedIdentityPoints([
              "1. 骑士侍童仪式",
              { text: "杜布逊博士的讲道磁带", className: "identity-points-subitem" },
              { text: "男人的定义", className: "identity-points-subitem" },
              { text: "纪念的标记", className: "identity-points-subitem" },
              { text: "仪式祷告", className: "identity-points-subitem" },
              "2. 骑士扈从离家仪式",
              { text: "父亲们的集会", className: "identity-points-subitem" },
              { text: "徽标的解释", className: "identity-points-subitem" },
              { text: "家人们相互的祷告", className: "identity-points-subitem" },
              "3. 骑士授予大学毕业仪式",
              { text: "男人们的集会", className: "identity-points-subitem" },
              { text: "智慧的言语", className: "identity-points-subitem" },
              { text: "戒指和成年礼", className: "identity-points-subitem" },
              { text: "欢迎加入圆桌骑士", className: "identity-points-subitem" },
              "4. 婚礼般的正式宣誓",
              { text: "排练", className: "identity-points-subitem" },
              { text: "来自于父亲们的挑战---一生的勇气", className: "identity-points-subitem" },
              { text: "徽标的授予", className: "identity-points-subitem" },
            ])}
          </article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">V. 每一个儿子都需要赋予进入成年男人礼仪</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">请带着创造性</div></article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">你的儿子一定会喜欢</div></article>
        </div>
      </section>
      <section class="section-block reflection-block">
        <div class="section-label">问题思考：</div>
        <div class="reflection-grid">
          <article class="reflection-card"><span>1</span><p>你今天听到的最令你兴奋的部分是？ 请解释</p></article>
          <article class="reflection-card"><span>2</span><p>你是如何帮助你的儿子衡量自己的成长？请解释</p></article>
          <article class="reflection-card"><span>3</span><p>你会如何引导你的儿子走向成年？请把这个包括在你的男人计划中！</p></article>
        </div>
      </section>
    `;
  }

  if (chapter.n === 23) {
    return `
      <section class="section-block">
        <div class="section-label">* 下周: 你的男人计划将在小组里被展示，并被交给你的导师。</div>
      </section>
      <section class="section-block">
        <div class="section-label">I. 女儿们面对的三个挑战和“新女性气质”的介绍</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card"><div class="concept-step">A.</div><div class="concept-title">需要拥有一个新的最高追求的挑战</div></article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">传统的女性价值观逐渐衰退的挑战</div></article>
          <article class="concept-card"><div class="concept-step">C.</div><div class="concept-title">母亲缺失的现象逐渐增多的挑战</div></article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">II. 父亲对女儿有什么影响</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card">
            <div class="concept-step">A.</div>
            <div class="concept-title">如果父亲的角色完整</div>
            <ul class="identity-points">
              <li>1. 她们对自己作为女人拥有非常有安全感的自我认知</li>
              <li>2. 她们很容易与异性产生共鸣或认同感</li>
              <li>3. 她们经常和丈夫有非常令人满意的性生活</li>
            </ul>
          </article>
          <article class="concept-card">
            <div class="concept-step">B.</div>
            <div class="concept-title">如果父亲的角色缺失</div>
            <ul class="identity-points">
              <li>1. 她们会产生缺乏安全感、焦虑的性格，并很难与男性建立健康的关系。</li>
              <li>2. 或者……她们会变得自作主张、愤怒、在性的方面随意放荡。</li>
            </ul>
          </article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">III. 在实践上，父亲可以为女儿做些什么</div>
        <div class="concept-grid">
          <article class="concept-card">
            <div class="concept-step">A.</div>
            <div class="concept-title">与妻子一起为女儿建立一个有关什么是真正的女人的清晰定义</div>
            <p>一个真正的女人是：</p>
            <ul class="identity-points">
              <li>拒绝世界上威胁女性重要性的诱惑</li>
              <li>相信上帝赋予的男女权柄的优先原则</li>
              <li>养育下一代</li>
              <li>追求来自上帝的更大的奖赏</li>
            </ul>
          </article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">帮助孩子的母亲，让她能在家里陪伴孩子，尤其是在他们性格成型的关键时期。</div></article>
          <article class="concept-card"><div class="concept-step">C.</div><div class="concept-title">支持、尊重和鼓励妻子和女儿所拥有的真正的女性价值观</div></article>
          <article class="concept-card"><div class="concept-step">D.</div><div class="concept-title">与女儿有交流并且在个人层面上一直融入她们的生活</div></article>
          <article class="concept-card">
            <div class="concept-step">E.</div>
            <div class="concept-title">鼓励并参加庆祝女儿走向真正的女人的相关庆典</div>
            <ul class="identity-points">
              <li>1. 在青春期</li>
              <li>2. 即将离家时</li>
              <li>3. 从大学毕业时</li>
              <li>4. 步入婚姻时</li>
            </ul>
          </article>
        </div>
      </section>
      <section class="section-block reflection-block">
        <div class="section-label">小组讨论问题：</div>
        <div class="reflection-grid">
          <article class="reflection-card"><span>1</span><p>你是否有女儿？你听到的有关今天的年轻女孩的最重要的事情是什么？</p></article>
          <article class="reflection-card"><span>2</span><p>请阐述并解释。</p></article>
          <article class="reflection-card"><span>3</span><p>请对“真正的女人”的定义做一个回应。你会如何定义一个真正的女人？</p></article>
          <article class="reflection-card"><span>4</span><p>作为一个父亲，你现在会在和女儿的关系上采取哪一种实际行动？请解释。</p></article>
          <article class="reflection-card"><span>5</span><p>你的更长期的行动计划是什么？可以写在你的男人计划里。</p></article>
        </div>
      </section>
    `;
  }

  if (chapter.n === 24) {
    return `
      <section class="section-block">
        <div class="section-label">I. 要看大景象</div>
      </section>
      <section class="section-block">
        <div class="section-label">II. 生命循环图</div>
        ${lifeCycleSection()}
      </section>
      <section class="section-block">
        <div class="section-label">III. 生命阶段图</div>
        ${lifeStagesSection()}
      </section>
      <section class="section-block">
        <div class="section-label">IV. 你的男人计划图</div>
      </section>
      <section class="section-block reflection-block">
        <div class="section-label">小组讨论问题</div>
        <div class="reflection-grid">
          <article class="reflection-card"><span>1</span><p>彼此分享你的男人计划</p></article>
          <article class="reflection-card"><span>2</span><p>你计划中最重要的是哪一部分？</p></article>
          <article class="reflection-card"><span>3</span><p>最令人激动的是哪一部分？请解释</p></article>
          <article class="reflection-card"><span>4</span><p>记着今天交上你的男人计划</p></article>
          <article class="reflection-card"><span>5</span><p>记着在计划上写上你的名字</p></article>
        </div>
      </section>
    `;
  }

  if (chapter.n === 5) {
    return `
      <section class="section-block">
        <div class="section-label">I. 简单介绍</div>
        ${fatherMemoryStatsTable()}
        <p class="section-paragraph">箴言17：6：父亲是儿子的荣耀。</p>
      </section>
      <section class="section-block">
        <div class="section-label">II. 父亲不在的伤害</div>
        <div class="concept-grid">
          <article class="concept-card">
            <div class="concept-step">A.</div>
            <div class="concept-title">定义：</div>
            <p>一种连续地情感、社会或精神上的贫乏，由于要获得与父亲有良好的关系现在只能通过其他方法获得。</p>
          </article>
          <article class="concept-card">
            <div class="concept-step">B.</div>
            <div class="concept-title">三个词形容你对你父亲的记忆：</div>
          </article>
          <article class="concept-card">
            <div class="concept-step">C.</div>
            <div class="concept-title">由父亲不在的伤害所造成的结果：</div>
            <ul class="identity-points">
              <li>1. 愤怒与痛苦</li>
              <li>2. 极端的行为、成瘾与困扰</li>
              <li>3. 内心空虚</li>
              <li>4. 同性恋</li>
            </ul>
          </article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">III. 每个儿子都想从父亲那儿得到的几个方面</div>
        <div class="needs-grid">
          <article class="need-card"><strong>A.</strong><span>共同的相处时间</span></article>
          <article class="need-card"><strong>B.</strong><span>生活的技能</span></article>
          <article class="need-card"><strong>C.</strong><span>对疑惑问题的直接回答</span></article>
          <article class="need-card"><strong>D.</strong><span>通过榜样树立起的坚定信念</span></article>
          <article class="need-card"><strong>E.</strong><span>父亲的心：我爱你/我以你而自豪/你做得真好</span></article>
        </div>
      </section>
      <section class="section-block reflection-block">
        <div class="section-label">问题思考：</div>
        <div class="reflection-grid">
          <article class="reflection-card"><span>1</span><p>用三个词形容你对你父亲的记忆？</p></article>
          <article class="reflection-card"><span>2</span><p>对于由父亲不在的伤害所造成的四个结果，如果你有的话，应该是哪一条，为什么？</p></article>
          <article class="reflection-card"><span>3</span><p>如果你能向你的父亲要求一件事并且能得到的，那是什么，请解释？</p></article>
        </div>
      </section>
    `;
  }

  if (chapter.n === 6) {
    return `
      <section class="section-block">
        <div class="section-label">I. 总结—我们在哪儿</div>
        <div class="concept-grid concept-grid-2">
          <article class="concept-card">
            <div class="concept-step">A.</div>
            <div class="concept-title">我们正在寻求造成我们现在的原因</div>
            <ul class="identity-points">
              <li>1. 我们每个人都有自己的故事</li>
              <li>2. 在一定的程度上，我们每个人是过去的产物</li>
              <li>3. 在一些方面，我们每个人被过去所控制，知道某一天我们需要迫切想脱离这种控制</li>
            </ul>
          </article>
          <article class="concept-card">
            <div class="concept-step">B.</div>
            <div class="concept-title">我们会展开五个塑造我们最主要伤害中的第一个</div>
          </article>
          <article class="concept-card">
            <div class="concept-step">C.</div>
            <div class="concept-title">在失控的今天这种伤害造成与儿子间的冲突</div>
          </article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">II. 八个对父亲不在的伤害的改善</div>
        <div class="subsection"><h4>A. 如果你已作了父亲，请让你儿子具有以下两个方面：</h4></div>
        ${fatherWoundTwoAspectsTable()}
        <div class="concept-grid concept-grid-2">
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">如果你已作了父亲，不管你年纪有多大，缩小与你儿子间的代沟是永远不会太迟的。</div></article>
          <article class="concept-card"><div class="concept-step">C.</div><div class="concept-title">如果你是单亲爸爸，或许由于离婚的原因与你儿子分开，还是由于再婚有一个继养的儿子，你要通过学习获得帮助与智慧</div></article>
          <article class="concept-card">
            <div class="concept-step">D.</div>
            <div class="concept-title">如果你已被你父亲所伤害，建议采取以下方法：</div>
            <ul class="identity-points">
              <li>选择忘记</li>
              <li>选择相信上帝的公义</li>
            </ul>
          </article>
          <article class="concept-card">
            <div class="concept-step">E.</div>
            <div class="concept-title">如果你已被你父亲所伤害，你也可以主动寻求与你父亲和好：</div>
            <ul class="identity-points">
              <li>也许由于你父亲的缺点或短处造成你们间的裂缝，请不要让它阻止你主动寻求和好</li>
              <li>也许由于你和你父亲间的过去冲突造成你们间的裂缝，你需要清理干净</li>
            </ul>
          </article>
          <article class="concept-card"><div class="concept-step">F.</div><div class="concept-title">如果你已被你父亲所伤害，你也可以直接去问你父亲：“你爱我吗？”</div></article>
          <article class="concept-card"><div class="concept-step">G.</div><div class="concept-title">如果你已被你父亲所伤害，你也可以寻求你父亲的祝福。</div></article>
          <article class="concept-card"><div class="concept-step">H.</div><div class="concept-title">如果你已被你父亲所伤害，你也可以矫正你曾经错过与你儿子间的良好父子关系。</div></article>
          <article class="concept-card concept-card-full"><div class="concept-title">父亲的心：我爱你/我以你而自豪/你做得真好</div></article>
        </div>
      </section>
      <section class="section-block reflection-block">
        <div class="section-label">问题思考：</div>
        <div class="reflection-grid">
          <article class="reflection-card"><span>1</span><p>如果你对你对你的认识负责，你有没有原谅你的父亲？如果你们能坐下来且你能向你父亲敞开心扉，那你要向他说什么？</p></article>
          <article class="reflection-card"><span>2</span><p>根据上面的所提及的八点，你认为当务之急可以做的是哪一条，请解释？</p></article>
          <article class="reflection-card"><span>3</span><p>你想你的孩子现在最需要从你得到是什么？你想哪些你正在做的或还没做的事情会造成他们以后人生当中的伤害？</p></article>
        </div>
      </section>
    `;
  }

  if (chapter.n === 17) {
    return `
      <section class="section-block">
        <div class="section-label">I. 创世纪的最终思考</div>
        <div class="concept-grid concept-grid-stack">
          <article class="concept-card">
            <div class="concept-step">A.</div>
            <div class="concept-title">要点回顾：</div>
            ${nestedIdentityPoints([
              "1. 男人被上帝所创造的目的是为了成为社会和属灵的领导者。",
              { text: "当男人放弃这些追求或者这些追求被剥夺，就会导致混乱。", className: "identity-points-subitem" },
              { text: "让我们参考圣经….以赛亚书3:1-12", className: "identity-points-subitem" },
              { text: "而我们看到当今……", className: "identity-points-subitem" },
              { text: "1) 男人变得更迷茫，没有方向，苦恼。", className: "identity-points-subitem" },
              { text: "2) 女人要忍受更多并且一定要为她们的平等地位和该得的保护而奋斗。", className: "identity-points-subitem" },
              { text: "3) 家庭生活受到影响；孩子被伤害。", className: "identity-points-subitem" },
              { text: "4) 社会被各种问题困扰。", className: "identity-points-subitem" },
              "2. 圣经当中男性的领导地位不是自然的（身体力量），而是带有特殊责任超自然的。",
              { text: "培养自己的意志要服从", className: "identity-points-subitem" },
              { text: "找到自己的工作要做好", className: "identity-points-subitem" },
              { text: "追求一个女人要爱好和照顾好", className: "identity-points-subitem" },
            ])}
          </article>
          <article class="concept-card">
            <div class="concept-step">B.</div>
            <div class="concept-title">反对男性领袖地位的主要异议</div>
            <ul class="identity-points">
              <li>1. 男性的领导地位是文化的产物， 而非创造的意图。</li>
              <li>2. 男性的领导地位是人类沉沦的结果， 而不是上帝设计的结果。（加拉太书3:28）</li>
            </ul>
          </article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">II. 两个男人/两种男性身份</div>
        <div class="concept-grid">
          <article class="concept-card">
            <div class="concept-step">A.</div>
            <div class="concept-title">亚当和耶稣基督 （哥林多前书 15:45-49）</div>
            <p>亚当和耶稣是站在两个世界的入口处的关键性的人物，两个创造，一新一旧。。。在他们的行动和命运里，产生了所有归属于他们的所有抉择，因为所有的男人都可以借助他们来理解。引自神学家Herman RIdderbos</p>
          </article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">这两个男人是所有人类当中两种明显不同的属灵命运的领导者。（罗马书5:17-19）</div></article>
          <article class="concept-card">
            <div class="concept-step">C.</div>
            <div class="concept-title">这两个男人也是两种不同男性命运特征的领导者</div>
            ${nestedIdentityPoints([
              "1. 第一个亚当所代表的男人….",
              { text: "开始一个（属地的）自然地行程。", className: "identity-points-subitem" },
              { text: "取决于个人的天性，人类的理智，和反应（被动的）…而不是启示（上帝的旨意）。", className: "identity-points-subitem" },
              { text: "从其他人获取生命", className: "identity-points-subitem" },
              { text: "没有超然的生命意义。", className: "identity-points-subitem" },
              { text: "一个活着的魂 “….再没有其他。”", className: "identity-points-subitem" },
              "2. 第二个亚当所代表的男人…",
              { text: "开始了一个天国的行程。", className: "identity-points-subitem" },
              { text: "服从启示（天父的旨意）……不服从个人的天性，人类的理智和反应。", className: "identity-points-subitem" },
              { text: "鼓励加添力量给其他人", className: "identity-points-subitem" },
              { text: "有完全的超自然（属神的）生命意义。", className: "identity-points-subitem" },
              { text: "一个赐生命的灵", className: "identity-points-subitem" },
            ])}
          </article>
          <article class="concept-card">
            <div class="concept-step">D.</div>
            <div class="concept-title">这两个男性定位代表实际的表现：</div>
            <p>亚当的男人性变成常规的（属世界）男人。关注在：</p>
            <ul class="identity-points">
              <li>1. 看重男人做事</li>
              <li>2. 与其他男人竞争</li>
              <li>3. 暂时的权能</li>
              <li>4. 个人的奖赏</li>
              <li>5. 自己</li>
              <li>6. 成功</li>
            </ul>
            <p>耶稣的男人性是真正的（属天）男人。关注在：</p>
            <ul class="identity-points">
              <li>1. 看重男人人品</li>
              <li>2. 与其他男人共享</li>
              <li>3. 超越的权能</li>
              <li>4. 永恒的奖赏</li>
              <li>5. 其他人</li>
              <li>6. 意义</li>
            </ul>
          </article>
        </div>
      </section>
      <section class="section-block">
        <div class="section-label">III. 定义亚当与耶稣之间的不同</div>
        <div class="concept-grid concept-grid-stack">
          <article class="concept-card">
            <div class="concept-step">A.</div>
            <div class="concept-title">第一个亚当陷入完全的被动性当中；第二个亚当（基督）拒绝被动。</div>
            <ul class="identity-points">
              <li>1. 创世纪3:6</li>
              <li>2. 腓力比书 2:6-8</li>
            </ul>
          </article>
          <article class="concept-card"><div class="concept-step">B.</div><div class="concept-title">真正的男人拒绝社会和属灵的被动</div></article>
        </div>
      </section>
      <section class="section-block reflection-block">
        <div class="section-label">问题思考：</div>
        <div class="reflection-grid">
          <article class="reflection-card"><span>1</span><p>你今天听到的最重要的信息是什么？请解释。</p></article>
          <article class="reflection-card"><span>2</span><p>关于第一个和第二个亚当的讨论怎样帮助你更清晰的看到你自己的男人形象？请解释。</p></article>
        </div>
      </section>
    `;
  }

  return null;
}

function getChapterMarkup(chapter) {
  const specialMarkup = renderSpecialLesson(chapter);
  if (specialMarkup) {
    return specialMarkup;
  }

  if (chapter.contentHtml) {
    return chapter.contentHtml;
  }

  return "";
}

function renderCatalog() {
  catalogList.innerHTML = "";
  chapters.forEach((chapter, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `catalog-item ${index === currentIndex ? "active" : ""}`;
    button.innerHTML = `
      <span class="catalog-num">${chapter.type === "intro" ? "首页" : `第 ${chapter.n} 课`}</span>
      <strong>${chapter.title}</strong>
    `;
    button.addEventListener("click", () => {
      goTo(index);
      closeCatalog();
    });
    catalogList.appendChild(button);
  });
}

function openCatalog() {
  renderCatalog();
  catalogModal.classList.remove("hidden");
  catalogModal.setAttribute("aria-hidden", "false");
}

function closeCatalog() {
  catalogModal.classList.add("hidden");
  catalogModal.setAttribute("aria-hidden", "true");
}

function render({ animate = false } = {}) {
  const chapter = chapters[currentIndex];
  fitSiteTitle();
  titleEl.textContent = chapter.title;
  metaEl.textContent = chapter.meta;
  metaEl.classList.toggle("hidden", !chapter.meta);
  badgeEl.textContent = chapter.type === "intro" ? "首页" : `第 ${chapter.n} 课`;
  progressTextEl.textContent = `${currentIndex + 1} / ${chapters.length}`;
  progressFillEl.style.width = `${(currentIndex + 1) / chapters.length * 100}%`;
  window.menVideoPlayer?.renderLessonVideo(chapter.type === "lesson" ? chapter.n : null);
  bodyEl.innerHTML = getChapterMarkup(chapter);
  bodyEl.querySelectorAll("[data-jump]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = Number(link.dataset.jump);
      if (!Number.isNaN(target)) {
        goTo(target);
      }
    });
  });
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === chapters.length - 1;
  prevBtn.setAttribute("aria-label", currentIndex === 0 ? "已经是第一页" : "上一页");
  prevBtn.title = currentIndex === 0 ? "已经是第一页" : "上一页";
  nextBtn.setAttribute("aria-label", currentIndex === chapters.length - 1 ? "已经到底了" : "下一页");
  nextBtn.title = currentIndex === chapters.length - 1 ? "已经到底了" : "下一页";
  renderCatalog();

  if (animate) {
    cardEl.classList.add("is-swap");
    window.setTimeout(() => cardEl.classList.remove("is-swap"), 180);
  }
}

function goTo(index, options = {}) {
  const nextIndex = Math.max(0, Math.min(chapters.length - 1, index));
  if (nextIndex === currentIndex && !options.force) return;
  currentIndex = nextIndex;
  render({ animate: options.animate !== false });
  syncShareUrl();
}

prevBtn.addEventListener("click", () => goTo(currentIndex - 1));
nextBtn.addEventListener("click", () => goTo(currentIndex + 1));
fontDecBtn.addEventListener("click", () => {
  readerScale -= READER_SCALE_STEP;
  applyReaderScale();
});
fontIncBtn.addEventListener("click", () => {
  readerScale += READER_SCALE_STEP;
  applyReaderScale();
});
catalogBtn.addEventListener("click", openCatalog);
shareBtn?.addEventListener("click", () => {
  void shareCurrentPage();
});
catalogBackdrop.addEventListener("click", closeCatalog);
catalogClose.addEventListener("click", closeCatalog);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeCatalog();
});

window.addEventListener("resize", fitSiteTitle);
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(fitSiteTitle);
}

let touchStartX = null;
let touchStartY = null;

cardEl.addEventListener("pointerdown", (event) => {
  touchStartX = event.clientX;
  touchStartY = event.clientY;
});

cardEl.addEventListener("pointerup", (event) => {
  if (touchStartX == null || touchStartY == null) return;
  const dx = event.clientX - touchStartX;
  const dy = event.clientY - touchStartY;
  if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) {
    if (dx < 0) {
      goTo(currentIndex + 1);
    } else {
      goTo(currentIndex - 1);
    }
  }
  touchStartX = null;
  touchStartY = null;
});

cardEl.addEventListener("pointercancel", () => {
  touchStartX = null;
  touchStartY = null;
});

currentIndex = lessonIndexFromUrl();
applyReaderScale();
render({ animate: false });
syncShareUrl();
