var inputs = readline().split(' ');
const L = parseInt(inputs[0]);
const H = parseInt(inputs[1]);
const numeralsGrid = []
for (let i = 0; i < H; i++) {
    const numeral = readline();
    numeralsGrid.push(numeral.split(""))
}

const num1 = []
const S1 = parseInt(readline());
for (let i = 0; i < S1; i++) {
    const num1Line = readline();
    num1.push(num1Line.split(""));
}
const num2 = []
const S2 = parseInt(readline());
for (let i = 0; i < S2; i++) {
    const num2Line = readline();
    num2.push(num2Line.split(""));
}
const operation = readline();

//Create string representations of each numeral and order in an array
//I.e. position in array corresponds to digit. For example: index 3 is digit 3
function convertDigitsToStrings(n, grid) {
    const numeralsInStringRepresentation = [];
    for (let i = 0; i < n; i++) {
        let stringNumeral = ""
        for (let j = L*i; j < L*i+L; j++) {
            for (let k = 0; k < H; k++) {
                stringNumeral += grid[k][j]
            }
        }
        numeralsInStringRepresentation.push(stringNumeral)
    }
    return numeralsInStringRepresentation;
}
const numeralsInStringRepresentation = convertDigitsToStrings(20, numeralsGrid);

//Convert input numbers' digits to string representations, n is number of digits
function convertNumeralDigitsToStrings(n, num) {
    const res = []
    for (let i = n-1; i > -1; i--) {
        let stringNumeral = ""
        for (let j = 0; j < L; j++) {
            for (let k = i*H; k < H*i+H; k++) {
                stringNumeral += num[k][j]
            }
        }
        res.push(stringNumeral)
    }
    return res;
}

const num1str = convertNumeralDigitsToStrings(num1.length/H, num1)
const num2str = convertNumeralDigitsToStrings(num2.length/H, num2)

console.error(numeralsInStringRepresentation)
console.error(num1str)
console.error(num2str)

//Convert Mayan digit to integer 
function convertToInteger(numStringRep) {
    const numberOfDigits = numStringRep.length
    let integer = 0;
    for (let i = numberOfDigits -1; i >= 0; i--) {
        let digit = numeralsInStringRepresentation.indexOf(numStringRep[i])
        integer += digit*Math.pow(20,i);
    }
    return integer;
}

const int1 = convertToInteger(num1str)
console.error("First: "+int1)

const int2 = convertToInteger(num2str)
console.error("Second: "+int2)


function intResult(int1, int2, operation) {
    var res = 0;
    switch (operation) {
        case "+":
            res = int1 + int2;
            break;
        case "-":
            res = int1 - int2;
            break;
        case "*":
            res = int1 * int2;
            break;
        case "/":
            res = Math.floor(int1 / int2);
            break;
    }
    console.error("Result in normal integer form: "+res)
    return res;
}

const result = intResult(int1, int2, operation);

function getDigitsOfMayanNumeral(integer) {
    if (integer == 0 || integer == 1) {
        console.error(integer)
        return [numeralsInStringRepresentation[integer].split("")]
    }
    let base = 20;
    let digits = [];
    let i = 0;
    while (base**i < integer) {
        i++
    }
    i-=1;
    while (i > -1) {
        let digit = Math.floor(integer / Math.pow(base, i))
        digits.push(numeralsInStringRepresentation[digit].split(""));
        integer -= Math.pow(base, i)*digit
        i--;
    }
    return digits;
}

const resultInMayanDigitsTransposed = getDigitsOfMayanNumeral(result)

for (let digit of resultInMayanDigitsTransposed) {
    for (let i = 0; i < H; i++) {
        let row = ""
        for (let j = 0; j < L; j++) {
            row += digit[i+H*j]
        }
        console.log(row)
    }
}
