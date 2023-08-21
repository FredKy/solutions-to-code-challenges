const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

var dailyTemperatures = function (temperatures) {
  let res = Array(temperatures.length).fill(0);
  let stack = [];
  temperatures.forEach((temp, i) => {
    console.error(temp, i);
    while (stack.length != 0 && temp > stack[stack.length - 1][0]) {
      let [stackT, stackI] = stack.pop();
      res[stackI] = i - stackI;
    }
    stack.push([temp, i]);
  });
  console.log(res);
  return res;
};
dailyTemperatures(temperatures);
