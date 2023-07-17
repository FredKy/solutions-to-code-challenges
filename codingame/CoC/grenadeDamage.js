/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline());
var grid = [];
for (let i = 0; i < n; i++) {
  const p = readline().split("");
  grid.push(p);
}
console.error(grid);
var g = [];
var e = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (grid[i][j] == "G") {
      g.push([i, j]);
    }
    if (grid[i][j] == "E") {
      e.push([i, j]);
    }
  }
}
var dead = 0;
console.error(g);
console.error(e);
for (let grenade of g) {
  for (let i = 0; i < e.length; i++) {
    let enemy = e[i];
    if (enemy != "") {
      if (
        Math.abs(grenade[0] - enemy[0]) <= 2 &&
        Math.abs(grenade[1] - enemy[1]) <= 2
      ) {
        dead += 1;
        e[i] = "";
      }
    }
  }
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(dead);
