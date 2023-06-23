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
