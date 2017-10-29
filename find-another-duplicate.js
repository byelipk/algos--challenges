function assert(result, expected, msg) {
  if (result === expected) {
    console.log("PASS: OK");
  }
  else {
    console.error("FAIL: " + msg);
  }
} 

// Write a function which finds an integer that appears more than once in our array .
// Integers are in the range 1..n
// Array has a length of n+1
// Integers are not sorted.

assert(findDuplicates([1,1]), 1, "Expected result to be 1");
assert(findDuplicates([1,2,2]), 2, "Expected result to be 2");
assert(findDuplicates([2,1,2]), 2, "Expected result to be 2");
assert(findDuplicates([1,2,3,4,5,2,3]), 2, "Expected result to be 2");
assert(findDuplicates([5,3,4,2,1,2]), 2, "Expected result to be 2");

function findDuplicates(array) {
  // return findDuplicatesNestedLoop(array);
  // return findDuplicatesSet(array);
  // return findDuplicatesSorted(array);
  return findDuplicatesOptimized(array);
}

// Two strategies for optimizing a nested loop would be to 
// cache values in an object/set or using a `log n` approach
// where the problem is divided in broken down in half after
// each iteration.
function findDuplicatesNestedLoop(array) {
  for (let i = 0; i < array.length; i += 1) {
    var currentNum = array[i];

    // Check for duplicate
    for (let j = 0; j < array.length; j += 1) {
      if (i === j) continue;

      if (currentNum === array[j]) return array[j];
    }
  }

  throw new Error("No duplicates found.");
}

// Here I'm using the caching strategy with a set. Since
// a set only allows unique values, we can check a number
// is already in the set. If it is, we've found our duplicate value.
function findDuplicatesSet(array) {
  var numbers = new Set();

  for (let i = 0; i < array.length; i++) {
    if (numbers.has(array[i])) {
      return array[i];
    }

    numbers.add(array[i]);
  }

  throw new Error("No duplicates found.");
}

// Another solution is to sort the array ahead of time. That way 
// all integers will be next to each other.
function findDuplicatesSorted(array) {
  array.sort();

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] === array[i - 1]) return array[i];
  }

  throw new Error("No duplicates found.");
}

// The optimized version is a modified binary search.
function findDuplicatesOptimized(array) {
  var floor = 1;
  var ceiling = array.length - 1;

  while (floor < ceiling) {
    var midpoint = Math.floor(floor + ((ceiling - floor) / 2));
    var loFloor = floor;
    var loCeiling = midpoint;
    var hiFloor = midpoint + 1;
    var hiCeiling = ceiling;

    var distinctPossibleIntegersInLowerRange = loCeiling - loFloor + 1;
    var itemsInLowerRange = 0;

    array.forEach(function loop(item) {
      if (item >= loFloor && item <= loCeiling) {
        itemsInLowerRange += 1;
      } 
    });

    if (itemsInLowerRange > distinctPossibleIntegersInLowerRange) {
      floor = loFloor;
      ceiling = loCeiling;
    }
    else {
      floor = hiFloor;
      ceiling = hiCeiling;
    }
  }

  return floor;
}