function assert(actual, expected) {
  if (actual === expected) {
    console.log("PASS: 😁");
  }
  else {
    console.log("FAIL: 💩");
  }
}

assert(isPalindrome("civic"), true);
assert(isPalindrome("ivicc"), true);
assert(isPalindrome("civil"), false);
assert(isPalindrome("livci"), false);
assert(isPalindrome("racecar"), true);

function isPalindrome(string) {
  var set = new Set();

  for (let i = 0; i < string.length; i += 1) {
    var char = string[i];

    if (set.has(char)) {
      set.delete(char)
    }
    else {
      set.add(char);
    }
  } 

  return set.size <= 1;
}