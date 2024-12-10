// const fs = require('node:fs');

// // fs.writeFileSync('file.txt', 'Hello world');

// // fs.closeSync()

// const fd = fs.openSync('file.txt', 'w+');
// const fd2 = fs.openSync('file2.txt', 'w');

// console.log(fd);
// console.log(fd2);
const fs = require('fs');

// const fd = fs.openSync('file.txt', 'w');
// const buffer = new Buffer('encoding default utf-8');

// // console.log(buffer);

// fs.writeFileSync(fd, buffer);

// fs.close(fd);

// fs.writeFileSync('file.txt', 'another view');
// fs.appendFileSync('file.txt', '\nnew appended data');

// fs.writeFileSync('file.txt', '\nnew new data', { flag: 'a+' });

try {
  const data = fs.readFileSync('file.txt', (encoding = 'utf-8'));
  console.log(data);
} catch (err) {
  console.log(err.message);
}

// console.log('my program still working');

fs.readFile('file5.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(data);
});

console.log('program still working');

process.nextTick();

fs.readFile