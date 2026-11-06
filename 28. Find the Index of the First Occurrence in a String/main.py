

def find(haystack, needle) :
    # Use n,m = 
    # Use [n:m]
    for i in range(len(haystack)) :
        j = 0
        for j in range(len(needle)) :
            print(f"i: {i}  j: {j}")
            if ((i + j) >= len(haystack)) :
                return (-1)
            if (haystack[i + j] != needle[j]) :
                break
        if (j == len(needle) - 1 and haystack[i + j] == needle[j]) :
            return (i)
    return (-1)
                

print(find("hello", "l"))