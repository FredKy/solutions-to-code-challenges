for(n=(r=readline)();n--;)print(r(x='aAeEiIoOuU').match(/[aeiou]/ig)?.sort((a,b)=>x.search(a)-x.search(b))[0]||'NONE')

r=readline
N=+r()
while(N--){W=r().split``.sort((a,b)=>a.localeCompare(b)).join``.match(/[aeiou]/i);print(W?W[0]:"NONE")}