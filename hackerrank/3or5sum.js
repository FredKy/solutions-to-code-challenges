import * as b from "bignumber.js";

function sumAnswer(n) {
  let sum = 0;
  for (let i = 3; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}

function sum(n) {
  const N = b.BigNumber(n - 1);
  const numberOfThrees = N.dividedToIntegerBy(3);
  const numberOfFives = N.dividedToIntegerBy(5);
  const numberOfFifteens = N.dividedToIntegerBy(15);
  const threeSum = numberOfThrees
    .multipliedBy(numberOfThrees.plus(1))
    .dividedToIntegerBy(2)
    .multipliedBy(3);
  const fiveSum = numberOfFives
    .multipliedBy(numberOfFives.plus(1))
    .dividedToIntegerBy(2)
    .multipliedBy(5);
  const fifteenSum = numberOfFifteens
    .multipliedBy(numberOfFifteens.plus(1))
    .dividedToIntegerBy(2)
    .multipliedBy(15);

  console.log(threeSum.plus(fiveSum).minus(fifteenSum).toString());
}

sum(2);
sum(10);
sum(100);
sumAnswer(2);
sumAnswer(10);
sumAnswer(100);
