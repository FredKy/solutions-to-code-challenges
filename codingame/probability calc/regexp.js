const SET = String.raw`(\{(?:-?\d+[,}])+)`;
const SINGLE = RegExp(`^${SET}$`);
const WRAPPED = RegExp(String.raw`\(${SET}\)`);

const PREOPS = [
  [
    /d(\d+)/,
    (match) =>
      unOp(
        match,
        (v) =>
          `{${Array(+v)
            .fill(null)
            .map((_, i) => i + 1)}}`
      ),
  ],
  [/(?<![{,])(\d+)(?![,}])/, (match) => unOp(match, (v) => `{${v}}`)],
];
const OPS = [
  [binOp("\\*"), (match) => mapOp(match, (lv, rv) => lv * rv)],
  [binOp("\\+", "*"), (match) => mapOp(match, (lv, rv) => lv + rv)],
  [binOp("-", "*"), (match) => mapOp(match, (lv, rv) => lv - rv)],
  [binOp(">", "*+-"), (match) => mapOp(match, (lv, rv) => (lv > rv ? 1 : 0))],
  [WRAPPED, (match) => unOp(match, (v) => v)],
];

let expr = readline();
for (const [regex, fn] of PREOPS) {
  let match;
  while ((match = expr.match(regex))) fn(match);
}
while (!SINGLE.test(expr))
  for (const [regex, fn] of OPS) {
    let match;
    while ((match = expr.match(regex))) fn(match);
  }

const values = num(expr).reduce(
  (map, outcome) => map.set(outcome, (map.get(outcome) ?? 0) + 1),
  new Map()
);
const outcomes = [...values]
  .map(([outcome, count]) => [+outcome, (count / num(expr).length) * 100])
  .sort((a, b) => a[0] - b[0]);
for (const [value, chance] of outcomes) {
  console.log(value, chance.toFixed(2));
}

function spliceExpr(match, value) {
  const buffer = expr.split("");
  buffer.splice(match.index, match[0].length, value);
  expr = buffer.join("");
}

function mapOp(match, fn) {
  const [, l, r] = match;
  spliceExpr(
    match,
    `{${num(l).flatMap((lv) => num(r).map((rv) => fn(lv, rv)))}}`
  );
}

function unOp(match, fn) {
  const [, v] = match;
  spliceExpr(match, fn(v));
}

function num(v) {
  return v.slice(1, -1).split(",").map(Number);
}

function binOp(op, l) {
  return RegExp(
    String.raw`(?<!${l ? `[${l}]` : "$"})${SET}${op}${SET}(?!${
      l ? `[${l}]` : "^"
    })`
  );
}
