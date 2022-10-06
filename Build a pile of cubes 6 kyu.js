function findNb(m) {
  let sqrt = Math.sqrt(m);
  if (!Number.isInteger(sqrt)) {
    return -1;
  }

  let n = Math.floor(Math.sqrt(2 * sqrt));
  if ((n * (n + 1)) / 2 == sqrt) {
    return n;
  } else {
    return -1;
  }
}

function squareRootIsInteger(n) {
  let output = Math.sqrt(n);
  console.log(Number.isInteger(2));
  console.log(Number.isInteger(output));
}

squareRootIsInteger(64);

var calc = [];
console.log(calc.length);
num = 6;
for (let i = 0; i < num; i++) {
  calc.push(0);
  console.log(calc);
}
console.log(calc.length);

function calcNthSum(n, calc) {
  calc = calc || {};
  if (calc[n]) {
    return calc[n];
  }
  if (n <= 1) {
    return 1;
  }
  if (calc[n] == 0) {
  }
  return (calc[n] = calc[n] = n ** 3 + calcNthSum(n - 1, calc));
}

console.log(calcNthSum(7));
console.log(brain(7));
console.log(brain(8));
console.log(brain(9));
console.log(brain(100));
console.log(brain(1000));

console.log(findNb(441));

function brain(n) {
  return (((n + 1) * n) / 2) ** 2;
}

function fibonacci(n, memo) {
  memo = memo || {};
  if (memo[n]) {
    return memo[n];
  }
  if (n <= 1) {
    return 1;
  }
  return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo));
}

/* var fibo = [];
for (let i = 0; i < 5; i++) {
  fibo.push(0);
  console.log(fibo);
} */

function f(n, fibo) {
  fibo = fibo || {};
  if (n == 0 || n == 1) {
    return 1;
  }

  if (fibo[n] == 0) {
    fibo[n] = f(n - 1, fibo) + f(n - 2, fibo);
  }

  return fibo[n];
}

console.log(f(5));

console.log(fibonacci(9));
