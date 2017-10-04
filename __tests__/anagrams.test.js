const { findAnagrams, qsort } = require("../anagrams");

test("qsort works", () => {
  expect(qsort([3,2,1])).toEqual([1,2,3]);
});

test("given an array of strings, findAnagrams returns an array of words that are anagrams", () => {
	const input = ["eat", "tan", "ate", "nat", "bat", "tea"];
	const expected = [["eat", "ate", "tea"], ["tan", "nat"], ["bat"]];

	expect(findAnagrams(input)).toEqual(expected);
});
