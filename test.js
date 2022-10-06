for (let i = 1; i < 10; i++) {
  console.log(i * 3);
}

let digits = new Set();

console.log(digits.add("a"));
console.log(digits.has("a"));

for (e of "123") {
  console.log(e);
}

let string = "Welcome home baby";
let arr = [];
let s = string.split(" ");
console.log(s);
for (e of s) {
  console.log(e);
  if (e.length > 4) {
    arr.push(e.split("").reverse().join(""));
  } else {
    arr.push(e);
  }
}

console.log(arr.join(" "));
