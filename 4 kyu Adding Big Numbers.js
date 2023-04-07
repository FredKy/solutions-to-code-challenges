function add(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

console.log(add("63829983432984289347293874", "90938498237058927340892374089"));



//Submitted the following pragmatic solution to Codewars:

const big = require("bignumber.js");

function add(a, b) {
  return (new big.BigNumber(a).add(b)).toString().split('e+')[0].replace('.','');
}