/* var numbers = [...Array(11).keys()].slice(1);
numbers.sort((a, b) => {
  if (a % 2 == 0) {
    return b - a;
  } else {
    return a - b;
  }
});
 */

var excludedIndeces = [0, 2, 4, 6, 8];

var nums = [...Array(11).keys()].slice(1);
var nums = nums.reverse();
console.log(nums);

//Modified Bubblesort, note that index starts at j = i + 1 in the inner loop as opposed to j = 1 in a regular Bubblesort
for (var i = 0; i < nums.length; i++) {
  //Don't touch element if its index is in the list of excluded indices
  if (excludedIndeces.indexOf(i) != -1) continue;
  for (var j = i + 1; j < numbers.length; j++) {
    //Don't touch element if its index is in the list of excluded indices
    if (excludedIndeces.indexOf(j) != -1) continue;
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
}
console.log(nums);
