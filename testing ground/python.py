# Sort list without touch elements at certain indeces
# N - number of integers
# A - string of integers separated by spaces
# M - number of integers to exclude from sort
# B - string of indeces separated by spaces,
# The indeces indicate which numbers in list which not have their index changed in A

import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

n = int(input())
a = list(map(int, input().split()))
m = int(input())
b = list(map(int, input().split()))

for i in range(n):
    j = i+1
    while j < n and i not in b:
        if a[i] > a[j] and j not in b:
            a[i], a[j] = a[j], a[i]
        j += 1

print(*a)


#Count permutations to find two factors, A, B of 8 digit vampire number N
import itertools
n=input()
l=len(n)//2
for p in itertools.permutations(n):
    a,b=int(''.join(p[:l])),int(''.join(p[l:]))
    if a*b==int(n):
        print(*sorted([a,b]))
        exit()

#Short python code for summing the elements of the boundary of an NxN matrix
i=input
p=int
n=p(i())
b=lambda:sum(p(x) for x in i().split())
a=b()
for o in range(n-2):l=i().split();a+=p(l[0])+p(l[-1])
if n>1:a+=b()
print(a)



