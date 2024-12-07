console.log('Module A laded...');

const bModule = require('./b.js');

const obj = {
  method: bModule.method,
};

module.exports = obj;
