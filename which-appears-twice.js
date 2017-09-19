// O(n) time complexity and O(n) space complexity
function AnotherAnswer(list, n) {
  // Sum up to n
  const expectedSum = (n * (n + 1)) / 2;  // O(1)

  // Take the sum of the list O(n)
  const actualSum = list.reduce((sum, number) => { return sum += number }, 0);

  // Compute difference O(1)
  return actualSum - expectedSum;
}

module.exports = { AnotherAnswer };
