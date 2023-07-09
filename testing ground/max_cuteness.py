import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

cuteness = list(map(int, input().split()))

max_cuteness = -1
max_indices = (-1, -1)

for i in range(len(cuteness)):
    for j in range(i + 1, len(cuteness)):
        if (cuteness[i] > 0 and cuteness[j] > 0) or (cuteness[i] < 0 and cuteness[j] < 0):
            total_cuteness = abs(cuteness[i]) + abs(cuteness[j])
            if total_cuteness > max_cuteness:
                max_cuteness = total_cuteness
                max_indices = (i, j)

print(f"{max_indices[0]} {max_indices[1]}")

