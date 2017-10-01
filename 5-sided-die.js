function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function rand7() {
  return getRandomInt(1, 7);
}

// Worst case infinite time
// O(1) space
// Equal probability of 1/5. The odds aren't necessarily
// "better" but they're equal.
function rand5() {
  let randN = rand7();

  while (randN > 5) {
    randN = rand7();
  }

  return randN;
}
