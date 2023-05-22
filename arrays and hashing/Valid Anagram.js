var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }
  dict = {};
  second_dict = {};
  s.split("").forEach((e) => {
    if (dict[e] == null) {
      dict[e] = 1;
    } else {
      dict[e] = dict[e] + 1;
    }
  });
  t.split("").forEach((e) => {
    if (second_dict[e] == null) {
      second_dict[e] = 1;
    } else {
      second_dict[e] = second_dict[e] + 1;
    }
  });
  for (let [key, value] of Object.entries(dict)) {
    if (second_dict[key] != value) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
