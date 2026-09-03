// 对话总览页：把所有场景的台词（NPC 台词 + 玩家的正确回答）按剧情顺序摊平列出来，
// 方便通读/收听整段故事——跟游戏内一问一答的答题机制是分开的两件事，这里只读不答。
//
// 内容量会跟着章节数持续变大（目前 19 章、约上千句），所以不会一次性把所有行渲染进
// DOM：数据本身摊平成一个 JS 数组常驻内存（这个量级很轻，几百 KB 封顶），但 DOM 节点
// 分批插入——先渲染前 BATCH_SIZE 句，滚动到底部触发 IntersectionObserver 再接着渲染
// 下一批。连续播放追到还没渲染的行时，也会先把它插进 DOM（ensureRendered），保证播放
// 不会因为还没滚到那里而卡住。

const BATCH_SIZE = 40;
const GAP_MS = 1000; // 连续播放时，每句放完之后停顿的时长

function buildLines() {
  const lines = [];
  GAME_CONTENT.scenes.forEach((scene, sceneIdx) => {
    let nodeId = scene.startNode;
    let guard = 0;
    while (nodeId && scene.nodes[nodeId] && guard++ < 50) {
      const node = scene.nodes[nodeId];
      const correct = node.choices.find((c) => c.correct);

      lines.push({
        sceneIdx,
        sceneTitle: scene.title,
        sceneSubtitle: scene.subtitle,
        speaker: "npc",
        avatar: node.avatar || scene.avatar,
        en: node.npcLine.en,
        zh: node.npcLine.zh
      });

      if (correct) {
        lines.push({
          sceneIdx,
          speaker: "player",
          en: correct.text,
          zh: correct.zh || node.npcLine.zh
        });
      }

      nodeId = node.next;
    }
  });
  return lines;
}

const ALL_LINES = buildLines();

const el = {
  list: document.getElementById("dialogue-list"),
  sentinel: document.getElementById("scroll-sentinel"),
  playAllBtn: document.getElementById("play-all-btn"),
  count: document.getElementById("dialogue-count"),
  zhToggleBtn: document.getElementById("zh-toggle-btn"),
  wordPopup: document.getElementById("word-popup")
};

// 跟主游戏页共用同一份存档（同一个 SAVE_KEY）：这里查过的词也存进 reviewQueue，
// 之后回主游戏玩，闪回复习照样会抽到这些词。如果玩家还没玩过游戏、本地没有存档，
// 就按主游戏 freshState() 同样的结构现造一份——保证形状对得上，回主游戏时
// main.js 的 loadState() 才认得这份存档（它靠 parsed.skills 存在与否判断有效性）。
const SAVE_KEY = "eng-rpg-london-day1";

function freshGameState() {
  const skills = {};
  for (const key of Object.keys(GAME_CONTENT.skillMeta)) skills[key] = 0;
  return {
    sceneIndex: 0,
    nodeId: GAME_CONTENT.scenes[0].startNode,
    skills,
    learnedVocab: [],
    reviewQueue: [],
    finished: false,
    lastActiveAt: Date.now()
  };
}

function loadGameState() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return freshGameState();
    const parsed = JSON.parse(raw);
    if (!parsed || !parsed.skills) return freshGameState();
    return parsed;
  } catch (e) {
    return freshGameState();
  }
}

let gameState = loadGameState();

function saveGameState() {
  gameState.lastActiveAt = Date.now();
  localStorage.setItem(SAVE_KEY, JSON.stringify(gameState));
}

function queueWordForReview(word, meaning) {
  const existing = gameState.reviewQueue.find((r) => r.en === word && r.kind === "word");
  if (existing) return;
  gameState.reviewQueue.push({
    en: word,
    zh: meaning,
    kind: "word",
    streak: 0,
    status: "active",
    queuedAtScene: gameState.sceneIndex
  });
  saveGameState();
}

// 跟主游戏页共用同一个 localStorage key，两边的"隐藏中文"是同一个开关，
// 在哪个页面切换，另一个页面下次打开也是同样的状态。
const ZH_HIDE_KEY = "eng-rpg-hide-zh";
let hideZh = localStorage.getItem(ZH_HIDE_KEY) === "1";

function applyZhVisibility() {
  document.body.classList.toggle("hide-zh", hideZh);
  el.zhToggleBtn.textContent = hideZh ? "显示中文" : "隐藏中文";
  el.zhToggleBtn.setAttribute("aria-pressed", String(!hideZh));
}

el.zhToggleBtn.addEventListener("click", () => {
  hideZh = !hideZh;
  localStorage.setItem(ZH_HIDE_KEY, hideZh ? "1" : "0");
  applyZhVisibility();
});

applyZhVisibility();

