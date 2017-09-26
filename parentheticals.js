class Parentheticals {
  isBalanced(text, start) {

    if (typeof text !== 'string') {
      throw new Error('You need to give me a string.')
    }

    var counter = 0;

    for (var i = start; i < text.length; i++) {

      switch (text[i]) {
        case '(':
          counter += 1;

          break;

        case ')':
          counter -= 1;

          if (counter <= 0) {
            return i;
          }

          break;

        default:

      }
    }
  }
}

// The trick with parsing questions is to use a stack to remember
// which opening tags need closing tags. Here, since our stack
// would only hold the ')', we can just keep a count of how many
// opening braces we have.

module.exports = { Parentheticals }
