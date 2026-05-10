/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('node:fs');
const path = require('node:path');

const root = process.cwd();
const sourceDir = path.join(root, 'src/data/post');
const archiveDir = path.join(root, 'src/data/_archive/post');

if (!fs.existsSync(sourceDir)) {
  console.log('skip missing src/data/post');
  process.exit(0);
}

fs.mkdirSync(archiveDir, { recursive: true });

for (const entry of fs.readdirSync(sourceDir)) {
  if (!entry.endsWith('.md') && !entry.endsWith('.mdx')) continue;

  const source = path.join(sourceDir, entry);
  const target = path.join(archiveDir, entry);

  if (fs.existsSync(target)) {
    console.log(`skip existing archive ${entry}`);
    continue;
  }

  fs.renameSync(source, target);
  console.log(`archived ${entry}`);
}
