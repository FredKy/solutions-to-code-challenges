//Unoptimized first draft

// Grid 2

/* var grid = [
  [2, ".", "X"],
  [".", ".", "H"],
  [".", "H", 1],
]; */

//Grid 3 before optimization mainProgram took 376.5021999999881 milliseconds.
//First optimization: mainProgram took 87.87479999661446 milliseconds.
/* var grid = [
  [4, ".", ".", "X", "X"],
  [".", "H", ".", "H", "."],
  [".", ".", ".", "H", "."],
  [".", 2, ".", ".", 2],
  [".", ".", ".", ".", "."],
];
 */

// Grid 4
// mainProgram took 24178.071400001645 milliseconds.
/* var grid = ["3..H.2", ".2..H.", "..H..H", ".X.2.X", "......", "3..H.."];
grid = grid.map((row) =>
  row.split("").map((a) => (/\d/.test(a) ? parseInt(a) : a))
); */

console.log(grid);

// prettier-ignore
const forbidden = new Set([0,1,2,3,4,5,6,7,8,9,"H","<","v",">","^"])

const playable = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const arrows = new Set([">", "<", "^", "v"]);
const allowedLandingSpot = new Set(["H", "."]);

const H = grid.length;
const W = grid[0].length;

var initialShots = 0;
for (let row of grid) {
  for (let e of row) {
    if (playable.has(e)) initialShots += e;
  }
}
//console.log(initialShots);

function printGrid(grid) {
  console.log("-----");
  for (let row of grid) {
    console.log(row.join``);
  }
}

function hitBall(i, j, dir, count, grid) {
  let localGrid = JSON.parse(JSON.stringify(grid));

  function decrementShot(x, y) {
    //If ball lands in hole, set remaining shots to zero, otherwise decrement 1
    localGrid[x][y] = localGrid[x][y] == "H" ? 0 : grid[i][j] - 1;
  }
  switch (dir) {
    case ">":
      for (let k = 0; k < count; k++) {
        localGrid[i][j + k] = ">";
      }
      decrementShot(i, j + count);
      break;
    case "<":
      for (let k = 0; k < count; k++) {
        localGrid[i][j - k] = "<";
      }
      decrementShot(i, j - count);
      break;
    case "^":
      for (let k = 0; k < count; k++) {
        localGrid[i - k][j] = "^";
      }
      decrementShot(i - count, j);
      break;
    case "v":
      for (let k = 0; k < count; k++) {
        localGrid[i + k][j] = "v";
      }
      decrementShot(i + count, j);
      break;
  }
  return localGrid;
}

function feasibleDirections(i, j, count) {
  let res = [];
  //console.error("Run");
  //Check if direction to the right is feasible:
  if (j + count < W && allowedLandingSpot.has(grid[i][j + count])) {
    let push = true;
    for (let k = 1; k < count; k++) {
      if (forbidden.has(grid[i][j + k])) {
        push = false;
        break;
      }
    }
    if (push) res.push(">");
  }
  //Left
  if (j - count >= 0 && allowedLandingSpot.has(grid[i][j - count])) {
    let push = true;
    for (let k = 1; k < count; k++) {
      if (forbidden.has(grid[i][j - k])) {
        push = false;
        break;
      }
    }
    if (push) res.push("<");
  }
  //Up
  if (i - count >= 0 && allowedLandingSpot.has(grid[i - count][j])) {
    let push = true;
    for (let k = 1; k < count; k++) {
      if (forbidden.has(grid[i - k][j])) {
        push = false;
        break;
      }
    }
    if (push) res.push("^");
  }
  //Down
  if (i + count < H && allowedLandingSpot.has(grid[i + count][j])) {
    let push = true;
    for (let k = 1; k < count; k++) {
      if (forbidden.has(grid[i + k][j])) {
        push = false;
        break;
      }
    }
    if (push) res.push("v");
  }
  //Finally return array of feasible directions
  return res;
}

printGrid(grid);

//Helper functions
function solved(grid) {
  for (let row of grid) {
    if (row.includes("H")) return false;
  }
  return true;
}

function mainProgram(grid) {
  let solution = [];
  function dfs(grid, shotsLeft) {
    if (solved(grid)) {
      solution = grid;
      return;
    }
    if (shotsLeft == 0) {
      return;
    }

    //Search grid for playable balls
    let balls = {};
    let holesLeft = 0;
    for (let i = 0; i < H; i++) {
      for (let j = 0; j < W; j++) {
        if (playable.has(grid[i][j])) balls[[i, j]] = grid[i][j];
        else if (grid[i][j] == "H") holesLeft += 1;
      }
    }
    let numberOfBalls = Object.keys(balls).length;
    if (holesLeft > numberOfBalls) return;

    //console.error(balls);
    //For every ball, shoot ball in feasible directions
    for (let key in balls) {
      let i = parseInt(key[0]);
      let j = parseInt(key[2]);
      let shots = balls[key];
      let directions = feasibleDirections(i, j, shots);
      for (let direction of directions) {
        let oldGrid = JSON.parse(JSON.stringify(grid));
        let newGrid = hitBall(i, j, direction, shots, grid);
        //printGrid(newGrid);
        dfs(newGrid, shotsLeft - 1);
        grid = oldGrid;
      }
    }
  }
  dfs(grid, initialShots);
  console.log("-----");
  //console.log(solution);
  for (let row of solution) {
    console.log(row.join``);
  }
  console.log("-----");
  for (let row of solution) {
    for (let i = 0; i < W; i++) {
      if (!arrows.has(row[i])) row[i] = ".";
    }
    console.log(row.join``);
  }
  //console.log(solution);
}
const t0 = performance.now();
mainProgram(grid);
const t1 = performance.now();
console.log(`mainProgram took ${t1 - t0} milliseconds.`);
