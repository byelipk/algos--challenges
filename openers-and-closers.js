class OpenersAndClosers {
  // Assume: (, {, [ are openers
  // Assume: ), }, ] are closers
  // Assume: The order of the opening tags isn't important, but the closing
  //         tag must match the opening tag.
  isValid(text) {
    const stack = [];

    // I'm resisting the urge to create an object that maps
    // openers to closers because that will add to the space
    // complexity, and because the problem is manageable enough
    // without it.
    for (var i = 0; i < text.length; i++) {
      const char = text[i];

      switch (char) {
        case '(':
          stack.push(')'); break;
        case '{':
          stack.push('}'); break;
        case '[':
          stack.push(']'); break;

        case ')':
        case '}':
        case ']':

          const closer = stack.pop();

          if (closer !== char) {
            return false;
          }

          break;

        default:
          // Do nothing...

      }
    }

    if (stack.length > 0) {
      return false;
    }

    return true;
  }
}

module.exports = { OpenersAndClosers }
