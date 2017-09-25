const { Node, kthToLastNode } = require('../kth-to-last-node');

test('valid assertions', () => {
  const a = new Node(1);
  const b = a.add(2);
  const c = b.add(3);
  const d = c.add(4);
  const e = d.add(5);

  expect(kthToLastNode(1, a)).toEqual(e);
  expect(kthToLastNode(2, a)).toEqual(d);
  expect(kthToLastNode(3, a)).toEqual(c);
  expect(kthToLastNode(4, a)).toEqual(b);
  expect(kthToLastNode(5, a)).toEqual(a);
  expect(() => kthToLastNode(10, a)).toThrow();
});

test('invalid assertions', () => {
  const a = new Node(1);
  const b = a.add(2);
  const c = b.add(3);
  const d = c.add(4);
  const e = d.add(5);

  expect(kthToLastNode(0, a)).toEqual(a);
});
