var groupAnagrams = function (strs) {
  var isAnagram = function (s, t) {
    return [...s].sort().join("") == [...t].sort().join("");
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

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(["bat"].includes("bat"));
