/* JS
r=readline
l=+r()
d=+r()
print(Math.round(d*l*Math.PI/3*10)/100)
 */
/* Ruby
$><<(gets.to_i*Math::PI*gets.to_i/30.0).round(2) */


/* Original Code:
a = Math.round(a);
Golfed Code:
a = 0 | a + .5; */