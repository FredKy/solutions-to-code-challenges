//Input 10 0 ==> "aaaaaaaaaa"
//Input 5 1 ==> "abcde"
//Wraps around to a after z

i=readline().split` `
n=+i[0]
d=+i[1]
c=0
r=""
while(n--){r+=String.fromCharCode((c%26+1)+96);c+=d}print(r)

//Ruby solution
/* 
n,d=`dd`.split.map &:to_i
n.times{putc (d*_1)%26+97}
 */
