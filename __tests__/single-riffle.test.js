const { isSingleRiffle, isSingleRiffle2, isSingleRiffle3 } = require('../single-riffle');

test('[1], [2] => [1,2]', () => {
  const half1 = [1];
  const half2 = [2];
  const shuffled = [1,2];

  expect(isSingleRiffle(shuffled, half1, half2)).toBe(true);
});

test('[3], [2] => [1,2]', () => {
  const half1 = [3];
  const half2 = [2];
  const shuffled = [1,2];

  expect(isSingleRiffle(shuffled, half1, half2)).toBe(false);
});

test('full deck', () => {
  let counter = 1;

  const half1 = [3];
  for (var i = 0; i < 26; i++) {
    half1[i] = counter;
    counter += 1;
  }

  const half2 = [2];
  for (var i = 0; i < 26; i++) {
    half2[i] = counter;
    counter += 1;
  }

  const shuffled = [];
  for (var i = 0; i < 52; i++) {
    shuffled[i] = i + 1;
  }

  expect(isSingleRiffle(shuffled, half1, half2)).toBe(true);
  expect(isSingleRiffle2(shuffled, half1, half2)).toBe(true);
  expect(isSingleRiffle3(shuffled, half1, half2)).toBe(true);
});
