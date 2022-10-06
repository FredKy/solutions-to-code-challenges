function convertToRoman(num) {
  var a = num % 10;
  console.log(a);
  var one = ones(a);

  var s = one;

  var b = (num % 100) - a;
  console.log(b);
  ten = tens(b);

  var c = (num % 1000) - b - a;
  console.log(c);
  hundred = hundreds(c);

  var d = (num % 10000) - c - b - a;
  console.log(d);
  thousand = thousands(d);

  s = [thousand, hundred, ten, one]
    .filter((e) => {
      return typeof e === "string";
    })
    .join("");

  return s;
}

function partial(n, a, b, c, div) {
  switch (n / div) {
    case 1:
      return a;
    case 2:
      return a + a;
    case 3:
      return a + a + a;
    case 4:
      return a + b;
    case 5:
      return b;
    case 6:
      return b + a;
    case 7:
      return b + a + a;
    case 8:
      return b + a + a + a;
    case 9:
      return a + c;
    default:
      null;
  }
}

function ones(n) {
  return partial(n, "I", "V", "X", 1);
}

function tens(n) {
  return partial(n, "X", "L", "C", 10);
}

function hundreds(n) {
  return partial(n, "C", "D", "M", 100);
}

function thousands(n) {
  return partial(n, "M", "?", "?", 1000);
}
console.log(convertToRoman(29));
//XXIX
console.log(convertToRoman(649));
//DCXLIX
console.log(convertToRoman(3999));
//MMMCMXCIX
