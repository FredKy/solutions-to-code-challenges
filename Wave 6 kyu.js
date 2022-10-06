function wave(str) {
  res = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == " ") {
      continue;
    } else {
      let newStr = str.split("");
      newStr[i] = newStr[i].toUpperCase();
      newStr = newStr.toString().replace(/,/g, "");
      // newStr = newStr.join(""); funkar också;
      res.push(newStr);
    }
  }
  return res;
}

console.log(wave("gello"));
console.log("Hello".split(""));
var newStr = "hello";
var char = newStr.charAt(3).toUpperCase();
newStr = newStr.split("");
console.log(newStr);
newStr[3] = char;
newStr = newStr.toString().replace(/,/g, "");
console.log(newStr);
