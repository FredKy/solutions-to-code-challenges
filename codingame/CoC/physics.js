/* You can calculate how deep is a well by dropping a rock in it and counting how much time passes before you hear the sound of the rock hitting the floor.
To do that, you will receive:
The g-force (not necessarily equal to 9.8m/s² here).
The formula giving the depth of a fall in relation to the time, that is H(t) = 1/2*g*t²
And the speed of sound (not necessarily equal to 340 m/s here)
Input
Line 1: A float t, the time in seconds you wait to hear the sound of the rock hitting the floor.
Line 2: A float g, representing the g-force in m/s².
Line 3: An integer c, representing the speed, in m/s, of sound.
Output
One line with the depth of the well, in meter, rounded down to the centimeter.
Constraints
0 ≤ t ≤ 7200
0 < g ≤ 500
0 < c ≤ 500
0 ≤ depth ≤ 10000
Example
Input
5.8
9.8
340 */
