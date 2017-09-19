const { AnotherAnswer } = require('../which-appears-twice');

test('AnotherAnswer works', () => {
  const array = [1,2,3,3,4,5,6,7];
  expect(AnotherAnswer(array, 7)).toBe(3);
});
