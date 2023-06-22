var inputs = readline().split(' ');
const L = parseInt(inputs[0]);
const H = parseInt(inputs[1]);

// Build numerals list
const numerals = [...Array(20)].fill('');
for (let i = 0; i < H; i++) {
	readline()
		.match(new RegExp(`.{${L}}`, 'g'))
		.forEach((k, i) => numerals[i] += k + '\n');
}

// Load number 1
let n1 = [];
const l1 = readline();
for (let i = 0; i < l1; i++) {
	const j = i / H | 0;
	n1[j] = (n1[j] || '') + readline() + '\n';
}

// Load number 2
let n2 = [];
const l2 = readline();
for (let i = 0; i < l2; i++) {
	const j = i / H | 0;
	n2[j] = (n2[j] || '') + readline() + '\n';
}

const operation = readline();

// Convert both numbers into their actual value
const n1_value = n1.reduce((s, k, i) => s + 20 ** (n1.length - 1 - i) * numerals.indexOf(k), 0);
const n2_value = n2.reduce((s, k, i) => s + 20 ** (n2.length - 1 - i) * numerals.indexOf(k), 0);

// Calculate operation & convert result into base 20
let res = eval(n1_value + operation + n2_value);
const base_20_res = res ? [] : [0];
while (res != 0) {
	base_20_res.unshift(res % 20);
	res = res / 20 | 0;
}

// Display result
console.log(
	base_20_res
		.map(k => numerals[k])
		.join(''),
);
