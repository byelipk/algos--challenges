const { OpenersAndClosers } = require('../openers-and-closers');

test('valid assertions', () => {
  const subj = new OpenersAndClosers();

  expect(subj.isValid("(){}[]")).toBe(true);
  expect(subj.isValid("{ [ ] ( ) }")).toBe(true);
  expect(subj.isValid("{ [ ( ] ) }")).toBe(false);
  expect(subj.isValid("{ [ }")).toBe(false);
});
