const { TheFib, YourFib } = require('../the-fib');

test('TheFib works', () => {
  expect(TheFib(0)).toBe(0);
  expect(TheFib(1)).toBe(1);
  expect(TheFib(2)).toBe(1);
  expect(TheFib(3)).toBe(2);
  expect(TheFib(4)).toBe(3);
  expect(TheFib(5)).toBe(5);
  expect(TheFib(6)).toBe(8);
  expect(TheFib(7)).toBe(13);
});

test('YourFib works', () => {
  expect(YourFib(0)).toBe(1);
  expect(YourFib(1)).toBe(1);
  expect(YourFib(2)).toBe(1);
  expect(YourFib(3)).toBe(2);
  expect(YourFib(4)).toBe(3);
  expect(YourFib(5)).toBe(5);
  expect(YourFib(6)).toBe(8);
  expect(YourFib(7)).toBe(13);
});
