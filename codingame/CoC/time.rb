puts(
  case s = (gets.to_i / 1000.0).round
  in (86400..) then "24plus"
  else
    "%02d:%02d:%02d" % [s / 3600, s / 60 % 60, s % 60]
  end
)



# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

n = gets.to_i
warn n
a=[]
n=(n/1000.0).round
warn n
a.unshift n%60
n=(n/60.0).round
warn n
a.unshift n%60
n=n/60
a.unshift n


if a[0]>23
    puts "24plus"
else
    a.map!{"%02d"%_1}
    puts a*?:
end





require 'time'

n = (gets.to_f / 1000).round

time = Time.at(n)
ans = time.strftime('%H:%M:%S')

puts n >= 24 * 60 * 60 ? "24plus" : ans
