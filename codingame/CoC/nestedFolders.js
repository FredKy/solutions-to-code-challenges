5 /
  a /
  b /
  c /
  d /
  e /
  a /
  b /
  c /
  d /
  e /
  f /
  a /
  b /
  c /
  g /
  a /
  b /
  c /
  h /
  a /
  b /
  c /
  m /
  h /
  a /
  b;

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
sum = 0;
h = {};
for (let i = 0; i < N; i++) {
  const PATH = readline();
  console.error();
  var path = PATH.split("/");
  path.shift();
  console.error(path);
  for (let i = 0; i < path.length; i++) {
    if (h[i] == null) h[i] = [path[i]];
    else h[i] = [...h[i], path[i]];
  }
  //sum+=PATH.split("/").length-1
}
for (let v of Object.values(h)) {
  console.error(v);
  sum += v.length;
}
console.error(h);
// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(sum);
