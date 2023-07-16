/* The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:
01 Test 1
Input
Expected output
2
1 1
4
02 Test 2
Input
Expected output
3
2 2 2
27
03 Test 3
Input
Expected output
3
2 1 1
12
04 Test 4
Input
Expected output
5
5 2 2 1 1
216
05 Test 5
Input
Expected output
3
5 4 3
120 */

var n = 3;
var l = n;
var inputs = "5 4 3".split(" ").map((a) => +a);
n = 0;
for (let i = 0; i < l; i++) {
  const x = parseInt(inputs[i]);
  console.error(x);

  n = n + l ** x;
}

console.log(inputs.reduce((a, c) => a + c, 0) * l * (l - 1));
