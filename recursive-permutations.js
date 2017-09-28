function getPermutations(string) {
	// Base case
	if (string.length <= 1) return new Set(string);

	// 1. What do we need to update as we recurse into the string?
	// 2. Do we want to work from the back of the string to the front,
	// 		or from the front towards the back? Recursion usually works
	//    top to bottom, while iteration usually from from the bottom up.
	// 3. Where do we do the recursion?
	const theChar = string[string.length - 1];
	const theRest = string.slice(0, -1);
	const theSet = getPermutations(theRest);
	const theResult = new Set();

	theSet.forEach(permutation => {
		for (var i = 0; i <= theRest.length; i++) {
			// We want theChar to be in every possible position.
			// Slice is our friend, even though it has a weird API.
			theResult.add(permutation.slice(0, i) + theChar + permutation.slice(i));
		}
	});

	// When the recursion is done we'll have the result set we're looking for.
	return theResult;
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
//
// Even doing the problem over again I had trouble not knowing the expected
// output.
//
// MAKE SURE YOU KNOW THE EXPECTED OUTPUT BEFORE TRYING TO SOLVE THE PROBLEM!


module.exports = { getPermutations };
