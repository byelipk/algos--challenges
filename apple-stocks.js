// T = minutes past 9:30 am
// V = price of stock
var stockPricesYesterday = [
  10,
  7,
  5,
  8,
  11,
  9
];

// stockPricesYesterday[T]
// buy low, sell high

// O(n^2) time and space
function ohNSquared(prices) {
  let maxProfit = 0;

  for (let buyTime = 0; buyTime < prices.length; buyTime++) {
    for (let sellTime = buyTime + 1; sellTime < prices.length; sellTime++) {

      let buyPrice = prices[buyTime];
      let sellPrice = prices[sellTime];
      let potentialProfit = sellPrice - buyPrice;

      maxProfit = Math.max(maxProfit, potentialProfit);
    }
  }

  return maxProfit;
}

// O(n) time, O(1) space
function linearTimeConstantSpace(prices) {
  if (prices.length < 2) {
    throw new Error("Not enough data...");
  }

  // cache the first value
  let minPrice = prices[0];

  // cache the difference of the secomd and first values
  let maxProfit = prices[1] - prices[0];

  // Skip the first value because we must buy before we sell!
  // If we had started at index 0 we'd buy and sell at the same time.
  // This would give us a profit of 0, which is a problem since
  // we want to allow for negative profits.
  for (let time = 1; time < prices.length; time++) {
    currentPrice = prices[time];

    let potentialProfit = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, potentialProfit);

    minPrice = Math.min(minPrice, currentPrice);
  }
  return maxProfit;
}

// function linearTimeConstantSpace(stockPricesYesterday) {
//
//   // make sure we have at least 2 prices
//   if (stockPricesYesterday.length < 2) {
//     throw new Error('Getting a profit requires at least 2 prices');
//   }
//
//   // we'll greedily update minPrice and maxProfit, so we initialize
//   // them to the first price and the first possible profit
//   var minPrice = stockPricesYesterday[0];
//   var maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];
//
//   // start at the second (index 1) time
//   // we can't sell at the first time, since we must buy first,
//   // and we can't buy and sell at the same time!
//   // if we started at index 0, we'd try to buy *and* sell at time 0.
//   // this would give a profit of 0, which is a problem if our
//   // maxProfit is supposed to be *negative*--we'd return 0.
//   for (var i = 1; i < stockPricesYesterday.length; i++) {
//     var currentPrice = stockPricesYesterday[i];
//
//     // see what our profit would be if we bought at the
//     // min price and sold at the current price
//     var potentialProfit = currentPrice - minPrice;
//
//     // update maxProfit if we can do better
//     maxProfit = Math.max(maxProfit, potentialProfit);
//
//     // update minPrice so it's always
//     // the lowest price we've seen so far
//     minPrice = Math.min(minPrice, currentPrice);
//   }
//
//   return maxProfit;
// }

Array.prototype.head = function() {
  if (this.length > 0) {
    return this[0];
  } else {
    return null;
  }
}

Array.prototype.tail = function() {
  if (this.length > 0) {
    return this.slice(1, this.length);
  } else {
    return null;
  }
}

function getMaxProfitRecursive(list) {
  function _recurse(head, tail, min, max) {
    // base case - no head
    if (!head) {
      return max - min;
    }

    // set min, max to head of list
    if (!min || (head < min)) {
      min = head;
    }
    if (!max || (head > max)) {
      max = head;
    }

    return _recurse(tail.head(), tail.tail(), min, max);
  }

  // recurse using the tail, min, max
  return _recurse(list.head(), list.tail(), null, null);
}

console.log('O(n^2)')
console.log(ohNSquared(stockPricesYesterday));
console.log(ohNSquared([
  11,
  7,
  5,
  8,
  10,
  9
]));
console.log(ohNSquared([
  11,
  7,
  5,
  3,
  1,
  -5
]));

console.log('O(n)')
console.log(linearTimeConstantSpace(stockPricesYesterday));
console.log(linearTimeConstantSpace([
  11,
  7,
  5,
  8,
  10,
  9
]));
console.log(linearTimeConstantSpace([
  11,
  7,
  5,
  3,
  1,
  -5
]));
console.log(linearTimeConstantSpace([
  10,
  10,
  10,
  10,
  10,
  10
]));

// console.log(getMaxProfitRecursive(stockPricesYesterday));
// console.log(getMaxProfitRecursive([11, 7, 5, 8, 10, 9]));
// console.log(getMaxProfitRecursive([11, 7, 5, 3, 1, -5]));

// var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
// returns 6 (buying for $5 and selling for $11)


/**

How do we know if the greedy/caching approach will help solve a problem?

"Suppose we could come up with the answer in one pass through the
input, by simply updating the 'best answer so far' as we went. What
additional values would we need to keep updated as we looked at each
item in our set, in order to be able to update the 'best answer so far'
in constant time?"

**/
