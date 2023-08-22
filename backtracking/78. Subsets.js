var subsets = function (nums) {
  var res = [];

  var subset = [];
  function depthFirstSearch(i) {
    if (i > nums.length - 1) {
      res.push([...subset]);
      return;
    }
    // Decision to include element in subset
    subset.push(nums[i]);
    depthFirstSearch(i + 1);

    // Decision to NOT include element
    subset.pop();
    depthFirstSearch(i + 1);
  }

  depthFirstSearch(0);
  return res;
};

console.log(subsets([1, 2, 3]));
