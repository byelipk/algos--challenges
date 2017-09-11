function merge(left, right) {
  const result = [];

  while(left.length > 0 && right.length > 0) {
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

// O(n log n)
function mergeSort(unsorted) {
  if (unsorted.length <= 1) { return unsorted; }

  const midpoint = Math.floor(unsorted.length / 2);

  // The Array.slice API takes a starting index position,
  // and then an exclusive ending index position. You can
  // read it like, "Starting from X, go up to, but not including, Y."
  const left     = mergeSort(unsorted.slice(0, midpoint));
  const right    = mergeSort(unsorted.slice(midpoint, unsorted.length));

  return merge(left, right);
}

console.log(mergeSort([9,3,1,6,5,7,8,0,2,4]))
