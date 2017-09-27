const { findInRange } = require('../find-in-range');

test('valid assertions', () => {
  expect(findInRange([1,2,3,3,4,5])).toBe(3);
  expect(findInRange([1,2,3,4,4,5])).toBe(4);
  expect(() => findInRange([1])).toThrow();
});
