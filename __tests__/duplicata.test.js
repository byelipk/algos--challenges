const {findIt,findItAnotherWay} = require('../duplicata');

test('findIt works', () => {
  expect(findIt([1,2,2,3,4,5])).toBe(2);
  expect(findIt([1,2,2,3,3,4,5])).toBe(2);
  expect(findIt([1,2,3,4,5,5])).toBe(5);
  expect(findIt([1,5,4,2,5,3])).toBe(5);
  expect(() => findIt([1,3,5,7,7,9])).toThrow();
});

test('findItAnotherWay returns index of duplicate', () => {
  expect(findItAnotherWay([1,1])).toBe(1);
  expect(findItAnotherWay([1,1,2,3])).toBe(1);
  expect(findItAnotherWay([1,2,3,3])).toBe(3);
  expect(findItAnotherWay([1,2,2,2,3,4,5])).toBe(2);
  expect(findItAnotherWay([1,2,3,4,5,6,5,7])).toBe(5);
  expect(findItAnotherWay([5,4,3,3,2,1])).toBe(3);
  expect(findItAnotherWay([9,3,6,7,8,1,2,4,5,3])).toBe(3);
});
