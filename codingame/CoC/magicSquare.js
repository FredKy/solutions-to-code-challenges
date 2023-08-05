// python
/* 
m=int(input())-20
P=print
P(m,1,12,7)
P(11,8,m-1,2)
P(5,10,3,m+2)
P(4,m+1,6,9)
*/

//JS but forgot to alias print
/* C = +readline() - 20;
print(`${C} 1 12 7`);
print(`11 8 ${C - 1} 2`);
print(`5 10 3 ${C + 2}`);
print(`4 ${C + 1} 6 9`); */
//I.e.
let C = 22 - 20;
let P = console.log;
P(`${C} 1 12 7`);
P(`11 8 ${C - 1} 2`);
P(`5 10 3 ${C + 2}`);
P(`4 ${C + 1} 6 9`);


