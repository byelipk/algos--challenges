const BST = require('../balanced-binary-tree');

test('inserting node when root has no value', () => {
  const tree = new BST();

  tree.insert(1);

  expect(tree.value).toBe(1);
  expect(tree.left).toBe(null);
  expect(tree.right).toBe(null);
});

test('inserting node less than root works', () => {
  const tree = new BST(10);

  tree.insert(1);

  expect(tree.right).toBe(null);
  expect(tree.left).not.toBe(null);
  expect(tree.left.value).toBe(1);
});

test('inserting node greater than root works', () => {
  const tree = new BST(10);

  tree.insert(11);

  expect(tree.left).toBe(null);
  expect(tree.right).not.toBe(null);
  expect(tree.right.value).toBe(11);
});

test('depth first traversal works', () => {
  const tree = new BST(1);

  tree.insert(2).insert(0).insert(-1).insert(3);

  const expected = [1,0,-1,2,3];

  tree.dfs((node) => {
    expect(node.value).toBe(expected.shift())
  });
});

test('breadth first traversal works', () => {
  const tree = new BST(1);
  const expected = [1,0,2,-1,5];

  tree.insert(0).insert(2).insert(-1).insert(5);

  tree.bfs((node) => {
    expect(node.value).toBe(expected.shift())
  });
});

test('can find min node', () => {
  const tree = new BST(1);

  tree.insert(0).insert(-1).insert(-2);

  expect(tree.findMin()).toEqual({value: -2, left: null, right: null});
});

test('can find max node', () => {
  const tree = new BST(1);

  tree.insert(2).insert(3).insert(4);

  expect(tree.findMax()).toEqual({value: 4, left: null, right: null});
});

test('can check if tree is SuperBalanced', () => {
  /*********************************
              Node(1)
              /    \
  *********************************/
  const tree1 = new BST(1);

  /*********************************
              Node(1)
              /    \
        Node(0)    Node(2)
  *********************************/
  const tree2 = new BST(1).insert(0).insert(2);

  /*********************************
              Node(1)
                   \
                  Node(2)
                    \
                    Node(3)
  *********************************/
  const tree3 = new BST(1).insert(2).insert(3);

  /*********************************
              Node(1)
              /    \
        Node(0)    Node(2)
                    \
                    Node(3)
  *********************************/
  const tree4 = new BST(1).insert(0).insert(2).insert(3);

  /*********************************
              Node(1)
              /    \
        Node(0)    Node(2)
                    \
                    Node(3)
                     \
                     Node(4)
  *********************************/
  const tree5 = new BST(1).insert(0).insert(2).insert(3).insert(4);

  expect(tree1.isSuperBalanced()).toEqual(true);
  expect(tree2.isSuperBalanced()).toEqual(true);
  expect(tree3.isSuperBalanced()).toEqual(true);
  expect(tree4.isSuperBalanced()).toEqual(true);
  expect(tree5.isSuperBalanced()).toEqual(false);
});
