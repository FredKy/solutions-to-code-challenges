//Return new array with item removed at specified index
let state = [0, 1, 2, 3, 4, 5];
let index = 3;
let test = state.slice(0, index).concat(state.slice(index + 1));
console.log(test);
