function joinedLogger(level, sep) {
  return function () {
    let arr = [];
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i].level >= level) {
        arr.push(arguments[i].text);
      }
    }
    return arr.join(sep);
  };
}

const myJoinedlogger = joinedLogger(20, ":");
console.log(
  myJoinedlogger(
    { level: 10, text: "foo" },
    { level: 20, text: "bar" },
    { level: 30, text: "baz" }
  )
);
