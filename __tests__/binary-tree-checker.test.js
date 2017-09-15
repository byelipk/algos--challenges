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

test('tree with 1 nodde is valid', () => {
  const t = new BST(1);
  expect(t.isValid()).toBe(true);
});

test('lesser child node on the left and greater child node on the right', () => {
  const t = new BST(1).add(0).add(2);
  expect(t.isValid()).toBe(true);
});

test('left subtree contains node that should be in right subtree', () => {
  const t = new BST(1).add(0).add(-1).add(2);
  t.left.right = new BST(10);
  expect(t.isValid()).toBe(false);
});

test('trees with duplicate values placed incorrectly are invalid', () => {
  const t = new BST(1).add(0).add(2).add(3);
  t.right.left = new BST(1);

  expect(t.isValid()).toBe(false);
});

test('infinity as a value is invalid', () => {
  const t = new BST(1).add(0).add(2);
  t.right.right = new BST(Infinity);

  expect(t.isValid()).toBe(false);
});

test('-infinity as a value is invalid', () => {
  const t = new BST(1).add(0).add(2);
  t.left.left = new BST(-Infinity);

  expect(t.isValid()).toBe(false);
});
