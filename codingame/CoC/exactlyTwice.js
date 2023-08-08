//Sum of integers appearing exactly twice in a list, CG
n = readline((h = {})).split` `;
for (m of n) h[m] = (h[m] || 0) + 1;
s = 0;
for (k in h) s += h[k] == 2 ? +k : 0;
print(s);

//Python
/* l=list(map(int,input().split()))
print(sum([x if l.count(x)==2 else 0for x in l])//2) */
