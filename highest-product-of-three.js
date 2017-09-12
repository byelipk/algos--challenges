const inputArrayOfInts = [1,2,3];

function doAllTheThings(array) {
  if (array.length < 3) {
    throw new Error('I cannot do that, sir.');
  }

  let n1 = array[0];
  let n2 = array[1];
  let n3 = array[2];

  let highestProduct = n1*n2*n3;

  if (array.length > 3) {
    for (let i0=1, i1=2, i2=3; i2 < array.length; i0++, i1++, i2++) {
      n1 = array[i0];
      n2 = array[i1];
      n3 = array[i2];

      if (!n3) {
        break;
      }

      highestProduct = Math.max(highestProduct, n1*n2*n3);
    }
  }

  return highestProduct;
}

function doAllTheThingsAgain(array) {
  if (array.length < 3) {
    throw new Error('I cannot do that, sir.');
  }

  let highest = Math.max(array[0], array[1]); // highest number
  let lowest  = Math.min(array[0], array[1]); // lowest number

  // Help us hold on to numbers that occur earlier in the
  // O(n) scan that can impact the highest product of 3 ints.
  let highestProductOf2 = array[0] * array[1];
  let lowestProductOf2  = array[0] * array[1];

  let highestProductOf3 = highestProductOf2 * array[2];

  for (var i = 2; i < array.length; i++) {
    highestProductOf3 = Math.max(
      highestProductOf3,
      array[i] * highestProductOf2,
      array[i] * lowestProductOf2
    );

    // New highest product of two?
    highestProductOf2 = Math.max(
      highestProductOf2,
      highest * array[i],
      lowest * array[i]
    );

    lowestProductOf2 = Math.min(
      lowestProductOf2,
      highest * array[i],
      lowest * array[i]
    );

    highest = Math.max(highest, array[i])
    lowest  = Math.min(lowest, array[i])
  }

  return highestProductOf3
}


function highestProductOf3(arrayOfInts) {

  if (arrayOfInts.length < 3) {
      throw new Error('Less than 3 items!');
  }

  // we're going to start at the 3rd item (at index 2)
  // so pre-populate highests and lowests based on the first 2 items.
  // we could also start these as null and check below if they're set
  // but this is arguably cleaner
  var highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  var lowest  = Math.min(arrayOfInts[0], arrayOfInts[1]);

  var highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  var lowestProductOf2  = arrayOfInts[0] * arrayOfInts[1];

  // except this one--we pre-populate it for the first *3* items.
  // this means in our first pass it'll check against itself, which is fine.
  var highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

  // walk through items, starting at index 2
  for (var i = 2; i < arrayOfInts.length; i++) {
      var current = arrayOfInts[i];

      // do we have a new highest product of 3?
      // it's either the current highest,
      // or the current times the highest product of two
      // or the current times the lowest product of two
      highestProductOf3 = Math.max(
          highestProductOf3,
          current * highestProductOf2,
          current * lowestProductOf2
      );

      // do we have a new highest product of two?
      highestProductOf2 = Math.max(
          highestProductOf2,
          current * highest,
          current * lowest
      );

      // do we have a new lowest product of two?
      lowestProductOf2 = Math.min(
          lowestProductOf2,
          current * highest,
          current * lowest
      );

      // do we have a new highest?
      highest = Math.max(highest, current);

      // do we have a new lowest?
      lowest = Math.min(lowest, current);
  }

  return highestProductOf3;
}

console.log(doAllTheThingsAgain(inputArrayOfInts));
console.log(doAllTheThingsAgain([10,20,30,40,50,100,100,100]));
console.log(doAllTheThingsAgain([0,1,2,3]));
console.log(doAllTheThingsAgain([1, 10, -5, 1, -100])); // uh oh
console.log(highestProductOf3([1, 10, -5, 1, -100])); // uh oh
