function binarySearch(sorted, value) {
  let min = 0;
  let max = sorted.length;

  while (min <= max) {
    let midpoint = Math.floor((min + max) / 2);

    if (sorted[midpoint] === value) {
      return midpoint;
    }
    else if (sorted[midpoint] < value) {
      min = midpoint;
    }
    else {
      max = midpoint;
    }
  }
  return -1;
}


console.log(binarySearch([1,2,3,4,5,6,7,8,9], 9))


/**
  WALKTHROUGH

  LIST  = [1,2,3,4,5,6,7,8,9]
  VALUE = 9

  STEP 1:
  =======
  min = 0
  max = 9

  (0 <= 8) === TRUE
    midpoint = 4 = Math.floor((0 + 9) / 2)
    (5 === 9) === FALSE
    (5 < 9)   === TRUE
      min = midpoint = 4

  STEP 2:
  =======
  min = 4
  max = 9

  (4 <= 8) === TRUE
    midpoint = 6 = Math.floor((4 + 9) / 2)
    (7 === 9) === FALSE
    (7 < 9)   === TRUE
      min = midpoint = 6

  STEP 3:
  =======
  min = 6
  max = 9

  (6 <= 9) === TRUE
    midpoint = 7 = Math.floor((6 + 9) / 2)
    (8 === 9) === FALSE
    (8 < 9)   === TRUE
      min = midpoint = 7

  STEP 3:
  =======
  min = 7
  max = 9

  (7 <= 9) === TRUE
    midpoint = 8 = Math.floor((7 + 9) / 2)
    (9 === 9) === TRUE
      return midpoint

**/

function TheBS(list, target) {
  let min = 0;
  let max = list.length;

  while (min <= max) {
    let midpoint = Math.floor((min+max) / 2);

    if (list[midpoint] === target) {
      return midpoint;
    }
    else if (list[midpoint] < target) {
      min = midpoint;
    }
    else {
      max = midpoint;
    }
  }
  return -1;
}
console.log(TheBS([1,2,3,4,5,6,7,8,9], 9))