let renderedCount = 0;
let currentAudio = null;
let currentRowEl = null;
let playToken = 0; // 递增一次，就让当前正在跑的连续播放循环失效——停止/切单句播放时用

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function wrapWordsHTML(text) {
  return escapeHtml(text).replace(
    /[A-Za-zÀ-ÿ']+/g,
    (word) => `<span class="word" data-word="${word.toLowerCase()}">${word}</span>`
  );
}

// 点单词：弹出翻译 + 放这个词的发音，2.5 秒后自动收起；查过的词记进 reviewQueue。
const WORD_POPUP_MS = 2500;
let wordPopupTimer = null;

function showWordPopup(wordEl) {
  const word = wordEl.dataset.word;
  const meaning = typeof WORD_DICT !== "undefined" ? WORD_DICT[word] : null;
  if (!meaning) return;

  // 点单词跟点整句播放一样，算一次手动打断——正在跑的连续播放先停下来，
  // 不然这个词的读音会跟连续播放里下一句的音频抢着放。
  playToken++;
  setPlayingAllUI(false);

  el.wordPopup.textContent = `${wordEl.textContent} ${meaning}`;
  el.wordPopup.classList.remove("hidden");

  const rect = wordEl.getBoundingClientRect();
  const popRect = el.wordPopup.getBoundingClientRect();
  let left = rect.left + rect.width / 2 - popRect.width / 2;
  left = Math.max(8, Math.min(left, window.innerWidth - popRect.width - 8));
  const CLEARANCE = 36;
  let top = rect.top - popRect.height - CLEARANCE;
  if (top < 8) top = rect.bottom + CLEARANCE;
  el.wordPopup.style.left = left + "px";
  el.wordPopup.style.top = top + "px";

  document.querySelectorAll(".word.word-active").forEach((w) => w.classList.remove("word-active"));
  wordEl.classList.add("word-active");

  clearTimeout(wordPopupTimer);
  wordPopupTimer = setTimeout(hideWordPopup, WORD_POPUP_MS);

  if (typeof WORD_AUDIO_MANIFEST !== "undefined") {
    playLineAudio(word, WORD_AUDIO_MANIFEST);
  }

  queueWordForReview(word, meaning);
}

function hideWordPopup() {
  clearTimeout(wordPopupTimer);
  el.wordPopup.classList.add("hidden");
  document.querySelectorAll(".word.word-active").forEach((w) => w.classList.remove("word-active"));
}

// 点整句播放：在隐藏中文模式下，顺手把这一句的翻译临时露出来 3 秒再收回去，
// 当作一个提示，不是永久显示（永久显示就是把"隐藏中文"关掉，两件事分开）。
const REVEAL_ZH_MS = 3000;
let revealTimer = null;

function revealTranslation(idx) {
  document.querySelectorAll(".t-row.t-zh-reveal").forEach((r) => r.classList.remove("t-zh-reveal"));
  const rowEl = el.list.querySelector(`.t-row[data-idx="${idx}"]`);
  if (!rowEl) return;
  rowEl.classList.add("t-zh-reveal");
  clearTimeout(revealTimer);
  revealTimer = setTimeout(() => rowEl.classList.remove("t-zh-reveal"), REVEAL_ZH_MS);
}

function renderSceneHeader(line) {
  const head = document.createElement("div");
  head.className = "t-scene-head";
  head.innerHTML =
    `<span class="t-scene-title">${escapeHtml(line.sceneTitle)}</span>` +
    `<span class="t-scene-sub zh-inline">${escapeHtml(line.sceneSubtitle || "")}</span>`;
  return head;
}

function renderRow(line, idx) {
  const row = document.createElement("div");
  row.className = "t-row t-row-" + line.speaker;
  row.dataset.idx = idx;

  const avatar = document.createElement("div");
  avatar.className = "t-avatar" + (line.speaker === "player" ? " t-avatar-player" : "");
  if (line.speaker === "player" && gameState.playerAvatarImage) {
    const img = document.createElement("img");
    img.src = gameState.playerAvatarImage;
    img.alt = "";
    avatar.appendChild(img);
  } else {
    avatar.textContent = line.speaker === "player" ? (gameState.playerAvatar || "👨") : line.avatar || "🙂";
  }

  const bubble = document.createElement("div");
  bubble.className = "t-bubble";
  bubble.setAttribute("role", "button");
  bubble.tabIndex = 0;
  bubble.innerHTML =
    `<div class="t-en">${wrapWordsHTML(line.en)}</div>` +
    `<div class="t-zh zh-inline">${escapeHtml(line.zh || "")}</div>`;
  // 点在单词上：只查词，不触发整句播放（跟主游戏台词区的规则一致）。
  bubble.addEventListener("click", (e) => {
    const wordEl = e.target.closest(".word");
    if (wordEl) {
      showWordPopup(wordEl);
      return;
    }
    revealTranslation(idx);
    playSingle(idx);
  });
  bubble.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      revealTranslation(idx);
      playSingle(idx);
    }
  });

  if (line.speaker === "player") {
    row.appendChild(bubble);
    row.appendChild(avatar);
  } else {
    row.appendChild(avatar);
    row.appendChild(bubble);
  }
  return row;
}

