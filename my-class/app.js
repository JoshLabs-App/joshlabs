import { appAssetPath, getAppBasePath } from './base-path.js';
import {
  detectSundayOccasions,
  extractSundayBibleBook,
  matchesSundayBookFilter,
  matchesSundayOccasionFilter,
  SUNDAY_OCCASION_FILTERS,
} from './sunday-classify.js';

const STORAGE_KEY = 'sermon-progress-v2';
const LISTENED_KEY = 'sermon-listened-v2';
const CURRENT_KEY = 'sermon-current-v2';
const DIRECTORY_KEY = 'sermon-directory-v2';
const CATEGORY_KEY = 'sermon-category-v2';
const CATEGORY_SELECT_KEY = 'sermon-category-select-v2';
const SPEAKER_KEY = 'sermon-speaker-v1';
const RATE_KEY = 'sermon-rate-v2';
const FAVORITES_KEY = 'sermon-favorites-v2';
const NOTES_KEY = 'sermon-notes-v2';
const SESSION_KEY = 'sermon-session-v1';
const SUNDAY_BOOK_FILTER_KEY = 'sermon-sunday-book-filter-v1';
const SUNDAY_OCCASION_FILTER_KEY = 'sermon-sunday-occasion-filter-v1';
const SEARCH_QUERY_KEY = 'sermon-search-query-v1';
const VIEW_KEY = 'sermon-view-v1';
const SHARE_QUERY_KEY = 'p';

const CATEGORY_ORDER = ['主日', '新约', '旧约', '系列'];
const DEFAULT_CATEGORY = '新约';
const SPEAKERS = [
  { id: 'kou', label: '寇绍涵' },
  { id: 'gaolu', label: '高路' },
];
const DEFAULT_SPEAKER = 'gaolu';
const SPEEDS = [1, 1.25, 1.5, 1.75, 2];

const state = {
  data: null,
  catalogBooks: [],
  books: [],
  tracks: [],
  progress: loadJSON(STORAGE_KEY, {}),
  listened: loadJSON(LISTENED_KEY, {}),
  favorites: loadJSON(FAVORITES_KEY, {}),
  notes: loadJSON(NOTES_KEY, {}),
  currentTrack: null,
  selectedBookTitle: loadStoredString(DIRECTORY_KEY),
  selectedSpeaker: loadSelectedSpeaker() || DEFAULT_SPEAKER,
  selectedCategory: loadSelectedCategory() || DEFAULT_CATEGORY,
  categorySelections: normalizeCategorySelections(loadJSON(CATEGORY_SELECT_KEY, {})),
  searchQuery: loadStoredString(SEARCH_QUERY_KEY) || '',
  sundayCatalog: [],
  sundayBookFilter: loadStoredString(SUNDAY_BOOK_FILTER_KEY) || 'all',
  sundayOccasionFilter: loadStoredString(SUNDAY_OCCASION_FILTER_KEY) || 'all',
  playbackRate: loadPlaybackRate(),
  activeView: 'sermon',
  sleepTimerId: null,
  sleepTimerLabel: '',
  audioAliases: new Map(),
};

const $audio = document.querySelector('#audio');
const $playToggle = document.querySelector('#play-toggle');
const $progressSlider = document.querySelector('#progress-slider');
const $trackTitle = document.querySelector('#track-title');
const $trackBook = document.querySelector('#track-book');
const $trackDate = document.querySelector('#track-date');
const $timeCurrent = document.querySelector('#time-current');
const $timeTotal = document.querySelector('#time-total');
const $categoryBookList = document.querySelector('#category-book-list');
const $sundayFilterPanel = document.querySelector('#sunday-filter-panel');
const $catalogSearchInput = document.querySelector('#catalog-search-input');
const $catalogSearchClear = document.querySelector('#catalog-search-clear');
const $speakerTabs = document.querySelectorAll('.speaker-tab');
const $categoryTabs = document.querySelectorAll('.category-tab');
const $selectedBookTracks = document.querySelector('#selected-book-tracks');
const $skipBackButton = document.querySelector('#skip-back-button');
const $skipForwardButton = document.querySelector('#skip-forward-button');
const $prevButton = document.querySelector('#prev-button');
const $nextButton = document.querySelector('#next-button');
const $shareButton = document.querySelector('#share-button');
const $shareSheet = document.querySelector('#share-sheet');
const $shareSheetTitle = document.querySelector('#share-sheet-title');
const $shareSheetLead = document.querySelector('#share-sheet-lead');
const $shareSheetStatus = document.querySelector('#share-sheet-status');
const $speedButton = document.querySelector('#speed-button');
const $sermonView = document.querySelector('#sermon-view');
const $resourcesView = document.querySelector('#resources-view');
const $resourcesShareButton = document.querySelector('#resources-share-button');
const $playerSection = document.querySelector('#player-section');
const $pageTitle = document.querySelector('#page-title');
const $pageSubtitle = document.querySelector('#page-subtitle');
const $pageBadge = document.querySelector('#page-badge');
const $dockItems = document.querySelectorAll('.dock-item');
const isStandaloneLaunch =
  window.matchMedia('(display-mode: standalone)').matches ||
  window.matchMedia('(display-mode: fullscreen)').matches ||
  window.navigator.standalone === true;
const launchStartedAt = Date.now();

const AUDIO_SOURCE_HOSTS = new Set(['ochopechurch.org', 'www.ochopechurch.org']);

let saveSessionTimer = null;
let searchRenderTimer = null;
let pendingScrollTop = 0;
let shareToastTimer = null;
let shareIdByKey = new Map();
let shareKeyById = new Map();
let launchDismissTimer = null;
let launchFallbackTimer = null;

function urlLooksLikeShare() {
  try {
    const url = new URL(window.location.href);
    if (url.searchParams.get(SHARE_QUERY_KEY)) return true;
    const base = getAppBasePath();
    let rest = url.pathname;
    if (base && rest.startsWith(base)) rest = rest.slice(base.length) || '/';
    const parts = rest.split('/').filter(Boolean);
    const first = parts[0] === 'index.html' ? parts[1] : parts[0];
    const id = Number(first);
    return Number.isInteger(id) && id > 0;
  } catch {
    return false;
  }
}

function loadInitialView() {
  if (urlLooksLikeShare()) return 'sermon';

  try {
    const params = new URLSearchParams(window.location.search);
    const view = params.get('view');
    if (view === 'resources' || view === 'sermon') return view;
  } catch {}

  try {
    const stored = window.localStorage.getItem(VIEW_KEY);
    if (stored === 'resources' || stored === 'sermon') return stored;
  } catch {}

  return 'sermon';
}

