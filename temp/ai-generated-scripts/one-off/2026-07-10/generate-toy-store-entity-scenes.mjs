import fs from 'node:fs';
import path from 'node:path';

const projectRoot = path.resolve(process.cwd());
const dataFile = path.join(projectRoot, 'src/data/learn/backend-toy-store.ts');
const outputDir = path.join(projectRoot, 'public/learn/toy-store/entities');
const source = fs.readFileSync(dataFile, 'utf8');

const escapeXml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

const slugify = (value, index) => {
  const ascii = value
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `${String(index + 1).padStart(2, '0')}-${ascii || 'entity'}`;
};

const palette = [
  ['#EFF6FF', '#2563EB', '#DBEAFE'],
  ['#F0FDF4', '#16A34A', '#DCFCE7'],
  ['#FFF7ED', '#EA580C', '#FFEDD5'],
  ['#FDF2F8', '#DB2777', '#FCE7F3'],
  ['#F5F3FF', '#7C3AED', '#EDE9FE'],
  ['#ECFEFF', '#0891B2', '#CFFAFE'],
];

function classify(title, analogy, tech) {
  const text = `${title} ${analogy} ${tech}`;
  if (/店|仓库|大楼|服务器|服务/.test(text)) return 'building';
  if (/保安|门卫|员工|管理员|办事员|翻译|管家|协调|考官|记录员|采购/.test(text)) return 'person';
  if (/电话|纸条|通行证|胸牌|菜单|按钮|文件柜|保险柜|小本子|计数|排行榜|锁|验证码|闹钟|快递站|传送带|集装箱|流水线|工具箱|地基|字节码|门牌|电话簿/.test(text)) return 'object';
  return 'mixed';
}

function sceneSvg({ title, analogy, tech, index }) {
  const [bg, accent, soft] = palette[index % palette.length];
  const kind = classify(title, analogy, tech);
  const safeTitle = escapeXml(title);
  const safeAnalogy = escapeXml(analogy);
  const safeTech = escapeXml(tech);

  const building = `
    <rect x="360" y="155" width="360" height="230" rx="30" fill="#fff" stroke="${accent}" stroke-width="7"/>
    <rect x="405" y="220" width="82" height="72" rx="12" fill="${soft}"/>
    <rect x="514" y="220" width="82" height="72" rx="12" fill="${soft}"/>
    <rect x="625" y="220" width="50" height="165" rx="14" fill="${accent}" opacity=".85"/>
    <path d="M338 157 L540 72 L742 157" fill="${soft}" stroke="${accent}" stroke-width="7" stroke-linejoin="round"/>
    <rect x="420" y="330" width="165" height="36" rx="12" fill="${soft}"/>
  `;

  const person = `
    <circle cx="545" cy="205" r="70" fill="#FDE68A" stroke="#92400E" stroke-width="6"/>
    <path d="M498 188 Q545 150 592 188" fill="${accent}" opacity=".9"/>
    <circle cx="520" cy="210" r="7" fill="#422006"/><circle cx="570" cy="210" r="7" fill="#422006"/>
    <path d="M520 240 Q545 258 570 240" fill="none" stroke="#422006" stroke-width="6" stroke-linecap="round"/>
    <rect x="472" y="270" width="146" height="145" rx="34" fill="${accent}"/>
    <rect x="500" y="315" width="90" height="55" rx="15" fill="#fff" opacity=".92"/>
    <circle cx="684" cy="236" r="42" fill="${soft}" stroke="${accent}" stroke-width="5"/>
    <path d="M684 210 V252 M660 231 H708" stroke="${accent}" stroke-width="8" stroke-linecap="round"/>
  `;

  const object = `
    <rect x="390" y="145" width="310" height="255" rx="38" fill="#fff" stroke="${accent}" stroke-width="7"/>
    <rect x="440" y="205" width="210" height="125" rx="24" fill="${soft}"/>
    <circle cx="495" cy="267" r="28" fill="${accent}" opacity=".85"/>
    <rect x="540" y="238" width="75" height="18" rx="9" fill="${accent}"/>
    <rect x="540" y="270" width="58" height="18" rx="9" fill="${accent}" opacity=".72"/>
    <rect x="540" y="302" width="88" height="18" rx="9" fill="${accent}" opacity=".5"/>
    <path d="M420 367 Q545 420 670 367" fill="none" stroke="${accent}" stroke-width="7" stroke-linecap="round"/>
  `;

  const mixed = `${building}<circle cx="280" cy="255" r="48" fill="#FDE68A" stroke="#92400E" stroke-width="5"/><rect x="235" y="300" width="90" height="100" rx="24" fill="${accent}"/>`;
  const visual = kind === 'building' ? building : kind === 'person' ? person : kind === 'object' ? object : mixed;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" role="img" aria-labelledby="title desc">
  <title id="title">${safeTitle}对应${safeTech}的卡通场景图</title>
  <desc id="desc">以网上玩具店为背景，展示${safeTitle}：${safeAnalogy}。</desc>
  <rect width="960" height="540" rx="36" fill="${bg}"/>
  <circle cx="90" cy="88" r="38" fill="#FDE68A"/>
  <path d="M0 440 C190 390 305 474 478 426 C650 378 770 438 960 392 L960 540 L0 540Z" fill="${soft}" opacity=".8"/>
  <text x="480" y="62" text-anchor="middle" font-size="34" font-family="Arial, sans-serif" font-weight="900" fill="${accent}">${safeTitle}</text>
  <text x="480" y="104" text-anchor="middle" font-size="22" font-family="Arial, sans-serif" font-weight="700" fill="#334155">${safeTech}</text>
  ${visual}
  <rect x="90" y="435" width="780" height="62" rx="20" fill="#fff" opacity=".95" stroke="${accent}" stroke-width="3"/>
  <text x="480" y="474" text-anchor="middle" font-size="21" font-family="Arial, sans-serif" font-weight="700" fill="#334155">${safeAnalogy}</text>
</svg>`;
}

const cardPattern = /\{ icon: '([^']*)', title: '([^']*)', analogy: '([^']*)', tech: '([^']*)' \}/g;
const matches = [...source.matchAll(cardPattern)];
if (matches.length === 0) {
  throw new Error('没有找到 elementCards，未修改任何文件。');
}

fs.mkdirSync(outputDir, { recursive: true });
let updated = source;
const used = new Set();

matches.forEach((match, index) => {
  const [, icon, title, analogy, tech] = match;
  let slug = slugify(`${title}-${tech}`, index);
  while (used.has(slug)) slug = `${slug}-${index + 1}`;
  used.add(slug);
  const publicPath = `/learn/toy-store/entities/${slug}.svg`;
  const filePath = path.join(outputDir, `${slug}.svg`);
  fs.writeFileSync(filePath, sceneSvg({ title, analogy, tech, index }), 'utf8');
  const replacement = `{ icon: '${icon}', title: '${title}', analogy: '${analogy}', tech: '${tech}', sceneImage: '${publicPath}' }`;
  updated = updated.replace(match[0], replacement);
});

updated = updated.replace(
  "export type ToyStoreElementCard = {\n  icon: string;\n  title: string;\n  analogy: string;\n  tech: string;\n};",
  "export type ToyStoreElementCard = {\n  icon: string;\n  title: string;\n  analogy: string;\n  tech: string;\n  sceneImage: string;\n};",
);

fs.writeFileSync(dataFile, updated, 'utf8');
console.log(JSON.stringify({ generated: matches.length, outputDir, dataFile }, null, 2));
