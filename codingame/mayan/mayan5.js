/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

class Numeral {
  input = [];
  map = {};
  numerals = [];
  L = 0;
  H = 0;
  numeralLength = 0;

  constructor(L, H) {
    this.L = L;
    this.H = H;
    this.numeralLength = L * H;
  }

  readInput() {
    for (let i = 0; i < H; i++) {
      numeral.input.push(readline());
    }
    for (let i = 0; i < 20; i++) {
      const start = i * this.L;
      const end = start + this.L;
      let strArr = [];
      for (const numeral of this.input) {
        strArr.push(numeral.substring(start, end));
      }
      this.map[strArr.join("")] = i;
      this.numerals[i] = strArr;
    }
  }

  parseNumber(string) {
    const parts = [];
    while (string.length >= this.numeralLength) {
      parts.push(string.substring(string.length - this.numeralLength));
      string = string.substring(0, string.length - this.numeralLength);
    }
    return parts.reduce((acc, val, i) => {
      return acc + this.map[val] * Math.pow(20, i);
    }, 0);
  }
}

const [L, H] = readline()
  .split(" ")
  .map((v) => parseInt(v));
const numeral = new Numeral(L, H);
numeral.readInput();

let num1String = "";
let num2String = "";

const S1 = parseInt(readline());
for (let i = 0; i < S1; i++) {
  num1String += readline();
}

const S2 = parseInt(readline());
for (let i = 0; i < S2; i++) {
  num2String += readline();
}

const operation = readline();

const num1 = numeral.parseNumber(num1String);
const num2 = numeral.parseNumber(num2String);

let answer = eval(`${num1}${operation}${num2}`);

const answerParts = [answer];
let part = 0;
while (answerParts[part] > 19) {
  const nextPart = part + 1;
  if (!answerParts[nextPart]) {
    answerParts[nextPart] = 1;
  } else {
    answerParts[nextPart]++;
  }
  answerParts[part] -= 20;
  if (answerParts[part] < 20 && answerParts[nextPart] !== undefined) {
    part++;
  }
}

for (const answerPart of answerParts.reverse()) {
  console.log(numeral.numerals[answerPart].join("\n"));
}
