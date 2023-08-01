/* function sort(a) {
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
  return a;
}

console.log(sort([5, 2, 1, 4])); */

function sort(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
  console.log(a);
}

sort([3, 2, 1]);

console.log(Array(10).fill("#").join(""));

var num = +"0";
console.log(1 + num);

function primeFactors(n) {
  const factors = [];
  let div = 2;

  while (n >= 2) {
    if (n % div == 0) {
      factors.push(div);
      n = n / div;
    } else {
      div++;
    }
  }

  return factors;
}

console.error(primeFactors(45));
