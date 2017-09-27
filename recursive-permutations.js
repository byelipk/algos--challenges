function getPermutations(string) {
	// base case
	if (string.length <= 1) {
		return new Set(string);
	}

	var allCharsExceptLast = string.slice(0, -1);
	var lastChar = string[string.length - 1];

	// recursive call: get all possible permutations for all chars except last
	var permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);

	// put the last char in all possible positions for each of the above permutations
	var permutations = new Set();
	permutationsOfAllCharsExceptLast.forEach(function(
		permutationOfAllCharsExceptLast
	) {
		for (var position = 0; position <= allCharsExceptLast.length; position++) {
			var permutation =
				permutationOfAllCharsExceptLast.slice(0, position) +
				lastChar +
				permutationOfAllCharsExceptLast.slice(position);
			permutations.add(permutation);
		}
	});

	return permutations;
}

// I wasn't sure what the question was asking. Since it's just me and there's
// no interviewer, it's hard to get clarification on the expected output. In
// an actual interview I need to make sure I know what the expected output is
// before diving into the code. Does each permutation need to be stored in an
// object? Does it just need to be printed to the console? Etc...
//
// Is the letter 'a' a valid permutation of 'cart'?
//
// Recursion is hard. What would have helped me answer this question?
//
// Well, I correctly identified the base case. I just didn't know that
// 'a' is a valid permutation of 'cab'. I think that would have shed some
// more light into the problem. Also, I'm not that familiar with the Set
// API.
module.exports = { getPermutations };
