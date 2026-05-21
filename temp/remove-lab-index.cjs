const fs = require('fs');
const path = require('path');
const target = path.join(process.cwd(), 'src/pages/lab/index.astro');
if (fs.existsSync(target)) {
  fs.unlinkSync(target);
  console.log('removed src/pages/lab/index.astro');
} else {
  console.log('src/pages/lab/index.astro not found');
}
