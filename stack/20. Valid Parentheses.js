var isValid = function (s) {
  var arr = s.split("");
  var stack = [];
  for (let i = 0; i < arr.length; i++) {
    if ("({[".includes(arr[i])) {
      stack.push(arr[i]);
    } else {
      if (stack.length > 0) {
        var tmp = "";
        switch (arr[i]) {
          case ")":
            tmp += "(";
            break;
          case "}":
            tmp += "{";
            break;
          case "]":
            tmp += "[";
        }
        if (stack.pop() !== tmp) {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  } else {
    return true;
  }
};

console.log(isValid("(){}[]{"));
