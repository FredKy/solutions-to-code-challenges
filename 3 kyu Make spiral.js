const n = 5;

/* let grid = Array(n)
  .fill()
  .map(() => Array(n).fill(0)); */
let grid = Array.from(Array(n), (_) => Array(n).fill(0));
console.log(grid);
grid[0][2] = 1;
grid[4][2] = 1;
console.log(grid);
function search(x, y, direction) {
  switch (direction) {
    case "right":
      for (let i = x; i < n; i++) {
        if (grid[y][i]) return i;
      }
      break;
    case "down":
      for (let j = y; j < n; j++) {
        if (grid[j][x]) return j;
      }
      break;
    case "left":
      for (let i = x; i >= 0; i--) {
        if (grid[y][i]) return i;
      }
      break;
    case "up":
      for (let j = y; j >= 0; j--) {
        if (grid[j][x]) return j;
      }
      break;
  }
  return null;
}

console.log(search(2, 2, "down"));
/* 
for (let i = x; i < n; i++) {
        grid[y][i] = 1;
      }
*/

console.log(grid);
