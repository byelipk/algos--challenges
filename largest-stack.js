class TheStack {

  constructor() {
    this._max = [];
    this._storage = [];
  }

  push(value) {
    this._storage.push(value);

    const max = this._max[this._max.length - 1] || null;

    if (value > max) {
      this._max.push(value);
    }

    return this._storage.length;
  }

  pop() {
    const value = this._storage.pop();
    const max   = this._max[this._max.length - 1];

    if (value === max) {
      this._max.pop();
    }

    return value;
  }

  // Notice how we're spending time on push() and pop()
  // in order to make max() super fast?!
  //
  // However, if we learn later than max() isn't a frequent
  // API call, we can switch it up to make it do more work and
  // relieve the burden from push() and pop().
  //
  // Sometimes, in algorithm design, the first step is to figure out
  // what we're optimizing for.
  max() {
    return this._max[this._max.length - 1];
  }

}

// These are all O(1) time operations

module.exports = TheStack;
