/* Story:

Mr. Finite wanted to acquire the secret to infinity from the Infinity Stone, thus breaking the curse of him not being able to deal with large numbers. So you and Mr. Finite set off to obtain the Infinity Stone.
However, there was a gate blocking you, Mr. Finite and the Infinity Stone with a quiz on it. To get through it you need to solve the quiz. You then read it:

Statement:

There is a string s with length n consisting of only digits (1-9).
Every second, each occurrence of 1 remains 1, each occurrence of 2 becomes 22, each occurrence of 3 becomes 333, each occurrence of 4 becomes 4444 and so on.

More formally, every digit is replaced by itself repeated by the digit times.

After 10^10 seconds, what is the x-th digit (1-Indexed) from the left?

Since Mr. Finite only has 10 fingers, he asks you for help.


Example Explanation:

Given a string s = 12345 with length n = 5, find the x = 10-th digit after 10^10 seconds.

Second 0:
12345

Second 1:
122333444455555

Second 2:
1222233333333344444444444444445555555555555555555555555

...

Second 4:
122222222222222223333333333333333333333333333333333333...

...

Second 10^10:
122222222222222222222222222222222222222222222222222222...

After 10^10 seconds, the 10-th digit will be 2.
You wonder whether Mr. Finite is tricking you since this is within the "10 finger" range...
Input
Line 1: n, denoting the length of s.
Line 2: s, denoting the initial string at second 0.
Line 3: x, denoting the index of the requested digit (1-Indexed).
Output
Print 1 digit, denoting the x-th digit after 10^10 seconds.
Constraints
1 ≤ n ≤ 111
1 ≤ x ≤ 10^18
After 10^10 seconds, length of s ≥ x
s only contains 1 - 9
Example
Input
5
12345
10
Output
2 */

//python
/* n,s,x=map(int,open(0))

for i in enumerate(str(s)):
    if (int(i[1])**100+i[0])>=x and i[0]<=x:
        print(i[1])
        break

 */

//ruby
/* 
n,s,x=*$<
puts s[-1+x=x.to_i]&&s[0,x][/^1+$/]?1:s[/[^1]/]
 */
