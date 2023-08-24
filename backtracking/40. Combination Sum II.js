var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  var res = [];
  var combo = [];
  function dfs(i, sum) {
    if (sum === target) {
      res.push([...combo]);
      return;
    }
    if (sum > target || i >= candidates.length) {
      return;
    }

    combo.push(candidates[i]);
    dfs(i + 1, sum + candidates[i]);
    combo.pop();

    let k = 0;
    for (let j = i + 1; j < candidates.length; j++) {
      if (candidates[i] === candidates[j]) k++;
      else break;
    }

    dfs(i + 1 + k, sum);
  }
  dfs(0, 0);
  return res;
};
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
/* console.log(
  combinationSum2(
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ],
    30
  )
); */

/* 
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
target =
30
*/
