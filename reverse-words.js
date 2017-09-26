class WordReverser {
  reverse(text) {
    const characters = this.reverseCharacters(text.split(''));

    let wordStartIndex = 0;

    for (var i = 0; i <= characters.length; i++) {

      // How do we know when we hit the end of the word?
      if (i === characters.length || characters[i] === ' ') {
        this.reverseCharacters(characters, wordStartIndex, i-1);
        wordStartIndex = i + 1;
      }
    }

    return characters.join('');
  }

  reverseCharacters(chars, lo, hi) {
    if (lo === undefined) lo = 0;
    if (hi === undefined) hi = chars.length - 1;

    // Reverse the characters
    while (lo < hi) {
      let temp = chars[lo];
      chars[lo] = chars[hi];
      chars[hi] = temp;

      lo += 1;
      hi -= 1;
    }

    // Join words with a space in between
    return chars;
  }
}

// This one was hard for me. I previously solved the reverseCharacters
// problem, but I didn't see the pattern that by reversing the whole
// string, the words would already be in place and we could re-reverse
// them to get the solution.
module.exports = { WordReverser };
