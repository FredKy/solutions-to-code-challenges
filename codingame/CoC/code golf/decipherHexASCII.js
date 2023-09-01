//First recieve N, then N lines with hex-numbers representing the characters of message, if msg.length is odd reverse the decoded message.
r=readline
N=n=+r(a=[])
while(N--){a.push(String.fromCharCode(parseInt(r(),16)))}if(n%2==1)a.reverse()
print(a.join``)

//Ruby solution
/* 
$><<[a=[*$<][1..].map{_1.hex.chr},a.reverse][a.size%2]*""
*/