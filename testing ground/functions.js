// Remove trailing chars
var s = "item,,";
s = s.replace(/,+$/, "");
console.log(s)

var array = ['asdbv']
console.log(array[0][2])

function prime(n) {
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}