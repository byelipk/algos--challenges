const words = [
  "ptolemaic",
  "retrograde",
  "supplant",
  "undulate",
  "xenoepist",
  "asymptote", // <-- rotates here!
  "babka",
  "banoffee",
  "engender",
  "karpatka",
  "othellolagkage"
];

// O(n) time and O(1) space
function linearTime(array) {
  let foldIndex = -1;
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] < array[i-1]) {
      foldIndex = i;
      break
    }
  }
  return foldIndex;
}


// Binary search here makes sense because the input array
// is mostly sorted. Once we figure out the pattern for how
// the array is sorted, we can modify our binary search.

// words = [ 'k','v','a','b','c','d','e','g','i' ];
// words = [ 'v','a' ]
// Space complexity: this algorithm takes O(1) space
// Time complexity: this algorithm takes O(log n) time,
// however, each iteration we do a string comparison. Since
// words can vary in length, we could say the time complexity
// is O(word_length * log n).
function logN(sorted) {
  let lowerIndex = 0;
  let upperIndex = sorted.length - 1;

  while (lowerIndex < upperIndex) {
    const distance = upperIndex - lowerIndex;
    const middleIndex = Math.floor(distance/2);
    const guessIndex  = lowerIndex + middleIndex;
    const item = sorted[guessIndex];

    if (item < sorted[lowerIndex]) {
      // divide left by shifting the upper index down
      upperIndex = guessIndex;
    }
    else {
      // divide right by shifting the lower index up
      lowerIndex = guessIndex;
    }

    // Have our upper and lower bounds converged?
    if ((lowerIndex + 1) === upperIndex) {
      // Have we scanned a sorted array?
      if ((upperIndex == sorted.length - 1) && sorted[upperIndex] > sorted[0]) {
        return 0;
      }

      return upperIndex;
    }
  }

  return -1;
}

// The lessons binary search teaches us:
//
// 1. The value at a given index tells us a lot about what's to the
//    left of the index and what's to the right.
// 2. We don't have to scan through every item in the array to find
//    what we're looking for; just look for the middle term.
// 3. We can use the approach of cutting the problem in half
//    over and over. We can even use this approach if the array
//    is mostly sorted!

module.exports = { linearTime, logN };
