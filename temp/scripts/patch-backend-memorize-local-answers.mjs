import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(scriptDirectory, '..', '..');
const pagePath = join(projectRoot, 'src', 'pages', 'learn', 'backend-memorize.astro');
let content = readFileSync(pagePath, 'utf8');

const oldQuestionTitles = "const questionTitles = extractQuestionTitles(docs.map(({ markdown }) => markdown.rawContent()));";
const newQuestionTitles = "const questionTitles = extractQuestionTitles(\n  docs.filter(({ id }) => id !== 'overview').map(({ markdown }) => markdown.rawContent())\n);";

if (!content.includes(oldQuestionTitles)) {
  throw new Error('Expected questionTitles declaration not found. No changes written.');
}

content = content.replace(oldQuestionTitles, newQuestionTitles);

const oldContainer = 'data-question-container>';
const newContainer = "data-question-container={doc.id !== 'overview' ? '' : undefined}>";

if (!content.includes(oldContainer)) {
  throw new Error('Expected question container marker not found. No changes written.');
}

content = content.replace(oldContainer, newContainer);
writeFileSync(pagePath, content, 'utf8');
console.log('Updated backend-memorize.astro to exclude overview links from question-answer matching.');
