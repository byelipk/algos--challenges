class Matcher {

  // O(n) time and O(n) space
  match(indexOfOpeningParen, text) {
    if (!text) { return; }

    const stack = [];

    for (let i = 0; i < text.length; i += 1) {
      switch (text[i]) {
        case '(':
          stack.push({ start: i, token: ')' });
          break;

        case ')':
          const closing = stack.pop();
          if (closing.start === indexOfOpeningParen) { return i; }
          break;

        default:
          // Do nothing
      }
    }

    throw new Error(`Couldn't find a closing paren for ${indexOfOpeningParen}`);
  }

  constantSpace(indexOfOpeningParen, text) {
    if (!text) text = "";

    let openingParenCount = 0;

    // Parsing questions likes these often involve a stack, the my implementation
    // above. Since we're only keeping track of a single character, we can
    // replace the stack with an integer that counts the number of opening
    // parentheses.
    //
    // When I tried implementing this solution in constant space, I made
    // it more complicated that it needed to be, drifting away from what
    // the question was asking. That made it difficult for me to see
    // the greedy solution in the for loop initialization.
    for (let position = indexOfOpeningParen + 1; position < text.length; position++) {
      switch (text[position]) {
        case '(':
          openingParenCount += 1;

          break;

        case ')':

          if (openingParenCount === 0) {
            return position;
          }

          openingParenCount -= 1;

          break;

        default:

      }
    }

    throw new Error(`Couldn't find a closing paren for ${indexOfOpeningParen}`);
  }
}

module.exports = { Matcher }
