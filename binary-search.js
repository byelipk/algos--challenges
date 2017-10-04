function binarySearch(array, value) {
  let min = 0;
  let max = array.length - 1;

  while (min < max) {
    let midpoint = Math.floor(min + (max + min) / 2);

    if (array[midpoint] === value) {
      return midpoint;
    }
    else if (array[midpoint] < value) {
      min = midpoint;
    }
    else {
      max = midpoint;
    }
  }
  return -1;
}

console.log(binarySearch([1,2,3], 3))
