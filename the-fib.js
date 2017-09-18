// O(2 ^ n)
// The recursive implementation results in quite a large
// call stack. It also results in a binary tree, which
// let's us see that the time complexity is O(2 ^ n).
// That's an exponential time cost. Gross.
function TheFib(n) {
  if (n < 0) {
    return 0; // throw an error maybe?
  }

  if (n === 0 || n === 1) {
    return n;
  }

  return TheFib(n-1) + TheFib(n-2);
};

// The time complexity of this greedy implementation is O(n)
// The space complexity is O(1)
function YourFib(n) {
  let twoFibsAgo = 0;
  let oneFibAgo  = 1;
  let currentFib = twoFibsAgo + oneFibAgo;
  for (var i = 2; i <= n ; i++) {
    currentFib = twoFibsAgo + oneFibAgo;
    twoFibsAgo = oneFibAgo;
    oneFibAgo  = currentFib;
  }
  return currentFib;
};

module.exports = { TheFib, YourFib };

// This example highlights again that recursive solutions,
// while cleaner, are frequently inefficient solutions
// to problems.
