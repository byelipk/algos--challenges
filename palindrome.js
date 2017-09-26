class Palindrome {
  isValid(text) {
    const counter = {};
    const sortedCharArray = text.split('').sort();

    sortedCharArray.forEach(function handler(char) {
      if (counter[char]) {
        counter[char] += 1;
      }
      else {
        counter[char] = 1;
      }
    });

    let countOfUnevenLetters = 0;
    Object.keys(counter).forEach(function handler(key) {
      if (sortedCharArray.length % 2 === 0) {
        if (counter[key] % 2 !== 0) {
          return false;
        }
      }
      else {
        if (counter[key] % 2 !== 0) {
          countOfUnevenLetters += 1;
        }
      }
    });

    if (countOfUnevenLetters > 1) {
      return false;
    }

    return true;
  }

  isValidV2(theString) {
    var unpairedCharacters = new Set();

    for (var i = 0; i < theString.length; i++) {
      var char = theString[i];

      if (unpairedCharacters.has(char)) {
        unpairedCharacters.delete(char);
      }
      else {
        unpairedCharacters.add(char);
      }
    }

    return unpairedCharacters.size <= 1;
  }
}

module.exports = { Palindrome }
