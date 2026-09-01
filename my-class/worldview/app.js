const totalPages = 358;
const pageEl = document.getElementById('book-page');
const textEl = document.getElementById('book-text');
const pageLabel = document.getElementById('page-label');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const titleEl = document.getElementById('section-title');
const modal = document.getElementById('catalog-modal');
const catalogList = document.getElementById('catalog-list');
let page = Math.min(totalPages, Math.max(1, Number(localStorage.getItem('worldview-page') || 1)));

const sections = [
  [1, '封面与前言'], [7, '世界观：何以兹事体大？'], [59, '创造：我们从哪里来？我们是谁？'],
  [193, '堕落：这世界出了什么差错？'], [277, '救赎：要做什么才能回复原状？']
];
function titleFor(n) { let label = sections[0][1]; for (const item of sections) if (n >= item[0]) label = item[1]; return label; }
function formatPage(n) { return String(n).padStart(3, '0'); }
function formatOcrText(raw) {
  const corrections = [
    ['鹽落', '墮落'], ['鹽溶', '墮落'], ['證落', '墮落'],
    ['救贈', '救贖'], ['救讀', '救贖'], ['救顾', '救贖'],
    ['基督款', '基督教'], ['世界酸', '世界觀'], ['世界毅', '世界觀'],
    ['回复原状', '恢復原狀'], ['回复原狀', '恢復原狀']
  ];
  const lines = raw.split(/\r?\n/).map(line => {
    let fixed = line.trim();
    for (const [wrong, right] of corrections) fixed = fixed.replaceAll(wrong, right);
    return fixed;
  }).filter(Boolean);
  const paragraphs = [];
  let current = '';
  for (const line of lines) {
    if (/^[\d.·•-]{1,8}$/.test(line)) continue;
    const heading = line.length <= 12 && !/[，。！？；：,.!?;:]$/.test(line);
    if (heading && current) { paragraphs.push(current); current = ''; }
    if (heading) { paragraphs.push(line); continue; }
    const needsSpace = /[A-Za-z0-9)]$/.test(current) && /^[A-Za-z0-9(]/.test(line);
    current += (needsSpace ? ' ' : '') + line;
    if (/[。！？；]$/.test(line) || current.length > 90) {
      paragraphs.push(current); current = '';
    }
  }
  if (current) paragraphs.push(current);
  return paragraphs.join('\n\n');
}
function render() {
  const file = `./pages/page-${formatPage(page)}.jpg`;
  pageEl.src = file; pageEl.alt = `世界观的故事，第 ${page} 页`;
  textEl.textContent = '正在载入文字……';
  fetch(`./text/page-${formatPage(page)}.txt`)
    .then(response => response.ok ? response.text() : '')
    .then(text => { textEl.textContent = formatOcrText(text.trim()) || '这一页没有识别到文字。'; })
    .catch(() => { textEl.textContent = '文字载入失败，请展开下方“查看本页原始扫描”。'; });
  pageLabel.textContent = `第 ${page} 页`; progressText.textContent = `${page} / ${totalPages}`;
  progressFill.style.width = `${(page / totalPages) * 100}%`; titleEl.textContent = titleFor(page);
  localStorage.setItem('worldview-page', page); document.title = `${titleFor(page)} · 世界观的故事`;
}
function go(n) { page = Math.min(totalPages, Math.max(1, n)); render(); }
document.getElementById('prev').addEventListener('click', () => go(page - 1));
document.getElementById('next').addEventListener('click', () => go(page + 1));
document.getElementById('catalog').addEventListener('click', () => { modal.hidden = false; });
modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', () => { modal.hidden = true; }));
sections.forEach(([n, label]) => { const button = document.createElement('button'); button.type = 'button'; button.textContent = `第 ${n} 页 · ${label}`; button.addEventListener('click', () => { go(n); modal.hidden = true; }); catalogList.appendChild(button); });
document.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') go(page - 1); if (e.key === 'ArrowRight') go(page + 1); if (e.key === 'Escape') modal.hidden = true; });
render();
