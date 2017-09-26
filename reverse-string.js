class Reverser {
  reverse(string) {
    if (!string) return '';

    // String splitting is required to complete this assignment
    // in javascript because strings are immutable.
    // O(n) time
    // O(n) space
    const chars = string.split('');
    const midpoint = Math.floor((string.length) / 2);

    // O(n) time
    // O(1) space
    for (var i = 0; i < chars.length; i++) {
      if (i === midpoint) {
        break;
      }

      const reverseIndex = (chars.length - 1 - i);
      const temp = chars[reverseIndex];
      chars[reverseIndex] = chars[i];
      chars[i] = temp;
    }


    // O(n) time
    // O(n) space
    return chars.join('');
  }
}

// The breakthrough for me came when I asked myself, "How do I know when I'm
// done reversing the string?" At that point the answer seemed to be that
// I needed to know where the halfway point of the string was. If I scanned
// up to the midpoint, I could assume I was done reversing the string.
//
// Another way we could do this is have two cursors, one on each side.
// The cursor on the left side would be incremented and the cursor on
// the right side would be decremented. When they are equal, the string
// reverse is complete.

module.exports = { Reverser };
