r = readline;
for (N = r((q = R = 0)); N--; ) r()[0] == "P" && (q++, (R += q < 16 ? 6 : 10));
print(R);



r=readline
n=+r()
s=0
c=0;while(n--){if(r()=="PASS"){s+=6;c++;if(c==16)s+=4}}print(s)