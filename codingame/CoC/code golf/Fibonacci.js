////Fibonacci subsequence from x to y
p=readline().split` `
x=+p[0]
y=+p[1]
a=[0,1]
for(i=1;i<y;i++){a.push(a[i-1]+a[i])}print(a.slice(x,y+1).join` `)

//Ruby
/* 
x,y=gets.split.map &:to_i
f=0,1
y.times{f<<f[-2]+f[-1]}
$><<f[x..y]*' '

 */
/* 
X,Y=gets.split.map &:to_i
b=2<<99
$><<X.upto(Y).map{b**_1*b/(b*b-b-1)%b}*" "
 */