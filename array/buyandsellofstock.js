function buyAndSellStock(prices) {
    let min_price = Number.MAX_SAFE_INTEGER;
    let maxProfit = Number.MIN_SAFE_INTEGER;

    for(let price of prices) {
        min_price = Math.min(min_price, price);
        maxProfit = Math.max(maxProfit, price - min_price);
    }

    return maxProfit;
}