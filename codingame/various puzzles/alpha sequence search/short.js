const grid = [...Array(parseInt(readline()))].map(readline);
const aaas = grid.reduce(
  (array, line, row) =>
    array.concat(
      [...line]
        .map((cell, col) => (cell === "a" ? [row, col] : false))
        .filter((c) => c)
    ),
  []
);

for (let [row, col] of aaas) {
  let issue = parse(row, col);
  if (issue)
    grid.forEach((line, row) =>
      console.log(
        [...line]
          .map((cell, col) => (issue.includes(row + "_" + col) ? cell : "-"))
          .join("")
      )
    );
}

function parse(
  row = -1,
  col = -1,
  currentChar = 0,
  visited = [row + "_" + col]
) {
  let next = [
    [row + 1, col],
    [row, col + 1],
    [row - 1, col],
    [row, col - 1],
  ].find(
    ([_r, _c]) =>
      grid[_r]?.[_c] === "abcdefghijklmnopqrstuvwxyz"[currentChar + 1]
  );
  return currentChar === 25
    ? visited
    : next
    ? parse(...next, currentChar + 1, visited.concat(next.join("_")))
    : false;
}
