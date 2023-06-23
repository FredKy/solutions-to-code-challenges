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

//Iterative factorial JS
function sFact(num) {
  var rval = 1;
  for (var i = 2; i <= num; i++) rval = rval * i;
  return rval;
}

// find the max length of string elements in an array
arr = ["1", "12", "123"];
max = Math.max(...arr.map((element) => element.length));

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

console.log(dec2bin(1)); // 1
console.log(dec2bin(-1)); // 11111111111111111111111111111111
console.log(dec2bin(256)); // 100000000
console.log(dec2bin(-256)); // 11111111111111111111111100000000

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]


//Array.from(Array(10).keys())
//=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//[...Array(10).keys()]
//=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//Array.from({length: 10}, (_, i) => i + 1)
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Permutatations of array
const permutations = arr => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
          item,
          ...val,
        ])
      ),
    []
  );
};
