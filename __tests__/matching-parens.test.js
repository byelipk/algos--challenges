const { Matcher } = require('../matching-parens');

test('the (cat) ran', () => {
  const matcher = new Matcher();

  expect(matcher.match(4, 'the (cat) ran')).toBe(8);
});

test('the ((cat) ran', () => {
  const matcher = new Matcher();

  expect(() => { matcher.match(4, 'the ((cat) ran') }).toThrow();
});

test('the ((((cat)))) ran', () => {
  const matcher = new Matcher();

  expect(matcher.match(4, 'the ((((cat)))) ran')).toBe(14);
});

test('the ((((cat)))) (ran)', () => {
  const matcher = new Matcher();

  expect(matcher.match(16, 'the ((((cat)))) (ran)')).toBe(20);
});

test('A long, complicated sentence', () => {
  const matcher = new Matcher();
  const text = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.";

  expect(matcher.match(10, text)).toBe(79);
});

test('O(1) space - A long, complicated sentence', () => {
  const matcher = new Matcher();
  const text = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.";

  expect(matcher.constantSpace(10, text)).toBe(79);
});

// test('O(1) space - the (cat) ran', () => {
//   const matcher = new Matcher();
//
//   expect(matcher.constantSpace(4, 'the (cat) ran')).toBe(8);
// });
//
// test('O(1) space - the ((cat) ran', () => {
//   const matcher = new Matcher();
//
//   expect(() => { matcher.constantSpace(4, 'the ((cat) ran') }).toThrow();
// });
//
// test('O(1) space - the ((((cat)))) ran', () => {
//   const matcher = new Matcher();
//
//   expect(matcher.constantSpace(4, 'the ((((cat)))) ran')).toBe(14);
// });
//
// test('O(1) space - the ((((cat)))) (ran)', () => {
//   const matcher = new Matcher();
//
//   expect(matcher.constantSpace(16, 'the ((((cat)))) (ran)')).toBe(20);
// });
