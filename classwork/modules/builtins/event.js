const EventEmitter = require('node:events');

const emitter = new EventEmitter();
// const Timer = require('./timer');

// const timer = new Timer(10);
// timer.start();

for (let i = 0; i < 15; ++i) {
  emitter.once('some-event', () => {
    console.log('hello event');
  });
}

emitter.emit('some-event');
