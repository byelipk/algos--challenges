const TempTracker = require('../temps');

test('insert updates min temp seen so far', () => {
  const tracker = new TempTracker();

  tracker.insert(1);
  tracker.insert(20);

  expect(tracker.getMin()).toEqual(1);
});

test('insert updates max temp seen so far', () => {
  const tracker = new TempTracker();

  tracker.insert(1);
  tracker.insert(20);
  tracker.insert(65);
  tracker.insert(95);

  expect(tracker.getMax()).toEqual(95);
});

test('insert updates mode', () => {
  const tracker = new TempTracker();

  tracker.insert(65);
  tracker.insert(65);
  tracker.insert(65);
  tracker.insert(95);
  tracker.insert(95);

  expect(tracker.getMode()).toEqual(65);
});

test('insert updates mean', () => {
  const tracker = new TempTracker();

  tracker.insert(10);
  tracker.insert(20);
  tracker.insert(30);

  expect(tracker.getMean()).toEqual(20);
});
