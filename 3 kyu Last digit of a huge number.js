function lastDigit(as) {
  if (as.length === 0) return 1;
  if (as.length === 1) return as % 10;
  if (as.length === 2 && as[1] === 0) {
    return 1;
  }
  while (as.length > 2) {
    var nextToLast = as[as.length - 2] % 4;
    var last = as[as.length - 1] % 4;
    as.pop();
    if (last === 0) {
      if (nextToLast === 0) {
        as[as.length - 1] = 1;
      } else {
        as[as.length - 1] = nextToLast;
      }
    } else if (last === 1) {
      if (nextToLast === 0) {
        as[as.length - 1] = 0;
      } else {
        as[as.length - 1] = Math.pow(nextToLast, 2);
      }
    } else if (last === 2) {
      as[as.length - 1] = Math.pow(nextToLast, 3);
    } else {
      as[as.length - 1] = Math.pow(nextToLast, 4);
    }
  }
  if (as[0] === 0) {
    if (as[1] === 0) {
      return 1;
    }
    return 0;
  }
  if (as[0] % 10 === 0) {
    return 0;
  }
  if (as[1] === 0) return 1;
  var seed = as[0] % 10;
  var exp = as[1];
  //if (exp === 0) exp = 4;
  return Math.pow(seed, exp) % 10;
}
