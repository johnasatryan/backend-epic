console.log('BModule loaded...');

const aModule = require('./a');

const method = () => {
  console.log('BModule method');
};

aModule.method();

module.exports = method;
