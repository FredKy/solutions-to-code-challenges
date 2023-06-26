const signals = new Map();

const n = parseInt(readline());
const m = parseInt(readline());

for (let i = 0; i < n; i++) {
  const [name, wave] = readline().split(" ");
  signals.set(name, wave);
}

for (let i = 0; i < m; i++) {
  const [name, command, signalName1, signalName2] = readline().split(" ");
  console.log(
    `${name} ${go(command, signals.get(signalName1), signals.get(signalName2))}`
  );
}

function go(command, signal1, signal2) {
  const op = {
    AND: (x, y) => x && y,
    OR: (x, y) => x || y,
    XOR: (x, y) => x != y,
    NAND: (x, y) => !(x && y),
    NOR: (x, y) => !(x || y),
    NXOR: (x, y) => x == y,
  }[command];

  return [...signal1]
    .map((x, i) => (op(x === "-", signal2[i] === "-") ? "-" : "_"))
    .join("");
}
