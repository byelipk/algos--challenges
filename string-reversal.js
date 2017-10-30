assert(reverse("hello"), "olleh");
assert(reverse("nice"), "ecin");

// *********************

function assert(actual, expected) {
  if (actual === expected) {
    console.log("PASS: 😁");
  }
  else {
    console.log("FAIL: 💩");
  }
}

// *********************

function reverse(string) {
  var leftIndex = 0;
  var rightIndex = string.length - 1;
  var list = string.split(""); 

  while (leftIndex < rightIndex) {
    let temp = list[leftIndex];
    list[leftIndex] = list[rightIndex];
    list[rightIndex] = temp;

    leftIndex += 1;
    rightIndex -= 1;
  }

  return list.join("");
}

