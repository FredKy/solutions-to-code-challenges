var reduceSet = (s) => {
  var reduced = [];
  for (var setIndex = 0; setIndex < s.length; setIndex++) {
    var value = s[setIndex][0];
    var count = s[setIndex][1];
    for (var reducedIndex = 0; reducedIndex < reduced.length; reducedIndex++) {
      if (reduced[reducedIndex][0] != value) continue;
      reduced[reducedIndex][1] += count;
      break;
    }
    if (reducedIndex == reduced.length) reduced.push([value, count]);
  }
  return reduced;
};

var process = (operator) => {
  if (operator == "d") {
    var op1 = evalStack.pop()[0][0];
    var res = [];
    for (var a = 1; a <= op1; a++) res.push([a, 1]);
    evalStack.push(res);
  } else {
    var op2 = evalStack.pop();
    var op1 = evalStack.pop();
    var totalCount =
      op2.reduce((a, b) => a + b[1], 0) * op1.reduce((a, b) => a + b[1], 0);
    var res = [];
    for (var a = 0; a < op1.length; a++)
      for (var b = 0; b < op2.length; b++) {
        var value1 = op1[a];
        var value2 = op2[b];
        var count = value1[1] * value2[1];
        var opResult = 0;
        switch (operator) {
          case ">":
            opResult = value1[0] > value2[0] ? 1 : 0;
            break;
          case "*":
            opResult = value1[0] * value2[0];
            break;
          case "+":
            opResult = value1[0] + value2[0];
            break;
          case "-":
            opResult = value1[0] - value2[0];
            break;
        }
        res.push([opResult, count]);
      }
    evalStack.push(reduceSet(res));
  }
};

var opPriority = (op) =>
  op == ">" ? 1 : op == "*" ? 3 : op == "+" || op == "-" ? 2 : -1;

var opStack = [];
var evalStack = [];

readline()
  .match(/([0-9]+|[d+*>\-()])/g)
  .map((token) => {
    if (token.match(/^[0-9]+$/)) {
      evalStack.push([[+token, 1]]);
      return;
    }
    switch (token) {
      case "d":
      case "(":
        opStack.push(token);
        break;
      case "+":
      case "-":
      case "*":
      case ">":
        while ((previousOp = opStack.pop())) {
          if (previousOp == "d" || opPriority(previousOp) >= opPriority(token))
            process(previousOp);
          else {
            opStack.push(previousOp);
            break;
          }
        }
        opStack.push(token);
        break;
      case ")":
        while ((previousOp = opStack.pop()) != "(") process(previousOp);
        break;
    }
  });
opStack.reverse().map(process);

var finalResult = evalStack[0];
var totalCount = finalResult.reduce((a, b) => a + b[1], 0);
finalResult
  .sort((a, b) => a[0] - b[0])
  .map((x) => print(x[0] + " " + ((x[1] * 100) / totalCount).toFixed(2)));
