// Alternating merge
// ************************* 
function merge(str1, str2) {
  var result = [];
  var left = str1.split("");
  var right = str2.split("");

  while (left.length && right.length) {
    result.push(left.shift());
    result.push(right.shift());
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result.join("");
}


// Repeating
// ************************* 
function repeat(string) {
  var words = new Map();
  var earliest = new Map();

  for (let i = 0; i < string.length; i += 1) {
    if (!words.has(string[i])) {
      words.set(string[i], i);
    }
    else {
      earliest.set(string[i], words.get(string[i]));
    }
  }

  var earliestRecPos = Infinity; 
  var earliestRecChar;

  for (let [ char, pos ] of earliest.entries()) {
    if (pos < earliestRecPos) {
      earliestRecChar = char;
      earliestRecPos = pos;
    }
  }

  return earliestRecChar;
}

// **********************

// (a, b) -> (a + b, b)
// (a, b) -> (a, a + b)
//
// (1, 4) -> (1 + 4, 4)
// (1, 4) -> (1, 1 + 4)

// Is it possible to convert (a, b) to (c, d)???
function isPossible(a, b, c, d) {

}

console.log( isPossible(1, 4, 1, 4) )
console.log( isPossible(1, 4, 5, 9) )
// console.log( isPossible(5, 4, 5, 9) )
// console.log( isPossible(1, 2, 3, 6) );