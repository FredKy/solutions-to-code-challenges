/* Giving an integer n, you will be given n lines with n numbers.

For each line, you will need to output the sum of the numbers in the line that are divisible by n.
Input
Line 1 An integer n.
Next n lines Each line contains n space-separated positive integers.
Output
n lines The sum of the numbers in the line that are divisible by n.
Constraints
0<n<100
Example
Input
3
165 29 104
4 60 12
47 93 168
Output
165
72
261 */

for(m=n=(r=readline)();n--;)print(r().split` `.filter(e=>+e%m==0).reduce((a,b)=>a+ +b,0))