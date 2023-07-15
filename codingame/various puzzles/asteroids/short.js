/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(" ");
const W = parseInt(inputs[0]);
const H = parseInt(inputs[1]);
const T1 = parseInt(inputs[2]);
const T2 = parseInt(inputs[3]);
const T3 = parseInt(inputs[4]);
let asteroid = {};
let image3 = [];

for (let i = 0; i < H; i++) {
  var inputs = readline().split(" ");
  const firstPictureRow = inputs[0];
  image3[i] = [];
  for (let j = 0; j < firstPictureRow.length; j++) {
    image3[i][j] = ".";
    if (firstPictureRow[j] != ".") {
      if (!asteroid[firstPictureRow[j]]) asteroid[firstPictureRow[j]] = {};
      asteroid[firstPictureRow[j]].x1 = j;
      asteroid[firstPictureRow[j]].y1 = i;
    }
  }

  const secondPictureRow = inputs[1];
  for (let j = 0; j < secondPictureRow.length; j++) {
    if (secondPictureRow[j] != ".") {
      if (!asteroid[secondPictureRow[j]]) asteroid[secondPictureRow[j]] = {};
      asteroid[secondPictureRow[j]].x2 = j;
      asteroid[secondPictureRow[j]].y2 = i;
    }
  }
}

for (const [key, obj] of Object.entries(asteroid)) {
  let vx = (obj.x2 - obj.x1) / (T2 - T1);
  let vy = (obj.y2 - obj.y1) / (T2 - T1);
  let x3 = Math.floor(obj.x2 + vx * (T3 - T2));
  let y3 = Math.floor(obj.y2 + vy * (T3 - T2));

  if (image3[y3] && image3[y3][x3]) {
    if (image3[y3][x3] == ".") image3[y3][x3] = key;
    else if (key < image3[y3][x3]) image3[y3][x3] = key;
  }
}

for (let i = 0; i < image3.length; i++) console.log(image3[i].join(""));
