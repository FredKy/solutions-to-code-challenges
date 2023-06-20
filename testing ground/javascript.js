var binary = "1001";

console.log(
  binary
    .split("")
    .map((val) => {
      if (val == "0") {
        return "1";
      }
      return "0";
    })
    .join("")
);

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const DT = "AAC/CBG-EGD";
//console.log(DT)

var map = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8, J: 9 };

var res = DT.split("")
  .map((val) => {
    if (val.charCodeAt(0) >= 65 && val.charCodeAt(0) <= 74) {
      return val.charCodeAt(0) - 65;
    }
    return val;
  })
  .join("");

console.log("A".charCodeAt(0));
console.log(res);

const isUpperCase = (string) => /^[A-Z]*$/.test(string);

console.log("AGHSJDHFGJQABNWA".replace(/A/g, "¤"));

/* James is on a diet and wants to restrict his calorie intake.

Given a list of food and how many calories each of them contains, find a subset of food such that their sum of calories is as close as possible to 1500 (while not exceeding 1500).

Note: It is guaranteed that the answer is unique. */

//Python-lösning:

/* import sys
import math
import itertools

n = int(input())
A=[]
M={}
for i in range(n):
    a,b = input().split()
    A += [a]
    M[a] = int(b)
a = 0
r = []
for i in range(1, n+1):
    for c in itertools.combinations(A, i):
        s = sum(M[x] for x in c)
        if s <= 1500 and s > a:
            a = s
            r = c
print(a)
print(*sorted(r)) */

/* const N = parseInt(readline());
var arr = []
for (let i = 0; i < N; i++) {
    const line = readline();
    arr.push(line.split(" "))
}
console.log(arr)
arr.sort((a,b) => parseInt(a[1]) - parseInt(b[1])).reverse()
sum = 0;
var foods = []

const foods = 
while (sum < 1500 && arr.length > 1) {
    let chosen = arr.pop()
    if (sum + parseInt(chosen[1]) > 1500) {
        break;
    }
    sum += parseInt(chosen[1])
    foods.push(chosen[0])
}

console.log(sum)
console.log(foods.sort().join(" ")) */

// Generate all array subsets:
function* subsets(array, offset = 0) {
  while (offset < array.length) {
    let first = array[offset++];
    for (let subset of subsets(array, offset)) {
      subset.push(first);
      yield subset;
    }
  }
  yield [];
}

// Example:
for (let subset of subsets([1, 2, 3])) {
  console.log(subset);
}

const getAllSubsets = (theArray) =>
  theArray.reduce(
    (subsets, value) => subsets.concat(subsets.map((set) => [...set, value])),
    [[]]
  );

console.log(getAllSubsets([1, 2]));

//Replace all substrings krap in s:
var s = "abc_abcwfwafeabcsAd";
const krap = "abc";
console.log(s.split(krap).join(""));

//Product of digits in a string

//Python:

/* import sys
import math

n = input()

print(eval("*".join(n)))
 */

//JS

/* const n = parseInt(readline());

var arr = n.toString().split("");
var res = arr.reduce((acc, curr) => {return acc*parseInt(curr)},1)

console.log(res); */

//Remove vowels from string JS:

var s = "readline()";

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(s.replace(/[aeiouAEIOU]/g, ""));
console.log(s.replace(/[aeiou]/gi, "")); //i case-insensitive pattern modifier

console.log(parseInt("-0") === -0);

// Create array from 0 to n or 1 to n
var arr = [[...Array(5).keys()], [...Array(5).keys()].slice(1)];
console.log(arr);

