class TempTracker {
  constructor() {
    this._storage = [];
    this._occurences  = { 0: 1 };
    this._min     = 0;  // lowest recorded temp
    this._max     = 0;  // highest recorded temp
    this._mode    = 0;  // temp that occurres most frequently
    this._mean    = 0;  // average temp
  }

  insert(temp) {
    // make sure we're working with integers
    const t = this._convertToInt(temp);

    if (this._isValid(t)) {

      this._storage.push(t); // add new temp

      this._updateMin(t);
      this._updateMax(t);
      this._updateMode(t);
      this._updateMean(t);
    }
  }

  _isValid(temp) {
    if (temp >= 0 && temp <= 110) {
      return true;
    }
    return false;
  }

  _convertToInt(temp) {
    return parseInt(temp, 10);
  }

  _updateMin(t) {
    if (this._storage.length === 1) {
      this._min = t;
    }
    else if (t < this._min) {
      this._min = t;       // update min temp
    }
  }

  _updateMax(t) {
    if (t > this._max) {
      this._max = t;       // update max temp
    }
  }

  // O(n)  O(1)
  _updateMode(t) {
    // update how many times we've recorded temperature t
    this._occurences[t] =
      (this._occurences[t] || 0) + 1;

    // find the most frequently occurring temperature
    let currentModeCount = this._occurences[this._mode];

    for (let i = 0; i < this._storage.length; i++) {
      const _temp = this._storage[i];
      const tempRecordedCount = this._occurences[_temp];

      if (tempRecordedCount > currentModeCount) {
        this._mode = _temp;
        currentModeCount = tempRecordedCount;
      }
    }
  }

  // O(n) O(1)
  _updateMean(t) {
    let sum = 0;
    for (var i = 0; i < this._storage.length; i++) {
      sum += this._storage[i];
    }
    this._mean = sum / this._storage.length;
  }

  getMax() {
    return this._max;
  }

  getMin() {
    return this._min;
  }

  getMode() {
    return this._mode;
  }

  getMean() {
    return this._mean;
  }
}

module.exports = TempTracker;
