a,d,n=$<.map &:to_i
puts a+d*n-d

a,d,n=$<.read.split.map(&:to_i)
p (n-1)*d+a