import java.util.HashMap;

class Solution {
    public static  int[] twoSum(int[] nums, int target) {
        int[] result = new int[2];
        HashMap<Integer,Integer> res = new  HashMap<Integer,Integer>();
        for(int i = 0; i < nums.length ; i++)
            res.put(nums[i], i);
        for(int j = 0; j < nums.length ; j++) {
            int num = target - nums[j];
            if(res.containsKey(num) && res.get(num) != j) {
                result[0] = j;
                result[1] = res.get(num);
                return result;
            }
        }
        return result;
    }
}