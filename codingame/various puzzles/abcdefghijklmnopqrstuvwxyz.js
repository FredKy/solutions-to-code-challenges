const n = parseInt(readline());
var arr = [];
for (let i = 0; i < n; i++) {
  const m = readline().split("");
  arr.push(m);
  console.error(m.join(""));
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    currentCharCode = arr[i][j].charCodeAt(0);
    if (arr[i][j] == "-") {
      continue;
    }

    var sequence = [];
    var next = false;
    if (arr[i][j] === "a") {
      next = true;
      sequence.push([i, j]);
    }
    var x = i;
    var y = j;
    while (next) {
      next = false;
      if (x > 0) {
        if (arr[x - 1][y].charCodeAt(0) == currentCharCode + 1) {
          sequence.push([x - 1, y]);
          currentCharCode = arr[x - 1][y].charCodeAt(0);
          x = x - 1;
          next = true;
          continue;
        }
      }
      if (x + 1 < n) {
        if (arr[x + 1][y].charCodeAt(0) == currentCharCode + 1) {
          sequence.push([x + 1, y]);
          currentCharCode = arr[x + 1][y].charCodeAt(0);
          x = x + 1;
          next = true;
          continue;
        }
      }
      if (y > 0) {
        if (arr[x][y - 1].charCodeAt(0) == currentCharCode + 1) {
          sequence.push([x, y - 1]);
          currentCharCode = arr[x][y - 1].charCodeAt(0);
          y = y - 1;
          next = true;
          continue;
        }
      }
      if (y + 1 < n) {
        if (arr[x][y + 1].charCodeAt(0) == currentCharCode + 1) {
          sequence.push([x, y + 1]);
          currentCharCode = arr[x][y + 1].charCodeAt(0);
          y = y + 1;
          next = true;
          continue;
        }
      }
    }

    if (sequence.length > 0) {
      let xC = sequence[sequence.length - 1][0];
      let yC = sequence[sequence.length - 1][1];
      if (arr[xC][yC] === "z") {
        const obj = {};
        for (let value of sequence) {
          obj[value] = ++obj[value] || 1;
        }
        for (let k = 0; k < n; k++) {
          for (let l = 0; l < n; l++) {
            if (obj[[k, l]] == null) {
              arr[k][l] = "-";
            }
          }
        }
        break;
      }
    }
  }
}

for (let row of arr) {
  console.log(row.join(""));
}
