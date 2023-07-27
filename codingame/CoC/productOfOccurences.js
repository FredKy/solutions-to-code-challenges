const s = readline().split("");
x = [...new Set(s)];
t = 1;
x.map((e) => {
  t *= s.join("").split(e).length - 1;
});
print(t);

var S = readline();

h = S.split("").reduce((o, e) => {
  o[e] = (o[e] || 0) + 1;
  return o;
}, {});
r = 1;
for (e of Object.values(h)) {
  r *= e;
}
console.log(r);
