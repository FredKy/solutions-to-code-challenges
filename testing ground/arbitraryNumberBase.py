import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

k = int(input())
n = int(input())

# Write an answer using print
# To debug: print("Debug messages...", file=sys.stderr, flush=True)
br2=0
step = 0
while n>0:
    
    cif = n%(k+1)
    br2 = br2+(k-cif)*(k+1)**step
    n=n//(k+1)
    step += 1

print(br2)