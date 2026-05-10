/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('node:fs');
const path = require('node:path');

const target = path.resolve(process.cwd(), 'node_modules');
fs.rmSync(target, { recursive: true, force: true });
console.log(`removed ${target}`);
