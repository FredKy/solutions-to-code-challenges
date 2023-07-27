const questionPrefix = readline();
const N = parseInt(readline());
res = [];
for (let i = 0; i < N; i++) {
  M = readline();
  M.startsWith(questionPrefix) ? res.push(M) : "";
}

res.length > 0 ? console.log(res.join("\n")) : console.log("EMPTY");
