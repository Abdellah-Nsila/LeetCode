char* addBinary(char* a, char* b)
{
	char	*result;
	int		l1 = a ? strlen(a) : 0;
	int		l2 = b ? strlen(b) : 0;
	int		len = (l1 > l2 ? l1 : l2) + 2;
    int		tmpLen = len;
	int		carry = 0;

	result = (char*)malloc(len * sizeof(char));
	if (!result)
		return (NULL);
	result[--len] = '\0';

	while (l1 || l2)
	{
		int	bit1;
		int	bit2;

		bit1 = l1 ? a[--l1] - '0' : 0;
		bit2 = l2 ? b[--l2] - '0' : 0;

        // 0 + 0
        if (!(bit1 || bit2))
        {
            result[--len] = carry + '0';
            carry = 0;
        }
        
        // 1 + 0
        else if (bit1 != bit2)
        {
            result[--len] = !carry + '0';
            carry = carry;
        }

        // 1 + 1
        else if (bit1 && bit2)
        {
            result[--len] = carry + '0';
            carry = 1;
        }

	}
	// Add carry to index 0
	if (carry)
	{
		result[--len] = '1';
	}
	// Shift all bits to the left if no carry remaing
	else
	{
		while (len < tmpLen)
		{
			result[len-1] = result[len];
			len++;
		}
	}
	return (result);
}