function qsort(array, lo_index, hi_index) {
  if (array.length < 2)       { return array; }  // The base case
  if (lo_index === undefined) { lo_index = 0; }
  if (hi_index === undefined) { hi_index = array.length - 1; }

  if (lo_index < hi_index) {
    const pivot_index = partition(array, lo_index, hi_index);
    qsort(array, lo_index, pivot_index);
    qsort(array, pivot_index+1, hi_index);
  }

  return array;
}

function partition(array, lo_index, hi_index) {
  const pivot_value = find_pivot(array, lo_index, hi_index);

  // In order to make our while loop code block work,
  // we need to decrement the lo_index and increment
  // hi_index.
  let i = lo_index - 1;
  let j = hi_index + 1;

  while (true) {
    do { i++ } while (array[i] < pivot_value);
    do { j-- } while (array[j] > pivot_value);

    if (i < j) {
      swap(array, i, j);
    }
    else {
      // We've found the index position of the new pivot value
      return j;
    }
  }
}

function find_pivot(array, lo_index, hi_index) {
  // Find median value. We could also find a random value, or
  // just make the last item in the array the pivot.
  const index_of_the_median_value =
    Math.floor(lo_index + (hi_index - lo_index) / 2);

  const median_value = array[index_of_the_median_value];

  return median_value;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(qsort([3,2,1]));
console.log(qsort( [2,1,4,3,6,5] ));
console.log(qsort([1,5,3,7,9,2,4,8,6,5]));

module.exports = { qsort };
