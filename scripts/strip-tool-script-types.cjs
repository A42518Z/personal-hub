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
  content = content.replaceAll('<script lang="ts">', '<script>');
  content = content.replace(/querySelectorAll<[^>]+>/g, 'querySelectorAll');
  content = content.replace(/querySelector<[^>]+>/g, 'querySelector');
  content = content.replace(/\(text: string, isError = false\)/g, '(text, isError = false)');
  content = content.replace(/\(text: string\)/g, '(text)');
  content = content.replace(/\(value: string\)/g, '(value)');
  content = content.replace(/\(markdown: string\)/g, '(markdown)');
  content = content.replace(/\(date: Date\)/g, '(date)');
  content = content.replace(/\(space\?: number\)/g, '(space)');
  content = content.replace(/const html: string\[] = \[];/g, 'const html = [];');
  content = content.replace(/let codeLines: string\[] = \[];/g, 'let codeLines = [];');
  fs.writeFileSync(file, content);
  console.log(`stripped ${path.basename(file)}`);
}
