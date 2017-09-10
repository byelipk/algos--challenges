// O(n)
function onePass(list, target) {
  const pairs = [];

  for (var i = 0; i < list.length; i++) {
    const n1 = list[i];
    const n2 = target - n1;

    if (n2) {
      pairs.push([n1, n2]);
    }
  }

/*
  [1,2,3,4,5,6], 6

  first pass:

    i = 0
    n1 = 1
    n2 = 5
    index = undefined

    pairs = [[1, 5]]
    hashmap = {5: 0}

  second pass:

    i = 1
    n1 = 2
    n2 = 4
    index = undefined

    pairs = [[1,5], [2,4]]
    hashmap = {5: 0, 4: 1}

  third pass:

    i = 2
    n1 = 3
    n2 = 3
    index = undefined

    pairs = [[1,5], [2,4], [3,3]]
    hashmap = {5: 0, 4: 1, 3: 2}

  fourth pass:

    i = 3
    n1 = 4
    n2 = 2
    index = undefined

    pairs = [[1,5], [2,4], [3,3], [4,2]]
    hashmap = {5: 0, 4: 1, 3: 2, 2: 3}

  fifth pass:

    i = 4
    n1 = 5
    n2 = 1
    index = undefined

    pairs = [[1,5], [2,4], [3,3], [4,2], [5, 1]]
    hashmap = {5: 0, 4: 1, 3: 2, 2: 3, 1: 4}

  sixth pass:

    i = 5
    n1 = 6
    n2 = 0
    index = undefined

    pairs = [[1,5], [2,4], [3,3], [4,2], [5, 1], [6, 0]]
    hashmap = {5: 0, 4: 1, 3: 2, 2: 3, 1: 4, 0: 5}

**/


  return pairs;
}

function ohN(list, target) {
  const pairs   = [];
  const hashmap = {};

  for (var i = 0; i < list.length; i++) {
    hashmap[list[i]] = i;
  }

  for (var i = 0; i < list.length; i++) {
    const index = hashmap[(target - list[i])]
    const pair  = [list[i], list[index]]

    if (pair[0] !== undefined && pair[1] !== undefined) {
      pairs.push(pair)
    }
  }

  return pairs;
}

function ohNSquared(list, target) {
  const result = [];

  // What we're doing here is asking are there
  // two indices where the sum of the values
  // is equal to some target value.
  //
  // The time complexity of this code is O(n^2).
  // It's fine as a starting point, but it won't
  // scale.
  for (var i = 0; i < list.length; i++) {
    const n1 = list[i];
    for (var j = 0; j < list.length; j++) {
      const n2 = list[j];
      if (n1 + n2 == target) {
        result.push([n1, n2]);
      }
    }
  }
  return result;
}

console.log(ohNSquared([1,2,3,4,5,6], 6))
console.log(ohN([1,2,3,4,5,6], 6))
console.log(onePass([1,2,3,4,5,6], 6))
