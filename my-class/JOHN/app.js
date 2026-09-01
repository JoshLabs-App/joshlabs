const DATA_BASE = new URL('./data/', import.meta.url);

const PROGRESS_KEY = 'johnReaderLessonId';
const SCALE_KEY = 'johnReaderScale';
const SCALE_MIN = 0.86;
const SCALE_MAX = 1.42;
const SCALE_STEP = 0.04;
const SCALE_DEFAULT = 1.08;

const $badge = document.querySelector('#page-badge');
const $title = document.querySelector('#chapter-title');
const $meta = document.querySelector('#chapter-meta');
const $progressText = document.querySelector('#progress-text');
const $progressFill = document.querySelector('#progress-fill');
const $videoSlot = document.querySelector('#video-slot');
const $body = document.querySelector('#lesson-body');
const $disclaimer = document.querySelector('#disclaimer');
const $prev = document.querySelector('#prev-btn');
const $next = document.querySelector('#next-btn');
const $fontDec = document.querySelector('#font-dec-btn');
const $fontInc = document.querySelector('#font-inc-btn');
const $catalogBtn = document.querySelector('#catalog-btn');
const $catalogModal = document.querySelector('#catalog-modal');
const $catalogBackdrop = document.querySelector('#catalog-backdrop');
const $catalogClose = document.querySelector('#catalog-close');
const $catalogList = document.querySelector('#catalog-list');
const $shareBtn = document.querySelector('#share-btn');

/** @type {{ title: string, disclaimer: string, chapters: Array<{n:number,label:string,file:string,lessons:Array}> }} */
let indexData = null;
/** Flat list of lesson summaries from index */
let flatLessons = [];
/** @type {Map<number, {lessons: Array}>} */
const chapterCache = new Map();

let currentIndex = 0;
let readerScale = Number(localStorage.getItem(SCALE_KEY) || SCALE_DEFAULT);

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function applyScale() {
  readerScale = Math.min(SCALE_MAX, Math.max(SCALE_MIN, readerScale));
  document.documentElement.style.setProperty('--reader-scale', readerScale.toFixed(2));
  localStorage.setItem(SCALE_KEY, readerScale.toFixed(2));
  $fontDec.disabled = readerScale <= SCALE_MIN;
  $fontInc.disabled = readerScale >= SCALE_MAX;
}

async function loadIndex() {
  const res = await fetch(new URL('index.json', DATA_BASE), { cache: 'no-cache' });
  if (!res.ok) throw new Error(`无法加载目录（${res.status}）`);
  indexData = await res.json();
  flatLessons = [];
  for (const chapter of indexData.chapters || []) {
    for (const lesson of chapter.lessons || []) {
      flatLessons.push({
        ...lesson,
        chapterLabel: chapter.label,
        file: chapter.file,
      });
    }
  }
  if ($disclaimer && indexData.disclaimer) {
    $disclaimer.textContent = indexData.disclaimer;
  }
}

async function loadChapter(chapterNum) {
  if (chapterCache.has(chapterNum)) return chapterCache.get(chapterNum);
  const chapterMeta = (indexData.chapters || []).find((c) => c.n === chapterNum);
  if (!chapterMeta) throw new Error(`缺少第 ${chapterNum} 章`);
  const res = await fetch(new URL(chapterMeta.file, DATA_BASE), { cache: 'no-cache' });
  if (!res.ok) throw new Error(`无法加载 ${chapterMeta.file}`);
  const data = await res.json();
  chapterCache.set(chapterNum, data);
  return data;
}

async function resolveLesson(index) {
  const summary = flatLessons[index];
  if (!summary) return null;
  const chapter = await loadChapter(summary.chapter);
  const full = (chapter.lessons || []).find((l) => l.id === summary.id);
  return full || { ...summary, paragraphs: [] };
}

function renderVideo(lesson) {
  if (!lesson.youtubeId) {
    $videoSlot.hidden = false;
    $videoSlot.innerHTML = `
      <div class="video-missing">
        <div>暂无嵌入视频<br />仍可阅读下方讲稿</div>
      </div>
    `;
    return;
  }
  const id = encodeURIComponent(lesson.youtubeId);
  const watchUrl = `https://www.youtube.com/watch?v=${id}`;
  const src = `https://www.youtube.com/embed/${id}`;
  $videoSlot.hidden = false;
  $videoSlot.innerHTML = `
    <iframe
      src="${src}"
      title="${escapeHtml(lesson.title)}"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      loading="lazy"
      referrerpolicy="strict-origin-when-cross-origin"
    ></iframe>
    <p class="video-open-link">
      <a href="${watchUrl}" target="_blank" rel="noopener noreferrer">在 YouTube 打开</a>
    </p>
  `;
}

function renderBody(lesson) {
  const paras = lesson.paragraphs || [];
  if (!paras.length) {
    $body.innerHTML = '<p>本集暂无文稿。</p>';
    return;
  }
  $body.innerHTML = paras.map((p) => `<p>${escapeHtml(p)}</p>`).join('');
}

