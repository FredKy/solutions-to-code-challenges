r=readline
n=+r()
p=r(s=0).split` `
for(i=0;i<n;i++){s+=+p[i]}print(String.fromCharCode(~~s/n%26+65))

//ruby
/* 
a=`dd`.split[1..].map &:to_i
$><<(a.sum/a.size%26+65).chr
*/

//python
/*
i=int
I=input
n=i(I())
print(chr(65+(sum(map(i,I().split()))//n)%26))
*/