function loadJSON(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveJSON(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

function saveCategorySelections() {
  saveJSON(CATEGORY_SELECT_KEY, state.categorySelections);
  scheduleSaveSession();
}

function loadStoredString(key) {
  try {
    return window.localStorage.getItem(key) || '';
  } catch {
    return '';
  }
}

function loadPlaybackRate() {
  const rate = Number(loadStoredString(RATE_KEY));
  return SPEEDS.includes(rate) ? rate : 1;
}

function normalizeCategory(category) {
  if (category === '其他' || category === '其它') return '系列';
  return CATEGORY_ORDER.includes(category) ? category : '';
}

function normalizeCategorySelectionsFlat(selections) {
  const next = {};
  for (const [category, title] of Object.entries(selections || {})) {
    const normalized = normalizeCategory(category);
    if (normalized) next[normalized] = title;
  }
  return next;
}

function normalizeCategorySelections(selections) {
  if (!selections || typeof selections !== 'object') {
    return { gaolu: {}, kou: {} };
  }

  if ('gaolu' in selections || 'kou' in selections) {
    return {
      gaolu: normalizeCategorySelectionsFlat(selections.gaolu),
      kou: normalizeCategorySelectionsFlat(selections.kou),
    };
  }

  return {
    gaolu: normalizeCategorySelectionsFlat(selections),
    kou: {},
  };
}

function loadSelectedSpeaker() {
  const stored = loadStoredString(SPEAKER_KEY);
  return SPEAKERS.some((speaker) => speaker.id === stored) ? stored : '';
}

function getBookSpeaker(book) {
  return book?.speaker || 'gaolu';
}

function getSpeakerSelections(speaker = state.selectedSpeaker) {
  return state.categorySelections[speaker] || {};
}

function setCategorySelection(category, title, speaker = state.selectedSpeaker) {
  const normalized = normalizeCategory(category);
  if (!normalized) return;
  if (!state.categorySelections[speaker]) {
    state.categorySelections[speaker] = {};
  }
  if (title) {
    state.categorySelections[speaker][normalized] = title;
  } else {
    delete state.categorySelections[speaker][normalized];
  }
  saveCategorySelections();
}

function setSelectedSpeaker(speaker) {
  const nextSpeaker = SPEAKERS.some((item) => item.id === speaker) ? speaker : DEFAULT_SPEAKER;
  state.selectedSpeaker = nextSpeaker;
  try {
    window.localStorage.setItem(SPEAKER_KEY, nextSpeaker);
  } catch {}
  if (nextSpeaker === 'kou' && state.selectedCategory === '主日') {
    setSelectedCategory(getDefaultCategoryForSpeaker(nextSpeaker));
  }
  refreshSpeakerCatalog();
  scheduleSaveSession();
}

function getDefaultCategoryForSpeaker(speaker = state.selectedSpeaker) {
  if (speaker === 'kou') {
    return (
      CATEGORY_ORDER.find(
        (category) => category !== '主日' && state.books.some((book) => book.category === category),
      ) || '新约'
    );
  }
  return DEFAULT_CATEGORY;
}

function refreshSpeakerCatalog() {
  state.books = state.catalogBooks.filter((book) => getBookSpeaker(book) === state.selectedSpeaker);
  rebuildSundayCatalog();
  buildAudioAliasIndex(state.books);
  state.tracks = state.books.flatMap((book) =>
    book.lessons.map((lesson) => ({
      bookTitle: book.title,
      bookCategory: book.category,
      speaker: getBookSpeaker(book),
      isSundaySeries: Boolean(book.isSundaySeries),
      trackNo: lesson.trackNo,
      storageKey: trackStorageKey(getBookSpeaker(book), book.title, lesson.trackNo),
      lesson:
        book.category === '主日' || book.isSundaySeries
          ? lesson.lesson || lesson.displayLabel || `第${lesson.trackNo}课`
          : lesson.displayLabel || lesson.lesson || `第${lesson.trackNo}课`,
      teacher: lesson.teacher || book.latestTeacher || '讲员',
      audioSrc: lesson.audioSrc,
      date: lesson.lessonDate,
      fileUrl: lesson.lessonFileUrl,
      videoUrl: lesson.videoUrl,
      note: getNote(lesson.audioSrc),
    })),
  );
  buildShareIndex(state.tracks);
}

function loadSelectedCategory() {
  return normalizeCategory(loadStoredString(CATEGORY_KEY));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function normalize(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}

function matchesSearchQuery(parts, query = normalize(state.searchQuery)) {
  if (!query) return true;
  return normalize(parts.filter(Boolean).join(' ')).includes(query);
}

function setSearchQuery(value) {
  state.searchQuery = String(value || '').trim();
  try {
    if (state.searchQuery) {
      window.localStorage.setItem(SEARCH_QUERY_KEY, state.searchQuery);
    } else {
      window.localStorage.removeItem(SEARCH_QUERY_KEY);
    }
  } catch {}
  syncSearchField();
}

function clearSearchQuery() {
  setSearchQuery('');
  renderAll();
  scheduleSaveSession();
}

function syncSearchField() {
  if (!$catalogSearchInput) return;
  if ($catalogSearchInput.value !== state.searchQuery) {
    $catalogSearchInput.value = state.searchQuery;
  }
  if ($catalogSearchClear) {
    $catalogSearchClear.hidden = !state.searchQuery;
  }
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const total = Math.floor(seconds);
  const minutes = Math.floor(total / 60);
  const remain = total % 60;
  return `${minutes}:${String(remain).padStart(2, '0')}`;
}

function formatDate(value) {
  if (!value) return '--';
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

function buildArtDataUrl(title, subtitle, accent = '#FFB100') {
  const safeTitle = escapeHtml(title || '讲道集');
  const safeSubtitle = escapeHtml(subtitle || 'Sunday');
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320" fill="none">
      <defs>
        <radialGradient id="fade" cx="50%" cy="38%" r="55%">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.14"/>
          <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="320" height="320" fill="#FFFBF3"/>
      <circle cx="160" cy="120" r="100" fill="url(#fade)"/>
      <rect x="48" y="48" width="224" height="224" rx="12" fill="#FFFFFF" stroke="#EAEAEA" stroke-width="1"/>
      <rect x="72" y="88" width="176" height="2" rx="1" fill="${accent}" fill-opacity="0.35"/>
      <rect x="72" y="230" width="176" height="2" rx="1" fill="${accent}" fill-opacity="0.15"/>
      <text x="160" y="158" text-anchor="middle" fill="#2A2826" font-family="Noto Serif SC, Songti SC, STSong, serif" font-size="26" font-weight="600">${safeTitle}</text>
      <text x="160" y="186" text-anchor="middle" fill="#7A7570" font-family="PingFang SC, Microsoft YaHei, sans-serif" font-size="13" font-weight="500" letter-spacing="0.5">${safeSubtitle}</text>
    </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function primaryBookTitle(title) {
  return String(title || '')
    .split(/[、，,\/]/)
    .map((part) => part.trim())
    .find(Boolean) || '';
}

function normalizeCloudfrontAudioUrl(url) {
  let value = String(url || '').split('#')[0].trim();
  if (!value) return '';

  // 修正个别错误的分辨率变体（403），但不要盲目给普通 .mp4 追加 .h.mp4：
  // 不同 CGNTV CDN 使用不同格式（寇绍涵用普通 .mp4），
  // 数据里已存正确可播的地址，强行改写会导致寇绍涵全部 403。
  value = value.replace(/\.h480x288\.h\.mp4$/i, '.h.mp4');
  value = value.replace(/\.h1280x720\.mp4$/i, '.h.mp4');

  return value;
}

function cleanRemoteAudioUrl(url) {
  return normalizeCloudfrontAudioUrl(url);
}

function resolveAudioSrc(lesson) {
  return cleanRemoteAudioUrl(lesson.audioUrl) || lesson.localAudioUrl || '';
}

function resolveLessonDisplayLabel(lesson, index = 0) {
  const direct = String(lesson.lesson || '').trim();
  if (direct) {
    const compact = direct.match(/^第?\s*(\d{1,3})\s*(?:课|講|讲)?$/);
    if (compact) return compact[1];
    if (/^\d{1,3}$/.test(direct)) return direct;
    return String(index + 1);
  }

  return String(index + 1);
}

function formatSundaySermonTitle(lesson) {
  const raw = String(lesson?.lesson || lesson?.displayLabel || '').trim();
  return raw || '未命名讲道';
}

function buildSundayCatalogEntry(lesson, book) {
  const displayTitle = formatSundaySermonTitle(lesson);
  const entry = {
    ...lesson,
    bookTitle: book.title,
    displayTitle,
    bibleBook: extractSundayBibleBook(displayTitle),
  };
  entry.occasions = detectSundayOccasions(entry);
  return entry;
}

function rebuildSundayCatalog() {
  state.sundayCatalog = state.books
    .filter((book) => book.category === '主日' && getBookSpeaker(book) === 'gaolu')
    .flatMap((book) => book.lessons.map((lesson) => buildSundayCatalogEntry(lesson, book)));
}

function getSundayCatalogBySearch() {
  return state.sundayCatalog.filter((sermon) =>
    matchesSearchQuery([
      sermon.displayTitle,
      sermon.lesson,
      sermon.lessonDate,
      sermon.bookTitle,
      sermon.teacher,
      sermon.bibleBook,
    ]),
  );
}

function getSundaySermons() {
  return getSundayCatalogBySearch()
    .filter((sermon) => matchesSundayBookFilter(sermon, state.sundayBookFilter))
    .filter((sermon) => matchesSundayOccasionFilter(sermon, state.sundayOccasionFilter))
    .sort((a, b) => {
      const delta = new Date(b.lessonDate || 0).getTime() - new Date(a.lessonDate || 0).getTime();
      if (delta !== 0) return delta;
      return a.displayTitle.localeCompare(b.displayTitle, 'zh-Hans');
    });
}

function getSundayBookFilterOptions(catalog) {
  const counts = new Map();
  let themeCount = 0;
  for (const sermon of catalog) {
    if (sermon.bibleBook) {
      counts.set(sermon.bibleBook, (counts.get(sermon.bibleBook) || 0) + 1);
    } else {
      themeCount += 1;
    }
  }
  const books = [...counts.entries()]
    .map(([book, count]) => ({ book, count }))
    .sort((a, b) => b.count - a.count || a.book.localeCompare(b.book, 'zh-Hans'));
  return { books, themeCount, total: catalog.length };
}

function getSundayOccasionFilterCounts(catalog) {
  const counts = new Map(SUNDAY_OCCASION_FILTERS.map((item) => [item.id, 0]));
  for (const sermon of catalog) {
    for (const occasion of sermon.occasions || []) {
      counts.set(occasion, (counts.get(occasion) || 0) + 1);
    }
  }
  return counts;
}

function setSundayBookFilter(value) {
  state.sundayBookFilter = value || 'all';
  try {
    window.localStorage.setItem(SUNDAY_BOOK_FILTER_KEY, state.sundayBookFilter);
  } catch {}
}

function setSundayOccasionFilter(value) {
  state.sundayOccasionFilter = value || 'all';
  try {
    window.localStorage.setItem(SUNDAY_OCCASION_FILTER_KEY, state.sundayOccasionFilter);
  } catch {}
}

function renderSundayFilterChip(label, filterValue, activeValue, action, count) {
  const active = filterValue === activeValue ? 'is-active' : '';
  const countLabel = Number.isFinite(count) ? ` (${count})` : '';
  return `
    <button
      class="sunday-filter-chip ${active}"
      type="button"
      data-action="${escapeHtml(action)}"
      data-filter="${escapeHtml(filterValue)}"
      aria-pressed="${filterValue === activeValue ? 'true' : 'false'}"
    >${escapeHtml(label)}${escapeHtml(countLabel)}</button>
  `;
}

function renderSundayFilters() {
  if (!$sundayFilterPanel) return;

  if (getSelectedCategory() !== '主日') {
    $sundayFilterPanel.hidden = true;
    $sundayFilterPanel.innerHTML = '';
    return;
  }

  const catalogForBooks = getSundayCatalogBySearch().filter((sermon) =>
    matchesSundayOccasionFilter(sermon, state.sundayOccasionFilter),
  );
  const catalogForOccasions = getSundayCatalogBySearch().filter((sermon) =>
    matchesSundayBookFilter(sermon, state.sundayBookFilter),
  );
  const { books, themeCount, total } = getSundayBookFilterOptions(catalogForBooks);
  const occasionCounts = getSundayOccasionFilterCounts(catalogForOccasions);

  const bookEntries = [
    { label: '主题讲道', filter: 'theme', count: themeCount },
    ...books.map(({ book, count }) => ({ label: book, filter: book, count })),
  ].sort((a, b) => b.count - a.count || a.label.localeCompare(b.label, 'zh-Hans'));

  const bookChips = [
    renderSundayFilterChip('全部', 'all', state.sundayBookFilter, 'sunday-filter-book', total),
    ...bookEntries.map(({ label, filter, count }) =>
      renderSundayFilterChip(label, filter, state.sundayBookFilter, 'sunday-filter-book', count),
    ),
  ].join('');

  const occasionEntries = [...SUNDAY_OCCASION_FILTERS]
    .map(({ id, label }) => ({ id, label, count: occasionCounts.get(id) || 0 }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label, 'zh-Hans'));

  const occasionChips = [
    renderSundayFilterChip('全部', 'all', state.sundayOccasionFilter, 'sunday-filter-occasion', catalogForOccasions.length),
    ...occasionEntries.map(({ id, label, count }) =>
      renderSundayFilterChip(label, id, state.sundayOccasionFilter, 'sunday-filter-occasion', count),
    ),
  ].join('');

  $sundayFilterPanel.hidden = false;
  $sundayFilterPanel.innerHTML = `
    <div class="sunday-filter-group">
      <span class="sunday-filter-label">经卷</span>
      <div class="sunday-filter-chips" role="group" aria-label="经卷筛选">${bookChips}</div>
    </div>
    <div class="sunday-filter-group">
      <span class="sunday-filter-label">节期</span>
      <div class="sunday-filter-chips" role="group" aria-label="节期筛选">${occasionChips}</div>
    </div>
  `;
}

function isGaoTeacher(teacher) {
  return normalize(teacher).includes('高路');
}

function isKouTeacher(teacher) {
  const value = normalize(teacher);
  return value.includes('寇') && (value.includes('绍') || value.includes('紹'));
}

function isKouLesson(lesson) {
  return lesson?.speaker === 'kou' || Boolean(lesson?.isKou) || isKouTeacher(lesson?.teacher);
}

function isKouBook(book) {
  return getBookSpeaker(book) === 'kou';
}

function isExternalSpeakerBook(book) {
  return isKouBook(book);
}

function isExternalSpeakerLesson(lesson) {
  return isKouLesson(lesson);
}

function isExcludedBookTitle(title) {
  return normalize(title).includes('慕道班');
}

function isUnnamedOtherBook(book) {
  const category = normalizeCategory(book.category);
  return (
    category === '系列' &&
    (book.lessons || []).length > 0 &&
    (book.lessons || []).every((lesson) => !normalize(lesson.teacher))
  );
}

function bookOrder(book) {
  const order = [
    '马太福音',
    '马可福音',
    '路加福音',
    '约翰福音',
    '使徒行传',
    '罗马书',
    '哥林多前书',
    '哥林多后书',
    '加拉太书',
    '以弗所书',
    '腓立比书',
    '歌罗西书',
    '帖撒罗尼迦前书',
    '帖撒罗尼迦后书',
    '提摩太前书',
    '提摩太后书',
    '提多书',
    '腓利门书',
    '希伯来书',
    '雅各书',
    '彼得前书',
    '彼得后书',
    '约翰一书',
    '约翰二书',
    '约翰三书',
    '犹大书',
    '启示录',
    '创世记',
    '出埃及记',
    '利未记',
    '民数记',
    '申命记',
    '约书亚记',
    '士师记',
    '路得记',
    '撒母耳记上',
    '撒母耳记下',
    '列王纪上',
    '列王纪下',
    '历代志上',
    '历代志下',
    '以斯拉记',
    '尼希米记',
    '以斯帖记',
    '约伯记',
    '诗篇',
    '箴言',
    '传道书',
    '雅歌',
    '以赛亚书',
    '耶利米书',
    '耶利米哀歌',
    '以西结书',
    '但以理书',
    '何西阿书',
    '约珥书',
    '阿摩司书',
    '俄巴底亚书',
    '约拿书',
    '弥迦书',
    '那鸿书',
    '哈巴谷书',
    '西番雅书',
    '哈该书',
    '撒迦利亚书',
    '玛拉基书',
  ];

  const index = order.findIndex((title) => normalize(book.title).includes(normalize(title)));
  return index >= 0 ? index : 1000 + normalize(book.title).charCodeAt(0);
}

function sundayBookOrder(book) {
  const year = Number(String(book.title || '').match(/(20\d{2})/)?.[1] || 0);
  return year > 0 ? -year : 0;
}

function seriesBookOrder(book) {
  if (book.isSundaySeries) {
    const latest = Date.parse(book.latestDate || '');
    if (Number.isFinite(latest)) return -latest;
  }
  return bookOrder(book);
}

function compareBooks(a, b) {
  const categoryDelta = CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category);
  if (categoryDelta !== 0) return categoryDelta;
  if (a.category === '主日' && b.category === '主日') {
    return sundayBookOrder(a) - sundayBookOrder(b);
  }
  if (a.category === '系列' && b.category === '系列') {
    const sundaySeriesDelta = Number(Boolean(a.isSundaySeries)) - Number(Boolean(b.isSundaySeries));
    if (sundaySeriesDelta !== 0) return sundaySeriesDelta;
    if (a.isSundaySeries && b.isSundaySeries) {
      return seriesBookOrder(a) - seriesBookOrder(b);
    }
  }
  return bookOrder(a) - bookOrder(b);
}

function isGaoLuLesson(lesson) {
  return Boolean(lesson.isGaoLu) || isGaoTeacher(lesson.teacher);
}

function isGaoLuPrimaryBook(book) {
  const withAudio = (book.lessons || []).filter((lesson) => resolveAudioSrc(lesson));
  if (withAudio.length === 0) return false;
  const gaoCount = withAudio.filter(isGaoLuLesson).length;
  return gaoCount > 0 && gaoCount / withAudio.length > 0.5;
}

function shouldKeepBook(book) {
  if (isExcludedBookTitle(book.title)) return false;
  if (isExternalSpeakerBook(book)) {
    return (book.lessons || []).some((lesson) => resolveAudioSrc(lesson) && isExternalSpeakerLesson(lesson));
  }
  if (book.category === '主日') {
    return (book.lessons || []).some((lesson) => resolveAudioSrc(lesson) && isGaoLuLesson(lesson));
  }
  return isGaoLuPrimaryBook(book);
}

function normalizeBook(book) {
  const unnamedOtherBook = isUnnamedOtherBook(book);
  const externalBook = isExternalSpeakerBook(book);
  const lessons = (book.lessons || [])
    .filter((lesson) => {
      if (externalBook) return isExternalSpeakerLesson(lesson);
      return unnamedOtherBook || isGaoLuLesson(lesson);
    })
    .map((lesson, index) => ({
      ...lesson,
      audioSrc: resolveAudioSrc(lesson),
      lessonDate: lesson.date || '',
      lessonFileUrl: lesson.fileUrl || '',
      videoUrl: lesson.videoUrl || '',
      teacher: lesson.teacher || book.latestTeacher || '讲员',
      displayLabel:
        externalBook
          ? lesson.lesson || lesson.displayLabel || String(index + 1)
          : book.category === '主日' || book.isSundaySeries
            ? formatSundaySermonTitle(lesson)
            : resolveLessonDisplayLabel(lesson, index),
      trackNo: index + 1,
    }))
    .filter((lesson) => Boolean(lesson.audioSrc));

  return {
    ...book,
    speaker: getBookSpeaker(book),
    category: normalizeCategory(book.category) || book.category,
    lessonCount: lessons.length,
    lessons,
  };
}

function loadProgress() {
  return loadJSON(STORAGE_KEY, {});
}

function loadListened() {
  return loadJSON(LISTENED_KEY, {});
}

function loadFavorites() {
  return loadJSON(FAVORITES_KEY, {});
}

function loadNotes() {
  return loadJSON(NOTES_KEY, {});
}

function saveProgress() {
  saveJSON(STORAGE_KEY, state.progress);
}

function saveListened() {
  saveJSON(LISTENED_KEY, state.listened);
}

function saveFavorites() {
  saveJSON(FAVORITES_KEY, state.favorites);
}

function saveNotes() {
  saveJSON(NOTES_KEY, state.notes);
}

function registerAudioAlias(alias, storageKey) {
  if (!alias || !storageKey) return;
  state.audioAliases.set(alias, storageKey);
}

function trackStorageKey(speaker, bookTitle, trackNo) {
  return `${speaker || 'gaolu'}::${bookTitle}::${trackNo}`;
}

function buildAudioAliasIndex(books) {
  state.audioAliases = new Map();
  for (const book of books) {
    for (const lesson of book.lessons) {
      const storageKey = trackStorageKey(getBookSpeaker(book), book.title, lesson.trackNo);
      registerAudioAlias(storageKey, storageKey);
      registerAudioAlias(lesson.audioSrc, storageKey);
      registerAudioAlias(lesson.localAudioUrl, storageKey);
      registerAudioAlias(cleanRemoteAudioUrl(lesson.audioUrl), storageKey);
    }
  }
}

function remapStoredRecordMap(source) {
  const next = {};
  for (const [key, value] of Object.entries(source || {})) {
    const canonical = audioKey(key);
    const existing = next[canonical];
    const nextStamp = value?.updatedAt || value?.heardAt || value?.favoritedAt || 0;
    const existingStamp = existing?.updatedAt || existing?.heardAt || existing?.favoritedAt || 0;
    if (!existing || nextStamp >= existingStamp) {
      next[canonical] = value;
    }
  }
  return next;
}

function migrateLegacyStorage() {
  state.progress = remapStoredRecordMap(state.progress);
  state.listened = remapStoredRecordMap(state.listened);
  state.favorites = remapStoredRecordMap(state.favorites);
  state.notes = remapStoredRecordMap(state.notes);
  saveProgress();
  saveListened();
  saveFavorites();
  saveNotes();

  const savedCurrent = loadStoredString(CURRENT_KEY);
  if (savedCurrent) {
    try {
      window.localStorage.setItem(CURRENT_KEY, audioKey(savedCurrent));
    } catch {}
  }

  const savedCategory = normalizeCategory(loadStoredString(CATEGORY_KEY));
  if (savedCategory) {
    try {
      window.localStorage.setItem(CATEGORY_KEY, savedCategory);
    } catch {}
  }

  const savedSelections = normalizeCategorySelections(loadJSON(CATEGORY_SELECT_KEY, {}));
  saveJSON(CATEGORY_SELECT_KEY, savedSelections);
  state.categorySelections = savedSelections;

  const session = loadJSON(SESSION_KEY, null);
  if (session?.category) {
    const normalizedCategory = normalizeCategory(session.category);
    const normalizedSession = {
      ...session,
      category: normalizedCategory || session.category,
      categorySelections: normalizeCategorySelections(session.categorySelections),
    };
    if (normalizedCategory !== session.category || session.categorySelections) {
      saveJSON(SESSION_KEY, normalizedSession);
    }
  }
}

function buildShareIndex(tracks) {
  shareIdByKey = new Map();
  shareKeyById = new Map();
  const sorted = [...tracks].sort((a, b) => a.storageKey.localeCompare(b.storageKey, 'zh-Hans'));
  sorted.forEach((track, index) => {
    const id = index + 1;
    shareIdByKey.set(track.storageKey, id);
    shareKeyById.set(id, track.storageKey);
  });
}

function resolveCatalogTrack(track) {
  if (!track) return null;

  if (track.storageKey) {
    const byKey = state.tracks.find((item) => item.storageKey === track.storageKey);
    if (byKey) return byKey;
  }

  if (track.audioSrc) {
    const bySrc = state.tracks.find((item) => item.audioSrc === track.audioSrc);
    if (bySrc) return bySrc;
  }

  if (track.bookTitle && track.trackNo) {
    const key = trackStorageKey(track.speaker || getBookSpeaker(getBookByTitle(track.bookTitle)), track.bookTitle, track.trackNo);
    const byBook = state.tracks.find((item) => item.storageKey === key);
    if (byBook) return byBook;
    if (track.audioSrc) {
      return {
        ...track,
        storageKey: key,
      };
    }
  }

  return track.storageKey || track.audioSrc ? track : null;
}

function getTrackShareId(track = state.currentTrack) {
  const resolved = resolveCatalogTrack(track);
  if (!resolved?.storageKey) return 0;
  return shareIdByKey.get(resolved.storageKey) || 0;
}

function resolveShareReference(ref) {
  const trimmed = String(ref || '').trim();
  if (!trimmed) return '';
  if (/^\d+$/.test(trimmed)) {
    return shareKeyById.get(Number(trimmed)) || '';
  }
  return trimmed;
}

function getShareBaseUrl() {
  return `${window.location.origin}${getAppBasePath()}/`;
}
function findTrackByReference(ref) {
  if (!ref) return null;
  const resolved = resolveShareReference(ref);
  const storageKey = audioKey(resolved || ref);
  const direct =
    state.tracks.find(
      (track) =>
        track.storageKey === storageKey ||
        track.storageKey === ref ||
        track.storageKey === resolved ||
        track.audioSrc === ref ||
        track.audioSrc === storageKey,
    ) || null;
  if (direct) return direct;

  if (String(ref).includes('::')) {
    return state.catalogBooks
      .flatMap((book) =>
        book.lessons.map((lesson) => ({
          bookTitle: book.title,
          bookCategory: book.category,
          speaker: getBookSpeaker(book),
          trackNo: lesson.trackNo,
          storageKey: trackStorageKey(getBookSpeaker(book), book.title, lesson.trackNo),
          lesson: lesson.displayLabel || lesson.lesson || `第${lesson.trackNo}课`,
          teacher: lesson.teacher || book.latestTeacher || '讲员',
          audioSrc: lesson.audioSrc,
          date: lesson.lessonDate,
          fileUrl: lesson.lessonFileUrl,
          videoUrl: lesson.videoUrl,
        })),
      )
      .find((track) => track.storageKey === ref || track.storageKey === storageKey) || null;
  }

  return null;
}

function parseSharePath(pathname) {
  const base = getAppBasePath();
  let rest = String(pathname || '');
  if (base && rest.startsWith(base)) {
    rest = rest.slice(base.length) || '/';
  }

  const parts = rest.split('/').filter(Boolean);
  if (parts.length === 0) return '';

  const first = parts[0] === 'index.html' ? parts[1] : parts[0];
  const id = Number(first);
  if (!Number.isInteger(id) || id <= 0) return '';

  return shareKeyById.get(id) || '';
}

function parseShareFromUrl() {
  const url = new URL(window.location.href);
  const fromPath = parseSharePath(url.pathname);
  if (fromPath) return fromPath;

  const raw = url.searchParams.get(SHARE_QUERY_KEY) || '';
  return resolveShareReference(raw);
}

function buildShareUrl(track = state.currentTrack) {
  const shareId = getTrackShareId(track);
  if (!shareId) {
    return getShareBaseUrl();
  }

  const url = new URL(getShareBaseUrl());
  url.searchParams.set(SHARE_QUERY_KEY, String(shareId));
  return url.href;
}

function clearShareFromUrl() {
  const url = new URL(window.location.href);
  const hadPathShare = Boolean(parseSharePath(url.pathname));
  const hadQueryShare = url.searchParams.has(SHARE_QUERY_KEY);

  if (!hadPathShare && !hadQueryShare) return;

  url.pathname = getAppBasePath() || '/';
  url.searchParams.delete(SHARE_QUERY_KEY);
  window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
}

function showShareToast(message) {
  if (!$shareButton) return;
  const originalLabel = $shareButton.getAttribute('aria-label') || '分享讲道';
  $shareButton.setAttribute('aria-label', message);
  $shareButton.title = message;
  window.clearTimeout(shareToastTimer);
  shareToastTimer = window.setTimeout(() => {
    $shareButton.setAttribute('aria-label', originalLabel);
    $shareButton.title = '分享讲道';
  }, 1800);
}

function showShareFeedback(message) {
  if ($shareSheet && !$shareSheet.hidden && $shareSheetStatus) {
    $shareSheetStatus.textContent = message;
    return;
  }
  showShareToast(message);
}

function getTrackShareTitle(track = state.currentTrack) {
  if (!track) return '讲道';
  return String(track.lesson || track.displayLabel || track.bookTitle || '讲道').trim();
}

function getTrackMp3Url(track = state.currentTrack) {
  if (!track) return '';
  return cleanRemoteAudioUrl(track.audioUrl) || track.audioSrc || '';
}

function getTrackMp3Filename(track = state.currentTrack) {
  const url = getTrackMp3Url(track);
  const fromUrl = url ? decodeURIComponent(url.split('/').pop()?.split('?')[0] || '') : '';
  if (/\.mp3$/i.test(fromUrl)) return fromUrl;
  return `${getTrackShareTitle(track).replace(/[\\/:*?"<>|]/g, '_')}.mp3`;
}

function getMp3FetchUrl(sourceUrl) {
  if (!sourceUrl) return '';
  try {
    const parsed = new URL(sourceUrl, window.location.origin);
    if (parsed.origin === window.location.origin) return parsed.href;
    if (!AUDIO_SOURCE_HOSTS.has(parsed.hostname)) return parsed.href;
    return `${appAssetPath('/api/audio')}?url=${encodeURIComponent(parsed.href)}`;
  } catch {
    return sourceUrl;
  }
}

async function fetchMp3Blob(track = state.currentTrack) {
  const sourceUrl = getTrackMp3Url(track);
  if (!sourceUrl) throw new Error('no audio');

  const candidates = [];
  const proxyUrl = getMp3FetchUrl(sourceUrl);
  if (proxyUrl !== sourceUrl) candidates.push(proxyUrl);
  candidates.push(sourceUrl);

  let lastError = null;
  for (const url of candidates) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`http ${response.status}`);
      const blob = await response.blob();
      if (!blob.size) throw new Error('empty blob');
      return blob;
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error('fetch failed');
}

function openShareSheet() {
  if (!state.currentTrack) {
    showShareToast('请先选择讲道');
    return;
  }
  if (!$shareSheet) {
    void shareMp3File();
    return;
  }

  if ($shareSheetTitle) $shareSheetTitle.textContent = getTrackShareTitle();
  if ($shareSheetLead) $shareSheetLead.textContent = getTrackSubtitle(state.currentTrack);
  if ($shareSheetStatus) $shareSheetStatus.textContent = '';
  $shareSheet.hidden = false;
  $shareSheet.setAttribute('aria-hidden', 'false');
  document.body.classList.add('share-sheet-open');
}

function closeShareSheet() {
  if (!$shareSheet) return;
  $shareSheet.hidden = true;
  $shareSheet.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('share-sheet-open');
}

async function shareMp3File() {
  const track = state.currentTrack;
  if (!track) {
    showShareFeedback('请先选择讲道');
    return;
  }

  const sourceUrl = getTrackMp3Url(track);
  if (!sourceUrl) {
    showShareFeedback('暂无音频文件');
    return;
  }

  const title = getTrackShareTitle(track);
  const filename = getTrackMp3Filename(track);
  const subtitle = getTrackSubtitle(track);

  try {
    const blob = await fetchMp3Blob(track);
    const file = new File([blob], filename, { type: blob.type || 'audio/mpeg' });
    if (navigator.share && navigator.canShare?.({ files: [file] })) {
      await navigator.share({ files: [file], title, text: subtitle });
      showShareFeedback('已分享 MP3 文件');
      closeShareSheet();
      return;
    }
  } catch (error) {
    if (error?.name === 'AbortError') return;
  }

  if (navigator.share) {
    try {
      await navigator.share({ title, text: subtitle, url: sourceUrl });
      showShareFeedback('已分享 MP3 链接');
      closeShareSheet();
      return;
    } catch (error) {
      if (error?.name === 'AbortError') return;
    }
  }

  try {
    if (!navigator.clipboard?.writeText) throw new Error('clipboard unavailable');
    await navigator.clipboard.writeText(sourceUrl);
    showShareFeedback('已复制 MP3 链接');
  } catch {
    showShareFeedback('分享失败，请尝试下载');
  }
}

function downloadMp3File() {
  const track = state.currentTrack;
  if (!track) {
    showShareFeedback('请先选择讲道');
    return;
  }

  const sourceUrl = getTrackMp3Url(track);
  if (!sourceUrl) {
    showShareFeedback('暂无音频文件');
    return;
  }

  const filename = getTrackMp3Filename(track);
  const fetchUrl = getMp3FetchUrl(sourceUrl);
  const anchor = document.createElement('a');
  anchor.href = fetchUrl;
  anchor.download = filename;
  anchor.rel = 'noopener';
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();

  if (fetchUrl === sourceUrl) {
    showShareFeedback('已打开 MP3，可保存或转发');
  } else {
    showShareFeedback('正在下载…');
  }
}

async function copyMp3Link() {
  const sourceUrl = getTrackMp3Url();
  if (!sourceUrl) {
    showShareFeedback('暂无音频文件');
    return;
  }

  try {
    if (!navigator.clipboard?.writeText) throw new Error('clipboard unavailable');
    await navigator.clipboard.writeText(sourceUrl);
    showShareFeedback('已复制 MP3 链接');
  } catch {
    showShareFeedback('复制失败');
  }
}

async function copyShareLink() {
  if (!state.currentTrack) {
    showShareFeedback('请先选择讲道');
    return;
  }

  const url = buildShareUrl(state.currentTrack);

  try {
    if (!navigator.clipboard?.writeText) {
      throw new Error('clipboard unavailable');
    }
    await navigator.clipboard.writeText(url);
    showShareFeedback('已复制网址');
  } catch {
    showShareFeedback('复制失败');
  }
}

async function sharePageLink() {
  if (!state.currentTrack) {
    showShareFeedback('请先选择讲道');
    return;
  }

  const url = buildShareUrl(state.currentTrack);
  const title = getTrackShareTitle();
  const text = getTrackSubtitle(state.currentTrack);

  if (navigator.share) {
    try {
      await navigator.share({ title, text, url });
      showShareFeedback('已分享网址');
      closeShareSheet();
      return;
    } catch (error) {
      if (error?.name === 'AbortError') return;
    }
  }

  await copyShareLink();
}

function buildResourcesShareUrl() {
  const url = new URL(getShareBaseUrl());
  url.searchParams.set('view', 'resources');
  return url.href;
}

function showResourcesShareFeedback(message) {
  if (!$resourcesShareButton) return;
  const original = $resourcesShareButton.dataset.label || $resourcesShareButton.textContent || '复制网址';
  $resourcesShareButton.dataset.label = original;
  $resourcesShareButton.textContent = message;
  $resourcesShareButton.setAttribute('aria-label', message);
  $resourcesShareButton.title = message;
  window.setTimeout(() => {
    $resourcesShareButton.textContent = original;
    $resourcesShareButton.setAttribute('aria-label', '复制资源页网址');
    $resourcesShareButton.title = '复制资源页网址';
  }, 1800);
}

async function copyResourcesShareLink() {
  const url = buildResourcesShareUrl();
  try {
    if (!navigator.clipboard?.writeText) throw new Error('clipboard unavailable');
    await navigator.clipboard.writeText(url);
    showResourcesShareFeedback('已复制');
  } catch {
    showResourcesShareFeedback('复制失败');
  }
}

function getPageScrollElement() {
  return document.querySelector('.page-scroll');
}

function dismissLaunchScreen() {
  if (!isStandaloneLaunch) return;
  const root = document.documentElement;
  const launchScreen = document.querySelector('.launch-screen');
  const elapsed = Date.now() - launchStartedAt;
  const delay = Math.max(500 - elapsed, 0);

  window.clearTimeout(launchDismissTimer);
  window.clearTimeout(launchFallbackTimer);
  launchDismissTimer = window.setTimeout(() => {
    launchScreen?.classList.add('is-hiding');
    root.classList.remove('app-launching');
    window.setTimeout(() => {
      launchScreen?.remove();
    }, 320);
  }, delay);
}

function scheduleLaunchScreenFallback() {
  if (!isStandaloneLaunch) return;
  window.clearTimeout(launchFallbackTimer);
  launchFallbackTimer = window.setTimeout(() => {
    dismissLaunchScreen();
  }, 2200);
}

function scrollPageTo(selector, behavior = 'smooth') {
  const element = document.querySelector(selector);
  const scrollHost = getPageScrollElement();
  if (!element || !scrollHost) return;
  const hostRect = scrollHost.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();
  const offset = elementRect.top - hostRect.top + scrollHost.scrollTop;
  scrollHost.scrollTo({ top: Math.max(0, offset), behavior });
}

function saveSession() {
  const scrollTop = getPageScrollElement()?.scrollTop || pendingScrollTop || 0;
  pendingScrollTop = scrollTop;
  saveJSON(SESSION_KEY, {
    speaker: state.selectedSpeaker,
    category: state.selectedCategory,
    bookTitle: state.selectedBookTitle,
    categorySelections: state.categorySelections,
    currentStorageKey: state.currentTrack?.storageKey || audioKey(state.currentTrack?.audioSrc || ''),
    scrollTop,
    updatedAt: Date.now(),
  });
}

function scheduleSaveSession() {
  window.clearTimeout(saveSessionTimer);
  saveSessionTimer = window.setTimeout(saveSession, 350);
}

function applyStoredSession() {
  const session = loadJSON(SESSION_KEY, null);
  if (!session) return null;

  if (session?.speaker && SPEAKERS.some((speaker) => speaker.id === session.speaker)) {
    state.selectedSpeaker = session.speaker;
    try {
      window.localStorage.setItem(SPEAKER_KEY, session.speaker);
    } catch {}
  }

  if (CATEGORY_ORDER.includes(normalizeCategory(session.category))) {
    setSelectedCategory(session.category);
  }
  if (session.bookTitle) {
    setSelectedBookTitle(session.bookTitle);
  }
  if (session.categorySelections && typeof session.categorySelections === 'object') {
    state.categorySelections = normalizeCategorySelections({
      ...state.categorySelections,
      ...session.categorySelections,
    });
    saveCategorySelections();
  }
  pendingScrollTop = Number(session.scrollTop) || 0;
  refreshSpeakerCatalog();
  return session;
}

function restoreScrollPosition() {
  const scrollTop = pendingScrollTop;
  if (!scrollTop) return;
  requestAnimationFrame(() => {
    const scrollEl = getPageScrollElement();
    if (scrollEl) scrollEl.scrollTop = scrollTop;
    pendingScrollTop = 0;
  });
}

function persistPlaybackSnapshot() {
  if (!$audio.src && !state.currentTrack) return;
  const src = $audio.currentSrc || $audio.src || state.currentTrack?.audioSrc || '';
  if (!src) return;
  setSavedPosition(src, $audio.currentTime || 0, $audio.duration);
  if (state.currentTrack?.storageKey) {
    try {
      window.localStorage.setItem(CURRENT_KEY, state.currentTrack.storageKey);
    } catch {}
  }
  saveSession();
}

function bindSessionPersistence() {
  const scrollEl = getPageScrollElement();
  scrollEl?.addEventListener(
    'scroll',
    () => {
      pendingScrollTop = scrollEl.scrollTop;
      scheduleSaveSession();
    },
    { passive: true },
  );

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      persistPlaybackSnapshot();
    }
  });

  window.addEventListener('pagehide', persistPlaybackSnapshot);
  window.addEventListener('beforeunload', persistPlaybackSnapshot);
}

