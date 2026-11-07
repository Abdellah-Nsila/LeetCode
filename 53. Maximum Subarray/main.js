

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = best = nums[0];

    for (let i = 1; i < nums.length; i++)
    {
        sum = Math.max(nums[i] + sum, nums[i]);
        best = Math.max(sum, best);
    }
    return best;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5,4,-1,7,8]));
console.log(maxSubArray([-2, -1]));
