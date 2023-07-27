/* r = readline;
n = +r();
while (n--) {
  h = +r();
  d = h;
  while (h > 0.1) {
    h *= 0.8;
    d += 2 * h;
  }
  print(d % 1 ? -~d : d);
} */

var h = 137;
var d = h;

while (h > 0.01) {
  h *= 0.8;
  d += 2 * h;
}

console.log(d);

//Geometrisk serie A/(1-r) där |r| < 1, med A = h, 1-r = 1-0.8 = 0.2
console.log(137 / 0.2 + (0.8 * 137) / 0.2);
console.log(1.8 / 0.2);
console.log(9 * 137);
