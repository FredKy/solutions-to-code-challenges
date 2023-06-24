var str = readline();

function isNumeric(str) {
  return /^\d+$/.test(str);
}

function expandDiceExpression(str) {
  var arr = str.split("");
  let i = arr.indexOf("d");
  if (i == -1) {
    return [str];
  } else {
    let digitsOfInt = 0;
    while (i < arr.length) {
      if (isNaN(arr[i + 1])) {
        break;
      } else {
        digitsOfInt += 1;
      }
      i++;
    }
    var sidesOnDie = parseInt(str.substring(i, i + digitsOfInt));
    var arrayOfExpressions = [];
    for (let j = 1; j <= sidesOnDie; j++) {
      let expandedExpression =
        str.substring(0, i - 1) + j + str.substring(i + digitsOfInt);
      arrayOfExpressions.push(expandedExpression);
    }
    return arrayOfExpressions;
  }
}

function replaceDiceExpressionsInArray(arr) {
  let result = [...arr];
  let i = 0;
  while (i < result.length) {
    let ex = result[i];
    if (ex.includes("d")) {
      result.push(...expandDiceExpression(ex));
    }
    i++;
  }
  let filtered = result.filter((a) => !a.includes("d"));
  return filtered;
}

var expressions = replaceDiceExpressionsInArray(expandDiceExpression(str));

function parse(str) {
  return Function(`'use strict'; return (${str})`)();
}
var parsedExpressions = expressions
  .map((a) => parse(a))
  .map((a) => {
    if (typeof a === "boolean") {
      return a ? 1 : 0;
    }
    return a;
  });

var total = parsedExpressions.length;
var frequencies = {};
for (let exp of parsedExpressions) {
  !(exp in frequencies) ? (frequencies[exp] = 1) : (frequencies[exp] += 1);
}

var arrayOfResults = [];
for ([key, value] of Object.entries(frequencies)) {
  arrayOfResults.push([parseInt(key), (100 * (value / total)).toFixed(2)]);
}
var sortedArrayOfResults = arrayOfResults.sort((a, b) => a[0] - b[0]);
for (let e of sortedArrayOfResults) {
  console.log(e[0] + " " + e[1]);
}