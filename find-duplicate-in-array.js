function qsort(list, lo_index, hi_index) {
  if (list.length < 2)       return list;  // The base case
  if (lo_index === undefined) lo_index = 0;
  if (hi_index === undefined) hi_index = list.length - 1;

  if (lo_index < hi_index) {
    const pivot_index = partition(list, lo_index, hi_index);
    qsort(list, lo_index, pivot_index);
    qsort(list, pivot_index+1, hi_index);
  }

  return list;
}

function partition(list, lo_index, hi_index) {
  const pivot_value = find_pivot(list, lo_index, hi_index);

  // In order to make our while loop code block work,
  // we need to decrement the lo_index and increment
  // hi_index.
  let i = lo_index - 1;
  let j = hi_index + 1;

  while (true) {
    do { i++ } while (list[i] < pivot_value);
    do { j-- } while (list[j] > pivot_value);

    if (i < j) {
      const tmp = list[i];
      list[i] = list[j];
      list[j] = tmp;
    }
    else {
      // We've found the index position of the new pivot value
      return j;
    }
  }
}

function find_pivot(list, lo_index, hi_index) {
  // Find median value. We could also find a random value, or
  // just make the last item in the list the pivot.
  const index_of_the_median_value =
    Math.floor(lo_index + (hi_index - lo_index) / 2);

  const median_value = list[index_of_the_median_value];

  return median_value;
}

function VersionOne(rangeOfNumbers) {
  const theLastNumber = rangeOfNumbers[rangeOfNumbers.length - 1];
  const histogramOfNumbers = [];
  for (let i = 0; i <= theLastNumber; i += 1) {
    histogramOfNumbers[i] = 0;
  }

  for (let j = 0; j < rangeOfNumbers.length; j += 1) {
    histogramOfNumbers[rangeOfNumbers[j]] += 1;

    if (histogramOfNumbers[rangeOfNumbers[j]] > 1) {
      return rangeOfNumbers[j];
    }
  }

  return -1;
}

function VersionTwo(rangeOfNumbers) {
  let thePreviousNumber = 0;
  for (let i = 0; i <= rangeOfNumbers.length; i += 1) {
    if (thePreviousNumber === rangeOfNumbers[i]) {
      return rangeOfNumbers[i];
    }
    thePreviousNumber = rangeOfNumbers[i];
  }
  return -1;
}

function VersionThree(rangeOfNumbers) {
  // Requirements:
  //
  //  O(n log n) time
  //  O(1) space

  // It would be beneficial to sort the array in place
  // before checking for duplicates. Sorting in place
  // would bring the time complexity to O(n log n) and
  // would keep the space complexity at O(1). The best
  // in-place sort that I have in my toolkit is quicksort,
  // so let's implement that.

  // O(n log n) time O(1) space
  const sortedRangeOfNumbers = qsort(rangeOfNumbers);

  // O(n) time O(1) space
  return VersionTwo(sortedRangeOfNumbers);
}

function VersionFour(rangeOfNumbers) {

  // TODO
  // Use a modified version of binary search to find the duplicate item
  // in O(n log n) time and O(1) space.
  let lo = 1;
  let hi = rangeOfNumbers.length - 1;

  while (lo < hi) {
    // const midpoint = Math.floor(lo + ((hi - lo) / 2));
    const midpoint = Math.floor((lo + hi) / 2);
    const lowerRangeStart = lo;
    const lowerRangeEnd   = midpoint;
    const upperRangeStart = midpoint + 1;
    const upperRangeEnd   = hi;

    // Part of the intuition of this solution comes from
    // the fact that in a range of 1..n where the integers
    // are distinct, there number of possible integers in a
    // subrange is well defined.
    //
    // To determine the number of distinct integers that could
    // be in the lower range, we take the difference of the
    // lowerRangeEnd and lowerRangeStart and add 1 to account
    // for 0-based indexing. The confusing thing here is that
    // we're using our range value not just as index positions,
    // but also as values.
    const distinctPossibleIntegersInLowerRange =
      lowerRangeEnd - lowerRangeStart + 1;

    // Once we know the upper and lowers bounds of the lower range
    // we can see how many items in our array fall within that range.
    let countOfIntegersInLowerRange = 0;
    rangeOfNumbers.forEach(number => {
      if (number >= lowerRangeStart && number <= lowerRangeEnd) {
        countOfIntegersInLowerRange += 1;
      }
    });

    // console.log('EXPECTED:', distinctPossibleIntegersInLowerRange, 'ACTUAL:', countOfIntegersInLowerRange)

    if (countOfIntegersInLowerRange > distinctPossibleIntegersInLowerRange) {
      lo = lowerRangeStart;
      hi = lowerRangeEnd;
    }
    else {
      lo = upperRangeStart;
      hi = upperRangeEnd;
    }
  }

  // At this point lo and hi are equal
  return lo;
}

function binarySearch(array, n) {
  let floorIndex = 0;
  let ceilingIndex = array.length;

  while (floorIndex < ceilingIndex) {
    // const midpoint = Math.floor((floorIndex + (ceilingIndex - floorIndex)) / 2);
    const midpoint = Math.floor((floorIndex + ceilingIndex) / 2);
    const value = array[midpoint];

    if (n === value) {
      return midpoint;
    }
    else if (n < value) {
      ceilingIndex = midpoint;
    }
    else {
      // go right by shifting floorIndex to the right
      floorIndex = midpoint;
    }
  }

  return -1;
}

module.exports = {
  VersionOne,
  VersionTwo,
  VersionThree,
  VersionFour,
  qsort,
  binarySearch
};
