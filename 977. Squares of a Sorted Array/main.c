/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int	absOfNum(int n)
{
	return (n < 0 ? -n : n);
}
int* sortedSquares(int* nums, int numsSize, int* returnSize)
{
	int 	begin = 0;
	int 	end = numsSize - 1;
	*returnSize = numsSize;

	int*	array = (int*)malloc(numsSize * sizeof(int));
	if (!array)
		return (NULL);

	while (numsSize)
	{
		if (absOfNum(nums[begin]) >= absOfNum(nums[end]))
		{
			array[--numsSize] = nums[begin] * nums[begin];
			begin++;
		}
		else if (absOfNum(nums[end]) > absOfNum(nums[begin]))
		{
			array[--numsSize] = nums[end] * nums[end];
			end--;
		}
	}
	return (array);
}