const { Parentheticals } = require('../parentheticals');

test('valid assertions', () => {
  const p = new Parentheticals();

  expect(p.isBalanced("(hello)", 0)).toBe(6);
  expect(p.isBalanced("((hello))", 1)).toBe(7);
  expect(p.isBalanced("(((h)e)l)lo", 0)).toBe(8);
});
