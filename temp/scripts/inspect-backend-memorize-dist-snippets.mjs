import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const filePath = join(process.cwd(), 'dist', 'learn', 'backend-memorize', 'index.html');
const html = readFileSync(filePath, 'utf8');

for (const needle of ['可弹出答案', 'answer-data', '反射的优缺点']) {
  const index = html.indexOf(needle);
  console.log(`\n=== ${needle} @ ${index} ===`);
  if (index >= 0) {
    console.log(html.slice(Math.max(0, index - 220), index + 520));
  }
}
