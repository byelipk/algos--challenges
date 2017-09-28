const {WordCloud} = require('../word-cloud');

test('valid assertions', () => {
  const cloud = new WordCloud();

  const result1 = cloud.build("After beating the eggs, Dana read the next step:");

  const expected = new Map();

  expected.set('after', 1);
  expected.set('beating', 1);
  expected.set('the', 2);
  expected.set('eggs', 1);
  expected.set('dana', 1);
  expected.set('read', 1);
  expected.set('next', 1);
  expected.set('step', 1);

  expect(result1).toEqual(expected);
});

test('valid assertions hyphens', () => {
  const cloud = new WordCloud();

  const result1 = cloud.build("hello-world");
  const result2 = cloud.buildFaster("hello-world");

  const expected = new Map();

  expected.set('hello', 1);
  expected.set('world', 1);

  expect(result1).toEqual(expected);
  expect(result2).toEqual(expected);
});

test('valid assertions punctuation', () => {
  const cloud = new WordCloud();

  const result1 = cloud.build("Hello, world! How are you?");
  const result2 = cloud.buildFaster("Hello, world! How are you?");

  const expected = new Map();

  expected.set('hello', 1);
  expected.set('world', 1);
  expected.set('how', 1);
  expected.set('are', 1);
  expected.set('you', 1);

  expect(result1).toEqual(expected);
  expect(result2).toEqual(expected);
});
