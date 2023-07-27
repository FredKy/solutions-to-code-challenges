/* You must output the next element of a given element N following the rule of Look-and-say sequence.

The rule of Look-and-say sequence is as follows: To generate the next element of the sequence from the previous element, read off the digits of the previous element, counting the number of digits in groups of the same digit.

For instance, given "1211", the next element is "111221" because "1211" is read of as "one 1, one 2, then two 1s".

Here are few more examples:

1211 -> 111221 -> 312211 -> 13112221 -> ...
36988 -> 13161928 -> 1113111611191218 -> 31133116311911121118 -> ... */

var n = "1113111611191218".split("");
var r = "";
for (let i = 0; i < n.length; i++) {
  let c = 1;
  let e = n[i];
  if (i < n.length - 1) {
    for (let j = i + 1; j < n.length; j++) {
      if (e == n[j]) {
        c++;
        i++;
      } else {
        break;
      }
    }
  }
  r += c + e;
}

console.log(r);

// print(readline().match(/((.)\2*)/g).map(x=>x.length+x[0]).join``)
