// // const EventEmitter = require('node:events');

// // const emitter = new EventEmitter();

// // emitter.on('some-event', () => {
// //   console.log('hello event');
// // });

// // module.exports = emitter;

// class Timer {
//   #duration;
//   #onTick;
//   #onEnd;
//   constructor(duration, onTick, onEnd) {
//     this.#duration = duration;
//     this.#onTick = onTick;
//     this.#onEnd = onEnd;
//   }

//   start() {
//     console.log('Timer starterd...');

//     let remainder = this.#duration;

//     if (this.#onTick) {
//       const interval = setInterval(() => {
//         this.#onTick(remainder);

//         if (remainder <= 0) {
//           clearInterval(interval);
//           this.#onEnd();
//         }
//         --remainder;
//       }, 1000);
//     }
//   }
// }

// module.exports = Timer;

// const EventEmitter = require('node:events');

// // const emitter = new EventEmitter();

// // emitter.on('some-event', () => {
// //   console.log('hello event');
// // });

// // module.exports = emitter;

const EventEmitter = require('node:events');

class Timer extends EventEmitter {
  #duration;
  constructor(duration) {
    super();
    this.#duration = duration;
  }

  start() {
    console.log('Timer starterd...');

    let remainder = this.#duration;
    this.on('timer-start', () => {
      console.log(`Timer remaining ${remainder} seconds`);
    });

    const interval = setInterval(() => {
      this.emit('timer-start');
      if (remainder <= 0) {
        clearInterval(interval);
        this.on('timer-end', () => {
          console.log('Timer ended...');
        });
      }
      this.emit('timer-end');
      --remainder;
    }, 1000);
  }
}

module.exports = Timer;
