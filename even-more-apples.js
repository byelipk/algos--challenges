// indices === time (T)
// values === price ($)

// input => array of stock prices
// output => the best profit from 1 purchase and 1 sale of stock
//
// Must buy stock before you can sell stock

function assert(test, msg) {
  if (test() !== true) {
    console.error("FAIL: " + msg);
  }
  else {
    console.log("PASS: OK");
  }
}

function getMaxProfit(list) {
  if (list.length < 2) {
    throw new Error("List must be longer than 2.");
  }

  var minPriceSoFar = list[0];
  var maxProfit = list[1] - list[0];

  for (let t = 1; t < list.length; t += 1) {
    var buyPrice = list[t - 1];
    var sellPrice = list[t];

    minPriceSoFar = Math.min(minPriceSoFar, buyPrice);

    var potentialProfit = sellPrice - minPriceSoFar;

    maxProfit = Math.max(maxProfit, potentialProfit);
  }

  return maxProfit;
}

// The insight with this problem comes when we realize we need to keep track
// of the maximum profit and the minimum price we seen so far!


var result1 = getMaxProfit([10, 7, 5, 8, 11, 9]); 
var result2 = getMaxProfit([1, 1, 1, 1, 1]); 
var result3 = getMaxProfit([5,4]); 
var result4 = getMaxProfit([1,2]); 

assert(() => { return result1 === 6; }, "Profit should have been 6, but it was " + result1);
assert(() => { return result2 === 0; }, "Profit should have been 0, but it was " + result2);
assert(() => { return result3 === -1; }, "Profit should have been -1, but it was " + result3);
assert(() => { return result4 === 1; }, "Profit should have been 1, but it was " + result4);

