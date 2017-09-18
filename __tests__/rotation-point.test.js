const { logN, linearTime } = require('../rotation-point');

test('O(n) simple 1', () => {
  const words = [ 'v','a' ];
  expect(linearTime(words)).toBe(1);
});

test('O(n) simple 2', () => {
  const words = [ 'v','z','a' ];
  expect(linearTime(words)).toBe(2);
});

test('O(n) complex 1', () => {
  const words = [ 'k','v','a','b','c','d','e','g','i' ];
  expect(linearTime(words)).toBe(2);
});

test('O(n) complex 2', () => {
  const words = ['q','r','s','t','u','v','a','b'];
  expect(linearTime(words)).toBe(6);
});

test('O(log n) simple 1', () => {
  const words = [ 'v','a' ];
  expect(logN(words)).toBe(1);
});

test('O(log n) simple 2', () => {
  const words = [ 'v','a','b' ];
  expect(logN(words)).toBe(1);
});

test('O(log n) complex 1', () => {
  const words = [ 'k','v','a','b','c','d','e','g','i' ];
  expect(logN(words)).toBe(2);
});

test('O(log n) complex 2', () => {
  const words = ['q','r','s','t','u','v','a','b'];
  expect(logN(words)).toBe(6);
});

test('O(log n) complex 3', () => {
  const words = ['a','b','c','d'];
  expect(logN(words)).toBe(0);
});

test('O(log n) complex 4', () => {
  const words = ['q','r','s','t','u','v','z','b'];
  expect(logN(words)).toBe(7);
});
