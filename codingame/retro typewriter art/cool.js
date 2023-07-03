function convert(c) {
  if (c === "sp") return " ";
  if (c === "bS") return "\\";
  if (c === "sQ") return "'";
  return c;
}

const regexp = /^([0-9]+)(sp|bS|sQ|.)$/;

const T = readline();

T.split(" ").forEach((instruction) => {
  if (instruction === "nl") {
    console.log();
  } else {
    const match = instruction.match(regexp);
    rep = match[1];
    char = convert(match[2]);

    process.stdout.write(char.repeat(rep));
  }
});
