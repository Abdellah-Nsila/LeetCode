void merge(int* nums1, int nums1Size, int m, int* nums2, int nums2Size, int n)
{
	int	tmp[m == 0 ? 1 : m];

	for (int i = 0; i < m; i++)
	{
		tmp[i] = nums1[i];
	}

	int i = 0;
	int j = 0;

	while (i + j < nums1Size)
	{
		if ((i >= m) || (j >= n))
		{
			if (i < m)
			{
				nums1[i + j] = tmp[i];
				i++;
			}
			else if (j < n)
			{
				nums1[i + j] = nums2[j];
				j++;
			}
		}
		else if (tmp[i] <= nums2[j])
		{
			nums1[i + j] = tmp[i];
			i++;
		}
		else if (nums2[j] < tmp[i])
		{
			nums1[i + j] = nums2[j];
			j++;
		}
		
	}
}