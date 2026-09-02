// 游戏引擎：状态机 + 渲染 + 回忆闪回复习逻辑

const SAVE_KEY = "eng-rpg-london-day1";

const el = {
  scenePanel: document.querySelector(".scene-panel"),
  dialogueBubble: document.querySelector(".dialogue-bubble"),
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
  transitionContinueBtn: document.getElementById("transition-continue-btn")
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
}

let state = loadState();
// 上次存档时间到这次打开的间隔——loadState() 读到的是上一次会话留下的旧值，
// 必须在第一次 saveState() 覆盖掉它之前算出来，才能判断这次是不是"回访"。
const reconnectGapMs = state.lastActiveAt ? Date.now() - state.lastActiveAt : 0;
let pendingFlashback = []; // queue of items to review before advancing scene
let flashbackOnComplete = goToNextScene; // 闪回队列清空后要做什么：正常翻页，或断点热身后继续当前场景
let wrongButtonsThisNode = new Set();

// 一直没选答案的话，隔几秒把台词自动重播一遍，提醒玩家还在等TA选。
// nodeGen 是"第几次渲染节点"的代号，节点一换、或玩家选了任意选项，就自增失效，
// 防止旧节点的自动重播定时器在切到新节点之后还继续响。
const AUTO_REPLAY_GAP_MS = 3000;
let nodeGen = 0;
let autoReplayTimer = null;

function scheduleAutoReplay(text, gen) {
  clearTimeout(autoReplayTimer);
  autoReplayTimer = setTimeout(() => {
    if (gen !== nodeGen) return; // 这期间已经切节点或已经选过答案了，这轮作废
    playAudio(text, el.npcAudioBtn).then(() => {
      if (gen !== nodeGen) return;
      scheduleAutoReplay(text, gen);
    });
  }, AUTO_REPLAY_GAP_MS);
}

// 中文翻译显隐：全局开关，存在 localStorage 里跨场景/跨次打开都记得。
// 只影响台词下方的中文翻译（.npc-zh），不影响回忆闪回的中文提示——那是游戏机制本身要考的。
const ZH_HIDE_KEY = "eng-rpg-hide-zh";
let hideZh = localStorage.getItem(ZH_HIDE_KEY) === "1";

// 静音开关：自动播放/自动重播/点空白重播已经够频繁了，喇叭图标不再是"再放一遍"，
// 改成"开关声音"——点一下静音，再点一下恢复。playAudio() 统一在这里拦，
// 不用在每个调用它的地方各自判断。
const AUDIO_MUTED_KEY = "eng-rpg-audio-muted";
let audioMuted = localStorage.getItem(AUDIO_MUTED_KEY) === "1";

function applyAudioMuted() {
  el.npcAudioBtn.textContent = audioMuted ? "🔇" : "🔊";
  el.npcAudioBtn.setAttribute("aria-label", audioMuted ? "取消静音" : "静音");
  el.npcAudioBtn.setAttribute("aria-pressed", String(audioMuted));
}

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
  return text.replace(/[A-Za-z']+/g, (word) => `<span class="word" data-word="${word.toLowerCase()}">${word}</span>`);
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

  clearTimeout(wordPopupTimer);
  wordPopupTimer = setTimeout(hideWordPopup, WORD_POPUP_MS);

  queueWordForReview(word, meaning);
}

function hideWordPopup() {
  clearTimeout(wordPopupTimer);
  el.wordPopup.classList.add("hidden");
  document.querySelectorAll(".word.word-active").forEach((w) => w.classList.remove("word-active"));
}

el.npcEn.addEventListener("click", (e) => {
  const wordEl = e.target.closest(".word");
  if (!wordEl) return;
  showWordPopup(wordEl);
});

function currentScene() {
  return GAME_CONTENT.scenes[state.sceneIndex];
}

function currentNode() {
  return currentScene().nodes[state.nodeId];
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
function playAudio(text, btnEl) {
  if (audioMuted) return Promise.resolve();
  const src = typeof AUDIO_MANIFEST !== "undefined" ? AUDIO_MANIFEST[text] : null;
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

  nodeGen++; // 换节点了，上一个节点排的自动重播定时器自动作废
  const myGen = nodeGen;

  hideWordPopup();
  renderProgress();
  el.sceneTitle.textContent = scene.title;
  el.sceneSubtitle.textContent = scene.subtitle;
  el.avatar.textContent = node.avatar || scene.avatar;
  el.npcEn.innerHTML = wrapWordsHTML(node.npcLine.en);
  el.npcZh.textContent = node.npcLine.zh;
  playAudio(node.npcLine.en, el.npcAudioBtn).then(() => scheduleAutoReplay(node.npcLine.en, myGen));
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
}

function handleChoice(idx, btnEl) {
  nodeGen++; // 已经选了（哪怕选错），停掉这个节点的自动重播，不用再提醒
  clearTimeout(autoReplayTimer);
  const node = currentNode();
  const choice = node.choices[idx];
  const audioDone = playAudio(choice.text, btnEl);

  if (choice.correct) {
    Array.from(el.choices.children).forEach((b) => (b.disabled = true));
    state.skills[node.skill] = (state.skills[node.skill] || 0) + (choice.xp || 0);
    const already = state.learnedVocab.some((v) => v.en === choice.text);
    if (!already) {
      state.learnedVocab.push({ en: choice.text, zh: choice.zh || node.npcLine.zh, skill: node.skill });
    }
    if (choice.xp) spawnXpFloat(btnEl, choice.xp);
    saveState();
    // 等选项的配音真正播完，再多停 1 秒给玩家读完，才切下一句
    audioDone.then(() => {
      setTimeout(() => advance(node.next), 1000);
    });
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
  pendingFlashback = [];
  el.endScreen.classList.add("hidden");
  el.gameScreen.classList.remove("hidden");
  renderScene();
}

el.resetBtn.addEventListener("click", () => {
  if (confirm("确定要重新开始吗？当前进度会清空。")) resetGame();
});
el.restartBtn.addEventListener("click", resetGame);
el.npcAudioBtn.addEventListener("click", () => {
  audioMuted = !audioMuted;
  localStorage.setItem(AUDIO_MUTED_KEY, audioMuted ? "1" : "0");
  applyAudioMuted();
  if (!audioMuted) playAudio(currentNode().npcLine.en, el.npcAudioBtn);
});
// 点对话框里的空白处也能重播，不用非得精准点中那个小喇叭图标——
// 但点单词（长按查词）或喇叭本身时跳过，避免和它们各自的逻辑重复触发。
el.dialogueBubble.addEventListener("click", (e) => {
  if (e.target.closest(".word") || e.target.closest("#npc-audio-btn")) return;
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
});

applyZhVisibility();
applyAudioMuted();

// 进页面直接开始，不额外插入"点击开始"的确认步骤。手机浏览器不允许没有用户
// 手势就自动放声音，所以第一句台词的自动配音在部分设备上可能放不出来——
// 玩家可以点台词旁边的 🔊 按钮手动听，不为了保证自动配音去插一个额外的点击关卡。
if (state.finished) {
  showEndScreen();
} else if (reconnectGapMs > RECONNECT_GAP_MS) {
  showReconnectWarmup();
} else {
  renderScene();
}
