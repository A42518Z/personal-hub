import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { basename, extname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

import { createMarkdownProcessor } from '@astrojs/markdown-remark';

export interface MemorizationAnswer {
  title: string;
  html: string;
  sourcePath: string;
}

export interface MemorizationAnswerLoadResult {
  answers: MemorizationAnswer[];
  missingTitles: string[];
  duplicateTitles: string[];
}

const interviewQuestionRoot = fileURLToPath(new URL('../../../absidianValues/面试题/', import.meta.url));
const skippedDirectories = new Set(['.obsidian', '13_七天背诵计划']);

const normalizeTitle = (title: string) => title.normalize('NFC').trim();

const stripFrontmatter = (content: string) =>
  content.replace(/^\uFEFF?---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/, '');

const stripLeadingTitle = (content: string) => content.replace(/^\s*#\s+[^\r\n]+(?:\r?\n|$)/, '');

const toPortablePath = (path: string) => path.split(sep).join('/');

const collectMarkdownFiles = (directory: string): string[] => {
  const files: string[] = [];

  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!skippedDirectories.has(entry.name)) {
        files.push(...collectMarkdownFiles(join(directory, entry.name)));
      }
      continue;
    }

    if (entry.isFile() && extname(entry.name).toLowerCase() === '.md') {
      files.push(join(directory, entry.name));
    }
  }

  return files;
};

const candidatePriority = (filePath: string) => {
  const relativePath = toPortablePath(relative(interviewQuestionRoot, filePath));
  const parts = relativePath.split('/');
  const isCategorized = parts.length > 1 && /^\d{2}_/.test(parts[0]);

  if (isCategorized) return 0;
  if (parts.length === 1) return 1;
  return 2;
};

export const extractQuestionTitles = (markdownContents: string[]) => {
  const titles: string[] = [];
  const seen = new Set<string>();
  const wikiLinkPattern = /\[\[([^\]]+)\]\]/g;

  for (const content of markdownContents) {
    wikiLinkPattern.lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = wikiLinkPattern.exec(content)) !== null) {
      const rawTarget = match[1].split('|', 1)[0].split('#', 1)[0];
      const title = normalizeTitle(rawTarget);
      if (!title || seen.has(title)) continue;

      seen.add(title);
      titles.push(title);
    }
  }

  return titles;
};

export const loadMemorizationAnswers = async (
  questionTitles: string[]
): Promise<MemorizationAnswerLoadResult> => {
  if (!existsSync(interviewQuestionRoot)) {
    return {
      answers: [],
      missingTitles: questionTitles,
      duplicateTitles: [],
    };
  }

  const allMarkdownFiles = collectMarkdownFiles(interviewQuestionRoot);
  const exactCandidates = new Map<string, string[]>();
  const caseInsensitiveCandidates = new Map<string, string[]>();

  for (const filePath of allMarkdownFiles) {
    const title = normalizeTitle(basename(filePath, extname(filePath)));
    const exactList = exactCandidates.get(title) ?? [];
    exactList.push(filePath);
    exactCandidates.set(title, exactList);

    const foldedTitle = title.toLocaleLowerCase('zh-CN');
    const foldedList = caseInsensitiveCandidates.get(foldedTitle) ?? [];
    foldedList.push(filePath);
    caseInsensitiveCandidates.set(foldedTitle, foldedList);
  }

  const duplicateTitles: string[] = [];
  const selectedFiles = new Map<string, string>();

  for (const questionTitle of questionTitles) {
    const exact = exactCandidates.get(questionTitle) ?? [];
    const fallback = caseInsensitiveCandidates.get(questionTitle.toLocaleLowerCase('zh-CN')) ?? [];
    const candidates = exact.length > 0 ? exact : fallback;

    if (candidates.length === 0) continue;
    if (candidates.length > 1) duplicateTitles.push(questionTitle);

    const selected = [...candidates].sort((left, right) => {
      const priorityDifference = candidatePriority(left) - candidatePriority(right);
      if (priorityDifference !== 0) return priorityDifference;

      const leftRelative = toPortablePath(relative(interviewQuestionRoot, left));
      const rightRelative = toPortablePath(relative(interviewQuestionRoot, right));
      return leftRelative.length - rightRelative.length || leftRelative.localeCompare(rightRelative, 'zh-CN');
    })[0];

    selectedFiles.set(questionTitle, selected);
  }

  const processor = await createMarkdownProcessor({
    gfm: true,
    smartypants: false,
    syntaxHighlight: 'shiki',
  });

  const answers: MemorizationAnswer[] = [];

  for (const questionTitle of questionTitles) {
    const filePath = selectedFiles.get(questionTitle);
    if (!filePath) continue;

    const rawContent = readFileSync(filePath, 'utf8');
    const content = stripLeadingTitle(stripFrontmatter(rawContent)).trim();
    const rendered = await processor.render(content);

    answers.push({
      title: questionTitle,
      html: rendered.code,
      sourcePath: toPortablePath(relative(interviewQuestionRoot, filePath)),
    });
  }

  const answeredTitles = new Set(answers.map((answer) => answer.title));
  const missingTitles = questionTitles.filter((title) => !answeredTitles.has(title));

  return {
    answers,
    missingTitles,
    duplicateTitles: [...new Set(duplicateTitles)],
  };
};
