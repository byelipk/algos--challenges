function theFib(n) {
  if (n === 0) throw new Error('There is no such thing at the zeroeth fibonacci number. 😩');
  if (n === 1) return 0;
  if (n === 2) return 1;

  // O(2^n)
  return theFib(n - 2) + theFib(n - 1);
}


function theFibGreedy(n) {
  let twoFibsAgo = 0;
  let oneFibAgo  = 1;
  let currentFib = twoFibsAgo + oneFibAgo;

  // O(n)
  for (let i = 2; i < n; i += 1) {
    currentFib = twoFibsAgo + oneFibAgo;
    twoFibsAgo = oneFibAgo;
    oneFibAgo  = currentFib;
  }

  return currentFib;
}

function theFibMemoization(n) {
  const sequences = [];
  sequences.push(0);
  sequences.push(1);
  for (let i = 2; i < n; i += 1) {
    sequences.push(sequences[i - 2] + sequences[i - 1]);
  }
  return sequences[n-1];
}

console.log(theFib(4));
console.log(theFibGreedy(4))
console.log(theFibMemoization(4))
