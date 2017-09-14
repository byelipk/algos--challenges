class TempTracker {
  // What are the advantages and disadvantages of the approach
  // we've taken here?
  //
  // This approach uses an ahead-of-time, greedy strategy for
  // building the data structure.
  //
  // Specifically, we apply this strategy in the constructor and
  // the insert method.
  //
  // By placing the bulk of the work there, we improve the
  // efficiency of  our read operations to O(1)
  constructor() {

    // We can lookup the min and max temperatures
    // in constant time as long as we remember the
    // BEST min and max values we've seen so far!
    this._max = null;
    this._min = null;

    // We can caluclate the mean in constant time
    // as long as we remember the number of records
    // that have been inserted, and the current sum
    // of temperatures.
    this._records = 0;
    this._sum     = 0;
    this._mean    = 0;

    const MIN_TEMP = 0;
    const MAX_TEMP = 111;

    // We can lookup the mode in constant time as
    // long as we remember how many times we've
    // recorded each temperature.
    this._mode = 0;
    this._occurences = [];

    // Let's be greedy. Each index represents
    // a temperature, and the value represents the number
    // of times we've recorded the temperature.
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
