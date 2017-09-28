class WordCloud {
	build(string) {
		const result = new Map();

		let word = "";

		for (var i = 0; i < string.length; i++) {
			if (string[i].match(/[a-zA-Z]/)) {
				word += string[i].toLowerCase(); // NOTE This makes our function O(n^2)
			} else if (word) {
				result.set(word, result.has(word) ? result.get(word) + 1 : 1);
				word = "";
			}
		}

		// Handle the last word.
		if (word) {
			result.set(word, result.has(word) ? result.get(word) + 1 : 1);
		}

		return result;
	}

	buildFaster(string) {
		const words = new Set();
		const result = new Map();

		// Since the array slice operation takes (start, end) as parameters
		// where (end) is NOT included, we should track the start index
		// for the current word and the word's length.
		let currentWordIndex = 0;
		let currentWordLength = 0;

		// h e l l o - w o r l d

		// O(n)
		for (var i = 0; i <= string.length; i++) {
			if (string[i] && string[i].match(/[a-zA-Z]/)) {
				// We know to shift the currentWordIndex when currentWordLength is 0
				if (currentWordLength === 0) {
					currentWordIndex = i;
				}
				currentWordLength += 1;
			} else if (currentWordLength > 0) {
				// Slicing is an O(n) operation
				words.add(
					string.slice(currentWordIndex, currentWordIndex + currentWordLength)
				);
				currentWordLength = 0;
			}
		}

		// O(n)
		words.forEach(function handler(word) {
      result.set(
        word.toLowerCase(),
        result.has(word) ? result.get(word) + 1 : 1
      ); // O(1)
		});

		return result;
	}
}

module.exports = { WordCloud };
