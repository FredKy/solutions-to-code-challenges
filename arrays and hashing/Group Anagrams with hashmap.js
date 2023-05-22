var groupAnagrams = function (strs) {
  dict = {};
  strs.forEach((str) => {
    var count = new Array(26).fill(0);

    str.split("").forEach((c) => {
      count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    });

    if (dict[count] != null) {
      dict[count].push(str);
    } else {
      dict[count] = [str];
    }
  });
  var res = [];
  for ([key, value] of Object.entries(dict)) {
    res.push(value);
  }
  return res;
};

//Bra tidskomplexitet: O(M*N) där M är antalet givna strängar och N är strängarnas genomsnittliga längd.

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(["bat"].includes("bat"));
console.log("a".charCodeAt(0));
