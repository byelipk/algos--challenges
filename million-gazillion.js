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
