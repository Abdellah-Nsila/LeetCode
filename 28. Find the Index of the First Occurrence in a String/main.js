/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let i = 0;
    let j = 0;
    let l1 = haystack.length;
    let l2 = needle.length;

    if (l2 == 0)
        return (0);
    for (i = 0; i < l1; i++)
    {
        if (l1 - i < l2)
            return -1
        for (j = 0; j < l2; j++)
        {
            if (haystack[i + j] != needle[j])
                break;
        }
        if (j == l2)
            return i;
    }
    return -1;
};

console.log(strStr("Hello", "llo"))