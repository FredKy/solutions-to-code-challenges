/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

let board = [];
let solved = [true, true, true, true, false, true, true, true, true];

setupBoard(readline());
setupBoard(readline());
setupBoard(readline());

let allButtonsPressed = readline().split("");

allButtonsPressed.forEach((elem) => {
  pressButton(elem);
});

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
console.log(findSolution());

function findSolution() {
  const tempBoard = [...board];

  for (el of ["1", "2", "3", "4", "5", "6", "7", "8", "9"]) {
    pressButton(el);
    if (compareArrays(board, solved)) {
      return el;
    } else {
      pressButton(el); // reverse last step
    }
  }
  return -1;
}

function setupBoard(input) {
  let temp = input.split(" ");
  temp.forEach((i) => board.push(i === "*"));
}

function pressButton(button) {
  switch (button) {
    case "1":
      board[0] = !board[0];
      board[1] = !board[1];
      board[3] = !board[3];
      board[4] = !board[4];
      break;
    case "2":
      board[0] = !board[0];
      board[1] = !board[1];
      board[2] = !board[2];
      break;
    case "3":
      board[1] = !board[1];
      board[2] = !board[2];
      board[4] = !board[4];
      board[5] = !board[5];
      break;
    case "4":
      board[0] = !board[0];
      board[3] = !board[3];
      board[6] = !board[6];
      break;
    case "5":
      board[1] = !board[1];
      board[3] = !board[3];
      board[4] = !board[4];
      board[5] = !board[5];
      board[7] = !board[7];
      break;
    case "6":
      board[2] = !board[2];
      board[5] = !board[5];
      board[8] = !board[8];
      break;
    case "7":
      board[3] = !board[3];
      board[4] = !board[4];
      board[6] = !board[6];
      board[7] = !board[7];
      break;
    case "8":
      board[6] = !board[6];
      board[7] = !board[7];
      board[8] = !board[8];
      break;
    case "9":
      board[4] = !board[4];
      board[5] = !board[5];
      board[7] = !board[7];
      board[8] = !board[8];
      break;
    default:
      console.log("Button", button, "not exist.");
  }
}

function compareArrays(a, b) {
  if (a.length === b.length) {
    if (a.every((el, index) => el === b[index])) {
      return true;
    }
  }
  return false;
}
