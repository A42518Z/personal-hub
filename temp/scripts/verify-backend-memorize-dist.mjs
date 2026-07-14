import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const filePath = join(process.cwd(), 'dist', 'learn', 'backend-memorize', 'index.html');
const html = readFileSync(filePath, 'utf8');

const has87Answers = />87<\/p><p[^>]*>可弹出答案<\/p>/.test(html);
const has0Missing = />0<\/p><p[^>]*>未匹配题目<\/p>/.test(html);
const answerDataMatch = html.match(/<script id="answer-data" type="application\/json">([\s\S]*?)<\/script>/);
const answerData = answerDataMatch?.[1] ?? '';
const answerPayloadIsNonEmpty = answerData.length > 2 && answerData !== '{}';
const containsKnownQuestion = answerData.includes('反射的优缺点');

console.log(JSON.stringify({
  has87Answers,
  has0Missing,
  answerPayloadIsNonEmpty,
  containsKnownQuestion,
  answerDataLength: answerData.length,
}, null, 2));

if (!has87Answers || !has0Missing || !answerPayloadIsNonEmpty || !containsKnownQuestion) {
  process.exit(1);
}
