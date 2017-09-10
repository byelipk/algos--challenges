// Mere two sorted arrays

function merge(left, right) {
  const result = []; // Return a new array

  // Step 1:
  // Each array could have different lengths, so
  // step 1 is to process the array indices common
  // to both of our input arrays.
  //
  // Our test condition will be the length of each
  // input array. As long as each length is greater
  // than 0, we run this O(n) operation.
  //
  // As soon as an array has no more elements, we can
  // move on to the next step.
  //
  // This solution uses Array.shift() which removes
  // the first element in the array and returns it.
  while(left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) { result.push(left.shift()) }
    else                    { result.push(right.shift()) }
  }

  while(left.length) {
    result.push(left.shift());
  }

  while(right.length) {
    result.push(right.shift());
  }

  return result;
}


console.log(merge([1,2,3], [4,5,6]))
console.log(merge([1,2,3,4], [5,6]))
console.log(merge([1,2], [3,4,5,6]))
console.log(merge([], [1,2,3,4,5,6]))
console.log(merge([1,2,3,4,5,6], []))
console.log(merge([], []))
