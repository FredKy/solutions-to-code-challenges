/* You have to print whether an expression with parentheses is correctly written.
Each opening ( must be closed by a ).
Input
A string S containing only ( and ) characters.
Output
Print true if the expression is correct and false otherwise.
Constraints
0 < N <= 1000
0 < length of S <= 1024
Example
Input
()()
Output
true */

for(c of readline(b=l=1))if((l+=c=="("?1:-1)<1){b="0";break}print(b&&l==1)