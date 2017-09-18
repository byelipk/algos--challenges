function Uniq(array) {
  const stack = [];

  array.sort(); // In place sort

  stack.push({number: array[0], count: 1});

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] === stack[0].number) {
      stack[0].count++;
    }
    else {
      const numberFromStack = stack.pop();

      if (numberFromStack.count === 1) {
        return numberFromStack.number;
      }
      else {
        stack.push({number: array[i], count: 1});
      }
    }
  }

  return null;
}

function XOR(array) {
  let uniq = null;

  array.forEach(n => uniq ^= n);

  return uniq;
}

module.exports = { Uniq, XOR };
