const { getMaxProfit } = require('../more-apples');

test('valid assertions', () => {
  expect(getMaxProfit([10, 7, 5, 8, 11, 9])).toBe(6);
  expect(getMaxProfit([5, 4, 3, 2, 1, 0])).toBe(-1);
});
