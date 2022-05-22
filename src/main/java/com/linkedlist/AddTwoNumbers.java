package com.linkedlist;

public class AddTwoNumbers {

  public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    int total = 0;
    ListNode result = new ListNode(0);
    ListNode ptr = result, q = l1, r = l2;
    while (r != null || q != null) {
      if (r != null) {
        total += r.val;
        r = r.next;
      }
      if (q != null) {
        total += q.val;
        q = q.next;
      }
      ptr.next = new ListNode(total % 10);
      total /= 10;
      ptr = ptr.next;
    }
    if (total != 0) ptr.next = new ListNode(1);
    return result.next;
  }
}
