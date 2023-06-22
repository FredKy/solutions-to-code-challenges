var inputs = readline().split` `;
var L = parseInt(inputs[0]);
var H = parseInt(inputs[1]);

var splitArr = (arr, x, l, h) => {
  var temp,
    result = [];
  for (var i = 0; i < h; i++) {
    temp = arr[i].slice(x, x + l);
    result.push(temp);
  }
  return result;
};

var NUMS = [...Array(H)].map((a) => readline());
var DIGITS = [];

for (var i = 0; i < L * 20; i += L) {
  DIGITS.push(splitArr(NUMS, i, L, H));
}

var toInteger = (x) => {
  var result = [];
  for (var i = 0; i < x.length; i += H)
    result.push(DIGITS.map((a) => a.join``).indexOf(x.slice(i, i + H).join``));
  return parseInt(result.map((a) => a.toString(20)).join``, 20);
};

var toMayan = (x) => {
  var result = [];
  for (var c of x.toString(20)) result.push(DIGITS[parseInt(c, 20)]);
  return result;
};

var S1 = parseInt(readline());
var X = toInteger([...Array(S1)].map((a) => readline()));

var S2 = parseInt(readline());
var Y = toInteger([...Array(S2)].map((a) => readline()));

var operation = readline();

var result = eval(`${X}${operation}${Y}`);
print(toMayan(result).map((a) => a.join`\n`).join`\n`);
