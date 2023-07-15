let players = ["Fred", "Wilma", "John", "Thomas", "Adam"];

console.log(Math.floor(Math.random() * players.length));

function getPairs(players) {
  let result = [];
  while (players.length > 0) {
    let pair = [];
    let randIndex = Math.floor(Math.random() * players.length);
    pair.push(players[randIndex]);
    //Creates new array
    //players = players.slice(0, randIndex).concat(players.slice(randIndex + 1));
    players.splice(randIndex, 1);
    if (players.length > 0) {
      randIndex = Math.floor(Math.random() * players.length);
      pair.push(players[randIndex]);
      players.splice(randIndex, 1);
    }
    result.push(pair);
  }
  return result;
}

console.log(getPairs(players));
