var inputs = readline().split(" ");
const x = parseInt(inputs[0]);
const y = parseInt(inputs[1]);
const N = parseInt(readline());

function calcArea(x1, y1, x2, y2, x3, y3) {
  var area = 0.5 * Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
  return area;
}

for (let i = 0; i < N; i++) {
  var inputs = readline().split(" ");
  var arr = [];
  const x1 = parseInt(inputs[0]);
  const y1 = parseInt(inputs[1]);
  const x2 = parseInt(inputs[2]);
  const y2 = parseInt(inputs[3]);
  const x3 = parseInt(inputs[4]);
  const y3 = parseInt(inputs[5]);

  var area = calcArea(x1, y1, x2, y2, x3, y3);
  var sum_of_areas =
    calcArea(x, y, x2, y2, x3, y3) +
    calcArea(x1, y1, x, y, x3, y3) +
    calcArea(x1, y1, x2, y2, x, y);
  if (area != sum_of_areas) {
    console.log("outside");
  } else {
    console.log("inside");
  }
}
