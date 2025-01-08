setTimeout(() => {
  console.log('SetTimeout 1');
}, 0);

setImmediate(() => {
  console.log('setImmediate 1');
});

setTimeout(() => {
  console.log('SetTimeout 2');
}, 0);

setImmediate(() => {
  console.log('setImmediate 2');
});