function setSelectedBookTitle(title) {
  state.selectedBookTitle = title || '';
  try {
    if (title) {
      window.localStorage.setItem(DIRECTORY_KEY, title);
    } else {
      window.localStorage.removeItem(DIRECTORY_KEY);
    }
  } catch {}
  scheduleSaveSession();
}

function isFirstVisit() {
  if (loadJSON(SESSION_KEY, null)) return false;
  if (loadSelectedCategory()) return false;
  if (loadStoredString(CURRENT_KEY)) return false;
  if (loadStoredString(DIRECTORY_KEY)) return false;
  return true;
}

function restoreTrack(track, { autoplay = false } = {}) {
  const resolved = resolveCatalogTrack(track);
  if (!resolved) return;
  state.currentTrack = resolved;
  $audio.src = resolved.audioSrc;
  $audio.playbackRate = state.playbackRate;
  $audio.load();
  try {
    window.localStorage.setItem(CURRENT_KEY, resolved.storageKey || audioKey(resolved.audioSrc));
  } catch {}
  scheduleSaveSession();
  if (autoplay) {
    void $audio.play().catch(() => {});
  }
}

function applyFirstVisitDefaults() {
  setSelectedSpeaker(DEFAULT_SPEAKER);
  setSelectedCategory(getDefaultCategoryForSpeaker(DEFAULT_SPEAKER));
  const book = getSelectedBookForCategory(state.selectedCategory);
  if (!book) return;
  setSelectedBookTitle(book.title);
  setCategorySelection(state.selectedCategory, book.title);
  const track =
    state.tracks.find((item) => item.bookTitle === book.title && item.trackNo === 1) ||
    state.tracks.find((item) => item.bookTitle === book.title);
  if (track) restoreTrack(track);
}

