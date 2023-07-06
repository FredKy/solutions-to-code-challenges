Array.prototype.flatten = function () {
  var copy = JSON.parse(JSON.stringify(this));

  var iter = true;
  while (iter) {
    iter = false;
    for (var i = 0; i < copy.length; i++) {
      if (Array.isArray(copy[i])) {
        iter = true;
        copy = [...copy.slice(0, i), ...copy[i], ...copy.slice(i + 1)];
      }
    }
  }
  return copy;
};

Array.prototype.flattenTwo = function () {
  const res = [];

  /* for (const e of this) {
    if (e instanceof Array) {
      var tmp = e.flatten();
      res.push(...tmp);
    } else {
      res.push(e);
    }
  } */
  for (var i = 0; i < this.length; i++) {
    if (this[i] instanceof Array) {
      var tmp = this[i].flatten();
      res.push(...tmp);
    } else {
      res.push(this[i]);
    }
  }
  return res;
};

console.log([].flatten());
console.log([1, 2, 3].flatten());
console.log([[1, 2], 3, 4].flatten());
console.log([[1, 2], [[3, 4], 5], 6].flatten());

console.log([].flattenTwo());
console.log([1, 2, 3].flattenTwo());
console.log([[1, 2], 3, 4].flattenTwo());
console.log([[1, 2], [[3, 4], 5], 6].flattenTwo());
