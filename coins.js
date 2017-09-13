// You're taking that idea of "keeping track of what we need in order to
// update the best answer so far," and applying it to situations where
// the new best answer so far might not just have to do with the previous
// answer, but some other earlier answer as well.


function doItAgain(amount, denominations) {
  if (amount === 0) { return 1; } // There is only one way to get 0

  // Start with the base case that there is ONE way to
  // create the amount 0. We use the array to keep track
  // of all our previous answers to subproblems.
  const waysOfDoingThings = [];
  for (let i = 0; i <= amount; i++) {
    waysOfDoingThings[i] = 0;
  }
  waysOfDoingThings[0] = 1;

  denominations.forEach((coin) => {
    // What's happening here?
    for (let otherCoin = coin; otherCoin <= amount; otherCoin++) {
      let remainder = otherCoin - coin;
      waysOfDoingThings[otherCoin] += waysOfDoingThings[remainder];
    }
  });

  return waysOfDoingThings[amount];
}

function changePossibilitiesBottomUp(amount, denominations) {
  // We can start by making an array waysOfDoingNCents, where the index is
  // the amount and the value at each index is the number of ways of getting
  // that amount.
  var waysOfDoingNcents = [];
  for (var i = 0; i <= amount; i++) {
    waysOfDoingNcents[i] = 0;
  }
  waysOfDoingNcents[0] = 1;

  denominations.forEach(function(coin) {
    for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {
      var higherAmountRemainder = higherAmount - coin;
      waysOfDoingNcents[higherAmount] +=
        waysOfDoingNcents[higherAmountRemainder];
    }
  });

  return waysOfDoingNcents[amount];
}

// console.log(changePossibilitiesBottomUp(4, [1, 2, 3]));
// console.log(doItAgain(0, [0,1,2]));
// console.log(changePossibilitiesBottomUp(0, [0,1,2]));
// console.log(doItAgain(1, [1]));
// console.log(doItAgain(2, [1,2]));
// console.log(doItAgain(3, [1,2,3]));
console.log(doItAgain(3, [3,2,1]));
console.log(doItAgain(2, [1]));
console.log(doItAgain(0, [0,1]));
