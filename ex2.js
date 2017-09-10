// Merge two sorted arrays

// O(n) time complexity
function merge(left, right) {
  const output = new Array;  // We're going to return a new array

  // The arrays we receive as inputs could be different
  // sizes, so our first O(n) operation needs to operate
  // on the indices common to each array input.
  //
  // Our test case will be the length of each array. As long
  // as both arrays have elements, we add items to our
  // output array. Note that we're using `Array.shift()`
  // which removes the first item from the caller.
  while(left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) { output.push(left.shift()); }
    else                    { output.push(right.shift()); }
  }

  // If the array on the left still has elements, we can
  // add them directly to the output array. Note that left
  // goes first because we're assuming the input arrays
  // are sorted.
  while(left.length > 0)  { output.push(left.shift()); }

  // If the array on the right still has elements, we can
  // add them directly to the outout array.
  while(right.length > 0) { output.push(right.shift()); }

  return output;
}


// We can take the merge function and compose that into
// a function that accepts unsorted data, and we
// have the mergeSort algorithm!
function mergeSort(unsorted) {
  // The base case
  if (unsorted.length === 1) return unsorted;

  // Divide and conquer!!! 😆
  const midpoint = Math.floor(unsorted.length / 2);
  const left     = mergeSort(unsorted.slice(0, midpoint));
  const right    = mergeSort(unsorted.slice(midpoint, unsorted.length));

  // Merge everything together.
  return merge(left, right);
}

console.log(merge([1,2,3], [4,5,6]))
