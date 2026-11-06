


def longestConsecutive(nums: list[int]) -> int:
    if (not nums) :
        return 0
    nums = set(nums)
    max_long = 1
    
    for num in nums :
        if (num - 1 not in nums) :
            j = 1
            while num + j in nums :
                j += 1
            max_long = max(max_long, j)
    return max_long
    

print(longestConsecutive([]))
print(longestConsecutive([100,4,200,1,3,2]))
print(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
print(longestConsecutive([1,0,1,2]))
print(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
print(longestConsecutive([1,2,6,7,8]))