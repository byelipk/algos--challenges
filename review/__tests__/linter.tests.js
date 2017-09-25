const { Linter, InvalidInputError } = require('../linter');

test('valid assertions', () => {
  const linter = new Linter();

  expect(linter.isValid('()')).toBe(true);
  expect(linter.isValid('{}')).toBe(true);
  expect(linter.isValid('[]')).toBe(true);
  expect(linter.isValid('hello [] world')).toBe(true);
  expect(linter.isValid('[hello](world){nice}')).toBe(true);
});

test('invalid assertions', () => {
  const linter = new Linter();

  expect(linter.isValid('(')).toBe(false);
  expect(linter.isValid('{')).toBe(false);
  expect(linter.isValid('[')).toBe(false);
  expect(linter.isValid(')')).toBe(false);
  expect(linter.isValid('}')).toBe(false);
  expect(linter.isValid(']')).toBe(false);
  expect(linter.isValid('(nice) job] {here}')).toBe(false);
  expect(linter.isValid('((nice) job] {here}')).toBe(false);
});

test('text is empty string', () => {
  const linter = new Linter();

  expect(linter.isValid('')).toBe(true);
});

test('text is not a string', () => {
  const linter = new Linter();

  expect(() => linter.isValid()).toThrow(InvalidInputError);
  expect(() => linter.isValid(null)).toThrow(InvalidInputError);
  expect(() => linter.isValid(1234)).toThrow(InvalidInputError);
  expect(() => linter.isValid(5.5)).toThrow(InvalidInputError);
  expect(() => linter.isValid({hello: "world"})).toThrow(InvalidInputError);
});