function setSelectedCategory(category) {
  let nextCategory = normalizeCategory(category) || DEFAULT_CATEGORY;
  if (state.selectedSpeaker === 'kou' && nextCategory === '主日') {
    nextCategory = getDefaultCategoryForSpeaker(state.selectedSpeaker);
  }
  state.selectedCategory = nextCategory;
  try {
    window.localStorage.setItem(CATEGORY_KEY, state.selectedCategory);
  } catch {}
  scheduleSaveSession();
}

function setPlaybackRate(rate) {
  state.playbackRate = rate;
  $audio.playbackRate = rate;
  try {
    window.localStorage.setItem(RATE_KEY, String(rate));
  } catch {}
  syncControlLabels();
}

function getBookByTitle(title) {
  return state.books.find((book) => book.title === title) || null;
}

function getSelectedCategory() {
  if (CATEGORY_ORDER.includes(state.selectedCategory) && state.books.some((book) => book.category === state.selectedCategory)) {
    return state.selectedCategory;
  }
  const fallback =
    state.books.find((book) => book.category === DEFAULT_CATEGORY)?.category ||
    state.books.find((book) => CATEGORY_ORDER.includes(book.category))?.category ||
    DEFAULT_CATEGORY;
  setSelectedCategory(fallback);
  return fallback;
}

