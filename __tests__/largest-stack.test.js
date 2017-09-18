const TheStack = require('../largest-stack');

test('it works', () => {
  const stack = new TheStack();

  stack.push(1);
  stack.push(2);
  stack.push(1);
  stack.push(3);

  expect(stack.max()).toBe(3);
});

test('complex 1', () => {
  const stack = new TheStack();

  stack.push(1);
  stack.push(2);
  stack.push(1);
  stack.pop();
  stack.pop();

  expect(stack.max()).toBe(1);
});

test('complex 2', () => {
  const stack = new TheStack();

  stack.push(1);
  stack.push(2);
  stack.push(1);
  stack.pop();
  stack.pop();
  stack.push(5)

  expect(stack.max()).toBe(5);
});
