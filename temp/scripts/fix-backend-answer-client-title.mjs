import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const pagePath = join(process.cwd(), 'src', 'pages', 'learn', 'backend-memorize.astro');
let content = readFileSync(pagePath, 'utf8');

const oldText = "const title = match[1].split('|', 1)[0].split('#', 1)[0].trim();";
const newText = "const title = match[1].split('|', 1)[0].trim();";

if (!content.includes(oldText)) {
  throw new Error('Expected client-side title parsing line not found.');
}

content = content.replace(oldText, newText);
writeFileSync(pagePath, content, 'utf8');
console.log('Fixed client-side question title parsing.');
