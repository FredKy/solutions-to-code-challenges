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

const firstPositions = new Map();
const secondPositions = new Map();
for (let y = 0; y < H; y++) {
  var inputs = readline().split(" ");

  const firstPictureRow = inputs[0].split("");
  firstPictureRow.forEach((space, x) => {
    if (space !== ".") {
      firstPositions.set(space, [x, y]);
    }
  });

  const secondPictureRow = inputs[1].split("");
  secondPictureRow.forEach((space, x) => {
    if (space !== ".") {
      secondPositions.set(space, [x, y]);
    }
  });
}

const asteroids = Array.from(firstPositions.keys()).sort().reverse();

const thirdPicture = Array.from(Array(H), () => Array(W).fill("."));
asteroids.forEach((asteroid) => {
  const [x1, y1] = firstPositions.get(asteroid);
  const [x2, y2] = secondPositions.get(asteroid);

  const xSpeed = (x2 - x1) / (T2 - T1);
  const ySpeed = (y2 - y1) / (T2 - T1);

  const x3 = Math.floor(xSpeed * (T3 - T2) + x2);
  const y3 = Math.floor(ySpeed * (T3 - T2) + y2);

  if (thirdPicture[y3] && thirdPicture[y3][x3]) {
    thirdPicture[y3][x3] = asteroid;
  }
});

thirdPicture.forEach((thirdPictureRow) => {
  console.log(thirdPictureRow.join(""));
});
