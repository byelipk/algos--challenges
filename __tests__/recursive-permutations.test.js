const { getPermutations } = require('../recursive-permutations');

test('a', () => {
  const set = new Set();

  set.add('a');

  expect(getPermutations('a')).toEqual(set);
});

test('ab', () => {
  const set = new Set();

  set.add('ab');
  set.add('ba');

  expect(getPermutations('ab')).toEqual(set);
});
