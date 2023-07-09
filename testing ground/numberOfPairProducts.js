// Find the number of ways the number N can be written as AxB where A and B are positive natural numbers

//Python
/* 
c=0
n=int(input())
for i in range(1,int(n**0.5+1)):c+=2*(n%i==0)-(i==n**0.5)
print(c)
*/

//C
/* 
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
  long long N;
  scanf("%lld", &N);

  int count = 0;
  for (unsigned long long int i = 1; i * i <= N; i++) {
    if (N % i == 0) {
      count++;
      if (i * i != N) {
        count++;
      }
    }
  }

  printf("%d", count);

  return 0;
}
*/

//Python again
/* 
import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

n = int(input())
s=0
# Write an answer using print
# To debug: print("Debug messages...", file=sys.stderr, flush=True)
for i in range(1,int(n**.5+1)):
    if n%i<1:
        s+=1
print(s*2-(int(n**.5)==n**.5))

*/