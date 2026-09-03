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
  streakBadge: document.getElementById("streak-badge"),
  streakBanner: document.getElementById("streak-banner"),
  heartsDisplay: document.getElementById("hearts-display"),
  dailyGoalCard: document.getElementById("daily-goal-card"),
  dailyGoalFill: document.getElementById("daily-goal-fill"),
  dailyGoalCount: document.getElementById("daily-goal-count"),
  leaderboardSelfXp: document.getElementById("leaderboard-self-xp"),
  leaderboardList: document.getElementById("leaderboard-list"),
  leaderboardEmpty: document.getElementById("leaderboard-empty"),
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
  authSignOutBtn: document.getElementById("auth-sign-out-btn"),
  characterEditBtn: document.getElementById("character-edit-btn"),
  characterOverlay: document.getElementById("character-overlay"),
  characterCloseBtn: document.getElementById("character-close-btn"),
  characterNameInput: document.getElementById("character-name-input"),
  avatarPicker: document.getElementById("avatar-picker"),
  characterSaveBtn: document.getElementById("character-save-btn"),
  achievementsBtn: document.getElementById("achievements-btn"),
  achievementsOverlay: document.getElementById("achievements-overlay"),
  achievementsCloseBtn: document.getElementById("achievements-close-btn"),
  achievementsGrid: document.getElementById("achievements-grid")
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

