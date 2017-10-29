function assert(actual, expected) {
  var passed = true;

  for (let i = 0; i < expected.length; i += 1) {
    if (actual[i] !== expected[i]) {
      passed = false;
      break;
    }
  }

  if (passed) {
    console.log("PASS: 😁");
  }
  else {
    console.log("FAIL: 💩")
  }
}

assert(sortScores([37, 89, 41, 65, 91, 53]), [91, 89, 65, 53, 41, 37]);
assert(sortScores([80,80,90]), [90,80,80]);
assert(sortScores([1,3,2]), [3,2,1]);

function sortScores(unsorted, highestPossibleScore=100) {
  var sorted = new Array(highestPossibleScore + 1).fill(0);

  for (let i = 0; i < unsorted.length; i += 1) {
    sorted[unsorted[i]] += 1;
  }

  var result = [];
  for (let i = sorted.length - 1; i >= 0; i -= 1) {
    if (sorted[i] > 0) {
      for (let j = 1; j <= sorted[i]; j += 1) {
        result.push(i);
      }
    }
  }

  return result;
} 