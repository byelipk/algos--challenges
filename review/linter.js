// Create a linter for C# which ensures that code structures are balanced.
// Specifically, code blocks starting with (, { and [.

// What kind of input is this?
// Does this program need to cope with comments?
// Am I just parsing a blob of text and making sure for every
// opening tag there is a closing tag?
// Does the order of the tags matter?
// What should the method do when given incorrect input like null,
// and empty string, or an object?
// If we throw an error, is it an error that we expect the user
// to handle, or do we want it to go to the top of the stack
// and stop the program?
// How would you order the switch statements? Why?
//
// Write out examples of valid and invalid assertions using
// either a test framework or a whiteboard! If using a whiteboard,
// write out a column of valid assertions and a column of invalid
// assertions.

function InvalidInputError(message) {
  this.message = message;
  this.name = 'InvalidInputError';
}

class Linter {

  constructor() {
    this.map = { '(': ')', '{': '}', '[': ']' };
  }

  // O(n) time complexity
  // O(n) space in worst case.
  // We could short circuit the loop by checking if the
  // number of openers we have is more than half the length
  // of the string.
  isValid(text) {
    if (typeof text !== 'string') {
      throw new InvalidInputError(`Unable to process text with value: ${text}`);
    }

    const stack = [];

    for (var i = 0; i < text.length; i++) {
      const char = text[i];

      switch (char) {
        case '(':
        case '{':
        case '[':

          stack.push(this.map[char]);

          break;

        case ')':
        case '}':
        case ']':

          // CASE:
          // Missing opening tag
          if (stack.length === 0) {
            return false;
          }

          const expected = stack.pop();

          // CASE:
          // Unexpected closing tag
          if (expected !== char) {
            return false;
          }

          break;
        default:

      }
    }

    // CASE:
    // Missing closing tag
    if (stack.length > 0) {
      return false;
    }

    // CASE:
    // Balanced tags!
    return true;
  }
}

module.exports = { Linter, InvalidInputError }
