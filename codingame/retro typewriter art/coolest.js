/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const T = readline();

console.error(T);
console.log(
  T.split(" ")
    .map((x) => {
      let [_, nr, ch] = x.match(/(\d*)(.+)/);
      if (!nr) nr = 1;
      ch = { nl: "\n", sp: " ", bS: "\\", sQ: "'" }[ch] || ch;
      return ch.repeat(nr);
    })
    .join("")
);
// Write an answer using console.log()
// To debug: console.error('Debug messages...');
