#prints true if the binary expansion of an integer has an odd number of 1's in it, else prints false
p gets.to_i.to_s(2).count("1")%2==1