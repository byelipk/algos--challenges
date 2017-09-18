const TwoStackQueue = require('../two-stack-queue');

test('TwoStackQueue one value', () => {
  const q = new TwoStackQueue();

  q.enqueue(1);

  expect(q.dequeue()).toBe(1);
});

test('TwoStackQueue two values', () => {
  const q = new TwoStackQueue();

  q.enqueue(1);
  q.enqueue(2);

  expect(q.dequeue()).toBe(1);
  expect(q.dequeue()).toBe(2);
});

test('TwoStackQueue three values', () => {
  const q = new TwoStackQueue();

  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);

  expect(q.dequeue()).toBe(1);
  expect(q.dequeue()).toBe(2);
  expect(q.dequeue()).toBe(3);
});

test('TwoStackQueue complex 1', () => {
  const q = new TwoStackQueue();

  q.enqueue(1);
  q.enqueue(2);

  expect(q.dequeue()).toBe(1);
  expect(q.dequeue()).toBe(2);

  q.enqueue(3);

  expect(q.dequeue()).toBe(3);
});

test('TwoStackQueue complex 2', () => {
  const q = new TwoStackQueue();

  q.enqueue(1);
  expect(q.dequeue()).toBe(1);

  q.enqueue(2);
  expect(q.dequeue()).toBe(2);

  q.enqueue(3);
  q.enqueue(4);
  q.enqueue(5);
  expect(q.dequeue()).toBe(3);
  expect(q.dequeue()).toBe(4);
  expect(q.dequeue()).toBe(5);
});
