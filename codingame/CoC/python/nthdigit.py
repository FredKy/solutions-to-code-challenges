#1121231234123451234561234567... <<< find n:th digit in this sequence

import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

n = int(input())

k=0
while k*(k+1)//2<n:
    k+=1
print(n-k*(k-1)//2)