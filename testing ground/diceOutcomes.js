function diceOutcomes(n) {
  let res = [];
  function helper(arr) {
    if (arr.length == n) {
      res.push(arr);
      return;
    }
    for (let i = 1; i <= 6; i++) {
      let tmp = JSON.parse(JSON.stringify(arr));
      tmp.push(i);
      helper(tmp);
    }
  }
  helper([]);
  return res;
}

console.log(diceOutcomes(3));
