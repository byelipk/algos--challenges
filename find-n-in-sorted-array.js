/**

A binary search algorithm finds an item in a sorted array in
O(log n) time.

A brute force search would walk through the whole array, taking
O(n) time in the worst case.

Let's say we have a sorted array of numbers. To find a number with
a binary search, we:

  Start with the middle number: is it bigger or smaller than our target number?
  Since the array is sorted, this tells us if the target would be in the left
  half or the right half of our array.

  We've effectively divided the problem in half. We can "rule out" the whole
  half of the array that we know doesn't contain the target number.

  Repeat the same approach (of starting in the middle) on the new half-size
  problem. Then do it again and again, until we either find the number or
  "rule out" the whole set.

  What is the time complexity cost of binary search?

  It is O(log n).

  Remember: We can only use binary search if the array is ALREADY sorted.
*/
function binarySearch(sortedArray, n) {
  // Keep track of the lower and upper bounds of
  // the sorted array indices.
  let lower = -1;
  let upper = sortedArray.length;

  while (lower + 1 < upper) {

    // Do some array math to find the correct midpoint
    // index position.
    const distance = upper - lower;
    const middle   = Math.floor(distance / 2);
    const guess    = lower + middle;

    const current = sortedArray[guess];

    if (current < n) {
      upper = middle;
    } else if (current > n) {
      lower = middle;
    } else {
      return guess;
    }
  }

  return -1; // no dice
}

module.exports = binarySearch;
