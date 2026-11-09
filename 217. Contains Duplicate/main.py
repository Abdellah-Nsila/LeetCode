

def containsDuplicate(nums: list[int]) -> bool:
    
    count_dic = {}

    for num in nums :
        if (num in count_dic) :
            count_dic[num] += 1
        else :
            count_dic[num] = 1

    for values in count_dic.values() :
        if (values > 1) :
            return True
    return False

print(containsDuplicate([1,2,3,1]))
print(containsDuplicate([1,2,3,4]))
print(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))