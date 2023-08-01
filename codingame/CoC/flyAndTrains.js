/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(" ");
const v1 = parseInt(inputs[0]);
const v2 = parseInt(inputs[1]);
const vf = parseInt(inputs[2]);
const d = parseInt(inputs[3]);
console.error(v1, v2, vf, d);
if (vf < v1 || vf < v2) {
  console.log("TOO SLOW");
} else {
  console.log(Math.floor((vf / (v1 + v2)) * d));
}
