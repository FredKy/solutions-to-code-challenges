const al = "abcdefghijklmnopqrstuvwxyz";
var starts = [];
var alphabet = [];
var grid = [];
const n = parseInt(readline());
for (let i = 0; i < n; i++) {
  let row = readline().split("");
  for (let j = 0; j < n; j++) {
    if (row[j] == "a") {
      starts.push([j, i]);
    }
  }
  grid.push(row);
}
for (let start of starts) {
  alphabet = [start];
  let [i, j] = start;
  let inc = 1;
  let flag = true;
  while (flag) {
    flag = false;
    let lst = [
      [i + 1, j],
      [i - 1, j],
      [i, j + 1],
      [i, j - 1],
    ];
    let l = [];
    for (let [a, b] of lst) {
      if (a < n && b < n && a >= 0 && b >= 0) {
        l.push([a, b]);
      }
    }
    for (let [a, b] of l) {
      if (grid[b][a] == al[inc]) {
        if (inc < 25) {
          flag = true;
        }
        alphabet.push([a, b]);
        i = a;
        j = b;
      }
    }
    inc += 1;
  }
  if (alphabet.length == 26) {
    break;
  }
}
var grid2 = [];
for (let i = 0; i < n; i++) {
  grid2.push(Array(n).fill("-"));
}
for (let [i, j] of alphabet) {
  grid2[j][i] = grid[j][i];
}
for (let row of grid2) {
  console.log(row.join(""));
}
