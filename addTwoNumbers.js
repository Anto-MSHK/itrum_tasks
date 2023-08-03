/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let nodes = new ListNode();
  let cur = nodes;
  let check = 0;
  while (l1 || l2 || check) {
    let sum = check;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    cur.next = new ListNode(sum % 10);
    cur = cur.next;
    check = Math.floor(sum / 10);
  }
  return nodes.next;
};
