var groupAnagrams = function (strs) {
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
  var res = [];
  var already_used = [];
  while (strs.length > 0) {
    if (!already_used.includes(strs[0])) {
      var group = [strs[0]];
      for (let i = 1; i < strs.length; i++) {
        if (isAnagram(group[0], strs[i])) {
          group.push(strs[i]);
          already_used.push(strs[i]);
        }
      }
      res.push(group);
    }
    strs.splice(0, 1);
  }
  return res;
};

//Fungerande algoritm men inte tillräckligt effektiv.

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(["bat"].includes("bat"));
