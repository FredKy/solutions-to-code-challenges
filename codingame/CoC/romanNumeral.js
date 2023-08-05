n=+readline()
r=""
f=(s,d)=>{if(n/d>=1)r+=s.repeat(Math.floor(n/d));n%=d}
f("M",1000)
f("CM",900)
f("D",500)
f("CD",400)
f("C",100)
f("XC",90)
f("L",50)
f("XL",40)
f("X",10)
f("IX",9)
f("V",5)
f("IV",4)
f("I",1)
print(r)

//python
/* n=int(input())
R={1000:"M",900:'CM',500:'D',400:'CD',100:'C',90:'XC',50:'L',40:'XL',10:'X',9:'IX',5:'V',4:'IV',1:'I'}
a=''
for r in R:x=n//r;a+=R[r]*x;n-=x*r
print(a) */