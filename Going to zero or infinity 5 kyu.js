function going(n) {
  var mRes = 1;
  var sum = 0;
  for (let i = n; i > 1; i--) {
    mRes *= i;
    console.log(mRes);
    sum += 1 / mRes;
  }
  sum += 1;
  sum = Math.trunc(sum * Math.pow(10, 6)) / Math.pow(10, 6);
  console.log(sum);
  return sum;
}

going(7);
