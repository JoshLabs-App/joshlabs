// 游戏引擎：状态机 + 渲染 + 回忆闪回复习逻辑

const SAVE_KEY = "eng-rpg-london-day1";

const el = {
  scenePanel: document.querySelector(".scene-panel"),
  sceneTitle: document.getElementById("scene-title"),
  sceneSubtitle: document.getElementById("scene-subtitle"),
  avatar: document.getElementById("avatar"),
  npcEn: document.getElementById("npc-en"),
  npcZh: document.getElementById("npc-zh"),
  npcAudioBtn: document.getElementById("npc-audio-btn"),
  choices: document.getElementById("choices"),
  hint: document.getElementById("hint"),
  skillPanel: document.getElementById("skill-panel"),
  xpTotal: document.getElementById("xp-total"),
  vocabCount: document.getElementById("vocab-count"),
  flashbackOverlay: document.getElementById("flashback-overlay"),
  flashbackLabel: document.getElementById("flashback-label"),
  flashbackZh: document.getElementById("flashback-zh"),
  flashbackChoices: document.getElementById("flashback-choices"),
  flashbackBuild: document.getElementById("flashback-build"),
  flashbackAnswer: document.getElementById("flashback-answer"),
  flashbackWordbank: document.getElementById("flashback-wordbank"),
  flashbackFeedback: document.getElementById("flashback-feedback"),
  sceneProgress: document.getElementById("scene-progress"),
  levelBarMask: document.getElementById("level-bar-mask"),
  levelLabel: document.getElementById("level-label"),
  endScreen: document.getElementById("end-screen"),
  endSummary: document.getElementById("end-summary"),
  gameScreen: document.getElementById("game-screen"),
  resetBtn: document.getElementById("reset-btn"),
  restartBtn: document.getElementById("restart-btn"),
  zhToggleBtn: document.getElementById("zh-toggle-btn"),
  wordPopup: document.getElementById("word-popup"),
  transitionOverlay: document.getElementById("transition-overlay"),
  transitionEn: document.getElementById("transition-en"),
  transitionZh: document.getElementById("transition-zh"),
  transitionContinueBtn: document.getElementById("transition-continue-btn"),
  historyBanner: document.getElementById("history-banner"),
  historyPrevBtn: document.getElementById("history-prev-btn"),
  historyNextBtn: document.getElementById("history-next-btn"),
  userBadge: document.getElementById("user-badge"),
  accountBtn: document.getElementById("account-btn"),
  accountMenu: document.getElementById("account-menu"),
  accountMenuEmail: document.getElementById("account-menu-email"),
  accountLoginBtn: document.getElementById("account-login-btn"),
  accountLoggedOutItem: document.getElementById("account-logged-out-item"),
  accountLoggedInItem: document.getElementById("account-logged-in-item"),
  authOverlay: document.getElementById("auth-overlay"),
  authCloseBtn: document.getElementById("auth-close-btn"),
  authEmailStep: document.getElementById("auth-email-step"),
  authEmailInput: document.getElementById("auth-email-input"),
  authSendLinkBtn: document.getElementById("auth-send-link-btn"),
  authEmailSentStep: document.getElementById("auth-email-sent-step"),
  authSentEmail: document.getElementById("auth-sent-email"),
  authRetryEmailBtn: document.getElementById("auth-retry-email-btn"),
  authGoogleBtn: document.getElementById("auth-google-btn"),
  authError: document.getElementById("auth-error"),
  authSignOutBtn: document.getElementById("auth-sign-out-btn")
};

// 每个技能能拿到的经验值上限，从内容里所有场景动态算出——
// 加新场景/新技能只需要改 content 文件，这里不用再手动同步数字。
function computeSkillMax() {
  const max = {};
  for (const key of Object.keys(GAME_CONTENT.skillMeta)) max[key] = 0;
  for (const scene of GAME_CONTENT.scenes) {
    for (const node of Object.values(scene.nodes)) {
      const correct = node.choices.find((c) => c.correct);
      if (correct && correct.xp) {
        max[node.skill] = (max[node.skill] || 0) + correct.xp;
      }
    }
  }
  return max;
}

const SKILL_MAX = computeSkillMax();

// 词汇量进度：按 skills/joshlabs-dev/references/projects/english-game.md 里研究出来的
// CEFR 词族数门槛来算，不是"第几章=第几级"的粗映射。累计到当前场景为止玩家实际读到过
// 的不同词形数量（NPC 台词+两个选项都算，跟 scripts/validate-curriculum.mjs 同一套统计
// 口径），实时对照门槛换算成"当前在哪个级别、这一级走了多少百分比"。
// 门槛改了要同步 style.css 里 .level-bar 渐变的百分比断点（12.5% / 27.5% / 56.25%），
// 两边写死对应 500/1100/2250/4000 这四个数字，不是动态算的。B2 门槛(4000)是研究阶段
// 就定的数字，用来把渐变条延伸出B1，还没有真正写到B2的内容。
const CEFR_VOCAB_THRESHOLDS = [
  { level: "A1", words: 500 },
  { level: "A2", words: 1100 },
  { level: "B1", words: 2250 },
  { level: "B2", words: 4000 }
];

