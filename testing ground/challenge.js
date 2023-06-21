// Return smallest integer m > n, with condition that m contains no digits of n.

const n = parseInt(readline());
console.error(n)
h = {}
for (c of n.toString()) {
    //console.log(c)
    if (h[c] == null) {
        h[c] = 1
    }
}
console.error(h)



// Write an answer using console.log()
// To debug: console.error('Debug messages...');
i = n
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
console.log(i)



// Better
/* let n = parseInt(readline());
let x = n;
while([...n.toString()].some(c => x.toString().includes(c)))
    x++
console.log(x); */


// Another challenge

const string = readline();
//console.error(string)
var arr = string.split("-")
//console.error(arr)
var res = ""
for (let i = 0; i < arr.length; i++) {
    if (arr[i].charAt(1) == '0') {
        res += String.fromCharCode(parseInt(arr[i].split(")")[1])+97)
    } else if (arr[i].charAt(1) == '1') {
        res += String.fromCharCode(parseInt(arr[i].split(")")[1])+65)
    } else {
        res += parseInt(arr[i].split(")")[1])
    }
}
// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(res);