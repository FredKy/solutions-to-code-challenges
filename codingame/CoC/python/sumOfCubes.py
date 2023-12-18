import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

n = int(input())

def S(i, n):
    if n == 0: return 1
    if i**3 > n: return 0
    return S(i+1, n-i**3) + S(i+1, n)
print(S(1,n))