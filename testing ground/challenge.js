// Return smallest integer m > n, with condition that m contains no digits of n.

const n = parseInt(readline());
console.error(n);
h = {};
for (c of n.toString()) {
  //console.log(c)
  if (h[c] == null) {
    h[c] = 1;
  }
}
console.error(h);

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
i = n;
while (true) {
  let count = 0;
  for (c of i.toString()) {
    if (h[c] != null) {
      count += 1;
      break;
    }
  }
  if (count == 0) {
    break;
  }
  i++;
}
console.log(i);

// Better
/* let n = parseInt(readline());
let x = n;
while([...n.toString()].some(c => x.toString().includes(c)))
    x++
console.log(x); */

// Another challenge

const string = readline();
//console.error(string)
var arr = string.split("-");
//console.error(arr)
var res = "";
for (let i = 0; i < arr.length; i++) {
  if (arr[i].charAt(1) == "0") {
    res += String.fromCharCode(parseInt(arr[i].split(")")[1]) + 97);
  } else if (arr[i].charAt(1) == "1") {
    res += String.fromCharCode(parseInt(arr[i].split(")")[1]) + 65);
  } else {
    res += parseInt(arr[i].split(")")[1]);
  }
}
// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(res);

// Quick solution to sword circle killing problem
/* const n = parseInt(readline());
//console.error(n)
var arr = [...Array(n+1).keys()].slice(1)
var survivors = n
count = 1;
while (survivors != 1) {
    count = count % survivors
    while (count < survivors) {
        count = count + 1
        arr.splice(count,1)
        survivors -=1
        if (count > arr.length-1) break;
    }
}
console.log(arr[1]-1) */

//Elegant python sol:
/* import sys
import math
n = int(input())

x=[*range(1,n+1)]
s=0
while len(x)>1:
    x=x[2:]+[x[0]]
print(*x) */

//Input: name and degree, i.e. "Harry Potter, BSC" but degree can be empty i.e. "Harry Potter"
/* 
const N = parseInt(readline());
var arr = []
for (let i = 0; i < N; i++) {
    const name = readline();
    console.error(name)
    let tmp = name.split(", ")
    if (tmp.length > 1) {
        arr.push(tmp[1])
    } else {
        arr.push("N/A")
    }
    
}
console.error(arr)
for (let i = 0; i < N; i++) {
    
    // Write an answer using console.log()
    // To debug: console.error('Debug messages...');

    console.log(arr[i]);
}
 */

//Better solution
/* 
const N = parseInt(readline());
degs=[]
for (let i = 0; i < N; i++) {
    const [name,deg] = readline().split(", ");
    degs.push(deg)
}
for (let i = 0; i < N; i++) {
    console.log(degs[i] ?? "N/A")
}
 */
