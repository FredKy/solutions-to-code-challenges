b=+(r=readline)(d=r(s=0))
while(b--){[p,l]=r().split` `;d=d.slice(0,+p+s)+".".repeat(+l)+d.slice(+p+s);s+=+l}print(d)

//ruby solution
/* 
w=gets
gets
$<.reverse_each{|x|a=x.split.map(&:to_i);w.insert(a[0],"."*a[1])}
$><<w
*/