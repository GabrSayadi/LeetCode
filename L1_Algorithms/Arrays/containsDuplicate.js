/**
 * @link : https://leetcode.cn/leetbook/read/top-interview-questions-easy/x248f5/
 */
const containsDuplicate = function(nums) {
    const mapping = new Map();
    for (let i = 0 ; i <  nums.length; i++) {
        if(mapping.has(nums[i])) 
            return true;
        else
            mapping.set(nums[i], i);
    }
    return false;
};