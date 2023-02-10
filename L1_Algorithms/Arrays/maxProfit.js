/**
 * @link: https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2zsx1/
 */
const maxProfit = function(prices) {
    let max = 0;
    let left = 0;
    for (let right = 1; right < prices.length; right++) {
        if (prices[left] < prices[right]) {
            let puy = prices[left];
            let sell = prices[right];
            max += sell - puy;
        }
        left++;
    }
    return max;
};