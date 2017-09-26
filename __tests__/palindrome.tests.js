const { Palindrome } = require('../palindrome');

test('valid assertions', () => {
  const p = new Palindrome();

  expect(p.isValid("civic")).toBe(true);
  expect(p.isValid("ivicc")).toBe(true);
  expect(p.isValid("civil")).toBe(false);
  expect(p.isValid("livci")).toBe(false);
});

test('valid assertions with optimal solution', () => {
  const p = new Palindrome();

  expect(p.isValidV2("civic")).toBe(true);
  expect(p.isValidV2("ivicc")).toBe(true);
  expect(p.isValidV2("civil")).toBe(false);
  expect(p.isValidV2("livci")).toBe(false);
});
