function calculateValuePerKilo(cake) {
  return cake.value / cake.weight;
}

function maxDuffelBagValue(cakeTypes, capacity) {
  let maxValue = 0;
  let currentCapacity = capacity;

  while (currentCapacity > 0) {
    let addToBag = null;
    let addToBagValuePerKilo = null;

    for (let i = 0; i < cakeTypes.length; i++) {
      const currentCake = cakeTypes[i];
      const valuePerKilo = calculateValuePerKilo(currentCake);

      if (currentCake.weight <= currentCapacity) {
        if (!addToBag) {
          addToBag = currentCake;
          addToBagValuePerKilo = valuePerKilo;
        }
        else if (valuePerKilo > addToBagValuePerKilo) {
          addToBag = currentCake;
          addToBagValuePerKilo = valuePerKilo;
        }
      }
    }

    // update maxValue and currentCapacity
    currentCapacity -= addToBag.weight;
    maxValue += addToBag.value;
  }

  return maxValue;
}

// O(n * k)
function dynamic(cakeTypes, capacity) {
  // This is an overlapping subproblem. That means finding
  // the solution means solving the same subproblem multiple
  // times.

  // Our solution will use memoization so that we do not
  // run the same inputs more than once.

  // The idea is we have cake types. Each cake type has a weight
  // and a value, and we have to find the maximum monetary value
  // our "duffel bag" can hold.

  // The "optimal", but not necessarily efficient way to solve this
  // problem is to build up a list of solutions to smaller
  // problems. We can then reuse those solutions to solve the larger
  // problem.
  //
  // Where are we going to store the solutions? More importantly,
  // WHAT are the solutions we are going to store?
  const maxValueAtCapaity = [];
  for (let i = 0; i <= capacity; i += 1) {
    maxValueAtCapaity[i] = 0;
  }

  // Now, how do we solve the subproblems?
  for (let currentCapacity = 0; currentCapacity <= capacity; currentCapacity += 1) {

    let currentMaxValue = 0;

    for (let j = 0; j < cakeTypes.length; j += 1) {
      const cake = cakeTypes[j];

      if (cake.weight <= currentCapacity) {

        // Should we use this cake or not?
        // How can we use the solutions to our subproblems?
        const maxValueOfCake = cake.value + maxValueAtCapaity[currentCapacity - cake.weight];

        // How does the value of the cake compare to the current max value?
        currentMaxValue = Math.max(maxValueOfCake, currentMaxValue);
      }
    }

    // Update the solution to subproblem currentCapacity
    maxValueAtCapaity[currentCapacity] = currentMaxValue;
  }

  // Thanks to all our hard work, we just have to index into
  // maxValueAtCapaity to return the answer.
  return maxValueAtCapaity[capacity];
}

module.exports = { maxDuffelBagValue, dynamic };
