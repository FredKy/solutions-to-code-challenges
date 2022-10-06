function listSquared(m, n) {
  let result = [];
  for (let i = m; i < n + 1; i++) {
    let count = 0;
    for (let j = 1; j < i + 1; j++) {
      if (i % j == 0) {
        count += j ** 2;
      }
    }
    if (Number.isInteger(Math.sqrt(count))) {
      result.push([i, count]);
    }
  }
  return result;
}

function findDivisors(n) {
  //let list_of_divisors = [];
  let count = 0;
  for (let i = 1; i < n + 1; i++) {
    if (n % i == 0) {
      //list_of_divisors.push(i ** 2);
      count += i ** 2;
    }
  }
  return count;
}
console.log(findDivisors(246));
console.log(listSquared(1, 250));
console.log(listSquared(42, 250));
