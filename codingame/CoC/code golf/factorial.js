r=readline
X=+r()
N=+r(f=n=>n<2?1:n*f(n-1))
print(f(X)/f(X-N))

//ruby
/* 
x=gets.to_i
n=gets.to_i
f=->n{[1,*2..n].inject :*}
p f[x]/f[x-n]
*/