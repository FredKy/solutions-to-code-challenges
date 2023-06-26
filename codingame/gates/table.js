const n = parseInt(readline());
const m = parseInt(readline());
const signals = Array(n)
  .fill(null)
  .reduce((acc, x) => {
    const [name, form] = readline().split(" ");
    return { ...acc, [name]: form };
  }, {});
const commands = Array(m)
  .fill(null)
  .map(() => readline().split(" "));

const table = {
  AND: ["--"],
  OR: ["--", "-_", "_-"],
  XOR: ["-_", "_-"],
  NAND: ["__", "-_", "_-"],
  NOR: ["__"],
  NXOR: ["__", "--"],
};

const solveLogic = (a, b, gate) => {
  const output = [];
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const op = `${a.charAt(i) || "_"}${b.charAt(i) || "_"}`;
    output.push(table[gate].includes(op) ? "-" : "_");
  }
  return output.join("");
};

commands.forEach((cmd) => {
  const [name, gate, n1, n2] = cmd;
  console.log(name, solveLogic(signals[n1], signals[n2], gate));
});
