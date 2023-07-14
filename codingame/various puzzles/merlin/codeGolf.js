// GOLF POWA !!!!!!!!!!!!!!!!!!
R = readline;
for (c of R((b = [(i = 0), 27, 7, 54, 73, 186, 292, 216, 448, 432])) +
  R((n = 16)) +
  R() +
  R())
  c > " " ? (n ^= +c ? b[c] : (c > "*") << i++) : 0;
for (; n ^ b[i]; ) i--;
print(i);

/*
// 123
// 456 => 987654321
// 789
const buttons = [ 27, 7, 54, 73, 186, 292, 216, 448, 432 ]; // 0b000011011, ...
const wanted = 495; // 0b111101111

// Read tab
const rows = [ readline(), readline(), readline() ];
// Construct bitboard
bitboard = 0;
for (i=0; i<9; ++i)
    bitboard |= ('*'==rows[i/3|0].charAt(i%3*2))<<i;
// Read buttons and apply change to magic square
for (c of readline())
    bitboard ^= buttons[c-1];
// Find last answer
for (i=0; i<9; ++i)
    if ((bitboard ^ buttons[i]) == wanted)
        print(i+1);
*/
