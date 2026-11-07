
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length == 0)
        return 0;
    let hash_set = new Set(nums);
    let best = 1;

    hash_set.forEach((num) => {
        if (!hash_set.has(num - 1))
        {
            let count = 1;
            while (hash_set.has(num + count))
            {
                count++;
            }
            best = Math.max(count, best);
        }
    })
    return best;
};

console.log(longestConsecutive([100,4,200,1,3,2]))
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))