var productExceptSelf = function (nums) {
  let res = [];
  let prod = nums.reduce((a, c) => a * c, 1);
  for (let i = 0; i < nums.length; i++) {
    res.push(prod / nums[i]);
  }
  return res;
};

console.log(productExceptSelf([1, 2, 3, 4]));
