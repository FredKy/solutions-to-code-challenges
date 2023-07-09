function reverse(llist) {
  // Write your code here
  let currNode = llist;
  let prevNode = null;
  let nextNode = null;
  console.error(currNode);
  while (currNode != null) {
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  return prevNode;
}
