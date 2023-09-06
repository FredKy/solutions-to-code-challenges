//min
r=readline
N=+r()
T=+r()
R=+r()
print((N*T*R/540000).toFixed(2))

//alt
console.log((readline()*readline()*readline()/540000).toFixed(2))

//ruby
/* 
$><<"%.2f"%(eval(`tr "\n" "*"`)/54e4)
 */
