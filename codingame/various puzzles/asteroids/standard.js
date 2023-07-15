var [W, H, t1, t2, t3] = readline().split(' ').map(Number);

const empty = '.';
const after = [];
const coords = {};

for (let y = 0; y < H; ++y) {
    var [first, second] = readline().split(' ').map(arr => arr.split(''));
    first.forEach((c, x) => {
        if (c !== empty) {
            coords[c] = [x, y];
        }
    });
    after.push(second);
}
after.forEach((line, y) => {
    line.forEach((c, x) => {
        if (c !== empty) {
            coords[c][0] += Math.floor(((x - coords[c][0]) / (t2 - t1)) * (t3 - t1));
            coords[c][1] += Math.floor(((y - coords[c][1]) / (t2 - t1)) * (t3 - t1));
        }
    });
})

const result = [...new Array(H)].map(() => new Array(W).fill(empty));

Object.keys(coords).sort().reverse().forEach((name) => {
    const [x, y] = coords[name];
    if (result?.[y]?.[x]) {
        result[y][x] = name;
    }
});

console.log(result.map(line => line.join('')).join('\n'));
