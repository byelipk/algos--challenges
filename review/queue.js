const { Stack } = require('./stack');

class Queue {
  constructor() {
    this.in = new Stack();
    this.out = new Stack();
  }

  enqueue(value) {
    this.in.push(value);
  }

  dequeue() {
    if (this.out.size() === 0) {
      while (this.in.size() > 0) {
        this.out.push(this.in.pop());
      }

      if (this.out.size() === 0) {
        throw new Error('WTZ 😩');
      }
    }

    return this.out.pop();
  }
}

module.exports = { Queue };
