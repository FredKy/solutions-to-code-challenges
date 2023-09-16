let myPos = [16, 29];
let enemiesArr = [
  [37, 21],
  [37, 27],
];

function dist(p1, p2) {
  return Math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2);
}

function myDistToEnemies(myPos, enemiesArr) {
  return enemiesArr.reduce(
    (acc, curr) => Math.min(acc, dist(myPos, curr)),
    Infinity
  );
}

function myDistToEachEnemy(myPos, enemiesArr) {
  let res = [];
  for (let enemy of enemiesArr) {
    res.push([enemy, dist(myPos, enemy)]);
  }
  return res;
}
console.log(myDistToEachEnemy(myPos, enemiesArr));

function distBetweenTwoEnemiesClosestToMe(distancesArr) {
  let res = distancesArr;
  res.sort((a, b) => a[1] - b[1]);
  //TODO
}

//Moves each enemy one step towards me and return array.
function enemiesArrNextTurn(myPos, enemiesArr) {
  let l = enemiesArr.length;
  let nextTurnArray = [];
  for (let i = 0; i < l; i++) {
    let cur = enemiesArr[i];
    let x_diff = myPos[0] - cur[0];
    let y_diff = myPos[1] - cur[1];
    if (x_diff < 0) {
      cur[0] = cur[0] - 1;
    } else if (x_diff > 0) {
      cur[0] = cur[0] + 1;
    }
    if (y_diff < 0) {
      cur[1] = cur[1] - 1;
    } else if (y_diff > 0) {
      cur[1] = cur[1] + 1;
    }
    nextTurnArray.push(cur);
  }
  return nextTurnArray;
}

console.log(enemiesArrNextTurn(myPos, enemiesArrNextTurn(myPos, enemiesArr)));

function bestDirection(myPos, enemiesArr) {
  let directions = [];
  let up = [myPos[0], myPos[1] + 1];
  let down = [myPos[0], myPos[1] - 1];
  let left = [myPos[0] - 1, myPos[1]];
  let right = [myPos[0] + 1, myPos[1]];
  directions.push(["U", myDistToEnemies(up, enemiesArr)]);
  directions.push(["D", myDistToEnemies(down, enemiesArr)]);
  directions.push(["L", myDistToEnemies(left, enemiesArr)]);
  directions.push(["R", myDistToEnemies(right, enemiesArr)]);
  directions.sort((a, b) => a[1] - b[1]);
  return directions[0][0];
}

/* console.log(
  myDistToEnemies(
    [16, 29],
    [
      [37, 21],
      [37, 27],
    ]
  )
);

console.log(
  bestDirection(
    [16, 29],
    [
      [37, 21],
      [37, 27],
    ]
  )
); */
