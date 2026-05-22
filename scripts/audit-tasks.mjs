// Audit every task in every level to see which optional rich-content sections it provides.
// Mirrors the `stepPool` availability checks in src/pages/LessonFlow.tsx so we can compare
// each task's effective lesson flow against Level 1 / Task 1 (our gold-standard end-to-end run).

import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const here = resolve(process.cwd(), 'src/data/levels/index.ts');
console.log('Auditing tasks from', here);

// We can't import TS directly; instead, parse each level file textually for task fields.
import { readFileSync, readdirSync } from 'node:fs';

const levelDir = resolve(process.cwd(), 'src/data/levels');
const files = readdirSync(levelDir).filter(f => /^level\d+\.ts$/.test(f))
  .sort((a, b) => parseInt(a.match(/\d+/)[0], 10) - parseInt(b.match(/\d+/)[0], 10));

// Fields that gate `stepPool` availability (per LessonFlow.tsx)
const TASK_FIELDS = [
  'introduction',       // 'intro' step
  'commonMistakes',     // 'common-mistakes' step
  'modelDialogue',      // 'dialogue' step
  'pronunciationFocus', // 'pronunciation' step
  'culturalNote',       // 'cultural-note' step
  'grammarTheoryIds',   // 'theory', 'grammar-map', 'recognition-quiz', 'controlled-practice'
  'vocabulary',         // 'vocabulary', 'practice'
];

const rows = [];

for (const file of files) {
  const levelNum = parseInt(file.match(/\d+/)[0], 10);
  const src = readFileSync(resolve(levelDir, file), 'utf8');

  // Naive split on "    {" indented task literal followed by "id: <N>".
  // Find every "id: <N>," at top-level of tasks array; then for each task slice, look for fields.
  const taskStarts = [];
  const taskIdRegex = /^\s{4,6}\{\s*$|^\s*\{\s*\n\s*id:\s*(\d+)/gm;
  // Simpler: find each occurrence of `id: <N>,` near start of a task block (indentation >= 6 spaces inside tasks array)
  const idRegex = /\n(\s{6,8})id:\s*(\d+),/g;
  let m;
  while ((m = idRegex.exec(src)) !== null) {
    taskStarts.push({ id: parseInt(m[2], 10), pos: m.index });
  }

  // Slice each task block (from one id to the next, or to end)
  for (let i = 0; i < taskStarts.length; i++) {
    const start = taskStarts[i].pos;
    const end = i + 1 < taskStarts.length ? taskStarts[i + 1].pos : src.length;
    const slice = src.slice(start, end);
    const titleMatch = slice.match(/title:\s*"([^"]+)"/);
    const titleEsMatch = slice.match(/titleEs:\s*"([^"]+)"/);

    const has = {};
    for (const f of TASK_FIELDS) {
      // Match "<field>:" at start of indented line (not part of a string)
      const re = new RegExp(`\\n\\s{6,10}${f}\\s*:`);
      has[f] = re.test(slice);
    }

    // Vocabulary item count (rough): look inside "vocabulary: {"
    let vocabCount = 0;
    const vocabMatch = slice.match(/vocabulary:\s*\{([\s\S]*?)\n\s{6,8}\}/);
    if (vocabMatch) {
      const items = vocabMatch[1].match(/word:\s*"/g);
      vocabCount = items ? items.length : 0;
    }

    rows.push({
      level: levelNum,
      task: taskStarts[i].id,
      title: titleMatch ? titleMatch[1] : '?',
      titleEs: titleEsMatch ? titleEsMatch[1] : '?',
      vocabCount,
      ...has,
    });
  }
}

// Print per-level table
const cur = (b) => b ? '✓' : '·';
const header = ['Lv', 'T', 'Title', 'voc', 'intro', 'mistk', 'dial', 'pron', 'cult', 'gram'];
console.log(header.join('\t'));
let levelTasks = {};
for (const r of rows) {
  levelTasks[r.level] = (levelTasks[r.level] || 0) + 1;
  console.log([
    r.level, r.task, r.title.slice(0, 32).padEnd(32),
    r.vocabCount,
    cur(r.introduction), cur(r.commonMistakes), cur(r.modelDialogue),
    cur(r.pronunciationFocus), cur(r.culturalNote), cur(r.grammarTheoryIds),
  ].join('\t'));
}

console.log('\n--- Summary ---');
const totals = { introduction: 0, commonMistakes: 0, modelDialogue: 0, pronunciationFocus: 0, culturalNote: 0, grammarTheoryIds: 0 };
for (const r of rows) for (const k of Object.keys(totals)) if (r[k]) totals[k]++;
console.log(`Total tasks: ${rows.length}`);
for (const [k, v] of Object.entries(totals)) console.log(`${k}: ${v}/${rows.length} (${Math.round(v / rows.length * 100)}%)`);

console.log('\n--- Tasks vs Level 1 Task 1 (full flow gold-standard) ---');
const gold = rows.find(r => r.level === 1 && r.task === 1);
const goldKeys = TASK_FIELDS.filter(f => gold[f]);
console.log('Gold standard fields:', goldKeys.join(', '));
const equal = rows.filter(r => goldKeys.every(k => r[k]));
console.log(`Tasks matching gold-standard field set: ${equal.length}/${rows.length}`);
const partial = rows.filter(r => !goldKeys.every(k => r[k]));
console.log(`Tasks missing one or more gold fields: ${partial.length}`);
for (const r of partial.slice(0, 200)) {
  const missing = goldKeys.filter(k => !r[k]);
  console.log(`  L${r.level} T${r.task} "${r.title.slice(0,32)}" — missing: ${missing.join(',')}`);
}
