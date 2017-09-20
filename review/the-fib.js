function theFib(n) {
  if (n < 1) throw new Error('There is no such thing at the zeroeth fibonacci number. 😩');
  if (n === 1) return 0;
  if (n === 2) return 1;

  // Time: O(2^n)
  // Space: O(2^n) ... not sure, but I know it's bad.
  return theFib(n - 2) + theFib(n - 1);
}

function theFibWithRunningSum(n, twoFibsAgo, oneFibAgo) {
  if (twoFibsAgo === undefined) twoFibsAgo = 0;
  if (oneFibAgo === undefined)  oneFibAgo  = 1;
  if (n === 2) return oneFibAgo;

  // Notice we're counting from the top down! This is a pattern in recursion.
  // When we iterate, normally we go from the bottom up.

  // Time: O(n)
  // Space: O(1)
  return theFibWithRunningSum(n - 1, oneFibAgo, twoFibsAgo + oneFibAgo);
}


function theFibGreedy(n) {
  let twoFibsAgo = 0;
  let oneFibAgo  = 1;
  let currentFib = twoFibsAgo + oneFibAgo;

  // Time: O(n)
  // Space: O(1)
  for (let i = 2; i < n; i += 1) {
    currentFib = twoFibsAgo + oneFibAgo;
    twoFibsAgo = oneFibAgo;
    oneFibAgo  = currentFib;
  }

  return currentFib;
}

function theFibMemoization(n) {
  const sequences = [];
  sequences.push(0); // O(1)
  sequences.push(1); // O(1)

  // Time: O(n)
  // Space: O(n)
  for (let i = 2; i < n; i += 1) {
    sequences.push(sequences[i - 2] + sequences[i - 1]); // Read/Write: O(1)
  }

  return sequences[n-1]; // Read: O(1)
}

console.log(theFib(10));
console.log(theFibGreedy(10))
console.log(theFibMemoization(10))
console.log(theFibWithRunningSum(10))
