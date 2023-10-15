#Substitute ex. "#..#" => ".##."

s=gets
r=s.split(//).uniq
puts s.gsub(r[0],'ä').gsub(r[1],r[0]).gsub('ä',r[1])


s=gets.chars
a,b=s.uniq
puts s.map{_1==a ?b:a}*''