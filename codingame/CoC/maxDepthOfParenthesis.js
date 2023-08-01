/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline());
const sequence = readline();

stack = [];

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
var maxDepth = 0;
var left = 0;
for (let p of sequence) {
  if (p == "(") {
    stack.push("(");
    left += 1;
  } else {
    if (stack[stack.length - 1] == "(") {
      stack.pop();
      left -= 1;
    } else {
      stack.push(")");
    }
  }
  maxDepth = Math.max(maxDepth, left);
}

console.log(maxDepth);
