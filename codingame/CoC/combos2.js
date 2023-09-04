//Combinations of length n, of digits in strictly increasing order

function combinations(n) {
  let res = [];

  function helper(combo) {
    if (combo.length == n) {
      res.push(combo);
      return;
    }
    for (let i = 0; i < 10; i++) {
      if ((+combo[combo.length - 1] || -1) < i) {
        helper(combo + i.toString());
      }
    }
  }
  helper("");
  if (res[0] != "0") res.shift();
  return res;
}

console.log(combinations(2).join`, `);
