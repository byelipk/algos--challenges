function quickerSort(scores, maxScore) {
  const scoreCounts = [];
  const sortedScores = [];

  // Initialize scoreCounts
  for (var i = 0; i < maxScore + 1; i += 1) {
    scoreCounts[i] = 0;
  }

  // Two common ways to get an O(n) runtime are by using
  // a greedy approach, and by counting. What do we gain
  // by using a counting approach? Well, since we're treating
  // scores as array indexes, we get a sorted array after
  // one pass in a sense. A lower score will index into a
  // lower position in the array, and a higher score will
  // index into a higher position. To keep track of duplicate
  // scores, we treat the value as the number of times that
  // score has appeared.
  scores.forEach((score) => scoreCounts[score] += 1 );

  // NOTE
  // This works, but another way to think about this is
  // to decrement the maxScore...
  //
  // scoreCounts.forEach((count, score) => {
  //   while (count > 0) {
  //     sortedScores.unshift(score);
  //     count -= 1;
  //   }
  // });
  for (var score = maxScore; score > 0; score -= 1) {
    while (scoreCounts[score] > 0) {
      sortedScores.push(score);
      scoreCounts[score] -= 1;
    }
  }

  return sortedScores;
}

// What is the time and space complexity of this implementation?
//
// O(n) time and O(n) space. Note there is a nested loop towards
// the bottom of the function, however, we don't incur a time
// complexity cost because of it because in essence we're still
// only looping through the numbers in our scores array. No additional
// numbers get added to out sortedScores because of the nested loop
// either.


module.exports = quickerSort;
