const quickerSort = require('../quicker-sort');

test('it works', () => {
  let unsortedScores = [37, 89, 41, 65, 91, 53];
  const HIGHEST_POSSIBLE_SCORE = 100;

  const expected = [91, 89, 65, 53, 41, 37];
  const results  = quickerSort(unsortedScores, HIGHEST_POSSIBLE_SCORE);

  expect(results).toEqual(expected);
});
