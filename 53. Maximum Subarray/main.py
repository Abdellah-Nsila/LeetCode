
def maxSubArray(nums: list[int]) -> int:
    nums_len = len(nums)
    max_sum = nums[0]

    current_sum = 0
    for i in range(nums_len) :
        current_sum = max(nums[i] + current_sum, nums[i])
        max_sum = max(max_sum, current_sum)
    return (max_sum)

print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
print(maxSubArray([1]))
print(maxSubArray([-1]))
print(maxSubArray([5,4,-1,7,8]))
print(maxSubArray([-2,-1]))
print(maxSubArray([1, 2]))
