function qsort(string, lo, hi) {
  if (string.length < 2) return string;
  if (lo === undefined) lo = 0;
  if (hi === undefined) hi = string.length - 1;

  if (lo < hi) {
    const pivotIndex = partition(string, lo, hi);
    qsort(string, lo, pivotIndex);
    qsort(string, pivotIndex+1, hi);
  }

  return string;
}

function partition(string, lo, hi) {
  const pivotValue = string[Math.floor((lo + (hi - lo)) / 2)];

  let i = lo - 1;
  let j = hi + 1;

  while (true) {
    do { i++ } while (string[i] < pivotValue);
    do { j-- } while (string[j] > pivotValue);

    if (i < j) {
      const tmp = string[i];
      string[i] = string[j];
      string[j] = tmp;
    }
    else {
      return j;
    }
  }
}


// 1. Assume all inputs in lowercase
// 2. ...
function findAnagrams(words) {
  const mapOfAnagrams = new Map();

  const sortedWords = words.map(word => Array.from(word).sort().join(''));

  sortedWords.forEach((word, index) => {
    if (mapOfAnagrams.has(word)) {
      mapOfAnagrams.get(word).push(words[index]);
    }
    else {
      mapOfAnagrams.set(word, [words[index]]);
    }
  });

  const result = [];

  for (let [key, list] of mapOfAnagrams) {
    result.push(list);
  }

  return result;
}

module.exports = { findAnagrams, qsort }
