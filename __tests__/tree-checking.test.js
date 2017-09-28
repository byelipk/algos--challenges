const { Node, isBinary, isBalanced } = require('../tree-checking');

// A tree is binary if it's children have at most two children
// and each of it's child nodes is a binary tree.
test('root with no children', () => {
  const root = new Node(1);

  expect(isBinary(root)).toBe(true);
});

test('root with one child', () => {
  const root = new Node(1);

  root.children = [ new Node(0) ];

  expect(isBinary(root)).toBe(true);
});

test('root with two children', () => {
  const root = new Node(0);

  root.children = [ new Node(-1), new Node(1) ];

  expect(isBinary(root)).toBe(true);
});

test('root with three children', () => {
  const root = new Node(0);

  root.children = [ new Node(-1), new Node(1), new Node(2) ];

  expect(isBinary(root)).toBe(false);
});

test('root with two children, when left child has one child', () => {
  const root = new Node(0);

  root.children = [ new Node(-1), new Node(1) ];

  root.children[0].children = [ new Node(-2) ];

  expect(isBinary(root)).toBe(true);
});

test('isBalanced, when root has no children', () => {
  const root = new Node(0);

  expect(isBalanced(root)).toBe(true);
});

test('isBalanced, when root has two children', () => {
  const root = new Node(0);

  root.children = [ new Node(-1), new Node(1) ];

  expect(isBalanced(root)).toBe(true);
});

test('isBalanced, when left child has two children', () => {
  const root = new Node(0);

  root.children = [ new Node(-1), new Node(1) ];

  root.children[0].children = [new Node(-7), new Node(-5)];

  expect(isBalanced(root)).toBe(true);
});

test('isBalanced, when left grandchild has one child', () => {
  const root = new Node(0);

  root.children = [ new Node(-1), new Node(1) ];
  root.children[0].children = [new Node(-9), new Node(-2)];
  root.children[0].children[0].children = [ new Node(-10) ];

  expect(isBalanced(root)).toBe(false);
});
