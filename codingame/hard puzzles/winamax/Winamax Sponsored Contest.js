//Unoptimized first draft

var grid = [
  [2, ".", "X"],
  [".", ".", "H"],
  [".", "H", 1],
];

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

const printGrid = () => {
  console.log("-----");
  for (let row of grid) {
    console.log(row.join``);
  }
};

function hitBall(i, j, dir, count, grid) {
  let localGrid = JSON.parse(JSON.stringify(grid));

  function decrementShot(x, y) {
    localGrid[x][y] = grid[i][j] - 1;
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

//console.log("0".includes(0));
//console.log(feasibleDirections(2, 2, 1));

/* printGrid();
mainProgram(grid);
grid = hitBall(2, 2, "^", 1, grid);

printGrid();
grid = hitBall(0, 0, "v", 2, grid);

printGrid();
console.log(solved(grid));
grid = hitBall(2, 0, ">", 1, grid);
printGrid();
console.log(solved(grid)); */

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
    for (let i = 0; i < H; i++) {
      for (let j = 0; j < W; j++) {
        if (playable.has(grid[i][j])) balls[[i, j]] = grid[i][j];
      }
    }
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
        dfs(newGrid, shotsLeft - 1);
        grid = oldGrid;
      }
    }
  }
  dfs(grid, initialShots);
  //console.log(solution);

  for (let row of solution) {
    for (let i = 0; i < W; i++) {
      if (!arrows.has(row[i])) row[i] = ".";
    }
    console.log(row.join``);
  }
  //console.log(solution);
}
mainProgram(grid);
