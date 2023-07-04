function findSnake(x, y, char, res) {
  if (square[y]?.[x] !== char) return undefined;
  const nextRes = [...res, `${x}_${y}`];
  if (char === "z") return nextRes;
  const nextChar = String.fromCharCode(char.charCodeAt(0) + 1);
  return (
    findSnake(x - 1, y, nextChar, nextRes) ??
    findSnake(x + 1, y, nextChar, nextRes) ??
    findSnake(x, y - 1, nextChar, nextRes) ??
    findSnake(x, y + 1, nextChar, nextRes)
  );
}
const square = [...new Array(+readline())].map((_) => readline());
const snake = square
  .map((l, y) => l.split("").map((_, x) => findSnake(x, y, "a", [])))
  .flat()
  .find((s) => s);
console.log(
  square
    .map((l, y) =>
      l
        .split("")
        .map((c, x) => (snake.indexOf(`${x}_${y}`) >= 0 ? c : "-"))
        .join("")
    )
    .join("\n")
);
