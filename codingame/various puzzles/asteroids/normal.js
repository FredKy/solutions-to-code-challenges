var inputs = readline().split(" ");
const W = parseInt(inputs[0]);
const H = parseInt(inputs[1]);
const T1 = parseInt(inputs[2]);
const T2 = parseInt(inputs[3]);
const T3 = parseInt(inputs[4]);
console.error(T1, T2, T3);
var firstPicture = [];
var secondPicture = [];
var asteroids = "";
for (let i = 0; i < H; i++) {
  var inputs = readline().split(" ");
  const firstPictureRow = inputs[0];
  const secondPictureRow = inputs[1];
  firstPicture.push(firstPictureRow.split(""));
  secondPicture.push(secondPictureRow.split(""));
  let filtered = firstPictureRow.replace(/\./g, "");
  asteroids += filtered;
}
asteroids = asteroids.split("");
//console.error(asteroids)

function printPicture(pic) {
  for (row of pic) {
    console.error(row.join(""));
  }
  console.error("");
}

printPicture(firstPicture);
printPicture(secondPicture);

var t1Coords = {};
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    let char = firstPicture[y][x];
    if (char != ".") {
      t1Coords[char] = [x, y];
    }
  }
}
//console.error(t1Coords);
var t2Coords = {};
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    let char = secondPicture[y][x];
    if (char != ".") {
      t2Coords[char] = [x, y];
    }
  }
}
//console.error(t2Coords)
var newCoords = {};
for (let asteroid of asteroids) {
  let deltaX = t2Coords[asteroid][0] - t1Coords[asteroid][0];
  let deltaY = t2Coords[asteroid][1] - t1Coords[asteroid][1];
  //console.error(`${asteroid}: [ ${deltaX}, ${deltaY} ]`)
  newCoords[asteroid] = [
    Math.floor(t2Coords[asteroid][0] + (deltaX * (T3 - T2)) / (T2 - T1)),
    Math.floor(t2Coords[asteroid][1] + (deltaY * (T3 - T2)) / (T2 - T1)),
  ];
}
//console.error(newCoords)
var thirdPicture = Array(H);
for (let h = 0; h < H; h++) {
  let arr = Array(W).fill(".");
  thirdPicture[h] = arr;
}
//console.error(thirdPicture);
for (const [key, value] of Object.entries(newCoords)) {
  //console.error(key, value);
  if (value[0] >= W || value[1] >= H || value[0] < 0 || value[1] < 0) continue;
  if (thirdPicture[value[1]][value[0]] == ".") {
    thirdPicture[value[1]][value[0]] = key;
  } else {
    if (key < thirdPicture[value[1]][value[0]]) {
      thirdPicture[value[1]][value[0]] = key;
    }
  }
}

printPicture(thirdPicture);

for (row of thirdPicture) {
  console.log(row.join(""));
}
