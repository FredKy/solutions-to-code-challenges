function binarySearch(nums, target) {
  let s = 0;
  let e = nums.length - 1;

  while (s <= e) {
    let i = Math.floor((s + e) / 2);
    if (nums[i] === target) {
      return i;
    } else {
      if (nums[i] < target) {
        s = i + 1;
      } else {
        e = i - 1;
      }
    }
  }

  return -1;
}

console.log(binarySearch([-1, 0, 5], -1));
