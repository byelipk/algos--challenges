function getProductsOfAllIntsExceptAtIndex(arrayOfInts) {
  const arrayOfProductsExceptAtIndex = [];

  for (let i = 0; i < arrayOfInts.length; i++) {
    let currentProduct = 1;

    for (var j = 0; j < arrayOfInts.length; j++) {
      if (i !== j) {
        currentProduct *= arrayOfInts[j];
      }
    }

    arrayOfProductsExceptAtIndex.push(currentProduct);
  }

  return arrayOfProductsExceptAtIndex;
}

function VersionTwo(arrayOfInts) {
  if (arrayOfInts.length < 2) throw new Error('We need an array with at least two integers.');

  let currentProduct = 1;
  const productsToLeftOfIndex = [];
  for (let i = 0; i < arrayOfInts.length; i++) {
    productsToLeftOfIndex.push(currentProduct);
    currentProduct *= arrayOfInts[i];
  }

  currentProduct = 1;
  const productsToRightOfIndex = [];
  for (let j = arrayOfInts.length - 1; j >= 0; j--) {
    productsToRightOfIndex.push(currentProduct);
    currentProduct *= arrayOfInts[j];
  }

  const productsExceptAtIndex = [];
  for (let z = 0; z < arrayOfInts.length; z++) {
    productsExceptAtIndex[z] =
      productsToLeftOfIndex[z] *
      productsToRightOfIndex[productsToRightOfIndex.length - 1 - z];
  }

  return productsExceptAtIndex;
}

function VersionThree(arrayOfInts) {
  if (arrayOfInts.length < 2) throw new Error('We need an array with at least two integers.');

  const productsExceptAtIndex = [];

  let currentProduct = 1;
  for (let i = 0; i < arrayOfInts.length; i++) {
    productsExceptAtIndex[i] = currentProduct;
    currentProduct *= arrayOfInts[i];
  }

  currentProduct = 1;
  for (let j = arrayOfInts.length - 1; j >= 0; j--) {
    productsExceptAtIndex[j] *= currentProduct;
    currentProduct *= arrayOfInts[j];
  }

  return productsExceptAtIndex;
}

console.log(getProductsOfAllIntsExceptAtIndex([1,7,3,4]))
console.log(VersionTwo([1,7,3,4]))
console.log(VersionThree([1,7,3,4]))
