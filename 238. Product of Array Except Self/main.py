

def productExceptSelf(nums: list[int]) -> list[int]:
    n = len(nums)
    mul =  1
    
    for num in nums :
        mul *= num
    print(mul)
    answer = [int(mul >> num - 1) for num in nums]
    return answer


print(productExceptSelf([1,2,3,4]));
