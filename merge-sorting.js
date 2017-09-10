// O(n)
function merge(left, right) {
  const result = [];

  while(left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) { result.push(left.shift()) }
    else                    { result.push(right.shift()) }
  }

  while(left.length) {
    result.push(left.shift())
  }

  while(right.length) {
    result.push(right.shift())
  }

  return result;
}

// O(n log n)
// Recursive, divide & conquer algorithm.
function mergeSort(unsorted) {
  if (unsorted.length <= 1) { return unsorted; }

  const midpoint = Math.floor(unsorted.length / 2);
  const left     = mergeSort(unsorted.slice(0, midpoint));
  const right    = mergeSort(unsorted.slice(midpoint, unsorted.length));

  return merge(left, right);
}



console.log(mergeSort([3,1,2,5,6,4]))
console.log(mergeSort([1,2,4,3,6,5]))
console.log(mergeSort([2,1,5,4,3,6]))
console.log(mergeSort([1,2,6,4,5,3]))
console.log(mergeSort([6,4,3,2,5,1]))
console.log(mergeSort([]))
