var maxSequence = function (arr) {
  if (arr.length == 0) {
    return 0;
  }
  let neg = 0;
  arr.forEach((element) => {
    if (element < 0) {
      neg += 1;
    }
  });
  if (neg == arr.length) {
    return 0;
  }
  var maxSum = 0;
  //var maxSumList = [];
  for (let i = 0; i < arr.length; i++) {
    let runningTotal = 0;
    for (let j = i; j < arr.length; j++) {
      runningTotal += arr[j];
      if (runningTotal > maxSum) {
        maxSum = runningTotal;
        //maxSumList = arr.slice(i, j);
      }
    }
  }
  return maxSum;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
