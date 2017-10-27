function getMaxProfit(stockPricesYesterday) {
  let maxProfit = 0;
  let minPrice = Infinity;

  for (let i = 0; i < stockPricesYesterday.length; i += 1) {
    const currentPrice = stockPricesYesterday[i];

    minPrice = Math.min(minPrice, currentPrice);

    const potentialProfit = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, potentialProfit);
  }
  return maxProfit;
}

module.exports = { getMaxProfit };  