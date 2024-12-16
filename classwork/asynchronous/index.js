const fs = require('node:fs');

// setTimeout(() => {
//   console.log('setTimeout');
// }, 1000);

// fs.readFile('file.txt', (err, data) => {
//   console.log('File reading');
// });

// console.log('Start');

// setTimeout(() => {
//   console.log('setTimeout 1');
//   process.nextTick(() => {
//     console.log('Process inside setTimeout');
//   });
// }, 0);
// setTimeout(() => {
//   console.log('setTimeout 2');
//   setTimeout(() => {
//     console.log('setTimeout 3');
//   }, 0);
// }, 0);

// process.nextTick(() => {
//   console.log('Process nextTick');
// });

// process.nextTick(() => {
//   console.log('Process nextTick 2');
//   process.nextTick(() => {
//     console.log('Inner process');
//   });
// });

// process.nextTick(() => {
//   console.log('Process nextTick 3');
// });

// Promise.resolve().then(() => {
//   console.log('Promise');
//   process.nextTick(() => {
//     console.log('Process nextTick');
//   });
// });

// console.log('End');

// setTimeout(() => {
//   console.log('setTimeout');
// }, 300);
// fs.readFile('file.txt', () => {
//   console.log('File reading');
// });

// setImmediate(() => {
//   console.log('setImmediate');
// });
