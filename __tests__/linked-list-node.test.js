const LinkedListNode = require('../linked-list-node');

test('it works', () => {
  const list = new LinkedListNode('A');

  expect(list.value).toEqual('A');
  expect(list.next).toBeNull();
});

test('deleting node works', () => {
  const a = new LinkedListNode('A');
  const b = a.add('B');
  const c = b.add('C');
  const d = c.add('D');
  const e = d.add('E');

  expect(LinkedListNode.delete(b)).toEqual(b);
  expect(a.next).toEqual(c);
  expect(c.next).toEqual(d);
  expect(d.next).toEqual(e);
});
