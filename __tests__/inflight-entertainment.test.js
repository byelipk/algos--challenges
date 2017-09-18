const { exponentialTime, linearTime, improveRuntimePerf } = require('../inflight-entertainment');

test('it returns true if two movies run the length of the flight', () => {
  const flightLength = 60;
  const movieLengths = [10, 30, 60, 45, 15];

  expect(exponentialTime(flightLength, movieLengths)).toBe(true);
});

test('it returns false when a pair of movies that run the length of the flight does not exist', () => {
  const flightLength = 60;
  const movieLengths = [10,10,10,10,10];

  expect(exponentialTime(flightLength, movieLengths)).toBe(false);
});

test('check for false positive', () => {
  const flightLength = 60;
  const movieLengths = [30, 29, 10, 10];

  expect(exponentialTime(flightLength, movieLengths)).toBe(false);
});

test('linear time works', () => {
  const flightLength = 60;
  const movieLengths = [10, 30, 60, 45, 15];

  expect(linearTime(flightLength, movieLengths)).toBe(true);
});

test('it should be false', () => {
  const flightLength = 60;
  const movieLengths = [10,10,10,10,10];

  expect(linearTime(flightLength, movieLengths)).toBe(false);
});

test('improve runtime perf works', () => {
  const flightLength = 60;
  const movieLengths = [10, 30, 60, 45, 15];

  expect(improveRuntimePerf(flightLength, movieLengths)).toBe(true);
});
