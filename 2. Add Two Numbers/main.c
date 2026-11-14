/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

struct ListNode *new_node(int val)
{
    struct ListNode *node = malloc(sizeof(struct ListNode));
    if (!node)
		return (NULL);

    node->val = val;
    node->next = NULL;
    return node;
}

struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2)
{
	int	sum = 0;
	int	carry = 0;
	struct ListNode*	t1 = l1;
	struct ListNode*	t2 = l2;
	struct ListNode*	head = NULL;
	struct ListNode*	last = NULL;

	while (t1 || t2 || carry)
	{
		sum = (t1 ? t1->val : 0) + (t2 ? t2->val : 0) + carry;
		carry = sum / 10;

		if (head)
		{
			last->next = new_node(sum % 10);
			last = last->next;
			
		}
		else
		{
			head = new_node(sum % 10);
			last = head;
		}
		t1 ? t1 = t1->next : 0;
		t2 ? t2 = t2->next : 0;
	}
	return (head);
}