/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('node:fs');
const path = require('node:path');

const files = [
  'JsonFormatter.astro',
  'Base64Converter.astro',
  'TimestampConverter.astro',
  'RegexTester.astro',
  'MarkdownPreview.astro',
].map((name) => path.join(process.cwd(), 'src/components/tools', name));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replaceAll('<script>', '<script lang="ts">');
  fs.writeFileSync(file, content);
  console.log(`fixed ${path.basename(file)}`);
}
