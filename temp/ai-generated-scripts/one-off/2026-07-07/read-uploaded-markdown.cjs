const fs = require('fs');
const path = '/mnt/data/粘贴的 markdown (1)。md';
if (!fs.existsSync(path)) {
  console.error('UPLOAD_MARKDOWN_NOT_FOUND');
  process.exit(1);
}
const content = fs.readFileSync(path, 'utf8');
console.log(content);
