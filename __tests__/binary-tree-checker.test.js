const BST = require('../binary-tree-checker');

test('add works correctly', () => {
  const t = new BST(1);

  t.add(0).add(2);

  expect(t.value).toBe(1);
  expect(t.left.value).toBe(0);
  expect(t.right.value).toBe(2);
});

test('bfs works correctly', () => {
  const t = new BST(1).add(0).add(2).add(-2).add(-1).add(3).add(4);

  const expected = [1, 0, 2, -2, 3, -1, 4];

  t.bfs((node) => {
    expect(node.value).toBe(expected.shift());
  });
});

test('findMin', () => {
  const t = new BST(1).add(0).add(2).add(-2).add(-1).add(3).add(4);

  const min = t.findMin();

  expect(min.node.value).toEqual(-2);
  expect(min.depth).toEqual(2);
});

test('findMax', () => {
  const t = new BST(1).add(0).add(2).add(-2).add(-1).add(3).add(4);

  const max = t.findMax();

  expect(max.node.value).toEqual(4);
  expect(max.depth).toEqual(3);
});

test('tree with one node is valid', () => {
  const t1 = new BST(1);
  const t2 = new BST(1).add(0).add(2);
  const t3 = new BST(1).add(0).add(2);
  t3.value = -10;

  const t4 = new BST(1).add(0).add(2);
  t4.value = 10;

  const t5 = new BST(1).add(0);
  t5.left.add(-1).add(10).add(9).add(11);

  expect(t1.isValid()).toBe(true);
  expect(t2.isValid()).toBe(true);
  expect(t3.isValid()).toBe(false);
  expect(t4.isValid()).toBe(false);
  expect(t5.isValid()).toBe(false);
});
