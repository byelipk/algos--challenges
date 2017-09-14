class TempTracker {
  constructor() {
    this._max = null;
    this._min = null;

    this._records = 0;
    this._mean    = 0;
    this._sum     = 0;

    const MIN_TEMP = 0;
    const MAX_TEMP = 111;

    this._mode = 0;
    this._occurences = [];

    for (var i = MIN_TEMP; i < MAX_TEMP; i++) {
      this._occurences[i] = 0;
    }
  }

  insert(t) {
    // update max O(1)
    if (this._max === null || t > this._max) {
      this._max = t;
    }

    // update min O(1)
    if (this._min === null || t < this._min) {
      this._min = t;
    }

    // update mean O(1)
    this._records += 1;
    this._sum += t;
    this._mean = this._sum / this._records;

    // update mode O(1)
    this._occurences[t] += 1;
    if (this._occurences[t] > this._occurences[this._mode]) {
      this._mode = t;
    }
  }

  getMin(t) {
    return this._min;
  }

  getMax(t) {
    return this._max;
  }

  getMean() {
    return this._mean;
  }

  getMode() {
    return this._mode;
  }
}

module.exports = TempTracker;
