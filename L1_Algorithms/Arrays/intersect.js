/**
 * @link: https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2y0c2/
*/

const intersect = function(nums1, nums2) {
    const mapping = new Map();
    let result = [];
    for (let num of nums1) {
        if (mapping.has(num)) {
            mapping.set(num, mapping.get(num) + 1);
        } else {
            mapping.set(num, 1);
        }
    }
    for (let num of nums2) {
        if (mapping.has(num)) {
            result.push(num);
            if (mapping.get(num) > 1) {
                mapping.set(num, mapping.get(num) - 1);
            } else {
                mapping.delete(num);
            }
        }
    }
    return result;
};