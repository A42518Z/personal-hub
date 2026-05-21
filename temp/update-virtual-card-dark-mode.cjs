const fs = require('fs');
const path = require('path');

const target = path.join(process.cwd(), 'src/pages/lab/vue-virtual-card-scroll.astro');
let content = fs.readFileSync(target, 'utf8');

const beforeVars = `  .lab-virtual-card {
    --bg: #f4f7fb;
    --surface: #ffffff;
    --surface-soft: #eef4f8;
    --ink: #172033;
    --muted: #66758a;
    --line: #d8e0ea;
    --line-strong: #b8c4d2;
    --accent: #0f766e;
    --accent-strong: #0a5f59;
    --violet: #6656d9;
    --amber: #b7791f;
    --red: #b42318;
    --radius: 12px;`;
const afterVars = `  .lab-virtual-card {
    --bg: #f4f7fb;
    --surface: #ffffff;
    --surface-soft: #eef4f8;
    --surface-card: #ffffff;
    --field-bg: #ffffff;
    --ink: #172033;
    --muted: #66758a;
    --line: #d8e0ea;
    --line-strong: #b8c4d2;
    --accent: #0f766e;
    --accent-strong: #0a5f59;
    --violet: #6656d9;
    --amber: #b7791f;
    --red: #b42318;
    --button-hover: #f2fbfa;
    --success-soft: #e9f7f5;
    --violet-soft: #f0eefe;
    --amber-soft: #fff4dc;
    --hud-bg: rgba(255, 255, 255, 0.94);
    --panel-shadow: rgba(23, 32, 51, 0.06);
    --soft-shadow: rgba(23, 32, 51, 0.05);
    --hud-shadow: rgba(23, 32, 51, 0.12);
    --skeleton-a: #edf1f6;
    --skeleton-b: #dfe7f1;
    --primary-contrast: #ffffff;
    --radius: 12px;`;
content = content.replace(beforeVars, afterVars);

const darkBlock = `
  :global(.dark) .lab-virtual-card {
    --bg: #020617;
    --surface: #0f172a;
    --surface-soft: #111c31;
    --surface-card: #111827;
    --field-bg: #020617;
    --ink: #e5eefb;
    --muted: #94a3b8;
    --line: #243247;
    --line-strong: #334155;
    --accent: #2dd4bf;
    --accent-strong: #5eead4;
    --violet: #a78bfa;
    --amber: #fbbf24;
    --red: #f87171;
    --button-hover: rgba(45, 212, 191, 0.12);
    --success-soft: rgba(45, 212, 191, 0.14);
    --violet-soft: rgba(167, 139, 250, 0.14);
    --amber-soft: rgba(251, 191, 36, 0.14);
    --hud-bg: rgba(15, 23, 42, 0.92);
    --panel-shadow: rgba(0, 0, 0, 0.32);
    --soft-shadow: rgba(0, 0, 0, 0.24);
    --hud-shadow: rgba(0, 0, 0, 0.36);
    --skeleton-a: #1e293b;
    --skeleton-b: #334155;
    --primary-contrast: #031b1a;
  }
`;
if (!content.includes(':global(.dark) .lab-virtual-card')) {
  content = content.replace('  .lab-hero { display: flex;', `${darkBlock}  .lab-hero { display: flex;`);
}

const replacements = [
  ["background: #fff; cursor", "background: var(--field-bg); cursor"],
  ["background: #f2fbfa;", "background: var(--button-hover);"],
  ["button.primary { border-color: var(--accent); color: #fff; background: var(--accent); }", "button.primary { border-color: var(--accent); color: var(--primary-contrast); background: var(--accent); }"],
  ["box-shadow: 0 12px 30px rgba(23, 32, 51, 0.05);", "box-shadow: 0 12px 30px var(--soft-shadow);"],
  ["color: var(--ink); background: #fff; outline", "color: var(--ink); background: var(--field-bg); outline"],
  [".status-pill.active { color: #fff; background: var(--violet); }", ".status-pill.active { color: var(--primary-contrast); background: var(--violet); }"],
  [".status-pill.optimized { color: var(--accent-strong); background: #e9f7f5; }", ".status-pill.optimized { color: var(--accent-strong); background: var(--success-soft); }"],
  ["box-shadow: 0 16px 38px rgba(23, 32, 51, 0.06);", "box-shadow: 0 16px 38px var(--panel-shadow);"],
  ["background: #fff; scrollbar-gutter", "background: var(--surface-card); scrollbar-gutter"],
  ["background: rgba(255, 255, 255, 0.94); box-shadow: 0 10px 30px rgba(23, 32, 51, 0.12);", "background: var(--hud-bg); box-shadow: 0 10px 30px var(--hud-shadow);"],
  [".scroll-hud.active { color: #fff; border-color: var(--violet); background: var(--violet); }", ".scroll-hud.active { color: var(--primary-contrast); border-color: var(--violet); background: var(--violet); }"],
  [".scroll-hud.active strong { color: #fff; }", ".scroll-hud.active strong { color: var(--primary-contrast); }"],
  ["background: #fff; box-shadow: 0 8px 22px rgba(23, 32, 51, 0.06);", "background: var(--surface-card); box-shadow: 0 8px 22px var(--panel-shadow);"],
  ["background: #f0eefe;", "background: var(--violet-soft);"],
  ["background: linear-gradient(90deg, #edf1f6 0%, #dfe7f1 45%, #edf1f6 100%);", "background: linear-gradient(90deg, var(--skeleton-a) 0%, var(--skeleton-b) 45%, var(--skeleton-a) 100%);"],
  ["background: #fff; }\n  .metric-label", "background: var(--surface-card); }\n  .metric-label"],
  ["background: #e9f7f5; color: var(--accent-strong);", "background: var(--success-soft); color: var(--accent-strong);"],
  ["background: #fff4dc; color: var(--amber);", "background: var(--amber-soft); color: var(--amber);"],
];
for (const [from, to] of replacements) {
  content = content.split(from).join(to);
}

fs.writeFileSync(target, content, 'utf8');
console.log('updated dark mode variables and color usages for vue-virtual-card-scroll.astro');
