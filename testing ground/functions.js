// Remove trailing chars
var s = "item,,";
s = s.replace(/,+$/, "");
console.log(s);

var array = ["asdbv"];
console.log(array[0][2]);

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
var dict = { a: 1, b: 2, c: 3 };
for (const [key, value] of Object.entries(dict)) {
  console.log(key, value);
}

dict = { a: 1, b: 2, c: 3 };

console.log(Object.keys(dict)); // expected output : ['a', 'b', 'c']

console.log([1, 2, 3].join("").replace(/\d/g, ".").split(""));

console.log("123b34bn5b".replace(/\d/g, "."));

//Ruby, Antalet vägar från översta vänstra hörnet till nedre högra hörnet för grid med dimensioner (W,H), ett steg får antingen vara ned eller höger.
//Kombinatoriskt är svaret: (W+H-2)!/((W-1)!(H-1)!), i.e. hur många sätt man kan ordna ordet WWWHHHH
/* W = gets.to_i
H = gets.to_i

def NP(m, n)
    [m,n].min == 1 ? 1 : NP(m-1, n) + NP(m, n-1)
end

p NP(W,H) */
