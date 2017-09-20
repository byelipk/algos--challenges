const { Queue } = require('../queue');

test('it works', () => {
  const q = new Queue()

  q.enqueue(10);
  q.enqueue(20);
  q.enqueue(30);

  expect(q.dequeue()).toBe(10);
  expect(q.dequeue()).toBe(20);
  expect(q.dequeue()).toBe(30);
});
