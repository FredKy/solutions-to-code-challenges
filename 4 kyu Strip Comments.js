function solution(input, markers) {
  return input
    .split("\n")
    .map(function (line) {
      for (var i = 0; i < line.length; i++) {
        if (markers.includes(line[i])) {
          return line.slice(0, i).trim();
        }
      }
      return line;
    })
    .join("\n");
}

console.log(
  solution("apples, plums % and bananas\npears\noranges !applesauce", [
    "%",
    "!",
  ])
);

console.log(
  solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
);

console.log(solution("Q @b\nu\ne -e f g", ["@", "-"]));

console.log(solution("a #b\nc\nd $e f g", ["#", "$"]));
