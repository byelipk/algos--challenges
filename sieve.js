function sieve(n) {
  const grid = {};

  // Load the grid! Remember that 2 is the first
  // prime number.
  for (var i = 2; i <= n; i++) {
    grid[i] = { marked: false }; // {marked: false} means we want to keep this
  }

  // Figure out how many multiples we'll need.
  const limit = Math.sqrt(n);

  // Loop through the multipliers...
  for (var i = 2; i <= limit; i++) {
    // Calculate the multiples...
    for (var x = i + i; x <= n; x += i) {
      grid[x].marked = true;
    }
  }

  const output = [];

  for (var i = 2; i <= n; i++) {
    if (!grid[i].marked) {
      output.push(i);
    }
  }

  return output;
}

// console.log(sieve(100));

Array.prototype.head = function() {
  if (this.length > 0) return this[0]
  else return null
}

Array.prototype.tail = function() {
  if (this.length > 0) return this.slice(1, this.length)
  else return null
}

function recurseInto(list, fn) {
  const h = list.head();
  const t = list.tail();

  if (h && fn) { fn(h); }
  if (t && fn) { recurseInto(t, fn); }
}

function sieveTwo(n) {
  const list = [];

  for (var i = 2; i <= n; i++) {
    list[i] = { index: i, marked: false };
  }

  // We don't have to find multiples past the square root of n
  const limit = Math.sqrt(n);

  // We want to mark off values that should be excluded
  for (var i = 2; i <= limit; i++) {
    recurseInto(list, (value) => {
      if (value.index > i) {
        if (value.index % i === 0) {   // mark all the multiples of i
          value.marked = true;
        }
      }
    });
  }

  const output = [];
  recurseInto(list, (value) => {
    if (!value.marked) { output.push(value.index); }
  });

  return output;
}


console.log(sieveTwo(100));
