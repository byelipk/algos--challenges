function random(lo, hi) {
  // When lo and hi are undefined, this function will
  // return either 0 or 1 randomly. O(1)
  if (lo === undefined) lo = 0;
  if (hi === undefined) hi = 0;
  return Math.floor(Math.random() * (hi - lo + 1)) + lo;
}

// The objective is to build a uniformly random function.
// When deriving the algorithm, we need to differentitate
// between all possibilities, and all possible OUTCOMES.
//
// For example, if we have the word "cat" and are asked to
// shuffle the order of the words. What are all the possible
// outcomes?
//
// "cat", "cta", "act", "atc", "tca", "tac"
//
// That's six possible outcomes.
//
// The insight which can help us derive the algorithm is
// that after an index has been set, we marked it off as
// finished and don't include it in further random number
// computations.
function shuffle(array) {
  console.log("BEFORE:", array);

  // a b c
  for (let i = 0; i < array.length; i++) {
    const rand = random(i, array.length - 1);

    if (rand === i) continue;

    const temp = array[i];
    array[i] = array[rand];
    array[rand] = temp;
  }

  console.log("AFTER:", array);
}