function updateChrome(summary, absoluteIndex) {
  const total = flatLessons.length;
  $badge.textContent = summary.chapterLabel || `第 ${summary.chapter} 章`;
  $title.textContent = summary.title || '未命名';
  $meta.textContent = summary.meta || '';
  $progressText.textContent = `${absoluteIndex + 1} / ${total}`;
  $progressFill.style.width = `${((absoluteIndex + 1) / Math.max(total, 1)) * 100}%`;
  $prev.disabled = absoluteIndex <= 0;
  $next.disabled = absoluteIndex >= total - 1;
  localStorage.setItem(PROGRESS_KEY, summary.id);
  highlightCatalog(summary.id);
}

function currentShareUrl() {
  const summary = flatLessons[currentIndex];
  const url = new URL(location.pathname, location.origin);
  url.search = '';
  if (summary?.id) url.searchParams.set('id', summary.id);
  return url.href;
}

function syncShareUrl() {
  const next = currentShareUrl();
  const current = `${location.origin}${location.pathname}${location.search}`;
  if (next !== current && next !== location.href) {
    history.replaceState(null, '', next);
  }
}

async function shareCurrentPage() {
  syncShareUrl();
  const url = currentShareUrl();
  try {
    if (!navigator.clipboard?.writeText) throw new Error('clipboard unavailable');
    await navigator.clipboard.writeText(url);
    showShareFeedback('已复制');
  } catch {
    showShareFeedback('复制失败');
  }
}

function showShareFeedback(message) {
  if (!$shareBtn) return;
  $shareBtn.setAttribute('aria-label', message);
  $shareBtn.title = message;
  window.setTimeout(() => {
    $shareBtn.setAttribute('aria-label', '复制本页网址');
    $shareBtn.title = '复制本页网址';
  }, 1800);
}

async function showLesson(index) {
  if (!flatLessons.length) return;
  currentIndex = Math.max(0, Math.min(flatLessons.length - 1, index));
  const summary = flatLessons[currentIndex];
  updateChrome(summary, currentIndex);
  syncShareUrl();
  $body.innerHTML = '<p>载入讲稿…</p>';
  try {
    const lesson = await resolveLesson(currentIndex);
    renderVideo(lesson);
    renderBody(lesson);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (err) {
    $body.innerHTML = `<p>加载失败：${escapeHtml(err.message || err)}</p>`;
  }
}

function openCatalog() {
  $catalogModal.classList.remove('hidden');
  $catalogModal.setAttribute('aria-hidden', 'false');
}

function closeCatalog() {
  $catalogModal.classList.add('hidden');
  $catalogModal.setAttribute('aria-hidden', 'true');
}

function highlightCatalog(id) {
  $catalogList.querySelectorAll('.catalog-item').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.id === id);
  });
}

function buildCatalog() {
  const parts = [];
  for (const chapter of indexData.chapters || []) {
    const items = (chapter.lessons || [])
      .map((lesson) => {
        const flatIndex = flatLessons.findIndex((l) => l.id === lesson.id);
        return `
          <button
            class="catalog-item"
            type="button"
            data-id="${escapeHtml(lesson.id)}"
            data-index="${flatIndex}"
          >
            <strong>${escapeHtml(lesson.title)}</strong>
            <span>${escapeHtml(lesson.meta || chapter.label)}</span>
          </button>
        `;
      })
      .join('');
    parts.push(`
      <section class="catalog-chapter">
        <div class="catalog-chapter-label">${escapeHtml(chapter.label)} · ${chapter.lessons.length} 集</div>
        ${items}
      </section>
    `);
  }
  $catalogList.innerHTML = parts.join('');
}

function initialIndex() {
  const params = new URLSearchParams(location.search);
  const byId = params.get('id') || localStorage.getItem(PROGRESS_KEY);
  if (byId) {
    const found = flatLessons.findIndex((l) => l.id === byId);
    if (found >= 0) return found;
  }
  const byChapter = Number(params.get('chapter'));
  if (Number.isFinite(byChapter) && byChapter > 0) {
    const found = flatLessons.findIndex((l) => l.chapter === byChapter);
    if (found >= 0) return found;
  }
  return 0;
}

$prev.addEventListener('click', () => showLesson(currentIndex - 1));
$next.addEventListener('click', () => showLesson(currentIndex + 1));
$fontDec.addEventListener('click', () => {
  readerScale -= SCALE_STEP;
  applyScale();
});
$fontInc.addEventListener('click', () => {
  readerScale += SCALE_STEP;
  applyScale();
});
$catalogBtn.addEventListener('click', openCatalog);
$catalogClose.addEventListener('click', closeCatalog);
$catalogBackdrop.addEventListener('click', closeCatalog);
$shareBtn?.addEventListener('click', () => {
  void shareCurrentPage();
});
$catalogList.addEventListener('click', (event) => {
  const btn = event.target.closest('.catalog-item');
  if (!btn) return;
  const index = Number(btn.dataset.index);
  closeCatalog();
  if (Number.isFinite(index)) showLesson(index);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeCatalog();
  if (event.key === 'ArrowLeft') showLesson(currentIndex - 1);
  if (event.key === 'ArrowRight') showLesson(currentIndex + 1);
});

async function boot() {
  applyScale();
  try {
    await loadIndex();
    buildCatalog();
    await showLesson(initialIndex());
  } catch (err) {
    $title.textContent = '加载失败';
    $body.innerHTML = `<p>${escapeHtml(err.message || err)}</p>`;
  }
}

boot();
