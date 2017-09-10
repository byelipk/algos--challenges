const BAG = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

for (var i = 1; i <= 100; i++) {
  BAG.push(i);
}

const randomIndex = getRandomInt(1, 101);
const theNumber   = BAG[randomIndex];
BAG[randomIndex]  = null;

///////////////

function missingNo(array) {
  return array.sort().reduce((state, nextInSequence) => {

    if (state.found) {
      return state;
    }

    if ((state.value - nextInSequence) === 0) {
      return { found: false, value: nextInSequence };
    }

    return { found: true, value: nextInSequence - state.value };
  }, {found: false, value: 1});
}

function missingNoSort(TheArray) {
  const TheHash    = {};
  const TheMissing = {};
  const TheKeys    = [];

  // Fill TheHash O(n)
  for (var i = 1; i <= 100; i++) {
    TheHash[i] = false;
    TheKeys.push(i);
  }

  // Compare TheHash and TheArray O(n)
  for (var i = 0; i < TheArray.length; i++) {
    const value = TheHash[TheArray[i]];
    if (value) {
      TheHash[TheArray[i]] = true;
    }
  }

  // O(n)
  TheKeys.forEach(number => {
    if (TheHash[number] === false) {
      TheMissing[number] = true;
    }
  });

  return TheMissing;
}

console.log(missingNoSort(BAG));
