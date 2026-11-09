/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // ================== Map ==================
    let hash_map = new Map();


    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (hash_map.has(complement))
            return [hash_map.get(complement), i];
        hash_map.set(nums[i], i);
    }
    return [-1, -1];

    // ================== Plain Object ==================
    // let hash_map = {};

    // for (let i = 0; i < nums.length; i++) {
    //     let complement = target - nums[i];
    //     if (Object.hasOwn(hash_map, complement))
    //         return [hash_map[complement], i];
    //     hash_map[nums[i]] = i;
    // }
    // return [-1, -1];
};

console.log(twoSum([2,11,8,7,15], 9))
console.log(twoSum([2,3,5,7,11,15], 10))
console.log(twoSum([3,24,50,79,88,150,345], 200))
console.log(twoSum([2,3,4], 6))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([-1,0], -1))