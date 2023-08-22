var combinationSum = function (candidates, target) {
  var res = [];
  var combo = [];
  function dfs(i, sum) {
    if (sum > target || i >= candidates.length) {
      return;
    }
    if (sum === target) {
      res.push(JSON.parse(JSON.stringify(combo)));
      return;
    }

    combo.push(candidates[i]);
    dfs(i, sum + candidates[i]);
    combo.pop();
    dfs(i + 1, sum);
  }
  dfs(0, 0);
  return res;
};

console.log(combinationSum([2, 3, 6, 7], 8));
