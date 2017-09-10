function merge(left, right, target) {
  const result = [];

  if (!target) {
    target = left.length + right.length;
  }

  while(left.length > 0 && right.length > 0 && result.length < target) {
    if (left[0] < right[0]) { result.push(left.shift()) }
    else                    { result.push(right.shift()) }
  }

  while(left.length && result.length < target) {
    result.push(left.shift())
  }

  while(right.length && result.length < target) {
    result.push(right.shift())
  }

  return result;
}


console.log(merge([1,2,3], [4,5,6], 1))
console.log(merge([1,2,3,4], [5,6], 2))
console.log(merge([1,2], [3,4,5,6], 3))
console.log(merge([], [1,2,3,4,5,6], 4))
console.log(merge([1,2,3,4,5,6], [], 5))
console.log(merge([1,2,3,4,5,6], [], 6))
console.log(merge([1,2,3,4,5,6], []))
console.log(merge([], []))
