import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, dirname, extname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(scriptDirectory, '..');
const sourceRoot = join(projectRoot, '..', 'absidianValues', '面试题');
const plansRoot = join(projectRoot, 'src', 'data', 'learn', 'backend-memorization');
const answersRoot = join(plansRoot, 'answers');
const manifestPath = join(answersRoot, 'manifest.json');
const skippedDirectories = new Set(['.obsidian', '13_七天背诵计划']);

const normalizeTitle = (title) => title.normalize('NFC').trim();
const toPortablePath = (path) => path.split(sep).join('/');

const collectMarkdownFiles = (directory, { skipDirectories = false } = {}) => {
  const files = [];

  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!skipDirectories || !skippedDirectories.has(entry.name)) {
        files.push(...collectMarkdownFiles(join(directory, entry.name), { skipDirectories }));
      }
      continue;
    }

    if (entry.isFile() && extname(entry.name).toLowerCase() === '.md') {
      files.push(join(directory, entry.name));
    }
  }

  return files;
};

const extractQuestionTitles = (markdownContents) => {
  const titles = [];
  const seen = new Set();
  const wikiLinkPattern = /\[\[([^\]]+)\]\]/g;

  for (const content of markdownContents) {
    wikiLinkPattern.lastIndex = 0;
    let match;

    while ((match = wikiLinkPattern.exec(content)) !== null) {
      const rawTarget = match[1].split('|', 1)[0];
      const title = normalizeTitle(rawTarget);
      if (!title || seen.has(title)) continue;

      seen.add(title);
      titles.push(title);
    }
  }

  return titles;
};

const candidatePriority = (filePath) => {
  const relativePath = toPortablePath(relative(sourceRoot, filePath));
  const parts = relativePath.split('/');
  const isCategorized = parts.length > 1 && /^\d{2}_/.test(parts[0]);

  if (isCategorized) return 0;
  if (parts.length === 1) return 1;
  return 2;
};

if (!existsSync(sourceRoot)) {
  console.error(`Source interview question directory not found: ${sourceRoot}`);
  process.exit(1);
}

if (!existsSync(plansRoot)) {
  console.error(`Local memorization plan directory not found: ${plansRoot}`);
  process.exit(1);
}

const planFiles = collectMarkdownFiles(plansRoot).filter((filePath) => {
  if (filePath.startsWith(`${answersRoot}${sep}`)) return false;
  return /^day[1-7]\.md$/i.test(basename(filePath));
});
const planContents = planFiles.map((filePath) => readFileSync(filePath, 'utf8'));
const questionTitles = extractQuestionTitles(planContents);
const sourceFiles = collectMarkdownFiles(sourceRoot, { skipDirectories: true });
const exactCandidates = new Map();
const caseInsensitiveCandidates = new Map();

for (const filePath of sourceFiles) {
  const title = normalizeTitle(basename(filePath, extname(filePath)));
  const exact = exactCandidates.get(title) ?? [];
  exact.push(filePath);
  exactCandidates.set(title, exact);

  const foldedTitle = title.toLocaleLowerCase('zh-CN');
  const folded = caseInsensitiveCandidates.get(foldedTitle) ?? [];
  folded.push(filePath);
  caseInsensitiveCandidates.set(foldedTitle, folded);
}

mkdirSync(answersRoot, { recursive: true });

const answers = [];
const missingTitles = [];
const duplicateTitles = [];
let writtenCount = 0;
let unchangedCount = 0;

for (const questionTitle of questionTitles) {
  const exact = exactCandidates.get(questionTitle) ?? [];
  const fallback = caseInsensitiveCandidates.get(questionTitle.toLocaleLowerCase('zh-CN')) ?? [];
  const candidates = exact.length > 0 ? exact : fallback;

  if (candidates.length === 0) {
    missingTitles.push(questionTitle);
    continue;
  }

  if (candidates.length > 1) duplicateTitles.push(questionTitle);

  const selected = [...candidates].sort((left, right) => {
    const priorityDifference = candidatePriority(left) - candidatePriority(right);
    if (priorityDifference !== 0) return priorityDifference;

    const leftRelative = toPortablePath(relative(sourceRoot, left));
    const rightRelative = toPortablePath(relative(sourceRoot, right));
    return leftRelative.length - rightRelative.length || leftRelative.localeCompare(rightRelative, 'zh-CN');
  })[0];

  const sourceContent = readFileSync(selected, 'utf8');
  const targetFileName = basename(selected);
  const targetPath = join(answersRoot, targetFileName);
  const existingContent = existsSync(targetPath) ? readFileSync(targetPath, 'utf8') : null;

  if (existingContent === sourceContent) {
    unchangedCount += 1;
  } else {
    writeFileSync(targetPath, sourceContent, 'utf8');
    writtenCount += 1;
  }

  answers.push({
    title: questionTitle,
    file: targetFileName,
    sourcePath: toPortablePath(relative(sourceRoot, selected)),
  });
}

const manifest = {
  source: '../absidianValues/面试题',
  questionCount: questionTitles.length,
  answerCount: answers.length,
  answers,
  missingTitles,
  duplicateTitles: [...new Set(duplicateTitles)],
};

writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

console.log(`Question titles: ${questionTitles.length}`);
console.log(`Answers copied/updated: ${writtenCount}`);
console.log(`Answers unchanged: ${unchangedCount}`);
console.log(`Answers available: ${answers.length}`);
console.log(`Missing answers: ${missingTitles.length}`);
console.log(`Duplicate source titles resolved: ${manifest.duplicateTitles.length}`);

if (missingTitles.length > 0) {
  console.log(`Missing titles: ${missingTitles.join(' | ')}`);
}
