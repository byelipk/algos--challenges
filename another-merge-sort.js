function mergeSort(list) {
  if (list.length < 2) { return list; }

  const midpoint = Math.floor(list.length / 2);
  const left     = mergeSort(list.slice(0, midpoint));
  const right    = mergeSort(list.slice(midpoint, list.length));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) { result.push(left.shift()) }
    else                    { result.push(right.shift()) }
  }

  while (left.length > 0) {
    result.push(left.shift())
  }

  while (right.length > 0) {
    result.push(right.shift())
  }

  return result;
}


console.log(mergeSort([6,7,3,8,2,5,4,1]))
