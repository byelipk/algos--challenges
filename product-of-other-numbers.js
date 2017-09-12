function getProductsOfAllIntsExceptAtIndex(array) {
  const output = [];

  for (var exclude = 0; exclude < array.length; exclude++) {
    let product = 1;

    for (var i = 0; i < array.length; i++) {
      if (i === exclude) {
        continue;
      }

      product *= array[i];
    }

    output.push(product);
  }

  return output;
}

function greedy(array) {
  const output = [];

  for (var i = 0; i < array.length; i++) {
    let left  = array.slice(0, i);
    let right = array.slice(i+1, array.length);

    output.push(left.concat(right));
  }

  return output.map(nums => {
    let product = 1;
    nums.forEach(n => product*=n);
    return product;
  });
}

function moreGreedy(array) {
  let productsExceptAtIndex = [];
  let productSoFar = 1;

  // get products before index
  for (var i = 0; i < array.length; i++) {
    productsExceptAtIndex[i] = productSoFar;
    productSoFar *= array[i];
  }

  // get products after index
  productSoFar = 1;
  for (var i = array.length - 1; i >= 0; i--) {
    productsExceptAtIndex[i] *= productSoFar;
    productSoFar *= array[i];
  }

  return productsExceptAtIndex;
}

console.log(getProductsOfAllIntsExceptAtIndex([1,7,3,4]));
console.log(greedy([1,7,3,4]));
console.log(moreGreedy([1,7,3,4]));

// [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]
// [84, 12, 28, 21]
