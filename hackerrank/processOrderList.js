function processOrderList(orderList, orderId, state) {
  let copy = [...orderList];
  for (var i = 0; i < copy.length; i++) {
    if (copy[i].id === orderId) {
      if (state === "Processing") {
        copy[i].state = "Processing";
      } else if (state === "Delivered") {
        copy.splice(i, 1);
      }
    }
  }
  return copy;
}

console.log(
  processOrderList(
    [
      { id: 1, state: "Recieved" },
      { id: 2, state: "Recieved" },
      { id: 3, state: "Recieved" },
    ],
    2,
    "Processing"
  )
);

console.log(
  processOrderList(
    [
      { id: 1, state: "Recieved" },
      { id: 2, state: "Recieved" },
      { id: 3, state: "Recieved" },
    ],
    3,
    "Delivered"
  )
);