function renderBatch() {
  if (renderedCount >= ALL_LINES.length) return false;
  const frag = document.createDocumentFragment();
  const end = Math.min(renderedCount + BATCH_SIZE, ALL_LINES.length);
  let lastSceneIdx = renderedCount > 0 ? ALL_LINES[renderedCount - 1].sceneIdx : -1;

  for (let i = renderedCount; i < end; i++) {
    const line = ALL_LINES[i];
    if (line.sceneIdx !== lastSceneIdx) {
      frag.appendChild(renderSceneHeader(line));
      lastSceneIdx = line.sceneIdx;
    }
    frag.appendChild(renderRow(line, i));
  }

  el.list.insertBefore(frag, el.sentinel);
  renderedCount = end;
  el.count.textContent = `已显示 ${renderedCount} / ${ALL_LINES.length} 句`;
  return true;
}

// 播放追到的行如果还没渲染出来，先把它（连同它之前所有还没渲染的批次）补上，
// 不然 querySelector 找不到对应的 DOM 节点，也没法把它滚动到可视区域。
function ensureRendered(idx) {
  while (renderedCount <= idx && renderedCount < ALL_LINES.length) {
    renderBatch();
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) renderBatch();
    });
  },
  { rootMargin: "600px" }
);
observer.observe(el.sentinel);

function playLineAudio(text, manifest) {
  return new Promise((resolve) => {
    // 打断上一段还没放完的音频（整句或单词共用这一个 currentAudio）时，
    // 顺手把它自己的 Promise 也 resolve 掉——单纯 pause() 不会触发 ended，
    // 不然连续播放循环里那个 await 就永远等不到头，直接卡死。
    if (currentAudio) {
      currentAudio.pause();
      if (currentAudio._resolve) currentAudio._resolve();
      currentAudio = null;
    }
    const activeManifest = manifest || (typeof AUDIO_MANIFEST !== "undefined" ? AUDIO_MANIFEST : null);
    const src = activeManifest ? activeManifest[text] : null;
    if (!src) {
      resolve();
      return;
    }
    const audio = new Audio(src);
    audio._resolve = resolve;
    currentAudio = audio;
    const done = () => {
      if (currentAudio === audio) currentAudio = null;
      resolve();
    };
    audio.addEventListener("ended", done, { once: true });
    audio.addEventListener("error", done, { once: true });
    audio.play().catch(done);
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function highlight(idx) {
  if (currentRowEl) currentRowEl.classList.remove("t-playing");
  const rowEl = el.list.querySelector(`.t-row[data-idx="${idx}"]`);
  if (rowEl) {
    rowEl.classList.add("t-playing");
    rowEl.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  currentRowEl = rowEl;
}

function clearHighlight() {
  if (currentRowEl) currentRowEl.classList.remove("t-playing");
  currentRowEl = null;
}

function setPlayingAllUI(isPlaying) {
  el.playAllBtn.textContent = isPlaying ? "⏹ 停止播放" : "▶ 连续播放全部对话";
  el.playAllBtn.classList.toggle("playing", isPlaying);
  el.playAllBtn.dataset.playing = isPlaying ? "1" : "0";
}

// 点单句：打断正在跑的连续播放（如果有），只放这一句。
async function playSingle(idx) {
  playToken++;
  setPlayingAllUI(false);
  const myToken = playToken;
  ensureRendered(idx);
  highlight(idx);
  await playLineAudio(ALL_LINES[idx].en);
  if (myToken !== playToken) return; // 这期间又被打断了，不清高亮（新一轮会自己管）
  clearHighlight();
}

// 连续播放：从 startIdx 一路放到最后一句，中间自动停顿 GAP_MS，不需要手动点下一句。
async function playAllFrom(startIdx) {
  const myToken = ++playToken;
  setPlayingAllUI(true);
  for (let i = startIdx; i < ALL_LINES.length; i++) {
    if (myToken !== playToken) return;
    ensureRendered(i);
    highlight(i);
    await playLineAudio(ALL_LINES[i].en);
    if (myToken !== playToken) return;
    await sleep(GAP_MS);
  }
  if (myToken === playToken) {
    clearHighlight();
    setPlayingAllUI(false);
  }
}

function stopPlayback() {
  playToken++;
  if (currentAudio) currentAudio.pause();
  clearHighlight();
  setPlayingAllUI(false);
}

el.playAllBtn.addEventListener("click", () => {
  if (el.playAllBtn.dataset.playing === "1") {
    stopPlayback();
  } else {
    playAllFrom(0);
  }
});

renderBatch();
