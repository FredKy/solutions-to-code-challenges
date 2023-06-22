/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const L = parseInt(inputs[0]);
const C = parseInt(inputs[1]);

var area = []
for (let i = 0; i < L; i++) {
    const row = readline();
    area.push(row.split(""))
}

function printArea(area) {
    for (let line of area) {
        console.error(line.join(""))
    }
}

// A bunch of game state variables
var invertedMode = false;
var breakerMode = false;

// Priorites
var priorities = [ 'SOUTH', 'EAST', 'NORTH', 'WEST'];
var inverted_priorities = ['WEST', 'NORTH', 'EAST', 'SOUTH'];

// Used to get snapshot of the game state at a certain turn
var turnCount = 0;

// Locate starting pos
var myPos;
// Store end pos
var endPos;
// Starting intended move
var move = 'SOUTH'
// Teleporter locations
var teleporters = []


// Important: Store game states here to detect loop

states = {}

function storeCurrentState(s) {
    if (states[s] == null) {
        states[s] = 1
    } else {
        states[s] += 1
    }
}


// Locate stuff in the area

for (let i = 0; i < C; i++) {
    for (let j = 0; j < L; j++) {
        if (area[j][i] === "@") {
            myPos = [i,j]
        }
        if (area[j][i] === "$") {
            endPos = [i,j]
        }
        if (area[j][i] === "T") {
            teleporters.push([i,j])
        }
    }
}

console.error("myPos: " + myPos)
console.error("endPos: " + endPos)

// Store sequence of moves here
var listOfMoves = [];

while (true) {
    //Begin by storing current state
    let state = [myPos, move, invertedMode, breakerMode]
    storeCurrentState(state);
    //If we have been in this state more than a 100 times we're probably in a loop.
    if (states[state] > 100) {
        listOfMoves = ['LOOP']
        break;
    }
    
    let hasMoved = false;
    let prior = (invertedMode) ? [...inverted_priorities] : [...priorities];
    while (!hasMoved) {
        switch (move) {
            case 'SOUTH':
                let southY = myPos[1]+1
                //Smash obstacle before moving if we're in breaker mode
                if (breakerMode) {
                    if ("X".includes(area[southY][myPos[0]])) {
                        area[southY][myPos[0]] = " "
                    }
                }
                //Change direction if we detected an obstacle, do this until path is clear
                if ("#X".includes(area[southY][myPos[0]])) {
                    if (prior[0] === move) {
                        prior.shift();
                    }
                    move = prior[0]
                }
                //Path is clear so we move
                else {
                    myPos = [myPos[0], myPos[1]+1]
                    hasMoved = true;
                }
                break;
            case 'EAST':
                let eastX = myPos[0]+1
                if (breakerMode) {
                    if ("X".includes(area[myPos[1]][eastX])) {
                        area[myPos[1]][eastX] = " "
                    }
                }
                if ("#X".includes(area[myPos[1]][eastX])) {
                    if (prior[0] === move) {
                        prior.shift();
                    }
                    move = prior[0]
                } else {
                    myPos = [myPos[0]+1, myPos[1]]
                    hasMoved = true;
                }                
                break;
            case 'NORTH':
                let northY = myPos[1]-1
                if (breakerMode) {
                    if ("X".includes(area[northY][myPos[0]])) {
                        area[northY][myPos[0]] = " "
                    }
                }
                if ("#X".includes(area[northY][myPos[0]])) {
                    if (prior[0] === move) {
                        prior.shift();
                    }
                    move = prior[0]
                } else {
                    myPos = [myPos[0], myPos[1]-1]
                    hasMoved = true;
                }
                break;
            case 'WEST':
                let westX = myPos[0]-1
                if (breakerMode) {
                    if ("X".includes(area[myPos[1]][westX])) {
                        area[myPos[1]][westX] = " "
                    }
                }
                if ("#X".includes(area[myPos[1]][westX])) {
                    if (prior[0] === move) {
                        prior.shift();
                    }
                    move = prior[0]
                } else {
                    myPos = [myPos[0]-1, myPos[1]]
                    hasMoved = true;
                } 
                break;
        }
    }
    // Store move in sequence
    listOfMoves.push(move);

    // Robot has now moved, check what type of tile we landed on and apply its effect
    let typeOfTile = area[myPos[1]][myPos[0]]

    if (typeOfTile == "$") {
        break;
    }
    if (typeOfTile === "S") {
        move = 'SOUTH'
    }
    else if (typeOfTile === "E") {
        move = 'EAST'
    }
    else if (typeOfTile === "N") {
        move = 'NORTH'
    }
    else if (typeOfTile === "W") {
        move = 'WEST'
    }
    else if (typeOfTile === "B") {
        breakerMode = !breakerMode
    }
    else if (typeOfTile === "I") {
        invertedMode = !invertedMode
    }
    else if (typeOfTile === "T") {
        let arr = teleporters
        if ((myPos[0] == arr[0][0]) && (myPos[1] == arr[0][1])) {
            myPos = arr[1]
        } else {
            myPos = arr[0]
        }
    }
}

// We're done so print final sequence of moves

for (let move of listOfMoves) {
    console.log(move);
}