// 按本地时区拼"今天是几号"——不能用 toISOString()，那是 UTC，会在时区边界
// （比如晚上八九点后，UTC 已经跨到第二天）把"今天"算错，连续打卡就会莫名其妙断掉。
function localDateStr(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

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

// —— 留存/激励机制参数 ——
// 每天要答对几次算"打卡完成"；心数上限与回复速度；随机双倍经验的概率与倍数。
// 都是可调数字，不影响存档结构，改这几个常量就能重新平衡数值。
const DAILY_GOAL = 3;
const MAX_HEARTS = 5;
const HEART_REGEN_MS = 4 * 60 * 60 * 1000; // 每 4 小时回 1 颗心
const BONUS_XP_CHANCE = 0.2; // 变量奖励：约 20% 概率触发双倍经验，制造"随机惊喜"而非可预测的节奏
const BONUS_XP_MULTIPLIER = 2;

// 成就/称号：解锁的成就同时也是可以佩戴、显示在左上角身份标签上的称号。
// 内容层（chapter*.js）一直在自动增长、章节边界在引擎侧不可靠推算，所以不做
// "每章一个成就"，改成基于三类引擎侧已经在可靠实时算的数据：词汇量里程碑
// （复用 CEFR_VOCAB_THRESHOLDS 的门槛，两处口径保持一致）、技能精通（点满某个
// 技能的 XP）、连续打卡天数。技能精通那组是从 GAME_CONTENT.skillMeta 动态生成的，
// 跟 computeSkillMax() 一样的思路——以后内容层加新技能，成就自动跟上，不用手动同步。
const ACHIEVEMENTS = [
  { id: "vocab-a1", icon: "📖", title: "词汇破500 · A1达成", check: (s, vocab) => vocab >= 500 },
  { id: "vocab-a2", icon: "📚", title: "词汇破1100 · A2达成", check: (s, vocab) => vocab >= 1100 },
  { id: "vocab-b1", icon: "🎓", title: "词汇破2250 · B1达成", check: (s, vocab) => vocab >= 2250 },
  { id: "vocab-b2", icon: "🏆", title: "词汇破4000 · B2达成", check: (s, vocab) => vocab >= 4000 },
  ...Object.entries(GAME_CONTENT.skillMeta).map(([key, meta]) => ({
    id: "skill-" + key,
    icon: meta.icon,
    title: meta.label + "达人",
    check: (s) => (s.skills[key] || 0) >= (SKILL_MAX[key] || Infinity)
  })),
  { id: "streak-3", icon: "🔥", title: "连续学习3天", check: (s) => (s.streak || 0) >= 3 },
  { id: "streak-7", icon: "🔥", title: "连续学习7天", check: (s) => (s.streak || 0) >= 7 },
  { id: "streak-30", icon: "🔥", title: "连续学习30天", check: (s) => (s.streak || 0) >= 30 }
];

// 找出这次新解锁的成就（跟上次存的 unlockedAchievements 比对），记下来 + 逐个弹庆祝提示。
// 调用时机：答对一题之后（技能XP/词汇量可能变了）、每日打卡结算之后（streak可能变了）。
function checkAchievements() {
  const vocab = computeVocabExposure(state.sceneIndex);
  const unlocked = state.unlockedAchievements || (state.unlockedAchievements = []);
  const newlyUnlocked = ACHIEVEMENTS.filter(
    (a) => !unlocked.includes(a.id) && a.check(state, vocab)
  );
  if (newlyUnlocked.length === 0) return;
  newlyUnlocked.forEach((a) => unlocked.push(a.id));
  saveState();
  newlyUnlocked.forEach((a, i) => setTimeout(() => showAchievementToast(a), i * 2600));
}

// 成就解锁提示：居中卡片，比 spawnXpFloat 那种飘字更醒目、停留更久，
// 点一下可以提前关掉，不用干等自动消失。
let achievementToastTimer = null;
function showAchievementToast(achievement) {
  const toast = document.createElement("div");
  toast.className = "achievement-toast";
  toast.innerHTML = `
    <div class="achievement-toast-icon">${achievement.icon}</div>
    <div class="achievement-toast-body">
      <div class="achievement-toast-label zh-inline">解锁成就</div>
      <div class="achievement-toast-title">${achievement.title}</div>
    </div>
  `;
  const dismiss = () => {
    toast.classList.add("achievement-toast-out");
    setTimeout(() => toast.remove(), 250);
  };
  toast.addEventListener("click", dismiss);
  document.body.appendChild(toast);
  setTimeout(dismiss, 3800);
}

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
    lastActiveAt: Date.now(),
    // 旧存档没有下面这些字段——不做迁移，读取方一律用 ?? / || 兜底默认值，
    // 新开一局才会真的用到这里写的初始值。
    streak: 0,
    lastStreakDate: null, // 本地日期字符串 "YYYY-MM-DD"，null 表示还没打过卡
    dailyCorrectCount: 0,
    dailyCorrectDate: null,
    hearts: MAX_HEARTS,
    lastHeartAt: Date.now(),
    // 角色定制 + 成就/称号，同样不做旧存档迁移，读取方一律兜底默认值。
    playerName: null,
    playerAvatar: "👨",
    equippedTitle: null,
    unlockedAchievements: []
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
// 当前这次闪回是不是"心数清零后，靠复习赚回一颗心"触发的——是的话，
// resolveFlashback 答对时要额外加一颗心；跟场景末尾/断点热身的闪回复用同一套 UI，
// 不用另开一个弹层，只是这个标记决定结算方式不一样。
let heartRecoveryMode = false;

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

// 连续打卡 + 每日目标：同一次"今天第一次答对"的判定里一起结算，
// 避免分别读一遍"今天是几号"却因为跨了午夜边界得出不一致的结果。
// 只在 handleChoice 的答对分支调用——回忆闪回答对不算"今天打卡"，
// 不然玩家光靠复习旧词条就能刷连续记录，跟"今天有没有学新内容"这件事脱节了。
function registerDailyProgress() {
  const today = localDateStr();

  if (state.lastStreakDate !== today) {
    const yesterday = localDateStr(new Date(Date.now() - 24 * 60 * 60 * 1000));
    state.streak = state.lastStreakDate === yesterday ? (state.streak || 0) + 1 : 1;
    state.lastStreakDate = today;
  }

  if (state.dailyCorrectDate !== today) {
    state.dailyCorrectDate = today;
    state.dailyCorrectCount = 0;
  }
  const wasComplete = (state.dailyCorrectCount || 0) >= DAILY_GOAL;
  state.dailyCorrectCount = (state.dailyCorrectCount || 0) + 1;
  const nowComplete = state.dailyCorrectCount >= DAILY_GOAL;
  return { justHitGoal: nowComplete && !wasComplete };
}

function renderStreakUI() {
  el.streakBadge.textContent = `🔥 ${state.streak || 0}`;
  const checkedInToday = state.lastStreakDate === localDateStr();
  el.streakBanner.classList.toggle("hidden", checkedInToday);
  if (!checkedInToday) updateStreakCountdown();
}

// 倒计时到本地零点——玩家今天还没打卡时才会用到，答对一次横幅立刻消失，
// 不用等这个定时器下一轮才刷新。
function updateStreakCountdown() {
  const now = new Date();
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
  const msLeft = Math.max(0, midnight - now);
  const hours = Math.floor(msLeft / 3600000);
  const mins = Math.floor((msLeft % 3600000) / 60000);
  el.streakBanner.textContent = `🔥 今天还没打卡，还剩 ${hours} 小时 ${mins} 分钟，别断了连续记录！`;
}
// 横幅一直挂着的时候每半分钟刷新一次倒计时文字就够了，没必要按秒跳。
setInterval(() => {
  if (!el.streakBanner.classList.contains("hidden")) updateStreakCountdown();
}, 30000);

function renderDailyGoal() {
  const today = localDateStr();
  const count = state.dailyCorrectDate === today ? state.dailyCorrectCount || 0 : 0;
  const pct = Math.min(100, Math.round((count / DAILY_GOAL) * 100));
  el.dailyGoalFill.style.width = pct + "%";
  el.dailyGoalCount.textContent = `${Math.min(count, DAILY_GOAL)}/${DAILY_GOAL}`;
  el.dailyGoalCard.classList.toggle("goal-complete", count >= DAILY_GOAL);
}

// 达成今日目标的庆祝动画：纯 CSS/JS 生成的彩纸屑，不引入任何图片/音频素材。
// 只在"刚好这一次跨过目标线"时调用一次（见 handleChoice），renderDailyGoal 本身
// 之后每次重渲染只是维持 goal-complete 这个 class，不会重复放这段动画。
const CONFETTI_COLORS = ["var(--accent)", "var(--correct)", "var(--accent-soft)"];
function celebrateDailyGoal() {
  // 强制重排一下再重新加 class，保证动画能重新触发（万一这个 class 已经在上面了）
  el.dailyGoalCard.classList.remove("goal-complete");
  void el.dailyGoalCard.offsetWidth;
  el.dailyGoalCard.classList.add("goal-complete");

  const originX = window.innerWidth / 2;
  for (let i = 0; i < 24; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = originX + (Math.random() - 0.5) * 280 + "px";
    piece.style.top = "110px";
    piece.style.background = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
    piece.style.animationDelay = Math.random() * 0.25 + "s";
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 1600);
  }
}

