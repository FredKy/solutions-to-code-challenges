function gap(g, m, n) {
  let result = [];
  let len = 0;
  for (let i = m; i < n + 1; i++) {
    if (isPrime(i)) {
      result.push(i);
      len += 1;
      if (result[len - 1] - result[len - 2] == g) {
        return [result[len - 2], result[len - 1]];
      }
    }
  }
  return null;
}

function findDivisors(n) {
  let list_of_divisors = [];
  for (let i = 1; i < Math.sqrt(n) + 1; i++) {
    if (n % i == 0) {
      list_of_divisors.push(i);
    }
  }
  return list_of_divisors;
}

function isPrime(n) {
  if (n == 1) return false;
  if (n == 2) return true;
  if (findDivisors(n).length == 1) return true;
  else return false;
}

console.log(gap(2, 100, 110));
