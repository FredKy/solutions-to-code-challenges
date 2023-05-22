function balancedParens(n) {
  var res = [];

  function helper(s, l, r) {
    if (s.length == 2 * n) {
      res.push(s);
    }
    if (l < n) {
      helper(s + "(", l + 1, r);
    }
    if (r < l) {
      helper(s + ")", l, r + 1);
    }
  }

  helper("", 0, 0);

  return res;
}

console.log(balancedParens(3));
