const characterSet = "ABCD";
console.error(characterSet);
// 0 < N <= characterSet.length
const N = 4;
var lst = characterSet.split("");

var curr = lst[0];
var res = "";
for (let i = 0; i < N - 1; i++) {
  curr = curr + lst[i + 1] + curr;
}
console.log(curr);
