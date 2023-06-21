/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

// functions

function cycle(arr) {
  /*     let copy = [...arr]
        let tmp = copy.shift()
        copy.push(tmp)
        return copy; */
  let tmp = arr.shift();
  arr.push(tmp);
}

var inputs = readline().split(" ");
const L = parseInt(inputs[0]);
const C = parseInt(inputs[1]);
var area = [];
var inverted = false;
var priorities = ["SOUTH", "EAST", "NORTH", "WEST"];
var inverted_priorities = ["WEST", "NORTH", "EAST", "SOUTH"];
for (let i = 0; i < L; i++) {
  const row = readline();
  area.push(row);
}
console.error(area);

//locate starting pos:
var myPos;
//store end pos
var endPos;
//starting state
var move = "SOUTH";
for (let i = 0; i < C; i++) {
  for (let j = 0; j < L; j++) {
    if (area[j][i] === "@") {
      myPos = [i, j];
    }
    if (area[j][i] === "$") {
      endPos = [i, j];
    }
  }
}
console.error("myPos: " + myPos);
/* myPos = [myPos[0], myPos[1]+1]
    console.error("moved south: " + myPos) */

console.error("endPos: " + endPos);

var listOfMoves = [];

while (myPos != endPos) {
  let hasMoved = false;
  let prior = inverted ? inverted_priorities : priorities;
  console.error(prior);
  cycle(prior);
  console.error(prior);
  while (!hasMoved) {
    switch (move) {
      case "SOUTH":
        let newY = myPos[1] + 1;
        if ("#X".includes(area[newY][myPos[0]])) {
          //console.error(prior)
          console.error(move);
          if (prior[0] != move) {
            move = prior[0];
          } else {
            move = prior[1];
          }
        } else {
          myPos = [myPos[0], myPos[1] + 1];
          console.error(
            "Tile: '" + area[myPos[1]][myPos[0]] + "' Pos: " + myPos
          );
          hasMoved = true;
        }
        break;
      case "EAST":
        break;
      case "NORTH":
        break;
      case "WEST":
        break;
    }
  }
  // has now moved, check what tile we landed on and apply effect
  let typeOfTile = area[myPos[0]][myPos[1]];
}

console.log("answer");
