// ALGORITHM
//
// 1. We know the position of a node with multiple incoming pointers is a
//    duplicate in our array because the nodes that pointed to it must have
//    the same value.
// 2. We find a node with multiple incoming pointers by finding the first
//    node in a cycle.
// 3. We find the first node in a cycle by finding the length of the cycle
//    and advancing two pointers: one starting at the head of the linked list,
//    and the other starting ahead as many steps as there are steps in the
//    cycle. The pointers will meet at the first node in the cycle.
// 4. We find the length of a cycle by remembering a position inside the
//    cycle and counting the number of steps it takes to get back to that
//    position.
// 5. We get inside a cycle by starting at the head and walking n steps. We
//    know the head of the list is at position n + 1.

// What assumptions do we make about the input array?
//
// 1. Integers are in the range 1..n
// 2. The array has a length of n + 1
// 3. The array is not necessarily sorted

// O(n) time
// O(1) space
function findDuplicate(intArray) {
  const n = intArray.length - 1;

  // Step 1: Find cycle
  // start at position n+1 and walk n steps to find a
  // position guarenteed to be in a cycle.
  let positionInCycle = n + 1;
  for (var i = 0; i < n; i++) {
    positionInCycle = intArray[positionInCycle - 1];
  }

  // Step 2: Find length of cycle
  // find the length of the cycle by remembering a position
  // in the cycle and counting the number of steps it takes
  // to get back to that position.
  const rememberThisPosition = positionInCycle;
  let currentPosition = intArray[positionInCycle-1];
  let stepCount = 1;

  while (currentPosition !== rememberThisPosition) {
    currentPosition = intArray[currentPosition-1];
    stepCount += 1;
  }

  // Step 3: Find first node in cycle
  // start two pointers
  //  (1) at position n+1
  //  (2) ahead of position n+1 as many steps as the cycle's length
  let start = n+1;
  let ahead = n+1;

  for (var i = 0; i < stepCount; i++) {
    ahead = intArray[ahead - 1];
  }

  // Advance until the pointers are in the same position,
  // which is the first node in the cycle.
  while (start !== ahead) {
    start = intArray[start - 1];
    ahead = intArray[ahead - 1];
  }

  return start;
}

console.log(findDuplicate([1,2,3,4,4,5,6]))
console.log(findDuplicate([9,8,7,6,5,4,3,3,2,1]))
