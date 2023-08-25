//Optimization

// Grid 2

/* var grid = [
  [2, ".", "X"],
  [".", ".", "H"],
  [".", "H", 1],
]; */

//Grid 3 before optimization mainProgram took 376.5021999999881 milliseconds.
//First optimization: mainProgram took 87.87479999661446 milliseconds.
//Second optimization: mainProgram took 56.678199999034405 milliseconds.
//Third optimization: mainProgram took 33.07479999959469 milliseconds.
var grid = [
  [4, ".", ".", "X", "X"],
  [".", "H", ".", "H", "."],
  [".", ".", ".", "H", "."],
  [".", 2, ".", ".", 2],
  [".", ".", ".", ".", "."],
];

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

//console.log(initialShots);

function printGrid(grid) {
  console.log("-----");
  for (let row of grid) {
    console.log(row.join``);
  }
}

function hitBall(i, j, dir, count, grid, balls, k) {
  let localGrid = JSON.parse(JSON.stringify(grid));
  let localBalls = JSON.parse(JSON.stringify(balls));
  let shift = 0;

  //console.error();

  function decrementShot(x, y) {
    //delete localBalls[[i, j]];
    //If ball lands in hole, set remaining shots to zero, otherwise decrement 1
    if (localGrid[x][y] == "H") {
      localGrid[x][y] = 0;
      localBalls.splice(k, 1);
      shift = 1;
      //localBalls[k] = [x, y, 0];
    } else {
      console.log(grid[i][j]);
      localGrid[x][y] = grid[i][j] - 1;
      //if (localGrid[x][y] > 0) localBalls[[x, y]] = localGrid[x][y];
      if (localGrid[x][y] > 0) localBalls[k] = [x, y, localGrid[x][y]];
      /* else {
        localBalls[k] = [x, y, grid[i][j]];
      } */
      //console.error(localBalls);
    }
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
  //console.error(localBalls);
  return [localGrid, localBalls, shift];
}

function feasibleDirections(i, j, count) {
  let res = [];
  //console.error("Run");
  //if (count == 0) return res;
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
  let balls = [];
  //Calculate positions and shots left for all balls on the inital grid and store in object.
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (playable.has(grid[i][j])) balls.push([i, j, grid[i][j]]);
    }
  }
  balls.sort((a, b) => a[2] - b[2]);
  //console.error(balls);
  //return;
  function dfs(grid, balls) {
    //Search grid for playable balls
    let holesLeft = 0;
    let ballsLeft = 0;
    for (let i = 0; i < H; i++) {
      for (let j = 0; j < W; j++) {
        if (grid[i][j] == "H") holesLeft += 1;
        else if (playable.has(grid[i][j])) ballsLeft += 1;
      }
    }
    if (holesLeft == 0) {
      solution = grid;
      return;
    }
    if (holesLeft > ballsLeft) return;

    //console.error(balls);
    //For every ball, shoot ball in feasible directions
    let M = balls.length;
    //let totalFeasibleDirections = 0;
    for (let k = 0; k < M; k++) {
      //console.log(balls[k]);
      let s = balls[k];
      let i = s[0];
      let j = s[1];
      let shots = s[2];
      //console.log(grid[i][j], shots);
      //console.error(typeof i, typeof j, typeof shots);
      let directions = playable.has(grid[i][j])
        ? feasibleDirections(i, j, shots)
        : [];
      console.log(balls, balls[k], directions);
      printGrid(grid);
      for (let direction of directions) {
        let [newGrid, newBalls, shift] = hitBall(
          i,
          j,
          direction,
          shots,
          grid,
          balls,
          k
        );
        k -= shift;
        M -= shift;
        //console.log(newBalls);
        //printGrid(newGrid);
        //return;
        dfs(newGrid, newBalls);
      }
    }
  }
  dfs(grid, balls);
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
