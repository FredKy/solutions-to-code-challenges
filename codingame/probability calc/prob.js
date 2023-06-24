var str = "2*d6*d3-(3+d3)*d5>0";
//var str = "d4*d2+d3";
var str2 = "2*6";

function isNumeric(str) {
  return /^\d+$/.test(str);
}

function expandDiceExpression(str) {
  console.error("Before: " + str);
  var arr = str.split("");
  let i = arr.indexOf("d");
  //console.error(i);
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
    console.error("Number of digits: " + digitsOfInt);
    var sidesOnDie = parseInt(str.substring(i, i + digitsOfInt));
    console.error("Sides on die: " + sidesOnDie);
    var arrayOfExpressions = [];
    for (let j = 1; j <= sidesOnDie; j++) {
      //console.error(j);
      //console.error(str.substring(0, i - 1));
      let expandedExpression =
        str.substring(0, i - 1) + j + str.substring(i + digitsOfInt);
      arrayOfExpressions.push(expandedExpression);
      //console.error(expandedExpression);
    }
    return arrayOfExpressions;
  }
}

function replaceDiceExpressionsInArray(arr) {
  let result = [...arr];
  let i = 0;
  while (i < result.length) {
    let ex = result[i];
    //console.error(ex.includes("d"));
    if (ex.includes("d")) {
      result.push(...expandDiceExpression(ex));
    }
    i++;
  }
  //console.error(result);
  let filtered = result.filter((a) => !a.includes("d"));
  //console.error(filtered);
  return filtered;
}

console.error(...expandDiceExpression(str));
//console.log(...expandDiceExpression(str2));
var expressions = replaceDiceExpressionsInArray(expandDiceExpression(str));
//console.error(expressions);

function parse(str) {
  //let res = Function(`'use strict'; return (${str})`)();
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
//console.error(parsedExpressions);
console.error(parse("2.1-2*1>0"));

var total = parsedExpressions.length;
var frequencies = {};
for (let exp of parsedExpressions) {
  !(exp in frequencies) ? (frequencies[exp] = 1) : (frequencies[exp] += 1);
}
console.error(frequencies);

var arrayOfResults = [];
for ([key, value] of Object.entries(frequencies)) {
  console.error(key, value);
  arrayOfResults.push([parseInt(key), (100 * (value / total)).toFixed(2)]);
}
var sortedArrayOfResults = arrayOfResults.sort((a, b) => a[0] - b[0]);
for (let e of sortedArrayOfResults) {
  console.log(e[0] + " " + e[1]);
}
