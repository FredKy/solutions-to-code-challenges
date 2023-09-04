h={D:8,G:9,K:0}
s=readline().split` `.reduce((a,c)=>a+(h[c]??+c),0)%10
print(s==0?"Karaa":s==9?"Noufi":s)

//ruby solution
/* 
s=gets.chars.map{" 1234567DGK".index _1}.sum%10
puts s>8?"Noufi":s<1?"Karaa":s
*/