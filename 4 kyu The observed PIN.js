function getPINs(observed) {
  var res = [""];

  const one_digit = {
    1: ["1", "2", "4"],
    2: ["1", "2", "3", "5"],
    3: ["2", "3", "6"],
    4: ["1", "4", "5", "7"],
    5: ["2", "4", "5", "6", "8"],
    6: ["3", "5", "6", "9"],
    7: ["4", "7", "8"],
    8: ["5", "7", "8", "9", "0"],
    9: ["6", "8", "9"],
    0: ["8", "0"],
  };

  var obs_copy = (" " + observed).slice(1);

  function helper(obs_copy) {
    var arr = one_digit[obs_copy.charAt(0)];
    var new_elements = [];
    res.forEach((e) => {
      arr.forEach((digit) => {
        new_elements.push(e.toString() + digit.toString());
      });
    });
    res = new_elements;
    if (obs_copy.length == 1) {
      return res;
    } else {
      return helper(obs_copy.substring(1, obs_copy.length));
    }
  }

  return helper(obs_copy);
}

console.log(getPINs("11"));