function getBooksByCategory(category) {
  return state.books.filter((book) => {
    if (book.category !== category) return false;
    return matchesSearchQuery([
      book.title,
      book.category,
      book.latestTeacher,
      book.latestLesson,
      ...(book.lessons || []).flatMap((lesson) => [
        lesson.lesson,
        lesson.displayLabel,
        lesson.teacher,
        lesson.lessonDate,
        lesson.date,
      ]),
    ]);
  });
}

function getVisibleBooks() {
  return getBooksByCategory(getSelectedCategory());
}

function getSelectedBookForCategory(category) {
  const books = getBooksByCategory(category);
  if (books.length === 0) return null;
  const stored = getSpeakerSelections()[category];
  const known = books.find((book) => book.title === stored);
  if (known) return known;
  return books[0];
}

function getSelectedBook() {
  const visible = getVisibleBooks();
  const known = visible.find((book) => book.title === state.selectedBookTitle);
  if (known) return known;

  const byCurrent = state.currentTrack ? getBookByTitle(state.currentTrack.bookTitle) : null;
  if (byCurrent && byCurrent.category === getSelectedCategory()) {
    setSelectedBookTitle(byCurrent.title);
    return byCurrent;
  }

  const selected = visible[0] || state.books.find((book) => book.category === getSelectedCategory()) || state.books[0] || null;
  if (selected) setSelectedBookTitle(selected.title);
  return selected;
}

