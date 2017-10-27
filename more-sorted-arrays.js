

var myArray     = [3, 4, 6, 10, 11, 15];
var alicesArray = [1, 5, 8, 12, 14, 19];

assert( mergeArrays([], []), [] );
assert( mergeArrays([1], [2]), [1,2] );
assert( mergeArrays([1], []), [1] );
assert( mergeArrays([], [1]), [1] )
assert( mergeArrays([1,3], [2]), [1,2,3] );
assert( mergeArrays([1,3], [2,3,4]), [1,2,3,3,4] );
assert( mergeArrays(myArray, alicesArray), [1,3,4,5,6,8,10,11,12,14,15,19] );

// **************************************

function assert(test, expected) {
  var failed = false;
  for (let i = 0; i < expected.length; i += 1) {
    if (expected[i] !== test[i]) {
      failed = true;
      break;
    }
  }

  if (failed) {
    console.error("FAIL: 💩");
  }
  else {
    console.log("PASS: 😄");
  }
}
  
// **************************************

// Tracking index positions is more efficient, but more difficult to reason about than 
// my implementation using Array.shift()
function mergeArrays(left, right) {
  var result = [];

  var leftIndex = 0;
  var rightIndex = 0;
  var resultIndex = 0;

  while (resultIndex < (left.length + right.length)) {
    var leftExhausted = leftIndex >= left.length;
    var rightExhausted = rightIndex >= right.length;

    if (!leftExhausted && (rightExhausted || left[leftIndex] < right[rightIndex])) {
      result.push(left[leftIndex]);
      leftIndex += 1;
    }
    else {
      result.push(right[rightIndex]);
      rightIndex += 1;
    }

    resultIndex += 1;
  }

  return result;
}
