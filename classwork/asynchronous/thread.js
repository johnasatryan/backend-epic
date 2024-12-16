const crypto = require('node:crypto');

const start = Date.now();
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
process.env.UV_THREADPOOL_SIZE = 8;
const max_count = 8;
for (let i = 0; i < max_count; ++i) {
  crypto.pbkdf2('password', 'salt', 1000000, 512, 'sha512', () => {
    console.log(`Time : ${Date.now() - start}`);
  });
}
