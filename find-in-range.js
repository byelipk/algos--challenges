function findInRange(range) {
  if (range.length < 2) {
    throw new Error('Cannot find duplicate.');
  }

  const n = range[range.length - 1];

  // O(1)
  const sumUpToN = (n * (n + 1)) / 2;

  // sum the range
  let sum = 0;
  range.forEach(number => sum += number);

  return sum - sumUpToN;
}

module.exports = { findInRange }
