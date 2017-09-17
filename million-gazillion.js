/**
I'm making a search engine called MillionGazillion™.

I wrote a crawler that visits web pages, stores a few keywords in a
database, and follows links to other web pages. I noticed that my
crawler was wasting a lot of time visiting the same pages over and
over, so I made a set, visited, where I'm storing URLs I've already
visited. Now the crawler only visits a URL if it hasn't already been visited.

Thing is, the crawler is running on my old desktop computer in my parents'
basement (where I totally don't live anymore), and it keeps running out of
memory because visited is getting so huge.

How can I trim down the amount of space taken up by visited?
*/

class Trie {
  // So, how many characters are stored in our trie?
  //
  // Assume we can only store 26 chars in the trie [a-zA-Z].
  // Let's also assume we limit the length of the string to 5 characters.
  // That means the first character has 26 possibilities. The second
  // character also has 26 possibilities, but it also has 26 children
  // posibilities, or 26^2 child nodes. And so on...
  //
  // To store store all 1, 2, 3, 4, or 5 character URLs, the trie
  // will have 5 layers, making the total number of nodes:
  //
  //  26^5 + 26^4 + 26^3 + 26^2 + 26^1
  //
  // That means for all URLs of length n or fewer the total number
  // of nodes is: 26^n + (26^n-1 ...) + 26^1
  //
  // The big o of this is O(26 n)
  constructor() {
    this.rootNode = {};
  }

  add(word) {
    let currentNode = this.rootNode;
    let isNewWord = false;

    for (let i = 0; i < word.length; i += 1) {
      const char = word[i];

      // Add word to our trie, one character at a time.
      // If the char is already in the trie, it means we
      // can branch off of it.
      if (!Object.prototype.hasOwnProperty.call(currentNode, char)) {
        isNewWord = true;
        currentNode[char] = {};
      }

      currentNode = currentNode[char];
    }

    // Mark as end of word
    if (!Object.prototype.hasOwnProperty.call(currentNode, 'End of Word')) {
      isNewWord = true;
      currentNode['End of Word'] = {};
    }

    return isNewWord;
  }

  find(word) {
    let currentNode = this.rootNode;
    let isWordFound = false;

    for (let i = 0; i < word.length; i += 1) {
      const char = word[i];
      if (Object.prototype.hasOwnProperty.call(currentNode, char)) {
        currentNode = currentNode[char];
        isWordFound = true;
      } else {
        isWordFound = false;
        break;
      }
    }

    return isWordFound;
  }
}

module.exports = Trie;
