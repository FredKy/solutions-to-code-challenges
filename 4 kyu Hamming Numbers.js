//Naive solution (too slow)

function hammingOld(n) {
  const h = {};
  let res = [];
  for (let i = 0; i < 40; i++) {
    for (let j = 0; j < 30; j++) {
      for (let k = 0; k < 20; k++) {
        if (h[[2, i]] == null) h[[2, i]] = Math.pow(2, i);
        if (h[[3, j]] == null) h[[3, j]] = Math.pow(3, j);
        if (h[[5, k]] == null) h[[5, k]] = Math.pow(5, k);
        res.push(h[[2, i]] * h[[3, j]] * h[[5, k]]);
      }
    }
  }
  res.sort((a, b) => a - b);
  return res[n - 1];
}
//hamming(836) should be 16777216
console.log(hammingOld(836));

//Using queues
function hamming(n) {
  var hammingNumbers = [];
  function* helper() {
    var queues = { 2: [], 3: [], 5: [] };
    var base;
    var nextHam = 1;
    while (true) {
      yield nextHam;
      for (base in queues) {
        queues[base].push(nextHam * base);
      }
      var queuesArray = Object.values(queues).map((a) => a[0]);
      nextHam = queuesArray.reduce((min, val) => Math.min(min, val));
      for (base in queues) {
        if (queues[base][0] == nextHam) queues[base].shift();
      }
    }
  }
  let iterator = helper();
  for (let i = 1; i <= n; i++) {
    hammingNumbers.push(iterator.next());
  }
  return hammingNumbers.pop().value;
}
console.log(hamming(20));

/* 
const known = []

// why not generate them all
// up to Number.MAX_SAFE_INTEGER 
// in less than a second? 😎

for (const pow2 of Array(52).keys())
  for (const pow3 of Array(33).keys())
    for (const pow5 of Array(22).keys())
      known.push(2 ** pow2 * 3 ** pow3 * 5 ** pow5)
      
const ascending = (a, b) => a - b
known.sort(ascending)

const hamming = (n) => known[n-1]
*/

//Pretty solution

function hammingPretty(n) {
  var seq = [1];
  var i2 = 0,
    i3 = 0,
    i5 = 0;
  for (var i = 1; i < n; i++) {
    var x = Math.min(2 * seq[i2], 3 * seq[i3], 5 * seq[i5]);
    seq.push(x);
    if (2 * seq[i2] <= x) i2++;
    if (3 * seq[i3] <= x) i3++;
    if (5 * seq[i5] <= x) i5++;
  }
  return seq[n - 1];
}
