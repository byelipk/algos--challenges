const BST = require('../second-largest-in-bst');

test('find largest works on the root node', () => {
  const t = new BST(1).add(0).add(2);
  expect(t.findLargest().value).toBe(2);
});

test('find largest works if you pass it a root node', () => {
  const t = new BST(1).add(0).add(2).add(9).add(7).add(8);
  expect(t.findLargest(t.right).value).toBe(9);
});

test('it works', () => {
  const t = new BST(10).add(9).add(20).add(15).add(13).add(19);
  const secondLargest = t.findSecondLargest();
  expect(secondLargest.value).toBe(19);
});

test('being a jerk gets you what you deserve', () => {
  const t = new BST(1);
  expect(() => { t.findSecondLargest() }).toThrow();
});

test('simple 1', () => {
  const t = new BST(1).add(2).add(3);
  expect(t.findSecondLargest().value).toBe(2);
});

test('simple 2', () => {
  const t = new BST(1).add(0).add(2).add(3);
  expect(t.findSecondLargest().value).toBe(2);
});

test('simple 3', () => {
  const t = new BST(1).add(2).add(2).add(3);
  expect(t.findSecondLargest().value).toBe(2);
});

test('complex', () => {
  const t =
    new BST(5)
      .add(3)
      .add(1)
      .add(4)
      .add(8)
      .add(7)
      .add(12)
      .add(10)
      .add(9)
      .add(11);

  expect(t.findSecondLargest().value).toBe(11);
});
