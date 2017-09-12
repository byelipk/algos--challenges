// O(n log n) average case
// Can degrade to O(n^2) if list is mostly sorted
function qsort(list, lo_idx, hi_idx) {
  if (list.length < 2)      { return list; }
  if (lo_idx === undefined) { lo_idx = 0; }
  if (hi_idx === undefined) { hi_idx = list.length - 1; }

  if (lo_idx < hi_idx) {
    const pivot_idx = partition(list, lo_idx, hi_idx);
    qsort(list, lo_idx, pivot_idx);
    qsort(list, pivot_idx+1, hi_idx);
  }

  return list;
}

function partition(list, lo_idx, hi_idx) {
  // Use median value to prevent against worst case scenario.
  const pivot_value = list[Math.floor(lo_idx + (hi_idx - lo_idx) / 2)];

  let i = lo_idx - 1;
  let j = hi_idx + 1; // j will be the index of the next pivot

  while (true) {
    do { i++ } while (list[i] < pivot_value);
    do { j-- } while (list[j] > pivot_value);

    if (i < j) {
      // swap
      let t = list[i];
      list[i] = list[j];
      list[j] = t;
    }
    else {
      return j;
    }
  }
}

console.log(qsort([6,7,3,8,2,5,4,1]));
