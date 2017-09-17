const binarySearch = require('../find-n-in-sorted-array');

test('it works', () => {
  const array = [1,2,3];
  const result = binarySearch(array, 2);

  expect(result).toBe(1);
});
