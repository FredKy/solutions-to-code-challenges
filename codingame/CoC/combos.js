var alphabet = "ab";

function combinations(alphabet, n) {
  let res = [];

  function helper(combo) {
    if (combo.length == n) {
      res.push(combo);
      return;
    }
    for (let i = 0; i < alphabet.length; i++) {
      helper(combo + alphabet[i]);
    }
  }

  helper("");
  return res;
}

console.log(combinations(alphabet, 2));
