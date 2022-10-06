function mix(s1, s2) {
  let str = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  /*   dict1 = {};
  dict2 = {}; */
  arr = [];
  /* arr2 = []; */
  alphabet.forEach((char) => {
    let count1 = countOccurences(char, s1);
    let count2 = countOccurences(char, s2);
    if (count1 > 1 || count2 > 1) arr.push([char, count1, count2]);
  });
  /* console.log(dict1["a"] + " and " + dict2["a"]);
  console.log(arr);
  console.log(arr2); */
  console.log(arr);

  arr.forEach((e) => {
    e.push(Math.max(e[1], e[2]));
    if (e[1] > e[2]) e.push("1");
    else if (e[1] < e[2]) e.push("2");
    else e.push("3");
  });
  console.log(arr);
  arr.sort(function (a, b) {
    return b[3] - a[3];
  });
  /* arr.sort(function (a, b) {
    return a[4].localeCompare(b[4]);
  }); */
  console.log(arr);

  /* arr.sort(function (a, b) {
    return a[0].localeCompare(b[0]);
  });
  console.log(arr); */
  /* arr2 = [];
  for (let i = 0; i < arr.length - 1; i++) {
      let sub = [];

  } */

  var groups = {};

  arr.forEach(function (p) {
    var key = p[3];
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(p);
  });

  /* for (const [key, value] of Object.entries(groups)) {
    console.log("Key: " + key + " Value: " + value);
  } */

  subArrays = Object.keys(groups).map(function (key) {
    return groups[key];
  });
  console.log(subArrays);

  subArrays.forEach((e) => {
    e.sort(function (a, b) {
      return a[0].localeCompare(b[0]);
    });
  });
  subArrays.forEach((e) => {
    e.sort(function (a, b) {
      return a[4].localeCompare(b[4]);
    });
  });

  /* arr.sort(function (a, b) {
    return a[4].localeCompare(b[4]);
  }); */
  console.log(subArrays);
  /* subArrays.forEach((e) => {
    e.forEach((f) => {
      if (f[1] > f[2]) {
        str += "1:";
      } else if (f[1] < f[2]) {
        str += "2:";
      } else {
        str += "=:";
      }
      for (let i = 0; i < f[3]; i++) {
        str += f[0];
      }
      str += "/";
    });
  }); */
  for (let j = subArrays.length - 1; j > -1; j--) {
    subArrays[j].forEach((f) => {
      if (f[1] > f[2]) {
        str += "1:";
      } else if (f[1] < f[2]) {
        str += "2:";
      } else {
        str += "=:";
      }
      for (let i = 0; i < f[3]; i++) {
        str += f[0];
      }
      str += "/";
    });
  }
  str = str.substring(0, str.length - 1);
  console.log(str);
  return str;
}

/* function compare(a, b) {
  return a[0].localeCompare(b[0]);
} */

function countOccurences(ch, str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) count += 1;
  }
  return count;
}

console.log(countOccurences("a", "Banana"));
mix("Banana", "Banananas");
mix("looping is fun but dangerous", "less dangerous than coding");
mix("A generation must confront the looming ", "codewarrs");
mix(" In many languages", " there's a pair of functions");
mix("Are the kids at home? aaaaa fffff", "Yes they are here! aaaaa fffff");
