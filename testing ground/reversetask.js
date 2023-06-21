const n = 5;

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

var start = "#" + " ".repeat(n);
console.log("#".repeat(2 * n + 3));
function createInner() {}
var res = [];
for (let i = 0; i < n * 2 + 1; i++) {
  //let inner = " ".repeat(2*n+1)
  let inner = Array(n * 2 + 1).fill(" ");

  for (let j = 0; j < n * 2 + 1; j++) {
    if (j == i) {
      inner[j] = "X";
      inner[n * 2 - j] = "X";
    }
  }
  res.push(inner);
  console.log("#" + inner.join("") + "#");
}
console.log("#".repeat(2 * n + 3));
