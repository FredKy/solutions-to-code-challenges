let arr = new Set();

//const N = parseInt(readline());
const N = 9;
console.error(N);

function sumOfTwoCubes(n) {
  for (let i = 1; i ** 3 < n; i++) {
    for (let j = 1; j ** 3 < n; j++) {
      if (i ** 3 + j ** 3 == n) arr.add([i, j].sort().toString());
    }
  }
}
sumOfTwoCubes(N);

console.log(arr.size);
