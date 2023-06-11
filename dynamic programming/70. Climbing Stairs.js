/**
 * @param {number} n
 * @return {number}
 */

/* var climbStairs = function (n) {
  var mem = { 0: 0, 1: 1, 2: 2 };
  function helper(n) {
    if (mem[n] != null) {
      return mem[n];
    }
    mem[n] = helper(n - 1) + helper(n - 2);
    return mem[n];
  }

  return helper(n);
}; */

//Icke optimalt för minnesanvändning.

var climbStairs = function (n, mem = { 0: 0, 1: 1, 2: 2 }) {
  if (mem[n] != null) {
    return mem[n];
  }

  mem[n] = climbStairs(n - 1, mem) + climbStairs(n - 2, mem);

  return mem[n];
};

//Bottom up-lösning med effektiv minnesanvändning.

climbStairs = function (n) {
  posOne = 1;
  posTwo = 1;

  for (let i = 0; i < n - 1; i++) {
    let tmp = posOne;
    posOne = posOne + posTwo;
    posTwo = tmp;
  }

  return posOne;
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
