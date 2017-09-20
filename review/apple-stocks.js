// NOTE
// Suppose we could come up with the answer in one pass through the input,
// by simply updating the 'best answer so far' as we went. What additional
// values would we need to keep updated as we looked at each item in our set,
// in order to be able to update the 'best answer so far' in constant time?
function getMaxProfit(stockPricesYesterday) {

  if (stockPricesYesterday.length < 2) {
    throw new Error('DUDE!');
  }

  // Since we're using a greedy approach, let's be greedy
  // and find the max profit. How do we do that? Profit is the
  // difference between the price we sell at, and the price we
  // buy at. Since we have a price at t0 and a price at t1 at the
  // very least, we can greeedily calculate the maxProfit!
  let lowestSellingPrice = stockPricesYesterday[0];
  let highestBuyingPrice  = stockPricesYesterday[1];
  let maxProfit = highestBuyingPrice - lowestSellingPrice;  // find profit

  // Our best answer so far is maxProfit. But how would we go about
  // updating our best answer?
  for (let i = 1; i < stockPricesYesterday.length; i++) {

    // Now that we have a hold of the current price, we can use it
    // to update the lowestSellingPrice and the maxProfit.
    const currentPrice = stockPricesYesterday[i];

    const potentialProfit = currentPrice - lowestSellingPrice;

    // Our new best answers so far!
    maxProfit = Math.max(maxProfit, potentialProfit);
    lowestSellingPrice = Math.min(lowestSellingPrice, currentPrice);
  }

  // By now, we should have updated our best answer so far and arrived
  // at the max profit we'd expect to recieve.
  return maxProfit;
}

var prices = [10, 7, 5, 8, 11, 9];
// var prices = [10, 7, 5];

console.log(getMaxProfit(prices));
