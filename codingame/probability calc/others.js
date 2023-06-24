var expr = [readline()];
function proc1(e) {
  //remove d's
  let res = [];
  for (let i = 0; i < e.length; i++) {
    let m = e[i].match(/d([0-9]+)/);
    if (!m) return e;
    for (let j = 1; j <= m[1]; j++) {
      res.push(
        e[i].substr(0, m.index) + j + e[i].substr(m.index + m[0].length)
      );
    }
  }
  return proc1(res);
}
function proc2(l) {
  //remove parenthesis
  let l2;
  do {
    l2 = l;
    l = l2.replace(/\([^\(]+\)/, (x) => procaux(x.substr(1, x.length - 2)));
  } while (l2 != l);
  return procaux(l);
}
function procaux(l) {
  let l2;
  do {
    l2 = l;
    l = l2.replace(/[0-9]+\*\-?[0-9]+/, (x) => eval(x));
  } while (l2 != l);
  do {
    l2 = l;
    l = l2.replace(/\-?[0-9]+(\+|\-)\-?[0-9]+/, (x) => eval(x));
  } while (l2 != l);
  do {
    l2 = l;
    l = l2.replace(/\-?[0-9]+(\<|\>)\-?[0-9]+/, (x) => (eval(x) ? 1 : 0));
  } while (l2 != l);
  return l;
}
expr = proc1(expr);
expr = expr.map(proc2);
let ob = {};
expr.forEach((v) => (ob[v] ? ob[v]++ : (ob[v] = 1)));
Object.keys(ob)
  .sort((a, b) => a - b)
  .forEach((k) =>
    console.log(`${k} ${((ob[k] / expr.length) * 100).toFixed(2)}`)
  );
