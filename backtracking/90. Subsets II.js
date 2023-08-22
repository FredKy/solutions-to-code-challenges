var subsets = function (nums) {
  nums.sort();
  var res = [];
  var subset = [];
  function dfs(i) {
    if (i > nums.length - 1) {
      res.push([...subset]);
      return;
    }
    //Include number in set
    subset.push(nums[i]);
    dfs(i + 1);

    //Don't include number in set
    subset.pop();
    //Skip all occurences of the number in the nums array
    let k = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === nums[i]) k++;
      else break;
    }
    dfs(i + 1 + k);
  }

  dfs(0);
  return res;
};

console.log(subsets([1, 2, 2]));
