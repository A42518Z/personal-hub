const fs = require('fs');
const path = require('path');

const target = path.join(process.cwd(), 'src/pages/lab/vue-virtual-card-scroll.astro');
let content = fs.readFileSync(target, 'utf8');

const replacements = [
  ['    --surface-card: #ffffff;\n    --field-bg: #ffffff;', '    --viewport-bg: #ffffff;\n    --page-bg: #f8fbff;\n    --surface-card: #ffffff;\n    --field-bg: #ffffff;'],
  ['    --surface-card: #111827;\n    --field-bg: #020617;', '    --viewport-bg: #020617;\n    --page-bg: #0b1220;\n    --surface-card: #172033;\n    --field-bg: #020617;'],
  ['  .viewport { position: relative; height: min(68vh, 660px); min-height: 460px; overflow: auto; background: var(--surface-card); scrollbar-gutter: stable; }', '  .viewport { position: relative; height: min(68vh, 660px); min-height: 460px; overflow: auto; background: var(--viewport-bg); scrollbar-gutter: stable; }'],
  ['  .page-inner { display: grid; grid-template-rows: auto 1fr; gap: 12px; height: 100%; border-top: 1px solid var(--line); padding-top: 14px; }', '  .page-inner { display: grid; grid-template-rows: auto 1fr; gap: 12px; height: 100%; border: 1px solid var(--line); border-radius: var(--radius); padding: 14px; background: var(--page-bg); }'],
];

for (const [from, to] of replacements) {
  if (!content.includes(from)) {
    console.warn(`pattern not found: ${from.slice(0, 80)}...`);
  }
  content = content.split(from).join(to);
}

fs.writeFileSync(target, content, 'utf8');
console.log('fixed viewport/page/card contrast variables');
