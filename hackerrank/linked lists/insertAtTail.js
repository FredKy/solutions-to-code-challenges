function insertNodeAtTail(head, data) {
  if (head == null) {
    return new SinglyLinkedListNode(data, null);
  }
  let currNode = head;
  while (currNode != null) {
    let next = currNode.next;
    if (next == null) {
      currNode.next = new SinglyLinkedListNode(data, null);
      break;
    }
    currNode = currNode.next;
  }
  return head;
}
