const { Stack } = require('../stack');

test('push works', () => {
  const stack = new Stack();

  expect(stack.push(1)).toEqual(1);
  expect(stack.push(10)).toEqual(2);
  expect(stack.push(50)).toEqual(3);
});

test('pop works', () => {
  const stack = new Stack();

  expect(stack.push(1)).toEqual(1);
  expect(stack.pop()).toEqual(1);

  expect(stack.push(1)).toEqual(1);
  expect(stack.push(2)).toEqual(2);
  expect(stack.push(3)).toEqual(3);

  expect(stack.pop()).toEqual(3);
  expect(stack.pop()).toEqual(2);
  expect(stack.pop()).toEqual(1);
});

test('peek works', () => {
  const stack = new Stack();

  expect(stack.push(1)).toEqual(1);
  expect(stack.push(2)).toEqual(2);
  expect(stack.push(3)).toEqual(3);

  expect(stack.peek()).toEqual(3);
  expect(stack.peek()).toEqual(3);
  expect(stack.peek()).toEqual(3);
});