// 心数：不用定时器实时刷新，而是每次要用到时按"过了几个 4 小时"来补——
// 补满几颗心，lastHeartAt 就往前推进对应的整段时间，剩下不足一个周期的零头
// 留着继续累积，不会因为"看了一眼"就被偷走进度。满心状态下 lastHeartAt
// 持续贴着"现在"走，这样从满心掉血的那一刻起，下一颗心才重新开始计时。
function syncHearts() {
  const prevHearts = state.hearts;
  const prevAt = state.lastHeartAt;
  let hearts = state.hearts ?? MAX_HEARTS;
  let lastHeartAt = state.lastHeartAt ?? state.lastActiveAt ?? Date.now();

  if (hearts < MAX_HEARTS) {
    const elapsed = Date.now() - lastHeartAt;
    const regen = Math.floor(elapsed / HEART_REGEN_MS);
    if (regen > 0) {
      hearts = Math.min(MAX_HEARTS, hearts + regen);
      lastHeartAt += regen * HEART_REGEN_MS;
    }
  } else {
    lastHeartAt = Date.now();
  }

  state.hearts = hearts;
  state.lastHeartAt = lastHeartAt;
  if (hearts !== prevHearts || lastHeartAt !== prevAt) saveState();
  return hearts;
}

function loseHeart() {
  syncHearts(); // 扣血前先把该回的心补上，不然扣血这一刻可能刚好卡在回复点之后
  state.hearts = Math.max(0, (state.hearts ?? MAX_HEARTS) - 1);
}

