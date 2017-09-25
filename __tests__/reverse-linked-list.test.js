const { Node, reverse1 } = require('../reverse-linked-list');

test('list with one node', () => {
  const list = new Node(1);

  reverse1(list);

  expect(list.value).toBe(1);
});

test('list with two nodes', () => {
  const oldHead = new Node(1);
  const oldTail = oldHead.add(2);
  const newHead = reverse1(oldHead);

  expect(newHead).toEqual(oldTail);
  expect(newHead.next).toEqual(oldHead);
  expect(oldHead.next).toBeNull();
});
