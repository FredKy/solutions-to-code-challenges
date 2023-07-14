/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const row1 = readline();
const row2 = readline();
const row3 = readline();
const allButtonsPressed = readline();

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

const magicSquare = [
  ...row1.split(" "),
  ...row2.split(" "),
  ...row3.split(" "),
];

function getCopy() {
  return magicSquare.map((el) => el);
}

function invertButton(square, button) {
  square[button] === "*" ? (square[button] = "~") : (square[button] = "*");
}

function isSolved(square) {
  const centro = square[4];
  const cornice = [...square.slice(0, 4), ...square.slice(5)];
  return centro === "~" && cornice.every((el) => el === "*");
}

function pressButton(square, button) {
  switch (button) {
    case 0:
      invertButton(square, 0);
      invertButton(square, 1);
      invertButton(square, 3);
      invertButton(square, 4);
      break;
    case 1:
      invertButton(square, 0);
      invertButton(square, 1);
      invertButton(square, 2);
      break;
    case 2:
      invertButton(square, 1);
      invertButton(square, 2);
      invertButton(square, 4);
      invertButton(square, 5);
      break;
    case 3:
      invertButton(square, 0);
      invertButton(square, 3);
      invertButton(square, 6);
      break;
    case 4:
      invertButton(square, 1);
      invertButton(square, 4);
      invertButton(square, 7);
      invertButton(square, 3);
      invertButton(square, 5);
      break;
    case 5:
      invertButton(square, 2);
      invertButton(square, 5);
      invertButton(square, 8);
      break;
    case 6:
      invertButton(square, 3);
      invertButton(square, 4);
      invertButton(square, 6);
      invertButton(square, 7);
      break;
    case 7:
      invertButton(square, 6);
      invertButton(square, 7);
      invertButton(square, 8);
      break;
    case 8:
      invertButton(square, 4);
      invertButton(square, 5);
      invertButton(square, 7);
      invertButton(square, 8);
      break;
  }
}

// initial moves made by Lizzo
for (button of allButtonsPressed) {
  pressButton(magicSquare, +button - 1);
}

// checking buttons to find a solution
var testButton = 0;
do {
  var copy = getCopy();
  pressButton(copy, testButton);
  testButton++;
} while (!isSolved(copy));

// outputting solution
console.log(testButton);
