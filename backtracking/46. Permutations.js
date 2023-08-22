var permute = function (nums) {
  let res = [];
  let subArr = [];
  function dfs(options) {
    if (subArr.length === nums.length) {
      res.push([...subArr]);
      return;
    }
    for (let i = 0; i < options.length; i++) {
      let copy = options.slice();
      subArr.push(copy.splice(i, 1).shift());
      dfs(copy);
      subArr.pop();
    }
  }

  dfs(nums);
  return res;
};

let arr = [1, 2, 3];
console.log(arr.splice(2, 1));

console.log(arr);

console.log(permute([1, 2, 3]));
