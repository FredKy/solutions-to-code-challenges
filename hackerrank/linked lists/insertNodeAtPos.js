function insertNodeAtPosition(llist, data, position) {
  // Write your code here
  let count = 0;
  let currNode = llist;
  while (count < position - 1) {
    currNode = currNode.next;
    count++;
  }
  let tmp = currNode.next;
  currNode.next = new SinglyLinkedListNode(data);
  currNode.next.next = tmp;
  return llist;
}
