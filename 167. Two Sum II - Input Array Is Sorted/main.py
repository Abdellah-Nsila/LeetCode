

def twoSum(numbers: list[int], target: int) -> list[int]:
    
    left = 0
    rigth = len(numbers) - 1
    while left < rigth :
        if (numbers[left] + numbers[rigth] > target) :
            rigth -= 1
        elif (numbers[left] + numbers[rigth] < target) :
            left += 1
        else:
            return ([left + 1, rigth + 1])

    return [0, 0]

print(twoSum([2,3,5,7,11,15], 10))
print(twoSum([3,24,50,79,88,150,345], 200))
print(twoSum([2,3,4], 6))
print(twoSum([-1,0], -1))
