import { existsSync, readFileSync } from 'node:fs';
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

interface AnswerManifestEntry {
  title: string;
  file: string;
  sourcePath: string;
}

interface AnswerManifest {
  answers: AnswerManifestEntry[];
  missingTitles?: string[];
  duplicateTitles?: string[];
}

const manifestPath = fileURLToPath(new URL('../data/learn/backend-memorization/answers/manifest.json', import.meta.url));

const stripFrontmatter = (content: string) =>
  content.replace(/^\uFEFF?---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/, '');

const stripLeadingTitle = (content: string) => content.replace(/^\s*#\s+[^\r\n]+(?:\r?\n|$)/, '');

export const extractQuestionTitles = (markdownContents: string[]) => {
  const titles: string[] = [];
  const seen = new Set<string>();
  const wikiLinkPattern = /\[\[([^\]]+)\]\]/g;

  for (const content of markdownContents) {
    wikiLinkPattern.lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = wikiLinkPattern.exec(content)) !== null) {
      const rawTarget = match[1].split('|', 1)[0];
      const title = rawTarget.normalize('NFC').trim();
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
  if (!existsSync(manifestPath)) {
    return {
      answers: [],
      missingTitles: questionTitles,
      duplicateTitles: [],
    };
  }

  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8')) as AnswerManifest;
  const manifestByTitle = new Map(manifest.answers.map((answer) => [answer.title, answer]));
  const processor = await createMarkdownProcessor({
    gfm: true,
    smartypants: false,
    syntaxHighlight: 'shiki',
  });

  const answers: MemorizationAnswer[] = [];

  for (const questionTitle of questionTitles) {
    const manifestEntry = manifestByTitle.get(questionTitle);
    if (!manifestEntry) continue;

    const answerPath = new URL(
      `../data/learn/backend-memorization/answers/${encodeURIComponent(manifestEntry.file)}`,
      import.meta.url
    );
    const filePath = fileURLToPath(answerPath);
    if (!existsSync(filePath)) continue;

    const rawContent = readFileSync(filePath, 'utf8');
    const content = stripLeadingTitle(stripFrontmatter(rawContent)).trim();
    const rendered = await processor.render(content);

    answers.push({
      title: questionTitle,
      html: rendered.code,
      sourcePath: manifestEntry.sourcePath,
    });
  }

  const answeredTitles = new Set(answers.map((answer) => answer.title));
  const missingTitles = questionTitles.filter((title) => !answeredTitles.has(title));

  return {
    answers,
    missingTitles,
    duplicateTitles: manifest.duplicateTitles ?? [],
  };
};
