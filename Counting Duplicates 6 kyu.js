function duplicateCount(text) {
  let txt = text.toLowerCase();
  let obj = {};
  for (c of txt) {
    if (c in obj) {
      obj[c] += 1;
    } else {
      obj[c] = 1;
    }
  }

  let sum = 0;
  for (key in obj) {
    if (obj[key] > 1) {
      sum += 1;
    }
  }
  return sum;
}

console.log(duplicateCount("aAbb123hejje"));