function audioKey(src) {
  if (!src) return '';
  return state.audioAliases.get(src) || src;
}

function getSavedPosition(src) {
  return state.progress[audioKey(src)] || null;
}

function setSavedPosition(src, currentTime, duration) {
  const key = audioKey(src);
  if (!key || !Number.isFinite(currentTime) || currentTime < 0) return;
  state.progress[key] = {
    currentTime,
    duration: Number.isFinite(duration) ? duration : null,
    updatedAt: Date.now(),
  };
  saveProgress();
}

function clearSavedPosition(src) {
  const key = audioKey(src);
  if (!key || !state.progress[key]) return;
  delete state.progress[key];
  saveProgress();
}

function markListened(src) {
  const key = audioKey(src);
  if (!key || state.listened[key]) return false;
  state.listened[key] = { heardAt: Date.now() };
  saveListened();
  return true;
}

function hasListened(src) {
  return Boolean(state.listened[audioKey(src)]);
}

function isFavorite(src) {
  return Boolean(state.favorites[audioKey(src)]);
}

function toggleFavorite(src) {
  const key = audioKey(src);
  if (!key) return;
  if (state.favorites[key]) {
    delete state.favorites[key];
  } else {
    state.favorites[key] = { favoritedAt: Date.now() };
  }
  saveFavorites();
}

function getNote(src) {
  return state.notes[audioKey(src)] || '';
}

function setNote(src, note) {
  const key = audioKey(src);
  if (!key) return;
  if (!note) {
    delete state.notes[key];
  } else {
    state.notes[key] = note;
  }
  saveNotes();
}

function getRecentTracks() {
  const seen = new Map();
  for (const track of state.tracks) {
    const key = track.storageKey || audioKey(track.audioSrc);
    const progress = state.progress[key];
    const listened = state.listened[key];
    const marker = Math.max(progress?.updatedAt || 0, listened?.heardAt || 0);
    if (marker) {
      seen.set(key, { ...track, marker });
    }
  }
  return [...seen.values()].sort((a, b) => b.marker - a.marker);
}

function getCurrentTrackIndex() {
  if (!state.currentTrack) return -1;
  return state.tracks.findIndex((track) => track.audioSrc === state.currentTrack.audioSrc);
}

function getTrackLabel(track) {
  if (track.bookCategory === '主日' || track.isSundaySeries) {
    const title = String(track.lesson || '').trim();
    if (title) return title.length > 42 ? `${title.slice(0, 42)}…` : title;
  }
  return String(track.trackNo || track.lesson || 1);
}

function getTrackSubtitle(track) {
  return `${track.bookTitle} · ${track.teacher}`;
}

function getCurrentBookProgress(book) {
  const listenedCount = book.lessons.filter((lesson) => hasListened(lesson.audioSrc)).length;
  const percent = book.lessons.length ? Math.round((listenedCount / book.lessons.length) * 100) : 0;
  return { listenedCount, percent };
}

function renderSpeakerTabs() {
  const $catalogNav = document.querySelector('#catalog-nav');

  $speakerTabs.forEach((tab) => {
    const speaker = tab.dataset.speaker || '';
    const isActive = speaker === state.selectedSpeaker;
    tab.classList.toggle('is-active', isActive);
    tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    tab.tabIndex = isActive ? 0 : -1;
  });

  $categoryTabs.forEach((tab) => {
    const category = tab.dataset.category || '';
    const speakerScope = tab.dataset.speakers || 'gaolu,kou';
    const allowedSpeakers = speakerScope.split(',').map((item) => item.trim());
    const hiddenForSpeaker = !allowedSpeakers.includes(state.selectedSpeaker);
    tab.hidden = hiddenForSpeaker;
    tab.classList.toggle('is-hidden', hiddenForSpeaker);
  });

  if ($catalogNav) {
    $catalogNav.dataset.speaker = state.selectedSpeaker;
  }
}

function renderCategoryTabs() {
  renderSpeakerTabs();
  const activeCategory = getSelectedCategory();

  $categoryTabs.forEach((tab) => {
    const category = tab.dataset.category || '';
    const isActive = category === activeCategory;
    tab.classList.toggle('is-active', isActive);
    tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    tab.tabIndex = isActive ? 0 : -1;
  });

  if (!$categoryBookList) return;

  renderSundayFilters();

  if (activeCategory === '主日') {
    const sermons = getSundaySermons();
    if (sermons.length === 0) {
      const filtered =
        state.sundayBookFilter !== 'all' || state.sundayOccasionFilter !== 'all' || state.searchQuery;
      $categoryBookList.innerHTML = `
        <div class="category-book-empty">${filtered ? '没有找到符合条件的主日讲道' : '没有找到主日讲道'}</div>
      `;
      return;
    }

    const currentSrc = state.currentTrack?.audioSrc || '';
    $categoryBookList.innerHTML = sermons
      .map((sermon, index) => {
        const active = sermon.audioSrc === currentSrc;
        const heard = hasListened(sermon.audioSrc);
        const number = sermons.length - index;
        return `
          <button
            class="category-book-item category-book-item--sermon ${heard ? 'is-heard' : ''} ${active ? 'is-active' : ''}"
            type="button"
            data-action="play-track"
            data-src="${escapeHtml(sermon.audioSrc)}"
            aria-pressed="${active ? 'true' : 'false'}"
            aria-label="播放 ${number} ${escapeHtml(sermon.displayTitle)}"
          >
            <span class="category-book-index">${number}</span>
            <span class="category-book-title">${escapeHtml(sermon.displayTitle)}</span>
            <span class="category-book-meta">${escapeHtml(formatDate(sermon.lessonDate))}</span>
          </button>
        `;
      })
      .join('');
    return;
  }

  const books = getBooksByCategory(activeCategory);
  if (books.length === 0) {
    const emptyLabel = state.searchQuery
      ? '没有找到匹配的讲道'
      : activeCategory === '系列'
        ? '系列'
        : activeCategory === '主日'
          ? '主日讲道'
          : `${activeCategory}书卷`;
    $categoryBookList.innerHTML = `
      <div class="category-book-empty">没有找到${escapeHtml(emptyLabel)}</div>
    `;
    return;
  }

  const selectedTitle = getSelectedBook()?.title || '';
  $categoryBookList.innerHTML = books
    .map((book) => {
      const { percent } = getCurrentBookProgress(book);
      const active = book.title === selectedTitle ? 'is-active' : '';
      return `
        <button
          class="category-book-item ${active}"
          type="button"
          data-action="select-book"
          data-title="${escapeHtml(book.title)}"
          aria-pressed="${active ? 'true' : 'false'}"
        >
          <span class="category-book-title">${escapeHtml(book.title)}</span>
          <span class="category-book-meta">${escapeHtml(String(book.lessonCount))}篇 · ${percent}%</span>
        </button>
      `;
    })
    .join('');
}

function renderSelectedBookPanel() {
  const book = getSelectedBook();
  const $trackPanel = document.querySelector('.track-panel');
  if ($trackPanel) {
    $trackPanel.hidden = getSelectedCategory() === '主日';
  }

  if (!book || getSelectedCategory() === '主日') {
    if ($selectedBookTracks) $selectedBookTracks.innerHTML = '';
    return;
  }

  const visibleLessons = book.lessons.filter((lesson) =>
    matchesSearchQuery([
      book.title,
      lesson.lesson,
      lesson.displayLabel,
      lesson.teacher,
      lesson.lessonDate,
      lesson.date,
    ]),
  );

  if (visibleLessons.length === 0) {
    $selectedBookTracks.innerHTML = state.searchQuery
      ? `<div class="track-pill-empty">没有找到匹配的讲道</div>`
      : '';
    return;
  }

  const currentSrc = state.currentTrack?.audioSrc || '';
  $selectedBookTracks.innerHTML = visibleLessons
    .map((lesson, index) => {
      const active = lesson.audioSrc === currentSrc;
      const heard = hasListened(lesson.audioSrc);
      const note = getNote(lesson.audioSrc);
      const favorite = isFavorite(lesson.audioSrc);
      const label =
        book.isSundaySeries || state.searchQuery
          ? String(lesson.displayLabel || lesson.lesson || lesson.trackNo || index + 1)
          : String(lesson.trackNo || index + 1);
      const compactLabel = label.length > 18 ? `${label.slice(0, 18)}…` : label;
      return `
        <button
          class="track-pill ${active ? 'is-active' : ''} ${heard ? 'is-heard' : ''} ${favorite ? 'is-favorite' : ''}"
          type="button"
          data-action="play-track"
          data-src="${escapeHtml(lesson.audioSrc)}"
          aria-pressed="${active ? 'true' : 'false'}"
          aria-label="播放 ${escapeHtml(book.title)} ${escapeHtml(label)}"
          title="${escapeHtml(label)}"
        >
          <span class="track-pill-label">${escapeHtml(compactLabel)}</span>
          ${note ? '<span class="track-pill-note">笔记</span>' : ''}
        </button>
      `;
    })
    .join('');
}

function renderSummary() {
  return;
}

function updateTrackRefs(track) {
  if (!track) {
    if ($trackTitle) $trackTitle.textContent = '未选择讲道';
    if ($trackBook) {
      $trackBook.textContent = '';
      $trackBook.hidden = true;
    }
    if ($trackDate) {
      $trackDate.textContent = '--';
      $trackDate.hidden = false;
    }
    return;
  }

  if ($trackTitle) {
    $trackTitle.textContent =
      track.bookCategory === '主日' || track.isSundaySeries
        ? getTrackLabel(track)
        : `${track.bookTitle} · ${getTrackLabel(track)}`;
  }
  if ($trackBook) {
    $trackBook.textContent = track.teacher || '';
    $trackBook.hidden = !track.teacher;
  }
  if ($trackDate) {
    $trackDate.textContent = track.date ? formatDate(track.date) : '--';
    $trackDate.hidden = !track.date;
  }
}

