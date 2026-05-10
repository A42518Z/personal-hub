/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('node:fs');
const path = require('node:path');

const root = process.cwd();
const moves = [
  ['src/pages/homes', 'src/pages/_archive/homes'],
  ['src/pages/landing', 'src/pages/_archive/landing'],
  ['src/pages/pricing.astro', 'src/pages/_archive/pricing.astro'],
  ['src/pages/services.astro', 'src/pages/_archive/services.astro'],
];

for (const [from, to] of moves) {
  const source = path.join(root, from);
  const target = path.join(root, to);

  if (!fs.existsSync(source)) {
    console.log(`skip missing ${from}`);
    continue;
  }

  if (fs.existsSync(target)) {
    console.log(`skip existing target ${to}`);
    continue;
  }

  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.renameSync(source, target);
  console.log(`archived ${from} -> ${to}`);
}