function renderHeartsDisplay() {
  const hearts = syncHearts();
  let text = "❤️".repeat(hearts) + "🖤".repeat(Math.max(0, MAX_HEARTS - hearts));
  if (hearts < MAX_HEARTS) {
    const msLeft = Math.max(0, state.lastHeartAt + HEART_REGEN_MS - Date.now());
    const mins = Math.ceil(msLeft / 60000);
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    text += h > 0 ? `　下一颗 ${h}小时${m}分钟后` : `　下一颗 ${m}分钟后`;
  }
  el.heartsDisplay.textContent = text;
}

// 心数清零时不硬卡关：不让玩家点新的选项，但给一条出路——去复习队列里
// 挑一条清掉，答对就还一颗心。复习队列本来就空的话说明没东西能清，
// 这种边缘情况直接放行，不然会真的卡死（见 renderSceneContent 里的判断）。
function renderHeartGate() {
  const msg = document.createElement("p");
  msg.className = "heart-gate-msg";
  msg.textContent = "💔 心数用完了，先复习一条已学内容赚回一颗心，才能继续对话。";
  const btn = document.createElement("button");
  btn.className = "primary-btn";
  btn.type = "button";
  btn.textContent = "🎬 开始复习";
  btn.addEventListener("click", startHeartRecoveryFlashback);
  el.choices.appendChild(msg);
  el.choices.appendChild(btn);
}

function startHeartRecoveryFlashback() {
  if (state.reviewQueue.length === 0) {
    renderScene();
    return;
  }
  heartRecoveryMode = true;
  el.flashbackLabel.textContent = "❤️ 复习赚心 · 答对就能回一颗心";
  flashbackOnComplete = () => {
    heartRecoveryMode = false;
    renderScene();
  };
  pendingFlashback = [state.reviewQueue[0]];
  showFlashback();
}

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
  const totalXp = Object.values(state.skills).reduce((a, b) => a + b, 0);
  el.xpTotal.textContent = totalXp;
  el.vocabCount.textContent = state.learnedVocab.length;
  if (el.leaderboardSelfXp) el.leaderboardSelfXp.textContent = totalXp;

  // 每次总分变化顺手推一次排行榜（哪怕没登录也调用，pushLeaderboard 内部会自己判断
  // currentUser 存不存在再决定要不要真的发请求，这里不用重复判断登录状态）。
  const user = window.GameAuth && window.GameAuth.getUser();
  if (user) {
    window.GameAuth.pushLeaderboard({ nickname: getNickname(user), totalXp });
  }
}

