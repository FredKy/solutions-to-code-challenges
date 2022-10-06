function duplicateCount(text) {
  //...
}

function selectFromArr(arr, n) {
  let dupe = [...arr];
  let res = [];
  let len = dupe.length;
  while (n--) {
    let x = Math.floor(Math.random() * len);
    res.push(dupe[x]);
    dupe.splice(x, 1);
    len -= 1;
  }
  return res;
}

const getRandom = (arr, n) => {
  let res = new Array(n),
    len = arr.length,
    taken = new Array(len);
  while (n--) {
    let x = Math.floor(Math.random() * len);
    res[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return res;
};

console.log(selectFromArr([1, 2, 3, 4, 5], 2));

const arr = [];
arr.push("*");
console.log(JSON.stringify(arr));
