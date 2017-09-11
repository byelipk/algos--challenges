// Recursive solution uses a lot of extra memory.
let fibcalls = 0;
function fib(n) {
  fibcalls++;
  if (n < 2) { return n; }
  return fib(n-2) + fib(n-1);
}

const sequence = [];
for (var i = 0; i <= 10; i++) {
  sequence.push(fib(i));
}
console.log(sequence);
console.log(fibcalls);


fibcachedcalls = 0;
function fibCached(n) {
  fibcachedcalls++;
  const sequence = [0,1];
  for (var i = 2; i <= n; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }
  return sequence;
}

console.log(fibCached(10));
console.log(fibcachedcalls);

function fibGreedy(n) {
  let twoFibsAgo = 0;
  let oneFibAgo  = 1;
  let currentFib = twoFibsAgo+oneFibAgo;
  for (var i = 2; i <= n; i++) {
    currentFib = twoFibsAgo + oneFibAgo;
    twoFibsAgo = oneFibAgo;
    oneFibAgo  = currentFib;
  }
  return currentFib;
}

console.log(fibGreedy(10));

function fibWithCB(n, cb) {
  let twoFibsAgo = 0;
  let oneFibAgo  = 1;
  let currentFib = null;

  if (cb) {
    cb(twoFibsAgo);
    cb(oneFibAgo);
  }

  for (var i = 2; i <= n; i++) {
    currentFib = twoFibsAgo + oneFibAgo;
    twoFibsAgo = oneFibAgo;
    oneFibAgo  = currentFib;
    if (cb) {
      cb(currentFib);
    }
  }

  return currentFib;
}
console.log(fibWithCB(10, (fib) => console.log(fib)));
