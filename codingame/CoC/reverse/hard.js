/* 
The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:
01 Test 1
Input
Expected output
22
10
4
2 1
02 Test 2
Input
Expected output
24
12
8
2 0
03 Test 3
Input
Expected output
17
8
4
2 1
04 Test 4
Input
Expected output
9
12
9
0 1
05 Test 5
Input
Expected output
8
12
9
0 1
06 Test 6
Input
Expected output
1
12
4
0 1
07 Test 7
Input
Expected output
0
20
5
0 0
08 Test 8
Input
Expected output
1337
42
4
31 9
09 Test 9
Input
Expected output
400
31
7
12 4
10 Test 10
Input
Expected output
13
2
1
6 1
11 Test 11
Input
Expected output
12
2
1
6 0
*/
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
const L = parseInt(readline());
const S = parseInt(readline());

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(Math.floor(N / L), Math.ceil((N % L) / S));
