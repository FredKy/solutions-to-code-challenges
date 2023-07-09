function deleteNode(llist, position) {
  // Write your code here
  if (position == 0) {
    return llist.next;
  }
  let current = llist;
  let count = 0;
  while (current != null) {
    if (count == position - 1) {
      current.next = current.next.next;
      break;
    }
    current = current.next;
    count++;
  }
  return llist;
}
