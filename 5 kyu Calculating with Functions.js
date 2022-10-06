function zero(x = 0) {
  return x instanceof Function ? x(0) : x;
}
function one(x = 1) {
  return x instanceof Function ? x(1) : x;
}
function two(x = 2) {
  return x instanceof Function ? x(2) : x;
}
function three(x = 3) {
  return x instanceof Function ? x(3) : x;
}
function four(x = 4) {
  return x instanceof Function ? x(4) : x;
}
function five(x = 5) {
  return x instanceof Function ? x(5) : x;
}
function six(x = 6) {
  return x instanceof Function ? x(6) : x;
}
function seven(x = 7) {
  return x instanceof Function ? x(7) : x;
}
function eight(x = 8) {
  return x instanceof Function ? x(8) : x;
}
function nine(x = 9) {
  return x instanceof Function ? x(9) : x;
}

function plus(y) {
  return (x) => x + y;
}
function minus(y) {
  return (x) => x - y;
}
function times(y) {
  return (x) => x * y;
}
function dividedBy(y) {
  return (x) => Math.floor(x / y);
}

console.log(seven(times(five())));
console.log(eight(times(five())));
console.log(five());
