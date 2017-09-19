const { merge, mergeWithPointers, mergeDRY } = require('../merge-sorted-arrays');

test('merge works', () => {
  const array1 = [3, 4, 6, 10, 11, 15];
  const array2 = [1, 5, 8, 12, 14, 19];
  const expected = [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19];

  expect(merge(array1, array2)).toEqual(expected);
});

test('mergeWithPointers works', () => {
  const array1 = [3, 4, 6, 10, 11, 15];
  const array2 = [1, 5, 8, 12, 14, 19];
  const expected = [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19];

  expect(mergeWithPointers(array1, array2)).toEqual(expected);
});

test('mergeDRY works', () => {
  const array1 = [3, 4, 6, 10, 11, 15];
  const array2 = [1, 5, 8, 12, 14, 19];
  const expected = [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19];

  expect(mergeDRY(array1, array2)).toEqual(expected);
});