function tokenizeWords(text) {
  if (!text) return [];
  return text.toLowerCase().match(/[a-z]+'?[a-z]*/g) || [];
}

// 只统计玩家实际会读到的文字（NPC 台词 + 场景里出现过的选项），不算 vocabBank——
// 那是复习用的干扰项池，不是"读过的内容"。
function computeVocabExposure(upToSceneIndex) {
  const seen = new Set();
  for (let i = 0; i <= upToSceneIndex && i < GAME_CONTENT.scenes.length; i++) {
    for (const node of Object.values(GAME_CONTENT.scenes[i].nodes)) {
      tokenizeWords(node.npcLine.en).forEach((w) => seen.add(w));
      for (const c of node.choices) tokenizeWords(c.text).forEach((w) => seen.add(w));
    }
  }
  return seen.size;
}

function computeLevelProgress(wordCount) {
  // globalPct 是在"整条到 B1 的路"上的位置，用来算进度条该露出多少——
  // 露出比例要对得上 CSS 渐变里色带的绝对位置，不能只按当前级别内部的比例算，
  // 不然词汇量还远没到 A2，条却已经露到黄色那段去了。
  const finalTarget = CEFR_VOCAB_THRESHOLDS[CEFR_VOCAB_THRESHOLDS.length - 1].words;
  const globalPct = Math.max(0, Math.min(100, Math.round((wordCount / finalTarget) * 100)));

  let prevThreshold = 0;
  for (const tier of CEFR_VOCAB_THRESHOLDS) {
    if (wordCount < tier.words) {
      return { level: tier.level, globalPct, wordCount, target: tier.words };
    }
    prevThreshold = tier.words;
  }
  const last = CEFR_VOCAB_THRESHOLDS[CEFR_VOCAB_THRESHOLDS.length - 1];
  return { level: last.level + "+", globalPct, wordCount, target: last.words };
}

// 复习间隔规则（见 skills/joshlabs-dev/references/projects/english-game.md）：
// 答错入队时 status="active"，短期内连对 2 次后不直接移出，改成 status="pendingFinal"，
// 等场景数间隔 ≥ REVIEW_GAP_SCENES 后再抽考一次做最终确认，通过才真正移出队列。
const REVIEW_GAP_SCENES = 5;
// 玩家中断超过这个时长再打开，判定为"回访"而非同一次的场景切换，触发断点热身。
const RECONNECT_GAP_MS = 20 * 60 * 1000;

function freshState() {
  const skills = {};
  for (const key of Object.keys(GAME_CONTENT.skillMeta)) skills[key] = 0;
  return {
    sceneIndex: 0,
    nodeId: GAME_CONTENT.scenes[0].startNode,
    skills,
    learnedVocab: [], // [{en, zh, skill}]
    reviewQueue: [], // [{en, zh, streak, status: "active"|"pendingFinal", queuedAtScene}]
    finished: false,
    lastActiveAt: Date.now()
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return freshState();
    const parsed = JSON.parse(raw);
    if (!parsed || !parsed.skills) return freshState();
    return parsed;
  } catch (e) {
    return freshState();
  }
}

function saveState() {
  state.lastActiveAt = Date.now();
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  if (window.GameAuth) window.GameAuth.pushSave(state); // 登录了才会真的发请求，见 auth.js
}

let state = loadState();
// 上次存档时间到这次打开的间隔——loadState() 读到的是上一次会话留下的旧值，
// 必须在第一次 saveState() 覆盖掉它之前算出来，才能判断这次是不是"回访"。
const reconnectGapMs = state.lastActiveAt ? Date.now() - state.lastActiveAt : 0;
let pendingFlashback = []; // queue of items to review before advancing scene
let flashbackOnComplete = goToNextScene; // 闪回队列清空后要做什么：正常翻页，或断点热身后继续当前场景
let wrongButtonsThisNode = new Set();

// 中文翻译显隐：全局开关，存在 localStorage 里跨场景/跨次打开都记得。
// 只影响台词下方的中文翻译（.npc-zh），不影响回忆闪回的中文提示——那是游戏机制本身要考的。
const ZH_HIDE_KEY = "eng-rpg-hide-zh";
let hideZh = localStorage.getItem(ZH_HIDE_KEY) === "1";

const TITLE_ZH = "十年之约 · English Game · JoshLabs";
const TITLE_EN = "A Decade Apart · English Game · JoshLabs";

function applyZhVisibility() {
  document.body.classList.toggle("hide-zh", hideZh);
  el.zhToggleBtn.textContent = hideZh ? "显示中文" : "隐藏中文";
  el.zhToggleBtn.setAttribute("aria-pressed", String(!hideZh));
  document.title = hideZh ? TITLE_EN : TITLE_ZH;
}

// 点词查词：把英文台词拆成单词 span，点一下弹出中文释义，几秒后自动收起。
// 点过的词会记进 reviewQueue，跟错题走同一套间隔重复机制——查过的词不是查完就算，
// 之后还会在闪回复习里再考一次。
const WORD_POPUP_MS = 2500;
let wordPopupTimer = null;

function wrapWordsHTML(text) {
  return text.replace(/[A-Za-zÀ-ÿ']+/g, (word) => `<span class="word" data-word="${word.toLowerCase()}">${word}</span>`);
}

function queueWordForReview(word, meaning) {
  // 已经在复习队列里的话不重复加、不重置进度——只是又查了一下不代表没学会，
  // 只有故事里真答错才算"没学会"，重置进度这件事只归 handleChoice 管。
  const existing = state.reviewQueue.find((r) => r.en === word && r.kind === "word");
  if (existing) return;
  state.reviewQueue.push({ en: word, zh: meaning, kind: "word", streak: 0, status: "active", queuedAtScene: state.sceneIndex });
  saveState();
}

function showWordPopup(wordEl) {
  const word = wordEl.dataset.word;
  const meaning = typeof WORD_DICT !== "undefined" ? WORD_DICT[word] : null;
  if (!meaning) return;
  el.wordPopup.textContent = `${wordEl.textContent} ${meaning}`;
  el.wordPopup.classList.remove("hidden");

  const rect = wordEl.getBoundingClientRect();
  const popRect = el.wordPopup.getBoundingClientRect();
  let left = rect.left + rect.width / 2 - popRect.width / 2;
  left = Math.max(8, Math.min(left, window.innerWidth - popRect.width - 8));
  // 手指点的地方会挡住紧贴单词上方的位置，隔远一点（不是10px那种贴着），
  // 弹出层才不会被指尖本身盖住。
  const CLEARANCE = 36;
  let top = rect.top - popRect.height - CLEARANCE;
  if (top < 8) top = rect.bottom + CLEARANCE;
  el.wordPopup.style.left = left + "px";
  el.wordPopup.style.top = top + "px";

  document.querySelectorAll(".word.word-active").forEach((w) => w.classList.remove("word-active"));
  wordEl.classList.add("word-active");

  // 单词发音走独立的 WORD_AUDIO_MANIFEST（按 WORD_DICT 的 key 合成），
  // 跟整句配音的 AUDIO_MANIFEST 分开维护——查词弹出解释的同时读一遍这个词。
  if (typeof WORD_AUDIO_MANIFEST !== "undefined") {
    playAudio(word, null, WORD_AUDIO_MANIFEST);
  }

  clearTimeout(wordPopupTimer);
  wordPopupTimer = setTimeout(hideWordPopup, WORD_POPUP_MS);

  queueWordForReview(word, meaning);
}

function hideWordPopup() {
  clearTimeout(wordPopupTimer);
  el.wordPopup.classList.add("hidden");
  document.querySelectorAll(".word.word-active").forEach((w) => w.classList.remove("word-active"));
}

// 点查词范围：不只是台词本身，场景大标题（英文）、小标题也能点单词查释义——
// 都走同一套 showWordPopup，查过的词照样存进 reviewQueue 参与复习。
function attachWordLookup(container) {
  container.addEventListener("click", (e) => {
    const wordEl = e.target.closest(".word");
    if (!wordEl) return;
    showWordPopup(wordEl);
  });
}
[el.npcEn, el.sceneTitle, el.sceneSubtitle].forEach(attachWordLookup);

function currentScene() {
  return GAME_CONTENT.scenes[state.sceneIndex];
}

function currentNode() {
  return currentScene().nodes[state.nodeId];
}

// 翻页回看历史：游戏永远只有"答对才能往前走"这一条路径，所以玩家已经走过的
// 每一句，都能从 GAME_CONTENT 按 scene.startNode → node.next 重新推导出来，
// 不用另外维护一份 history 存档字段——省得旧存档没有这个字段还要迁移。
// 算到当前 state.sceneIndex/state.nodeId（还没作答的那一句）为止，不包含它本身。
function buildHistory() {
  const history = [];
  for (let s = 0; s <= state.sceneIndex && s < GAME_CONTENT.scenes.length; s++) {
    const scene = GAME_CONTENT.scenes[s];
    let nodeId = scene.startNode;
    let guard = 0;
    while (nodeId && scene.nodes[nodeId] && guard++ < 50) {
      if (s === state.sceneIndex && nodeId === state.nodeId) break;
      const node = scene.nodes[nodeId];
      const correct = node.choices.find((c) => c.correct);
      history.push({ sceneIndex: s, nodeId, node, correct });
      nodeId = node.next;
    }
  }
  return history;
}

// null = 在当前直播（可互动）的节点；否则是 buildHistory() 数组的下标，
// 表示正在翻看第几条已经答对过的历史记录。只是个 UI 状态，不落存档，
// 刷新页面就回到直播位置，符合"翻页只是回看，不是切换游戏进度"的预期。
let browseIndex = null;

function updateHistoryNavUI() {
  const history = buildHistory();
  const browsing = browseIndex !== null;
  el.historyBanner.classList.toggle("hidden", !browsing);
  el.historyPrevBtn.disabled = history.length === 0 || (browsing && browseIndex === 0);
  el.historyNextBtn.disabled = !browsing;
}

function renderHistoryView(entry) {
  const scene = GAME_CONTENT.scenes[entry.sceneIndex];
  const node = entry.node;

  hideWordPopup();
  el.sceneTitle.innerHTML = wrapWordsHTML(scene.title);
  el.sceneSubtitle.innerHTML = wrapWordsHTML(scene.subtitle);
  el.avatar.textContent = node.avatar || scene.avatar;
  el.npcEn.innerHTML = wrapWordsHTML(node.npcLine.en);
  el.npcZh.textContent = node.npcLine.zh;
  playAudio(node.npcLine.en, el.npcAudioBtn);
  el.hint.textContent = "";
  el.hint.classList.remove("visible");

  // 回看模式只读：只展示当时选对的那句，禁用点击，不能重新作答。
  el.choices.innerHTML = "";
  const btn = document.createElement("button");
  btn.className = "choice-btn correct";
  btn.textContent = entry.correct ? entry.correct.text : "";
  btn.disabled = true;
  el.choices.appendChild(btn);

  updateHistoryNavUI();
}

function goToPrevHistory() {
  const history = buildHistory();
  if (history.length === 0) return;
  browseIndex = browseIndex === null ? history.length - 1 : Math.max(0, browseIndex - 1);
  renderHistoryView(history[browseIndex]);
}

function goToNextHistory() {
  if (browseIndex === null) return;
  const history = buildHistory();
  if (browseIndex < history.length - 1) {
    browseIndex++;
    renderHistoryView(history[browseIndex]);
  } else {
    // 已经翻到最新一条历史记录，再往前一步就是回到当前直播、可以正常作答的节点
    browseIndex = null;
    renderScene();
  }
}

el.historyPrevBtn.addEventListener("click", goToPrevHistory);
el.historyNextBtn.addEventListener("click", goToNextHistory);

function renderSkillPanel() {
  el.skillPanel.innerHTML = "";
  for (const [key, meta] of Object.entries(GAME_CONTENT.skillMeta)) {
    const xp = state.skills[key] || 0;
    const max = SKILL_MAX[key] || 1;
    const pct = Math.min(100, Math.round((xp / max) * 100));
    const row = document.createElement("div");
    row.className = "skill-row";
    row.innerHTML = `
      <div class="skill-label">${meta.icon} ${meta.labelEn} <span class="zh-inline">${meta.label}</span></div>
      <div class="skill-bar"><div class="skill-bar-fill" style="width:${pct}%"></div></div>
      <div class="skill-xp">${xp}/${max}</div>
    `;
    el.skillPanel.appendChild(row);
  }
  el.xpTotal.textContent = Object.values(state.skills).reduce((a, b) => a + b, 0);
  el.vocabCount.textContent = state.learnedVocab.length;
}

function renderProgress() {
  el.sceneProgress.innerHTML = "";
  GAME_CONTENT.scenes.forEach((_, idx) => {
    const dot = document.createElement("div");
    dot.className = "dot";
    if (idx < state.sceneIndex) dot.classList.add("done");
    else if (idx === state.sceneIndex) dot.classList.add("active");
    el.sceneProgress.appendChild(dot);
  });

  const wordCount = computeVocabExposure(state.sceneIndex);
  const { level, globalPct, target } = computeLevelProgress(wordCount);
  el.levelBarMask.style.width = 100 - globalPct + "%";
  el.levelLabel.textContent = `${level} · ${wordCount}/${target} 词`;
}

// 配音播放：按台词原文去 AUDIO_MANIFEST 里查对应的音频文件。
// 找不到就静默跳过（内容没配到音也不影响游戏本身）。
// 返回一个 Promise，在这段音频真正播完（或没有音频/播放失败）时 resolve——
// 调用方可以用它来"等配音说完再翻页"，而不是猜一个固定延迟。
let currentAudio = null;
function playAudio(text, btnEl, manifest) {
  const activeManifest = manifest || (typeof AUDIO_MANIFEST !== "undefined" ? AUDIO_MANIFEST : null);
  const src = activeManifest ? activeManifest[text] : null;
  if (!src) return Promise.resolve();
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  const audio = new Audio(src);
  currentAudio = audio;
  if (btnEl) btnEl.classList.add("playing");

  return new Promise((resolve) => {
    const done = () => {
      if (btnEl) btnEl.classList.remove("playing");
      resolve();
    };
    audio.addEventListener("ended", done, { once: true });
    audio.addEventListener("error", done, { once: true });
    audio.play().catch(done);
  });
}

function spawnXpFloat(fromEl, amount) {
  const rect = fromEl.getBoundingClientRect();
  const float = document.createElement("span");
  float.className = "xp-float";
  float.textContent = `+${amount} XP`;
  float.style.left = rect.right - 60 + "px";
  float.style.top = rect.top - 6 + "px";
  document.body.appendChild(float);
  setTimeout(() => float.remove(), 900);
}

const SCENE_TRANSITION_MS = 450;

// renderScene() 是外部统一入口：先把当前场景淡出+轻微上移，
// 等动画放完再真正换内容（renderSceneContent），然后淡入。
// 放慢、加动画就是这一层做的，实际渲染逻辑还在 renderSceneContent 里没变。
function renderScene() {
  const panel = el.scenePanel;
  if (!panel || panel.dataset.rendered !== "true") {
    // 第一次渲染（刚打开页面）不用等淡出，直接进淡入
    renderSceneContent();
    if (panel) {
      panel.dataset.rendered = "true";
      panel.classList.add("scene-fade-in-prep");
      void panel.offsetWidth;
      panel.classList.remove("scene-fade-in-prep");
    }
    return;
  }

  panel.classList.add("scene-fade-out");
  setTimeout(() => {
    renderSceneContent();
    panel.classList.remove("scene-fade-out");
    panel.classList.add("scene-fade-in-prep");
    void panel.offsetWidth; // 强制重排，让下一步的 class 切换能触发过渡动画
    panel.classList.remove("scene-fade-in-prep");
  }, SCENE_TRANSITION_MS);
}

function renderSceneContent() {
  const scene = currentScene();
  const node = currentNode();

  browseIndex = null; // 任何一次正常的直播渲染，都代表玩家不在翻页回看状态
  hideWordPopup();
  renderProgress();
  el.sceneTitle.innerHTML = wrapWordsHTML(scene.title);
  el.sceneSubtitle.innerHTML = wrapWordsHTML(scene.subtitle);
  el.avatar.textContent = node.avatar || scene.avatar;
  el.npcEn.innerHTML = wrapWordsHTML(node.npcLine.en);
  el.npcZh.textContent = node.npcLine.zh;
  // 进节点自动放一遍就够了，不再循环提醒——想再听就点对话框空白处（见下面的监听器）。
  playAudio(node.npcLine.en, el.npcAudioBtn);
  el.hint.textContent = "";
  el.hint.classList.remove("visible");
  wrongButtonsThisNode = new Set();

  el.choices.innerHTML = "";
  // 内容里为了方便写作，正确选项总是排第一个——渲染时打乱顺序，
  // 不然正确答案永远在同一个位置，玩家不用看台词也能蒙对。
  const shuffled = node.choices.map((choice, idx) => ({ choice, idx })).sort(() => Math.random() - 0.5);
  shuffled.forEach(({ choice, idx }) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice.text;
    btn.addEventListener("click", () => handleChoice(idx, btn));
    el.choices.appendChild(btn);
  });

  renderSkillPanel();
  updateHistoryNavUI();
}

function handleChoice(idx, btnEl) {
  const node = currentNode();
  const choice = node.choices[idx];
  playAudio(choice.text, btnEl);

  if (choice.correct) {
    Array.from(el.choices.children).forEach((b) => (b.disabled = true));
    state.skills[node.skill] = (state.skills[node.skill] || 0) + (choice.xp || 0);
    const already = state.learnedVocab.some((v) => v.en === choice.text);
    if (!already) {
      state.learnedVocab.push({ en: choice.text, zh: choice.zh || node.npcLine.zh, skill: node.skill });
    }
    if (choice.xp) spawnXpFloat(btnEl, choice.xp);
    saveState();
    // 答对先亮出中文确认理解，不管当前是不是"隐藏中文"模式，停留2秒再翻页，
    // 翻页前把隐藏状态还原，不影响用户原本的显示偏好。
    document.body.classList.remove("hide-zh");
    setTimeout(() => {
      if (hideZh) document.body.classList.add("hide-zh");
      advance(node.next);
    }, 2000);
  } else {
    btnEl.classList.add("wrong", "shake");
    btnEl.addEventListener("animationend", () => btnEl.classList.remove("shake"), { once: true });
    btnEl.disabled = true;
    wrongButtonsThisNode.add(idx);
    el.hint.textContent = "💡 " + node.hintOnWrong;
    el.hint.classList.add("visible");

    const targetEn = node.choices.find((c) => c.correct).text;
    const targetZh = node.choices.find((c) => c.correct).zh || node.npcLine.zh;
    const existing = state.reviewQueue.find((r) => r.en === targetEn);
    if (existing) {
      // 答错说明还没学会（哪怕之前已经进入"待最终确认"阶段）：退回重新学，间隔重新计时
      existing.streak = 0;
      existing.status = "active";
      existing.queuedAtScene = state.sceneIndex;
    } else {
      state.reviewQueue.push({ en: targetEn, zh: targetZh, kind: "sentence", streak: 0, status: "active", queuedAtScene: state.sceneIndex });
    }
    saveState();
  }
}

function advance(nextNodeId) {
  if (nextNodeId) {
    state.nodeId = nextNodeId;
    saveState();
    renderScene();
    return;
  }
  // scene finished -> maybe show flashback review, then move to next scene
  el.flashbackLabel.textContent = "🧳 回忆闪回 · 这个词是？";
  flashbackOnComplete = goToNextScene;
  pendingFlashback = pickFlashbackItems();
  if (pendingFlashback.length > 0) {
    showFlashback();
  } else {
    goToNextScene();
  }
}

// 场景切换时最多复习 2 条：优先短期错题（还在 active 阶段），
// 剩余名额才补"待最终确认"里间隔已经够长、可以抽考的老词条。
function pickFlashbackItems() {
  const active = state.reviewQueue.filter((r) => r.status !== "pendingFinal");
  const eligibleFinal = state.reviewQueue.filter(
    (r) => r.status === "pendingFinal" && state.sceneIndex - r.queuedAtScene >= REVIEW_GAP_SCENES
  );
  return [...active, ...eligibleFinal].slice(0, 2);
}

// 断点热身：玩家隔了一段时间才回来（不是同一次场景切换），
// 继续当前场景前先抽一条复习queue里最老的词条考一下。
function showReconnectWarmup() {
  if (state.reviewQueue.length === 0) {
    renderScene();
    return;
  }
  el.flashbackLabel.textContent = "👋 欢迎回来，先复习一下";
  flashbackOnComplete = renderScene;
  pendingFlashback = [state.reviewQueue[0]];
  showFlashback();
}

function goToNextScene() {
  const nextIndex = state.sceneIndex + 1;
  if (nextIndex >= GAME_CONTENT.scenes.length) {
    showEndScreen();
    return;
  }
  state.sceneIndex = nextIndex;
  state.nodeId = GAME_CONTENT.scenes[nextIndex].startNode;
  saveState();
  // 场景之间如果隔了一段时间/换了地方，先过一下"一天过去了"这种简短的转场，
  // 不直接硬切——只有明确定义了 transition 的场景才会停一下，大多数场景之间还是直接接着走。
  const transition = GAME_CONTENT.scenes[nextIndex].transition;
  if (transition) {
    showTransition(transition);
  } else {
    renderScene();
  }
}

function showTransition(transition) {
  el.transitionEn.textContent = transition.en;
  el.transitionZh.textContent = transition.zh;
  el.transitionOverlay.classList.add("visible");
}

// 检索难度随熟练度升级：还在 active 阶段（第一次见到 / 之前答错过）用选择题，
// 门槛低；进了 pendingFinal（短期已连对2次，等长间隔做最终确认）就换成拼词，
// 逼玩家真正拼出整句，而不是靠排除法认出来。
function showFlashback() {
  const item = pendingFlashback[0];
  el.flashbackOverlay.classList.add("visible");
  el.flashbackFeedback.textContent = "";
  el.flashbackZh.textContent = item.zh;

  // 单个单词没法拆词拼句，pendingFinal 阶段也一直用选择题，不进拼词模式。
  if (item.status === "pendingFinal" && item.kind !== "word") {
    renderFlashbackBuild(item);
  } else {
    renderFlashbackChoices(item);
  }
}

function renderFlashbackChoices(item) {
  el.flashbackChoices.classList.remove("hidden");
  el.flashbackBuild.classList.add("hidden");
  el.flashbackChoices.innerHTML = "";

  const distractors = item.kind === "word"
    ? Object.keys(WORD_DICT)
        .filter((w) => w !== item.en)
        .sort(() => Math.random() - 0.5)
        .slice(0, 2)
    : GAME_CONTENT.vocabBank
        .filter((v) => v.en !== item.en)
        .sort(() => Math.random() - 0.5)
        .slice(0, 2)
        .map((v) => v.en);

  const options = [item.en, ...distractors].sort(() => Math.random() - 0.5);

  options.forEach((text) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = text;
    btn.addEventListener("click", () => {
      Array.from(el.flashbackChoices.children).forEach((b) => (b.disabled = true));
      const isCorrect = text === item.en;
      btn.classList.add(isCorrect ? "correct" : "wrong");
      const audioDone = playAudio(text, btn);
      resolveFlashback(isCorrect, item, audioDone);
    });
    el.flashbackChoices.appendChild(btn);
  });
}

// 拼词模式：把目标句子的单词打乱放进词库，玩家依次点回答题区拼出原句；
// 点已拼的词可以收回重排。凑齐词数才判定对错。
function renderFlashbackBuild(item) {
  el.flashbackChoices.classList.add("hidden");
  el.flashbackBuild.classList.remove("hidden");
  el.flashbackAnswer.classList.remove("build-correct", "build-wrong");

  const words = item.en.split(" ");
  const bankOrder = words.map((w, i) => i).sort(() => Math.random() - 0.5);
  const placed = [];

  function renderBank() {
    el.flashbackWordbank.innerHTML = "";
    bankOrder.forEach((i) => {
      if (placed.includes(i)) return;
      const chip = document.createElement("button");
      chip.className = "word-chip";
      chip.textContent = words[i];
      chip.addEventListener("click", () => {
        placed.push(i);
        renderAnswer();
        renderBank();
        if (placed.length === words.length) checkBuild();
      });
      el.flashbackWordbank.appendChild(chip);
    });
  }

  function renderAnswer() {
    el.flashbackAnswer.innerHTML = "";
    placed.forEach((i) => {
      const chip = document.createElement("button");
      chip.className = "word-chip placed";
      chip.textContent = words[i];
      chip.addEventListener("click", () => {
        placed.splice(placed.indexOf(i), 1);
        renderAnswer();
        renderBank();
      });
      el.flashbackAnswer.appendChild(chip);
    });
  }

  function checkBuild() {
    Array.from(el.flashbackWordbank.children).forEach((c) => (c.disabled = true));
    Array.from(el.flashbackAnswer.children).forEach((c) => (c.disabled = true));
    const isCorrect = placed.map((i) => words[i]).join(" ") === item.en;
    el.flashbackAnswer.classList.add(isCorrect ? "build-correct" : "build-wrong");
    const audioDone = playAudio(item.en, null);
    resolveFlashback(isCorrect, item, audioDone);
  }

  renderAnswer();
  renderBank();
}

function resolveFlashback(isCorrect, item, audioDone) {
  const target = state.reviewQueue.find((r) => r.en === item.en);

  if (isCorrect) {
    el.flashbackFeedback.textContent = "✅ 记住了！";
    if (target) {
      if (target.status === "pendingFinal") {
        // 长间隔之后再考一次也答对了：真正学会，移出队列
        state.reviewQueue = state.reviewQueue.filter((r) => r.en !== item.en);
      } else {
        target.streak += 1;
        if (target.streak >= 2) {
          // 短期内连对2次，先别急着判定"学会"，等够长的间隔再做最终确认
          target.status = "pendingFinal";
          target.queuedAtScene = state.sceneIndex;
        }
      }
    }
  } else {
    el.flashbackFeedback.textContent = `❌ 正确答案：${item.en}`;
    if (target) {
      target.streak = 0;
      target.status = "active";
      target.queuedAtScene = state.sceneIndex;
    }
  }
  saveState();

  // 等配音播完，再留一点时间看反馈文字，才翻页——不是固定 1200ms 硬切
  Promise.resolve(audioDone).then(() => {
    setTimeout(() => {
      pendingFlashback.shift();
      if (pendingFlashback.length > 0) {
        showFlashback();
      } else {
        el.flashbackOverlay.classList.remove("visible");
        flashbackOnComplete();
      }
    }, 500);
  });
}

function showEndScreen() {
  state.finished = true;
  saveState();
  el.choices.innerHTML = "";
  el.gameScreen.classList.add("hidden");
  el.endScreen.classList.remove("hidden");
  const totalXp = Object.values(state.skills).reduce((a, b) => a + b, 0);
  el.endSummary.innerHTML = `
    <p>你在多伦多安顿了下来——开了账户、租了房、认识了室友——但那张旧照片和地址一直没放下。今晚，你决定明天就去看看。</p>
    <p style="opacity:.7">故事还在继续，敬请期待下一段。</p>
    <p>总经验值：${totalXp} ・ 学会词汇：${state.learnedVocab.length} 个</p>
    <p>${Object.entries(GAME_CONTENT.skillMeta)
      .map(([k, m]) => `${m.icon} ${m.label} ${state.skills[k] || 0}/${SKILL_MAX[k] || 0}`)
      .join(" ・ ")}</p>
  `;
}

function resetGame() {
  localStorage.removeItem(SAVE_KEY);
  state = freshState();
  if (window.GameAuth) window.GameAuth.pushSave(state); // 登录了的话云端存档也一起清空
  pendingFlashback = [];
  el.endScreen.classList.add("hidden");
  el.gameScreen.classList.remove("hidden");
  renderScene();
}

el.resetBtn.addEventListener("click", () => {
  el.accountMenu.classList.add("hidden");
  if (confirm("确定要重新开始吗？当前进度会清空。")) resetGame();
});
el.restartBtn.addEventListener("click", resetGame);
el.npcAudioBtn.addEventListener("click", () => {
  playAudio(currentNode().npcLine.en, el.npcAudioBtn);
});
el.transitionContinueBtn.addEventListener("click", () => {
  el.transitionOverlay.classList.remove("visible");
  renderScene();
});
el.zhToggleBtn.addEventListener("click", () => {
  hideZh = !hideZh;
  localStorage.setItem(ZH_HIDE_KEY, hideZh ? "1" : "0");
  applyZhVisibility();
  el.accountMenu.classList.add("hidden");
});

// 昵称：登录后随机配一个"形容词+蔬果"的花名（比如"奔跑的土豆"），不用邮箱本身，
// 按 user.id 存进 localStorage 只生成一次——同一个账号每次登录看到的都是同一个名字，
// 不会一刷新就换掉。
const NICKNAME_ADJ = [
  "奔跑的", "快乐的", "神秘的", "勇敢的", "淡定的", "机智的", "爱笑的", "闪亮的",
  "悠闲的", "话痨的", "元气满满的", "迷路的", "摸鱼的", "热情的", "安静的", "调皮的",
  "打盹的", "路痴的", "好奇的", "慢悠悠的"
];
const NICKNAME_NOUN = [
  "土豆", "西红柿", "香蕉", "苹果", "菠萝", "南瓜", "西瓜", "橙子",
  "葡萄", "洋葱", "萝卜", "芒果", "椰子", "草莓", "冬瓜", "白菜",
  "玉米", "柠檬", "牛油果", "哈密瓜"
];
const NICKNAME_KEY_PREFIX = "eng-rpg-nickname-";

function getNickname(user) {
  const key = NICKNAME_KEY_PREFIX + (user.id || user.email || "anon");
  let name = localStorage.getItem(key);
  if (!name) {
    const adj = NICKNAME_ADJ[Math.floor(Math.random() * NICKNAME_ADJ.length)];
    const noun = NICKNAME_NOUN[Math.floor(Math.random() * NICKNAME_NOUN.length)];
    name = adj + noun;
    localStorage.setItem(key, name);
  }
  return name;
}

// 顶部左边的身份标签（未登录显示"请登录"、登录后显示花名）跟右上角的 ☰ 菜单
// 是两回事：☰ 一直只是"打开菜单"，不再随登录状态换文字。显示中文/重新开始
// 常驻菜单里；账号区随登录状态在"登录账号"入口和"邮箱 + 退出登录"之间切换。
// 登录状态变化由 auth.js 的 onAuthChange 驱动。
function renderAuthPanel(user) {
  const loggedIn = !!user;
  el.userBadge.textContent = loggedIn ? getNickname(user) : "请登录";
  el.userBadge.classList.toggle("logged-in", loggedIn);
  el.accountLoggedOutItem.classList.toggle("hidden", loggedIn);
  el.accountLoggedInItem.classList.toggle("hidden", !loggedIn);
  if (loggedIn) el.accountMenuEmail.textContent = user.email || "";
}

function resetAuthForm() {
  el.authEmailStep.classList.remove("hidden");
  el.authEmailSentStep.classList.add("hidden");
  el.authError.textContent = "";
}

if (window.GameAuth) window.GameAuth.onAuthChange(renderAuthPanel);

el.accountBtn.addEventListener("click", () => {
  el.accountMenu.classList.toggle("hidden");
});
// 点菜单外部的地方，自动收起菜单——左上角的身份标签不算"外部"，
// 不然它自己的点击事件冒泡到这里，会跟它下面的登录逻辑打架。
document.addEventListener("click", (e) => {
  if (
    !el.accountMenu.classList.contains("hidden") &&
    !e.target.closest(".account-wrap") &&
    e.target !== el.userBadge
  ) {
    el.accountMenu.classList.add("hidden");
  }
});
// 左上角身份标签：没登录时点一下直接弹登录框；登录了就只是个花名标签，不做别的——
// 退出登录走右上角菜单里的入口，两边不重复。
el.userBadge.addEventListener("click", () => {
  if (window.GameAuth && window.GameAuth.getUser()) return;
  resetAuthForm();
  el.authOverlay.classList.add("visible");
});
el.accountLoginBtn.addEventListener("click", () => {
  el.accountMenu.classList.add("hidden");
  resetAuthForm();
  el.authOverlay.classList.add("visible");
});
el.authCloseBtn.addEventListener("click", () => {
  el.authOverlay.classList.remove("visible");
});
el.authSendLinkBtn.addEventListener("click", async () => {
  const email = el.authEmailInput.value.trim();
  if (!email) return;
  el.authError.textContent = "";
  el.authSendLinkBtn.disabled = true;
  try {
    await window.GameAuth.sendMagicLink(email);
    el.authSentEmail.textContent = email;
    el.authEmailStep.classList.add("hidden");
    el.authEmailSentStep.classList.remove("hidden");
  } catch (e) {
    el.authError.textContent = "发送失败，请检查邮箱地址后重试";
  } finally {
    el.authSendLinkBtn.disabled = false;
  }
});
el.authRetryEmailBtn.addEventListener("click", resetAuthForm);
el.authGoogleBtn.addEventListener("click", () => {
  el.authError.textContent = "";
  window.GameAuth.signInWithGoogle().catch(() => {
    el.authError.textContent = "Google 登录暂时不可用";
  });
});
el.authSignOutBtn.addEventListener("click", async () => {
  await window.GameAuth.signOut();
  el.accountMenu.classList.add("hidden");
});

applyZhVisibility();

// 进页面直接开始，不额外插入"点击开始"的确认步骤。手机浏览器不允许没有用户
// 手势就自动放声音，所以第一句台词的自动配音在部分设备上可能放不出来——
// 玩家可以点台词旁边的 🔊 按钮手动听，不为了保证自动配音去插一个额外的点击关卡。
function startGame() {
  if (state.finished) {
    showEndScreen();
  } else if (reconnectGapMs > RECONNECT_GAP_MS) {
    showReconnectWarmup();
  } else {
    renderScene();
  }
}

// 打开页面先看一下有没有已登录账号：有的话拉云端存档，跟本地比谁更新就用谁，
// 两边收敛后再正常进入游戏；没登录/云端不可用时直接跳过，不影响离线单机玩。
async function syncFromCloudThenStart() {
  if (window.GameAuth) {
    try {
      const user = await window.GameAuth.ready;
      if (user) {
        const cloud = await window.GameAuth.pullSave();
        if (cloud && (cloud.lastActiveAt || 0) > (state.lastActiveAt || 0)) {
          state = cloud;
        }
        saveState(); // 落地本地 + 回写云端，确保两边收敛到同一份
      }
    } catch (e) {
      // 云端拉取失败不阻塞游戏，继续用本地存档
    }
  }
  startGame();
}

syncFromCloudThenStart();
