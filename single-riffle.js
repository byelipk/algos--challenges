// [1,2] [1] [2]
// Slicing an array costs O(m) time where m is the size of
// the resulting array.
//
// When we use recursion we're building n frames on the stack,
// where n is the number of recursive calls, in this case, 52.
function isSingleRiffle(shuffled, left, right) {
  // Base case for recursion. An empty shuffled deck
  // is a "single riffle".
  if (shuffled.length === 0) return true;

  if (left.length && left[0] === shuffled[0]) {
    return isSingleRiffle(shuffled.slice(1), left.slice(1), right)
  } else if (right.length && right[1] === shuffled[1]) {
    return isSingleRiffle(shuffled.slice(1), left, right.slice(1))
  } else {
    return false;
  }
}

// DANGER!!!
// We're modifying all the input arrays!!
function isSingleRiffle2(shuffled, left, right) {
  if (shuffled.length === 0) return true;

  while (left.length || right.length) {
    if (left.length && left[0] === shuffled[0]) {
      left.shift(); shuffled.shift();
    }
    else if (right.length && right[0] === shuffled[0]) {
      right.shift(); shuffled.shift();
    }
    else {
      return false;
    }
  }

  // If we've exhausted left and right, then it's a "single riffle"
  return (left.length === 0 && right.length === 0);
}

// Non-destructive solution
// O(n) time and O(1) space
function isSingleRiffle3(shuffled, left, right) {
  let leftIndex = 0;
  let rightIndex = 0;

  for (var i = 0; i < shuffled.length; i++) {
    if (left[leftIndex] === shuffled[i]) {
      leftIndex += 1;
    }
    else if (right[rightIndex] === shuffled[i]) {
      rightIndex += 1;
    }
    else {
      return false;
    }
  }

  return true;
}

// What makes this question tricky is that I had no idea what a "riffle" was.

module.exports = { isSingleRiffle, isSingleRiffle2, isSingleRiffle3 };
