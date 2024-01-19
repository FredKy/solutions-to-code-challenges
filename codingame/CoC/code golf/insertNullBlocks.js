b=+(r=readline)(d=r(s=0))
while(b--){[p,l]=r().split` `;d=d.slice(0,+p+s)+".".repeat(+l)+d.slice(+p+s);s+=+l}print(d)