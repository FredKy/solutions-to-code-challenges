function matrixSearch(matrix, target) {
  let s = 0;
  let e = matrix.length - 1;
  var m = 0;

  while (s <= e) {
    m = Math.floor((s + e) / 2);
    if (target >= matrix[m][0] && target <= matrix[m][matrix[m].length - 1]) {
      break;
    } else {
      if (matrix[m][0] < target) {
        s = m + 1;
      } else {
        e = m - 1;
      }
    }
  }

  console.log(m);
  console.log(matrix[m]);

  for (var i = 0; i < matrix[m].length; i++) {
    console.log(matrix[m][i]);
    if (matrix[m][i] === target) {
      return true;
    }
  }

  return false;
}

var mat = [[1], [3], [5]];
var tar = 3;
console.log(matrixSearch(mat, tar));
