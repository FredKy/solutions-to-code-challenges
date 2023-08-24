var partition = function (s) {
  var solutions = {};
  function dfs(i, candidate) {
    if (i >= s.length) {
      let acc = "";
      for (let w of candidate) {
        if (w != w.split("").reverse().join("")) return;
        acc += w;
      }
      if (acc != s) return;
      solutions[candidate] = candidate;
      return;
    }
    for (let j = 0; j < candidate.length; j++) {
      let old = candidate[j];
      candidate[j] = candidate[j] + s[i];
      dfs(i + 1, [...candidate]);
      candidate[j] = old;
    }
    candidate.push(s[i]);
    dfs(i + 1, [...candidate]);
    candidate.pop();
  }
  dfs(0, []);
  return Object.values(solutions);
};

for (let sol of partition("efe")) {
  console.log(sol);
}
