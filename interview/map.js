Array.prototype.myMap = function (fun) {
  var res = [];
  for (var i = 0; i < this.length; i++) {
    res.push(fun(this[i]));
  }
  return res;
};

const arr1 = [1, 2, 3].myMap((a) => a * 2); //
const arr2 = ["a", "b", "c", "d", "e", "f"].myMap(console.log); //

console.log(arr1); //
console.log(arr2);
