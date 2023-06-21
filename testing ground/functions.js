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

//Python hack!
/* 
I=input
I(((int(I())+int(I())-1)%7+1))


print((int(input())+int(input())-1)%7+1)


I=input
m=int(I())
n=int(I())
I((m+n-1)%7+1)
 */