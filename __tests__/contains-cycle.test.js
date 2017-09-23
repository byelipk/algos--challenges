const { Node, containsCycle1, containsCycle2 } = require('../contains-cycle');

test('last node points to first node', () => {
  const node1 = new Node(1);
  const node2 = node1.add(2);
  const node3 = node2.add(3);

  node3.next = node1;

  expect(containsCycle1(node1)).toBe(true);
});

test('middle node points to first node', () => {
  const node1 = new Node(1);
  const node2 = node1.add(2);
  const node3 = node2.add(3);

  node1.next = node1;

  expect(containsCycle1(node1)).toBe(true);
});

test('last node points middle node', () => {
  const node1 = new Node(1);
  const node2 = node1.add(2);
  const node3 = node2.add(3);

  node3.next = node2;

  expect(containsCycle1(node1)).toBe(true);
});

test('no cycle', () => {
  const node1 = new Node(1);
  const node2 = node1.add(2);
  const node3 = node2.add(3);

  expect(containsCycle1(node1)).toBe(false);
});

test('O(1) space - last node points to first node', () => {
  const node1 = new Node(1);
  const node2 = node1.add(2);
  const node3 = node2.add(3);

  node3.next = node1;

  expect(containsCycle2(node1)).toBe(true);
});

test('O(1) space - middle node points to first node', () => {
  const node1 = new Node(1);
  const node2 = node1.add(2);
  const node3 = node2.add(3);

  node1.next = node1;

  expect(containsCycle2(node1)).toBe(true);
});

test('O(1) space - middle node points to first node', () => {
  const node1 = new Node(1);
  const node2 = node1.add(2);
  const node3 = node2.add(3);

  node1.next = node1;

  expect(containsCycle2(node1)).toBe(true);
});

test('O(1) space - last node points middle node', () => {
  const node1 = new Node(1);
  const node2 = node1.add(2);
  const node3 = node2.add(3);

  node3.next = node2;

  expect(containsCycle2(node1)).toBe(true);
});

test('O(1) space - no cycle', () => {
  const node1 = new Node(1);
  const node2 = node1.add(2);
  const node3 = node2.add(3);

  expect(containsCycle2(node1)).toBe(false);
});
