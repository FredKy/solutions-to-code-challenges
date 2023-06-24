const expr = readline();

let dicePositions = [];
let maxValues = [];
let nexpr = "";
for (let i = 0; i < expr.length; i++) {
  if (expr.charAt(i) == "d") {
    dicePositions.push(nexpr.length);
    maxValues.push(parseInt(expr.charAt(++i) + ""));
  }
  nexpr += expr.charAt(i);
}

let outcomes = {};
getOutcomes(nexpr, dicePositions, maxValues, 0, outcomes);
let uniqueOutcomes = 0;
for (let e in outcomes) uniqueOutcomes += outcomes[e];

let skeys = Object.keys(outcomes).sort(function (a, b) {
  return a - b;
});
for (let i = 0; i < skeys.length; i++) {
  console.log(
    skeys[i] + " " + ((outcomes[skeys[i]] * 100.0) / uniqueOutcomes).toFixed(2)
  );
}

function getOutcomes(expr, dicePositions, maxValues, index, outcomes) {
  if (index == dicePositions.length) {
    let output = eval(expr) + "";
    let res =
      output.charAt(0) >= "A" ? (output == "true" ? 1 : 0) : parseInt(output);
    outcomes[res] = (res in outcomes ? outcomes[res] : 0) + 1;
    return;
  }

  for (let value = 1; value <= maxValues[index]; value++) {
    let nexpr =
      expr.substring(0, dicePositions[index]) +
      value +
      expr.substring(dicePositions[index] + 1);
    getOutcomes(nexpr, dicePositions, maxValues, index + 1, outcomes);
  }
}
