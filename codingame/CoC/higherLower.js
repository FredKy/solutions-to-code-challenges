const maxNum = 20;
const numOfAttempts = 4;
var arr = [...Array(maxNum + 1).keys()].slice(1);
var attempts = [
  "guess:10 clue:higher",
  "guess:14 clue:higher",
  "guess:17 clue:lower",
  "guess:15 clue:lower",
];
for (let attempt of attempts) {
  var guessAndClue = attempt.split(" ");
  var guess = guessAndClue[0].split(":")[1];
  var hint = guessAndClue[1].split(":")[1];
  //console.error(guess, hint)
  //console.error("before: " + arr.join(" "));
  //console.error(guess);
  if (hint == "higher") {
    arr = arr.slice(arr.indexOf(+guess), arr.length);
  } else {
    arr = arr.slice(0, arr.indexOf(+guess));
  }
  //console.error("after: " + arr.join(" "));
  console.log(arr.join(" "));
}
