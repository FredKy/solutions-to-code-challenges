/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline());

const grid = [];
const starts = [];

for (let i = 0; i < n; i++) {
  const m = readline();

  grid.push(m);

  const matches = m.matchAll(/(a)/g);

  for (const match of matches) {
    starts.push({ y: i, x: match.index });
  }
}

const validCells = [];

starts.forEach(({ x, y }) => {
  let code = "a".charCodeAt(0);

  const stack = [{ x, y, code, path: [{ x, y }] }];

  while (stack.length > 0) {
    const { x, y, code, path } = stack.pop();

    [
      [-1, 0],
      [+1, 0],
      [0, -1],
      [0, +1],
    ].forEach((move) => {
      if (
        grid[y + move[0]] &&
        grid[y + move[0]][x + move[1]] === String.fromCharCode(code + 1)
      ) {
        path.unshift({ x: x + move[1], y: y + move[0] });

        if (path.length === 26) {
          validCells.push(...path.map(({ x, y }) => `${x}-${y}`));
        } else {
          stack.push({ ...path[0], code: code + 1, path });
        }
      }
    });
  }
});

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

grid.forEach((line, y) => {
  console.log(
    [...line]
      .map((letter, x) => (validCells.includes(`${x}-${y}`) ? letter : "-"))
      .join("")
  );
});
