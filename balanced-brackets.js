function isBalanced(str) {
  var queue = [];
  var pairings = { '(': ')', '{': '}', '[': ']' };

  for (let i = 0; i < str.length; i += 1) {
    var char = str[i];

    switch (char) {
      case "(":
      case "{":
      case "[":
        queue.push(pairings[char]);
        break;
    
      case ")":
      case "}":
      case "]":
        if (queue.length === 0) {
          return false;
        }

        queue.shift();

        break;

      default:
        break;
    }
  }

  return queue.length === 0;
}

console.log( isBalanced("{[()]}") );
console.log( isBalanced("{[()]}}") );
console.log( isBalanced("[[{}]"));
console.log( isBalanced("({{[[[[[()]]]]]()()()[][][]}})"));