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

console.log([].flatten());
console.log([1, 2, 3].flatten());
console.log([[1, 2], 3, 4].flatten());
console.log([[1, 2], [[3, 4], 5], 6].flatten());
