/**
 * @link: https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2skh7/
 */
const rotate = function(nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
};