// 排行榜：谁都能查（未登录也看得到榜），自己那一行按 user_id 对比高亮，
// 不用额外发一次"查我的排名"请求。
async function renderLeaderboard() {
  if (!window.GameAuth || !el.leaderboardList) return;
  const rows = await window.GameAuth.fetchLeaderboard(10);
  el.leaderboardList.innerHTML = "";
  if (rows.length === 0) {
    el.leaderboardEmpty.classList.remove("hidden");
    return;
  }
  el.leaderboardEmpty.classList.add("hidden");
  const myId = window.GameAuth.getUser() ? window.GameAuth.getUser().id : null;
  rows.forEach((row, i) => {
    const li = document.createElement("li");
    li.className = "leaderboard-row" + (row.user_id === myId ? " leaderboard-row-self" : "");
    li.innerHTML = `
      <span class="leaderboard-rank">${i + 1}</span>
      <span class="leaderboard-name">${row.nickname}</span>
      <span class="leaderboard-xp">${row.total_xp}</span>
    `;
    el.leaderboardList.appendChild(li);
  });
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

// 音效：用 Web Audio API 合成，不依赖外部音频文件。
let sfxCtx = null;
function getSfxCtx() {
  if (!sfxCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    sfxCtx = new Ctx();
  }
  if (sfxCtx.state === "suspended") sfxCtx.resume();
  return sfxCtx;
}

function playTone(freq, startTime, duration, { type = "sine", gain = 0.2, ctx } = {}) {
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  g.gain.setValueAtTime(0.0001, startTime);
  g.gain.exponentialRampToValueAtTime(gain, startTime + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
  osc.connect(g);
  g.connect(ctx.destination);
  osc.start(startTime);
  osc.stop(startTime + duration + 0.02);
}

function playCorrectSfx() {
  try {
    const ctx = getSfxCtx();
    const now = ctx.currentTime;
    playTone(660, now, 0.12, { ctx });
    playTone(880, now + 0.1, 0.16, { ctx });
  } catch (e) {}
}

function playWrongSfx() {
  try {
    const ctx = getSfxCtx();
    const now = ctx.currentTime;
    playTone(220, now, 0.18, { type: "sawtooth", gain: 0.15, ctx });
    playTone(160, now + 0.08, 0.2, { type: "sawtooth", gain: 0.15, ctx });
  } catch (e) {}
}

function playXpSfx() {
  try {
    const ctx = getSfxCtx();
    const now = ctx.currentTime;
    playTone(988, now, 0.08, { type: "triangle", gain: 0.18, ctx });
    playTone(1319, now + 0.06, 0.12, { type: "triangle", gain: 0.18, ctx });
  } catch (e) {}
}

// 变量奖励命中时用的音效：比普通 +XP 多一层上扬的音，跟视觉上的"双倍"一起，
// 听感也要跟平时不一样，不只是加个视觉标签。
function playBonusXpSfx() {
  try {
    const ctx = getSfxCtx();
    const now = ctx.currentTime;
    playTone(988, now, 0.08, { type: "triangle", gain: 0.2, ctx });
    playTone(1319, now + 0.07, 0.1, { type: "triangle", gain: 0.2, ctx });
    playTone(1760, now + 0.14, 0.16, { type: "triangle", gain: 0.22, ctx });
  } catch (e) {}
}

function spawnXpFloat(fromEl, amount, isBonus) {
  const rect = fromEl.getBoundingClientRect();
  const float = document.createElement("span");
  float.className = isBonus ? "xp-float xp-float-bonus" : "xp-float";
  float.textContent = isBonus ? `🎉 双倍 XP! +${amount}` : `+${amount} XP`;
  float.style.left = rect.right - (isBonus ? 100 : 60) + "px";
  float.style.top = rect.top - 6 + "px";
  document.body.appendChild(float);
  setTimeout(() => float.remove(), isBonus ? 1400 : 900);
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

  renderHeartsDisplay();
  el.choices.innerHTML = "";
  const hearts = state.hearts ?? MAX_HEARTS;
  if (hearts <= 0 && state.reviewQueue.length > 0) {
    // 心数清零：不让开新选项，先去复习赚回一颗心（见 renderHeartGate）。
    renderHeartGate();
  } else {
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
  }

  renderSkillPanel();
  renderDailyGoal();
  renderStreakUI();
  updateHistoryNavUI();
}

function handleChoice(idx, btnEl) {
  const node = currentNode();
  const choice = node.choices[idx];
  playAudio(choice.text, btnEl);

  if (choice.correct) {
    Array.from(el.choices.children).forEach((b) => (b.disabled = true));
    // 变量奖励：小概率双倍经验，每次都要重新掷一次骰子，不能按固定节奏出现，
    // 不然玩家会摸出规律，"随机惊喜"就失效了。
    const isBonus = !!choice.xp && Math.random() < BONUS_XP_CHANCE;
    const awardedXp = isBonus ? choice.xp * BONUS_XP_MULTIPLIER : choice.xp || 0;
    state.skills[node.skill] = (state.skills[node.skill] || 0) + awardedXp;
    const already = state.learnedVocab.some((v) => v.en === choice.text);
    if (!already) {
      state.learnedVocab.push({ en: choice.text, zh: choice.zh || node.npcLine.zh, skill: node.skill });
    }
    playCorrectSfx();
    if (choice.xp) {
      spawnXpFloat(btnEl, awardedXp, isBonus);
      setTimeout(isBonus ? playBonusXpSfx : playXpSfx, 150);
    }
    // 连续打卡 + 每日目标只在故事主线答对时结算（不含闪回复习），
    // 见 registerDailyProgress 顶部注释。
    const { justHitGoal } = registerDailyProgress();
    saveState();
    renderStreakUI();
    renderDailyGoal();
    if (justHitGoal) celebrateDailyGoal();
    checkAchievements(); // 技能XP/词汇量刚变，可能刚好摸到某个成就门槛
    // 答对先亮出中文确认理解，不管当前是不是"隐藏中文"模式，停留2秒再翻页，
    // 翻页前把隐藏状态还原，不影响用户原本的显示偏好。
    document.body.classList.remove("hide-zh");
    setTimeout(() => {
      if (hideZh) document.body.classList.add("hide-zh");
      advance(node.next);
    }, 2000);
  } else {
    playWrongSfx();
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
    // 答错额外扣一颗心——跟上面进复习队列的逻辑各管各的，互不影响
    // （心数只影响"能不能开下一个节点的新选项"，不影响复习队列本身怎么记）。
    loseHeart();
    saveState();
    renderHeartsDisplay();
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
// 隔了至少一整天再回来，换成 Emma 口吻的挽留提醒（带实际天数）——
// 20分钟到1天这种短间隔还用"欢迎回来"就够了，天天都说"好几天没等到你"会显得假。
function showReconnectWarmup() {
  if (state.reviewQueue.length === 0) {
    renderScene();
    return;
  }
  const daysAway = Math.floor(reconnectGapMs / (24 * 60 * 60 * 1000));
  el.flashbackLabel.textContent =
    daysAway >= 1
      ? `💌 Emma 已经 ${daysAway} 天没等到你了，快回去见她吧`
      : "👋 欢迎回来，先复习一下";
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
  if (isCorrect) playCorrectSfx();
  else playWrongSfx();

  if (isCorrect) {
    el.flashbackFeedback.textContent = heartRecoveryMode ? "✅ 记住了！回一颗心 ❤️" : "✅ 记住了！";
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
    if (heartRecoveryMode) {
      // 心数清零时专门开的复习通道：答对就还一颗心，跟平常场景末尾/断点热身
      // 的闪回（不带这个标记）区分开，不是随便一次复习都送心。
      state.hearts = Math.min(MAX_HEARTS, (state.hearts ?? MAX_HEARTS) + 1);
      renderHeartsDisplay();
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
  renderStreakUI(); // 连续打卡徽章/提醒横幅在 header 里，不属于 game-screen，结局页也要照常显示
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

// 顶部左边的身份标签：优先显示玩家自己起的名字（state.playerName，不需要登录也能设置），
// 没设置名字才退回"登录了显示花名 / 没登录显示请登录"这套原逻辑。命名跟登录状态解耦——
// 登录只管跨设备同步存档，不是"能不能给角色起名"的前提，上手门槛更低。
// 佩戴了称号（state.equippedTitle）的话，名字前面会带上成就的 icon+标题。
function renderIdentityBadge() {
  const loggedIn = !!(window.GameAuth && window.GameAuth.getUser());
  const name = state.playerName || (loggedIn ? getNickname(window.GameAuth.getUser()) : null);
  if (!name) {
    el.userBadge.textContent = "请登录";
    el.userBadge.classList.remove("logged-in");
    return;
  }
  const titleObj = ACHIEVEMENTS.find((a) => a.id === state.equippedTitle);
  el.userBadge.textContent = titleObj ? `${titleObj.icon}${titleObj.title} · ${name}` : name;
  el.userBadge.classList.add("logged-in");
}

// 右上角 ☰ 菜单是两回事：☰ 一直只是"打开菜单"，不再随登录状态换文字。显示中文/重新开始
// 常驻菜单里；账号区随登录状态在"登录账号"入口和"邮箱 + 退出登录"之间切换。
// 登录状态变化由 auth.js 的 onAuthChange 驱动。
function renderAuthPanel(user) {
  const loggedIn = !!user;
  renderIdentityBadge();
  el.accountLoggedOutItem.classList.toggle("hidden", loggedIn);
  el.accountLoggedInItem.classList.toggle("hidden", !loggedIn);
  if (loggedIn) {
    el.accountMenuEmail.textContent = user.email || "";
    // 刚登录：把当前总分立刻推一次，不用等下一次答对题才上榜。
    const totalXp = Object.values(state.skills).reduce((a, b) => a + b, 0);
    window.GameAuth.pushLeaderboard({ nickname: getNickname(user), totalXp });
  }
  renderLeaderboard();
}

// 头像可选项固定这几个——都是清楚男性形象的 emoji，跟"主角是男性"这条项目约束保持一致，
// 不引入女性/中性选项。
const AVATAR_OPTIONS = ["👨", "🧑‍🦱", "🧔", "👨‍🦰", "🧑‍🦲", "👨‍🦳"];

function renderAvatarPicker() {
  el.avatarPicker.innerHTML = "";
  AVATAR_OPTIONS.forEach((emoji) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "avatar-option";
    btn.textContent = emoji;
    if ((state.playerAvatar || "👨") === emoji) btn.classList.add("selected");
    btn.addEventListener("click", () => {
      el.avatarPicker.querySelectorAll(".avatar-option").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      el.avatarPicker.dataset.selected = emoji;
    });
    el.avatarPicker.appendChild(btn);
  });
  el.avatarPicker.dataset.selected = state.playerAvatar || "👨";
}

el.characterEditBtn.addEventListener("click", () => {
  el.accountMenu.classList.add("hidden");
  el.characterNameInput.value = state.playerName || "";
  renderAvatarPicker();
  el.characterOverlay.classList.add("visible");
});
el.characterCloseBtn.addEventListener("click", () => {
  el.characterOverlay.classList.remove("visible");
});
el.characterSaveBtn.addEventListener("click", () => {
  const name = el.characterNameInput.value.trim();
  state.playerName = name || null;
  state.playerAvatar = el.avatarPicker.dataset.selected || "👨";
  saveState();
  renderIdentityBadge();
  el.characterOverlay.classList.remove("visible");
});

// 成就墙：网格列出全部 ACHIEVEMENTS，未解锁的灰置+锁图标；已解锁的点一下佩戴/取消佩戴。
function renderAchievementsGrid() {
  const unlocked = state.unlockedAchievements || [];
  el.achievementsGrid.innerHTML = "";
  ACHIEVEMENTS.forEach((a) => {
    const isUnlocked = unlocked.includes(a.id);
    const isEquipped = state.equippedTitle === a.id;
    const card = document.createElement("button");
    card.type = "button";
    card.className = "achievement-card" + (isUnlocked ? " unlocked" : " locked") + (isEquipped ? " equipped" : "");
    card.innerHTML = `
      <div class="achievement-card-icon">${isUnlocked ? a.icon : "🔒"}</div>
      <div class="achievement-card-title">${isUnlocked ? a.title : "？？？"}</div>
    `;
    if (isUnlocked) {
      card.addEventListener("click", () => {
        state.equippedTitle = isEquipped ? null : a.id;
        saveState();
        renderIdentityBadge();
        renderAchievementsGrid();
      });
    } else {
      card.disabled = true;
    }
    el.achievementsGrid.appendChild(card);
  });
}

el.achievementsBtn.addEventListener("click", () => {
  el.accountMenu.classList.add("hidden");
  renderAchievementsGrid();
  el.achievementsOverlay.classList.add("visible");
});
el.achievementsCloseBtn.addEventListener("click", () => {
  el.achievementsOverlay.classList.remove("visible");
});

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
  renderIdentityBadge(); // 不用等 GameAuth 的登录回调，playerName 设置了就先显示出来
  checkAchievements(); // 补一次成就检查——老玩家可能早就摸到某些门槛了，回来这次先算清楚
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
