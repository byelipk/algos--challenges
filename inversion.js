function mergeSort(array, swaps=0) {
  if (array.length < 2) {
    return { array: array, swaps: swaps };
  } 
  else {
    var midpoint = Math.floor(array.length / 2);

    var {array: left, swaps: leftSwaps }  = mergeSort(array.slice(0, midpoint), swaps);
    var {array: right, swaps: rightSwaps } = mergeSort(array.slice(midpoint, array.length), swaps);

    var { result, inversions } = merge(left, right, leftSwaps + rightSwaps);

    return { array: result, swaps: inversions };
  }
}

function merge(left, right, swaps) {
  var result = [];
  var inversions = swaps;

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
      inversions = inversions + 1;
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return { result: result, inversions: inversions };
}

console.log( mergeSort( [1,1,1,2,2] ) )
console.log( mergeSort( [2,1,3,1,2] ) )
console.log( mergeSort( [2,1] ) )