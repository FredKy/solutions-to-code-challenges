function CompareLists(llist1, llist2) {
  let curr1 = llist1;
  let curr2 = llist2;
  while (curr1 != null) {
    if (curr2 == null) return 0;
    if (curr1.data != curr2.data) return 0;
    curr1 = curr1.next;
    curr2 = curr2.next;
  }
  if (curr2 != null) return 0;
  return 1;
}
