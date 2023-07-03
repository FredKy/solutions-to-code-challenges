const T = readline().split(" ");
var res = "";

while (T.length > 0) {
  var current = T.shift();
  var splitIndex = 0;

  if (/^\d+$/.test(current)) {
    splitIndex = current.length - 1;
  } else {
    for (let i = 0; i < current.length; i++) {
      if (!/\d/.test(current[i])) {
        splitIndex = i;
        break;
      }
    }
  }

  var numberOfChars = parseInt(current.slice(0, splitIndex));
  var char = current.slice(splitIndex);
  if (!Number.isNaN(numberOfChars)) {
    switch (char) {
      case "sp":
        res += " ".repeat(numberOfChars);
        break;
      case "bS":
        res += "\\".repeat(numberOfChars);
        break;
      case "sQ":
        res += "'".repeat(numberOfChars);
        break;
      default:
        res += char.repeat(numberOfChars);
    }
  } else {
    if (char == "nl") {
      res += "\n";
    }
  }
}

console.log(res);
