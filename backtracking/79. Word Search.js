var exist = function (board, word) {
  let m = board.length;
  let n = board[0].length;
  var res = false;
  function dfs(i, j, used, candidate) {
    //console.error(candidate);
    let c = candidate.join("");
    if (c == word) {
      res = true;
      return;
    }
    if (c != word.substring(0, candidate.length) || i >= m || j >= n) {
      return;
    }
    //Branch

    if (j - 1 >= 0 && used[[i, j - 1]] == null) {
      candidate.push(board[i][j - 1]);
      let copy = { ...used };
      copy[[i, j - 1]] = 1;
      dfs(i, j - 1, copy, [...candidate]);
      candidate.pop();
    }

    if (j + 1 < n && used[[i, j + 1]] == null) {
      candidate.push(board[i][j + 1]);
      let copy = { ...used };
      copy[[i, j + 1]] = 1;
      dfs(i, j + 1, copy, [...candidate]);
      candidate.pop();
    }

    if (i + 1 < m && used[[i + 1, j]] == null) {
      candidate.push(board[i + 1][j]);
      let copy = { ...used };
      copy[[i + 1, j]] = 1;
      dfs(i + 1, j, copy, [...candidate]);
      candidate.pop();
    }

    if (i - 1 >= 0 && used[[i - 1, j]] == null) {
      candidate.push(board[i - 1][j]);
      let copy = { ...used };
      copy[[i - 1, j]] = 1;
      dfs(i - 1, j, copy, [...candidate]);
      candidate.pop();
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let used = {};
      used[[i, j]] = 1;
      dfs(i, j, used, [board[i][j]]);
    }
  }

  return res;
};

/* const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
const word = "ABCCED"; */

/* const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
const word = "SEE"; */

/* const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

const word = "ABCCED"; */

const board = [
  ["A", "A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A", "A"],
];
const word = "AAAAAAAAAAAAAAB";

console.log(exist(board, word));