function syncControlLabels() {
  if ($playToggle) {
    const playing = Boolean(state.currentTrack) && !$audio.paused;
    $playToggle.classList.toggle('is-playing', playing);
    $playToggle.setAttribute('aria-label', playing ? '暂停' : '播放');
  }

  if ($speedButton) {
    const rateLabel = Number.isInteger(state.playbackRate)
      ? `${state.playbackRate}x`
      : `${state.playbackRate}x`;
    $speedButton.textContent = rateLabel;
    $speedButton.setAttribute('aria-label', `播放速度 ${rateLabel}`);
  }

  if ($shareButton) {
    $shareButton.disabled = !state.currentTrack;
  }
}

function updateViewUI() {
  const isResources = state.activeView === 'resources';

  if ($sermonView) $sermonView.hidden = isResources;
  if ($resourcesView) $resourcesView.hidden = !isResources;
  if ($playerSection) $playerSection.hidden = isResources;

  if ($pageTitle) $pageTitle.textContent = isResources ? '资源' : '讲道集';
  if ($pageSubtitle) $pageSubtitle.textContent = isResources ? 'MEN | 资源入口' : '讲道 | 其它';
  if ($pageBadge) $pageBadge.textContent = isResources ? 'RES' : 'APP';

  $dockItems.forEach((item) => {
    const active = (item.dataset.view || '') === state.activeView;
    item.classList.toggle('is-active', active);
    if (active) item.setAttribute('aria-current', 'page');
    else item.removeAttribute('aria-current');
  });
}

function syncSelectedBookStyles() {
  document.querySelectorAll('.track-pill').forEach((pill) => {
    const active = pill.dataset.src === state.currentTrack?.audioSrc;
    pill.classList.toggle('is-active', active);
    pill.classList.toggle('is-heard', hasListened(pill.dataset.src));
    pill.classList.toggle('is-favorite', isFavorite(pill.dataset.src));
    pill.setAttribute('aria-pressed', active ? 'true' : 'false');
  });

  syncCategoryBookList();
}

function syncCategoryBookList() {
  if (!$categoryBookList) return;

  if (getSelectedCategory() === '主日') {
    const currentSrc = state.currentTrack?.audioSrc || '';
    $categoryBookList.querySelectorAll('.category-book-item').forEach((item) => {
      const active = item.dataset.src === currentSrc;
      item.classList.toggle('is-active', active);
      item.classList.toggle('is-heard', hasListened(item.dataset.src));
      item.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    return;
  }

  const selectedTitle = getSelectedBook()?.title || '';
  $categoryBookList.querySelectorAll('.category-book-item').forEach((item) => {
    const active = item.dataset.title === selectedTitle;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
}

function updatePlaybackUI() {
  const currentTime = Number.isFinite($audio.currentTime) ? $audio.currentTime : 0;
  const saved = getSavedPosition($audio.currentSrc || $audio.src || '');
  const duration = Number.isFinite($audio.duration) && $audio.duration > 0 ? $audio.duration : saved?.duration || 0;
  const progress = duration > 0 ? Math.min(currentTime / duration, 1) : 0;
  if ($progressSlider) {
    const max = Number($progressSlider.max || 1000);
    $progressSlider.value = `${Math.round(progress * max)}`;
    $progressSlider.style.setProperty('--progress', `${progress * 100}%`);
  }
  $timeCurrent.textContent = formatTime(currentTime);
  $timeTotal.textContent = formatTime(duration);
  syncCategoryBookList();
  updateTrackRefs(state.currentTrack);
  syncSelectedBookStyles();
  syncControlLabels();
}

function renderAll() {
  updateViewUI();
  syncSearchField();
  renderCategoryTabs();
  renderSelectedBookPanel();
  renderSummary();
  updatePlaybackUI();
}

function selectTrack(track, { autoplay = false } = {}) {
  const resolved = resolveCatalogTrack(track);
  if (!resolved) return;
  if (resolved.speaker && resolved.speaker !== state.selectedSpeaker) {
    setSelectedSpeaker(resolved.speaker);
  }
  state.currentTrack = resolved;
  setSelectedBookTitle(resolved.bookTitle);
  setSelectedCategory(resolved.bookCategory);
  setCategorySelection(resolved.bookCategory, resolved.bookTitle, resolved.speaker || state.selectedSpeaker);
  try {
    window.localStorage.setItem(CURRENT_KEY, resolved.storageKey || audioKey(resolved.audioSrc));
  } catch {}
  $audio.src = resolved.audioSrc;
  $audio.playbackRate = state.playbackRate;
  $audio.load();
  renderAll();
  scheduleSaveSession();
  if (autoplay) {
    void $audio.play().catch(() => {});
  }
}

function setActiveView(view, { updateUrl = true } = {}) {
  const nextView = view === 'resources' ? 'resources' : 'sermon';
  if (state.activeView === nextView && updateUrl) {
    updateViewUI();
    return;
  }

  state.activeView = nextView;
  try {
    window.localStorage.setItem(VIEW_KEY, nextView);
  } catch {}

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set('view', nextView);
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  }

  updateViewUI();
}

function selectBook(title, { autoplay = false } = {}) {
  const book = getBookByTitle(title);
  if (!book) return;
  setSelectedBookTitle(book.title);
  setSelectedCategory(book.category);
  const currentInBook =
    state.currentTrack?.bookTitle === book.title ? resolveCatalogTrack(state.currentTrack) : null;
  const firstInBook = state.tracks.find((item) => item.bookTitle === book.title);
  const track = currentInBook || firstInBook;
  if (track) {
    selectTrack(track, { autoplay });
  } else {
    renderAll();
  }
}

function playTrackBySrc(src, { autoplay = true } = {}) {
  const track = state.tracks.find((item) => item.audioSrc === src);
  if (track) selectTrack(track, { autoplay });
}

function playRelativeTrack(delta) {
  if (!state.currentTrack) return;

  if (state.currentTrack.bookCategory === '主日') {
    const sermons = getSundaySermons();
    const currentIndex = sermons.findIndex((sermon) => sermon.audioSrc === state.currentTrack.audioSrc);
    if (currentIndex < 0) return;
    const nextSermon = sermons[currentIndex + delta];
    if (nextSermon) {
      playTrackBySrc(nextSermon.audioSrc, { autoplay: true });
    }
    return;
  }

  if (!state.tracks.length) return;
  const currentIndex = getCurrentTrackIndex();
  const nextIndex = currentIndex < 0 ? 0 : (currentIndex + delta + state.tracks.length) % state.tracks.length;
  selectTrack(state.tracks[nextIndex], { autoplay: true });
}

function seekBy(deltaSeconds) {
  if (!$audio.src) return;
  const next = Math.max(0, ($audio.currentTime || 0) + deltaSeconds);
  try {
    $audio.currentTime = next;
  } catch {}
  setSavedPosition($audio.currentSrc || $audio.src || '', $audio.currentTime, $audio.duration);
  updatePlaybackUI();
}

function seekToProgress(progress) {
  const saved = getSavedPosition($audio.currentSrc || $audio.src || '');
  const duration = Number.isFinite($audio.duration) && $audio.duration > 0 ? $audio.duration : saved?.duration || 0;
  if (!duration) return;
  const clamped = Math.max(0, Math.min(1, progress));
  const nextTime = clamped >= 0.99 ? duration : duration * clamped;
  $audio.currentTime = nextTime;
  setSavedPosition($audio.currentSrc || $audio.src || '', $audio.currentTime, $audio.duration);
  updatePlaybackUI();
}

function cyclePlaybackRate() {
  const current = SPEEDS.indexOf(state.playbackRate);
  const next = SPEEDS[(current + 1) % SPEEDS.length];
  setPlaybackRate(next);
}

function toggleSleepTimer() {
  if (state.sleepTimerId) {
    window.clearTimeout(state.sleepTimerId);
    state.sleepTimerId = null;
    state.sleepTimerLabel = '';
    syncControlLabels();
    return;
  }

  state.sleepTimerLabel = '睡眠 15m';
  state.sleepTimerId = window.setTimeout(() => {
    $audio.pause();
    state.sleepTimerId = null;
    state.sleepTimerLabel = '';
    syncControlLabels();
  }, 15 * 60 * 1000);
  syncControlLabels();
}

function openCurrentScripture() {
  const track = state.currentTrack;
  if (!track) return;
  const book = getBookByTitle(track.bookTitle);
  const current = book?.lessons.find((lesson) => lesson.audioSrc === track.audioSrc) || null;
  const url = current?.lessonFileUrl || current?.videoUrl || book?.slug || book?.url;
  if (!url) return;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function openMore() {
  const track = state.currentTrack;
  if (!track) return;
  const book = getBookByTitle(track.bookTitle);
  const current = book?.lessons.find((lesson) => lesson.audioSrc === track.audioSrc) || null;
  const url = current?.videoUrl || current?.lessonFileUrl || book?.url;
  if (!url) return;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function addOrEditNote() {
  const track = state.currentTrack;
  if (!track) return;
  const existing = getNote(track.audioSrc);
  const next = window.prompt(`为「${track.bookTitle} · ${track.lesson}」写一条笔记`, existing);
  if (next === null) return;
  setNote(track.audioSrc, next.trim());
  renderAll();
}

function toggleFavoriteCurrent() {
  const track = state.currentTrack;
  if (!track) return;
  toggleFavorite(track.audioSrc);
  renderAll();
}

function openSearch() {
  $catalogSearchInput?.focus();
  $catalogSearchInput?.select();
}

function clearSearchAndShowAll() {
  clearSearchQuery();
  document.querySelector('.page-scroll')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function bindAudio() {
  $audio.addEventListener('loadedmetadata', () => {
    const saved = getSavedPosition($audio.currentSrc || $audio.src || '');
    if (saved && Number.isFinite(saved.currentTime) && saved.currentTime > 0) {
      try {
        if (!Number.isFinite($audio.duration) || saved.currentTime < $audio.duration - 2) {
          $audio.currentTime = saved.currentTime;
        }
      } catch {}
    }
    updatePlaybackUI();
  });

  $audio.addEventListener('timeupdate', () => {
    setSavedPosition($audio.currentSrc || $audio.src || '', $audio.currentTime, $audio.duration);
    if (Number.isFinite($audio.currentTime) && $audio.currentTime >= Math.min(5, Math.max(($audio.duration || 0) * 0.1, 2))) {
      if (markListened($audio.currentSrc || $audio.src || '')) {
        renderAll();
      }
    }
    scheduleSaveSession();
    updatePlaybackUI();
  });

  $audio.addEventListener('play', () => {
    $audio.playbackRate = state.playbackRate;
    updatePlaybackUI();
  });

  $audio.addEventListener('pause', () => {
    setSavedPosition($audio.currentSrc || $audio.src || '', $audio.currentTime, $audio.duration);
    scheduleSaveSession();
    updatePlaybackUI();
  });

  $audio.addEventListener('ended', () => {
    const src = $audio.currentSrc || $audio.src || '';
    clearSavedPosition(src);
    if (markListened(src)) {
      renderAll();
    }
    updatePlaybackUI();
  });
}

function bindControls() {
  document.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;

    const action = button.dataset.action;
    if (action === 'select-book') {
      const title = button.dataset.title || '';
      if (!title) return;
      const book = getBookByTitle(title);
      if (!book) return;
      setSelectedCategory(book.category);
      setSelectedBookTitle(title);
      setCategorySelection(book.category, title);
      selectBook(title, { autoplay: false });
      return;
    }

    if (action === 'play-track') {
      playTrackBySrc(button.dataset.src || '', { autoplay: true });
      return;
    }

    if (action === 'sunday-filter-book') {
      setSundayBookFilter(button.dataset.filter || 'all');
      renderAll();
      scheduleSaveSession();
      return;
    }

    if (action === 'sunday-filter-occasion') {
      setSundayOccasionFilter(button.dataset.filter || 'all');
      renderAll();
      scheduleSaveSession();
      return;
    }
  });

  $playToggle.addEventListener('click', () => {
    if (!state.currentTrack) {
      const track = state.tracks[0];
      if (track) selectTrack(track, { autoplay: true });
      return;
    }
    if ($audio.paused) {
      void $audio.play().catch(() => {});
    } else {
      $audio.pause();
    }
  });

  $skipBackButton.addEventListener('click', () => seekBy(-15));
  $skipForwardButton.addEventListener('click', () => seekBy(15));
  $prevButton.addEventListener('click', () => playRelativeTrack(-1));
  $nextButton.addEventListener('click', () => playRelativeTrack(1));
  $shareButton?.addEventListener('click', () => {
    openShareSheet();
  });

  $resourcesShareButton?.addEventListener('click', () => {
    void copyResourcesShareLink();
  });

  $shareSheet?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-action]');
    if (!button) return;

    const action = button.dataset.action || '';
    if (action === 'close-share') {
      closeShareSheet();
      return;
    }
    if (action === 'share-mp3') {
      void shareMp3File();
      return;
    }
    if (action === 'download-mp3') {
      downloadMp3File();
      return;
    }
    if (action === 'copy-mp3-link') {
      void copyMp3Link();
      return;
    }
    if (action === 'share-page-link') {
      void sharePageLink();
      return;
    }
    if (action === 'copy-page-link') {
      void copyShareLink();
    }
  });
  $speedButton?.addEventListener('click', () => cyclePlaybackRate());

  $dockItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      const target = item.dataset.view || '';
      if (target === 'sermon' || target === 'resources') {
        event.preventDefault();
        setActiveView(target);
      }
    });
  });

  if ($progressSlider) {
    $progressSlider.addEventListener('input', () => {
      const max = Number($progressSlider.max || 1000);
      const progress = max > 0 ? Number($progressSlider.value || 0) / max : 0;
      seekToProgress(progress);
    });
  }

  $categoryTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.category || '';
      if (!category || category === getSelectedCategory()) return;
      setSelectedCategory(category);
      const book = getSelectedBookForCategory(category);
      if (book) {
        setSelectedBookTitle(book.title);
        setCategorySelection(category, book.title);
      }
      renderAll();
      scheduleSaveSession();
    });
  });

  $speakerTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const speaker = tab.dataset.speaker || '';
      if (!speaker || speaker === state.selectedSpeaker) return;
      setSelectedSpeaker(speaker);
      const category = getSelectedCategory();
      const book = getSelectedBookForCategory(category);
      if (book) {
        setSelectedBookTitle(book.title);
        setCategorySelection(category, book.title, speaker);
        selectBook(book.title, { autoplay: false });
      } else {
        state.currentTrack = null;
        $audio.removeAttribute('src');
        $audio.load();
        setSelectedBookTitle('');
        renderAll();
      }
      scheduleSaveSession();
    });
  });

  $catalogSearchInput?.addEventListener('input', () => {
    window.clearTimeout(searchRenderTimer);
    searchRenderTimer = window.setTimeout(() => {
      setSearchQuery($catalogSearchInput.value);
      renderAll();
      scheduleSaveSession();
    }, 120);
  });

  $catalogSearchInput?.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      clearSearchQuery();
      $catalogSearchInput.blur();
    }
  });

  $catalogSearchClear?.addEventListener('click', () => {
    clearSearchQuery();
    $catalogSearchInput?.focus();
  });
}

