const { Uniq, XOR } = require('../uniq-int');

test('it works', () => {
  const data = [1,6,8,8,5,1,6,3,3];

  expect(Uniq(data)).toBe(5);
});

test('it still works', () => {
  const data = [9,9,9,9,9,9,100,9,9];

  expect(Uniq(data)).toBe(100);
});

test('weird stuff', () => {
  const data = [9,9,9,9,9,9,9,9];

  expect(Uniq(data)).toBe(null);
});

test('XOR', () => {
  expect(XOR([9,9,9,9,9,9,100,9,9])).toBe(100);
  expect(XOR([1,1,2,2,3,3,4,5,5])).toBe(4);
});
