const { VersionOne, VersionTwo, VersionThree, VersionFour, qsort, binarySearch } = require('../find-duplicate-in-array');

test('VersionOne works', () => {
  const array = [1,2,3,3,4,4,5,6,7];

  expect(VersionOne(array)).toBe(3);
});

test('VersionTwo works', () => {
  const array = [1,2,3,3,4,4,5,6,7];

  expect(VersionTwo(array)).toBe(3);
});

test('VersionThree works (unsorted array)', () => {
  const array = [1,5,3,7,9,2,4,8,6,5];

  expect(VersionThree(array)).toBe(5);
});

test('VersionFour works', () => {
  const array = [1,5,3,5,7,9,2,4,8,6];

  expect(VersionFour(array)).toBe(5);
});

test('quicksort works', () => {
  const array = [1,5,3,7,9,2,4,8,6,5];

  expect(qsort(array)).toEqual([1,2,3,4,5,5,6,7,8,9]);
});

test('binarySearch works', () => {
  const array = [1,2,3,4,5,6];

  expect(binarySearch(array, 1)).toEqual(0);
  expect(binarySearch(array, 2)).toEqual(1);
  expect(binarySearch(array, 3)).toEqual(2);
  expect(binarySearch(array, 4)).toEqual(3);
  expect(binarySearch(array, 5)).toEqual(4);
  expect(binarySearch(array, 6)).toEqual(5);
});
