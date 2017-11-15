var deliveryIdConfirmations = []; // 6 is didn't return

for (let i = 1; i <= 100; i += 1) {
  deliveryIdConfirmations.push(i);

  if (i !== 6) {
    deliveryIdConfirmations.push(i); 
  }
}

// We know one int is unique
// We know every int appears twice except for one of them
function findUnique1(ids) {
  for (let i = 0; i < ids.length; i += 1) {
    var found = false;
    for (let j = 0; j < ids.length; j += 1) {
      if (i === j) {
        continue;
      }

      if ( ids[i] === ids[j] ) {
        found = true;
      }
    }

    if (!found) {
      return ids[i];
    }
  }

  throw new Error("Cannot find unique int");
}

// We trade off on space complexity in order to achieve O(n) runtime efficiency.
function findUnique2(ids) {
  var map = new Map();

  for (let i = 0; i < ids.length; i += 1) {
    if (map.has(ids[i])) {
      map.set(ids[i], map.get(ids[i]) + 1);
    }
    else {
      map.set(ids[i], 1);
    }
  }

  for (let [int, count] of map.entries()) {
    if (count === 1) {
      return int;
    }
  }

  throw new Error("Cannot find unique int");
}

// XOR cancels out the second occurrence of an integer.
// O(n) time and (1) space
// This works because we know there is only one integer that doesn't have
// a duplicate.
function findUnique3(ids) {
  var unique = 0;

  ids.forEach(function each(id) {
    unique ^= id;
  });

  return unique;
}

console.log( findUnique1(deliveryIdConfirmations) );
console.log( findUnique2(deliveryIdConfirmations) );
console.log( findUnique3(deliveryIdConfirmations) );

