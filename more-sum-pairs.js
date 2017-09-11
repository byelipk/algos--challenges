/*
input:   [1,2,3,4,5,6], 6
output:  [[1,5], [2,4], [3,3], [4,2], [5,1]]

constraints:

  The input array contains integers.

  The input array is sorted.

  Elements can be duplicated in the output array.

  [1,5] is not the same as [5,1].
**/

// The time complexity of this algorithm is O(n^2).
// How can we improve the effiency?
function ohNSquared(input, targetSum) {
  const pairs = [];
  for (var i = 0; i < input.length; i++) {
    const n1 = input[i];
    for (var j = 0; j < input.length; j++) {
      const n2 = input[j];
      if (n1 + n2 === targetSum) {
        pairs.push([n1, n2])
      }
    }
  }
  return pairs;
}

// O(n)
function linearTime(input, targetSum) {
  const pairs = [];
  const hashmap = {};

  for (var i = 0; i < input.length; i++) {
    hashmap[input[i]] = i;
  }

  /*
    hashmap will look like:

    { '1': 0, '2': 1, '3': 2, '4': 3, '5': 4, '6': 5 }
  */

  for (var i = 0; i < input.length; i++) {
    const n1   = input[i];
    const diff = targetSum - n1;
    const pairExists = hashmap[diff];

    if (pairExists !== undefined) {
      pairs.push([n1, diff]);
    }
  }

  return pairs;
}

/**

  assumptions:

    The input is sorted and contigeous
*/
function onePass(input, targetSum) {
  const pairs = [];

  for (var i = 0; i < input.length; i++) {
    const n1 = input[i];
    const n2 = targetSum - n1;

    if (n2) {
      pairs.push([n1, n2]);
    }
  }

  return pairs;
}

function merge(left, right) {
  const result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) { result.push(left.shift()) }
    else                    { result.push(right.shift()) }
  }

  while(left.length > 0) {
    result.push(left.shift())
  }

  while(right.length > 0) {
    result.push(right.shift())
  }

  return result;
}

function mergeSort(input) {
  if (input.length <= 1) { return input; }

  const midpoint = Math.floor(input.length / 2);
  const left     = mergeSort(input.slice(0, midpoint));
  const right    = mergeSort(input.slice(midpoint, input.length));

  return merge(left, right);
}

function ohNSquaredSorted(input, targetSum) {
  const sorted = mergeSort(input);       // O(n log n)
  return ohNSquared(sorted, targetSum);  // O(n^2)
}

function linearTimeSorted(input, targetSum) {
  const sorted = mergeSort(input);       // O(n log n)
  return linearTime(sorted, targetSum);  // O(n)
}

function onePassSorted(input, targetSum) {
  const sorted = mergeSort(input);      // O(n log n)
  return onePass(sorted, targetSum);    // O(n)
}

function onePassSortedPos(input, targetSum) {
  const sorted = mergeSort(input);      // O(n log n)
  const pairs  = [];

  for (var i = 0; i < sorted.length; i++) {
    const n1 = sorted[i];
    const n2 = targetSum - n1;

    if (n1 > 0 && n2 > 0) {
      pairs.push([n1, n2]);
    }
  }

  return pairs;
}

function onePassSortedWithCB(input, targetSum, callback) {
  const sorted = mergeSort(input);
  const pairs = [];

  for (var i = 0; i < input.length; i++) {
    const n1 = input[i];
    const n2 = targetSum - n1;

    if (callback(n1, n2)) {
      pairs.push([n1, n2]);
    }
  }

  return pairs;
}

console.log('Sorted input:')
console.log(ohNSquared([1,2,3,4,5,6], 6))
console.log(linearTime([1,2,3,4,5,6], 6))
console.log(onePass([1,2,3,4,5,6], 6))

// What if the input is not sorted?
console.log('Unsorted input:')
console.log(ohNSquared([2,1,4,3,6,5], 6))
console.log(linearTime([2,1,4,3,6,5], 6))
console.log(onePass([2,1,4,3,6,5], 6))

// What if the input must be sorted?
console.log('Sort input first:')
console.log(ohNSquaredSorted([2,1,4,3,6,5], 6))
console.log(linearTimeSorted([2,1,4,3,6,5], 6))
console.log(onePassSorted([2,1,4,3,6,5], 6))

// Try different target sums
console.log('Different target sum:')
console.log(onePassSorted([2,1,4,3,6,5], 2))

// Try different target sums of only positive integers
console.log('Different target sum with positive integers:')
console.log(onePassSortedPos([2,1,4,3,6,5], 2))
console.log(onePassSortedWithCB([2,1,4,3,6,5], 2, (a,b) => {
  if (a > 0 && b > 0) {
    return true;
  }
  return false;
}))
