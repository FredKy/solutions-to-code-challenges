// A number is weird if it can be written as the sum of a power of 2 and a power of 3.
//Ex. 2 is weird since = 1^3 + 1^2 = 2
//Ex. 26 = 25 + 1 = 5^2 + 1^3

r = readline;
for (N = r(); N--; ) {
  n = r((w = 1));
  for (a = 99; a--; ) w *= 2 ** (a >> 3) + 3 ** (a & 7) - n;
  print((w ? "not " : "") + "weird");
}