function prepareCatalog() {
  state.catalogBooks = state.data.books
    .filter(shouldKeepBook)
    .map(normalizeBook)
    .filter((book) => book.lessons.length > 0)
    .sort(compareBooks);
  migrateLegacyStorage();
  refreshSpeakerCatalog();
}

async function loadData() {
  const candidates = [appAssetPath('/data/books-final.json'), appAssetPath('/data/books.json')];
  for (const candidate of candidates) {
    const response = await fetch(candidate);
    if (!response.ok) continue;

    const payload = await response.json();
    if (hasSpeakerBooks(payload, 'kou')) return payload;

    const kouPayload = await fetchOptionalPayload(appAssetPath('/data/books-kou.json'));
    if (!kouPayload?.books?.length) return payload;

    return mergeCatalogPayloads(payload, kouPayload);
  }
  throw new Error('加载数据失败');
}

async function fetchOptionalPayload(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) return null;
    return response.json();
  } catch {
    return null;
  }
}

function hasSpeakerBooks(payload, speaker) {
  return (payload?.books || []).some((book) => {
    if ((book.speaker || 'gaolu') === speaker) return true;
    return (book.lessons || []).some((lesson) => (lesson.speaker || book.speaker || 'gaolu') === speaker);
  });
}

function mergeCatalogPayloads(primaryPayload, kouPayload) {
  const mergedBooks = [];
  const seen = new Set();

  for (const book of primaryPayload?.books || []) {
    const speaker = book.speaker || 'gaolu';
    const key = `${speaker}::${book.title}`;
    if (seen.has(key)) continue;
    seen.add(key);
    mergedBooks.push(book);
  }

  for (const book of kouPayload?.books || []) {
    const speaker = book.speaker || 'kou';
    const key = `${speaker}::${book.title}`;
    if (seen.has(key)) continue;
    seen.add(key);
    mergedBooks.push({
      ...book,
      speaker,
      lessons: (book.lessons || []).map((lesson) => ({
        ...lesson,
        speaker: lesson.speaker || speaker,
      })),
    });
  }

  return {
    ...primaryPayload,
    books: mergedBooks,
    counts: {
      ...primaryPayload?.counts,
      books: mergedBooks.length,
      kouBooks: (kouPayload?.books || []).length,
      kouLessons: (kouPayload?.books || []).reduce((sum, book) => sum + (book.lessonCount || 0), 0),
    },
  };
}

function updateInitialSelection() {
  const shareKey = parseShareFromUrl();
  const sharedTrack = shareKey ? findTrackByReference(shareKey) : null;

  if (sharedTrack) {
    setActiveView('sermon', { updateUrl: false });
    selectTrack(sharedTrack, { autoplay: true });
    clearShareFromUrl();
    return;
  }

  if (isFirstVisit()) {
    applyFirstVisitDefaults();
    return;
  }

  applyStoredSession();

  const category = getSelectedCategory();
  const book = getSelectedBookForCategory(category);
  if (book) {
    setSelectedBookTitle(book.title);
  }

  const session = loadJSON(SESSION_KEY, null);
  const savedCurrent = loadStoredString(CURRENT_KEY) || session?.currentStorageKey || '';
  const savedTrack = findTrackByReference(savedCurrent);
  if (savedTrack) {
    restoreTrack(savedTrack);
    return;
  }

  const recent = getRecentTracks()[0];
  if (recent) {
    restoreTrack(recent);
    return;
  }

  const fallbackBook = book || getSelectedBookForCategory(category);
  if (fallbackBook) {
    const track =
      state.tracks.find((item) => item.bookTitle === fallbackBook.title && item.trackNo === 1) ||
      state.tracks.find((item) => item.bookTitle === fallbackBook.title);
    if (track) restoreTrack(track);
  }
}

function init() {
  state.activeView = loadInitialView();
  updateViewUI();
  bindAudio();
  bindControls();
  bindSessionPersistence();
  $audio.playbackRate = state.playbackRate;
  scheduleLaunchScreenFallback();
  window.addEventListener(
    'load',
    () => {
      dismissLaunchScreen();
    },
    { once: true },
  );
  void loadData()
    .then((data) => {
      state.data = data;
      prepareCatalog();
      updateInitialSelection();
      renderAll();
      restoreScrollPosition();
      saveSession();
      dismissLaunchScreen();
    })
    .catch((error) => {
      console.error(error);
      if ($categoryBookList) {
        $categoryBookList.innerHTML = `
          <div class="category-book-empty">${escapeHtml(error.message || '加载失败')}</div>
        `;
      }
      renderAll();
      dismissLaunchScreen();
    });
}

init();
