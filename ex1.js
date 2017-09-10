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

  // Fill TheHash
  for (var i = 1; i <= 100; i++) {
    TheHash[i] = false;
  }

  // Compare TheHash and TheArray
  for (var i = 0; i < TheArray.length; i++) {
    const value = TheHash[TheArray[i]];
    if (value) {
      TheHash[TheArray[i]] = true;
    }
  }

  Object.keys(TheHash).forEach(number => {
    if (TheHash[number] === false) {
      TheMissing[number] = true;
    }
  });

  return TheMissing;
}

console.log(missingNoSort(BAG));
