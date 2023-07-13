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

// Check if string contains at least one digit
function containsDigit(str) {
  var regexp = /\d/;
  return regexp.test(str);
}

// Check if all characters of string are digits
// /^\d+$/.test(str);
// Alternatively
string.match(/^[0-9]+$/) != null;

//Regex cheatsheet
let regex;
/* shorthand character classes */
regex = /d/; // matches any digit, short for [0-9]
regex = /D/; // matches non-digits, short for [^0-9]
regex = /S/; // matches non-white space character
regex = /s/; // matches any white space character
regex = /w/; // matches character, short for [a-zA-Z_0-9]
regex = /W/; // matches non-word character [^w]
regex = /b/; // Matches a word boundary where a word character is [a-zA-Z0-9_]
//These meta characters boast a pre-defined meaning and make various typical patterns easier to use.
/* matching using quantifiers */
regex = /X./; // matches any character
regex = /X*/; // Matches zero or several repetitions of letter X, is short for {0,}
regex = /X+-/; // matches one or more repetitions of letter X, is short for {1,}
regex = /X?/; // finds no or exactly one letter X, is short for is short for {0,1}.
regex = // d{3}; // matches three digits. {} describes the order of the preceding liberal
  regex = // d{1,4} ; // means d must occur at least once and at a maximum of four
  //A quantifies helps developers to define how often an element occurs.
  /* character ranges */
  regex =
    /[a-z]/; // matches all lowercase letters
regex = /[A-Z]/; // matches all uppercase letters
regex = /[e-l]/; // matches lowercase letters e to l (inclusive)
regex = /[F-P]/; // matches all uppercase letters F to P (inclusive)
regex = /[0-9]/; // matches all digits
regex = /[5-9]/; // matches any digit from 5 to 9 (inclusive)
regex = / [a-d1-7]/; // matches a letter between a and d and figures from 1 to 7, but not d1
regex = /[a-zA-Z]/; // matches all lowercase and uppercase letters
regex = /[^a-zA-Z]/; // matches non-letters
/* matching using anchors */
regex = / ^The/; // matches any string that starts with “The”
regex = / end$/; // matches a string that ends with end
regex = / ^The end$/; // exact string match starting with “The” and ending with “End”
/* escape characters */
regex = / a/; // match a bell or alarm
regex = / e/; // matches an escape
regex = / f/; // matches a form feed
regex = / n/; // matches a new line
regex = / Q…E/; // ingnores any special meanings in what is being matched
regex = / r/; // matches a carriage return
regex = / v/; // matches a vertical tab
//It is critical to note that escape characters are case sensitive
/* matching using flags */
regex = / i/; // ignores the case in pattern ( upper and lower case allowed)
regex = / m/; // multi-line match
regex = / s/; // match new lines
regex = / x/; // allow spaces and comments
regex = / j/; // duplicate group names allowed
regex = / U/; // ungreedy match


/*
const log = readline();
var l = 0
var r = 0
for (let c of log) {
    (c === "(") ? l+=1 : r +=1
}

console.log(l-r); */

/* 
const log = readline();
console.log((log.match(/\(/g)||[]).length - (log.match(/\)/g)||[]).length);
*/

// Count number of left brackets in string
(log.match(/\(/g)||[]).length


// Super short JS code for summing the elements of the boundary of an NxN matrix
r=readline
M=N=r()
a=0
while(N--){
l=r().split(' ')
a+=(N==0|N==M-1)?l.reduce((p,b)=>+b+p,0):+l[0]+ +l[M-1]
}
print(a)


//const n = parseInt(readline());
/* const arr = readline().split(' ').map(n=>+n).sort((a,b)=>a-b);
const x=arr.reduce((a,b)=>a+b)

console.log(x-arr[n-1],x-arr[0]); */


// Konvertera alla strängar till tal i en array med tal i sträng-form
//arr.map(n=>+n)


//Crazy factorial lösn
/* const n = parseInt(readline());

x=n;
for(i=n-1;i>0;i--){
    x*=i
}

y=(""+x).split("").reduce((a,c)=>a+(+c),0)


console.log(x/y); */

//n is a string, but no need to convert to number, can still iterate
/* r=readline,n=r()
while(n--)print(r().split` `.sort((a,b)=>a-b)[1]) */

/* var n = "5";
while (n--) {
  console.log(n);
}
>>
4
3
2
1
0
*/