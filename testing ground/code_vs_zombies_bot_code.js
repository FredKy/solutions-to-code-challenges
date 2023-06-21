/**
 * Save humans, destroy zombies!
 **/

// classes

class Human {
    constructor(id, x, y, type) {
      this.id = id;
      this.x = x;
      this.y = y;
      this.type = type || "human";
    }
    getId() {
      return this.id;
    }
    getX() {
      return this.x;
    }
    getY() {
      return this.y;
    }
    getPos() {
      return [this.x, this.y];
    }
    getType() {
      return this.type;
    }
  }
  
  class Zombie {
    constructor(id, x, y, xNext, yNext, type) {
      this.id = id;
      this.x = x;
      this.y = y;
      this.xNext = xNext;
      this.yNext = yNext;
      this.type = type || "zombie";
    }
    getId() {
      return this.id;
    }
    getX() {
      return this.x;
    }
    getY() {
      return this.y;
    }
    getPos() {
      return [this.x, this.y];
    }
    getNextPos() {
      return [this.yNext, this.xNext];
    }
    getType() {
      return this.type;
    }
  }
// functions

function dist(p, q) {
    return Math.sqrt((q[0] - p[0]) ** 2 + (q[1] - p[1]) ** 2);
}

function move(pos) {
    return pos[0]+" "+pos[1];
}

function posDistToEntities(pos, entities) {
    var listOfDistToHumans = [];
    var listOfDistToZombies = [];
    var ents = [...entities];
    const len = ents.length;
    for (let i = 0; i < len; i++) {
      let currEntity = ents[i];
      if (currEntity.getType() === "zombie") {
        let pair = [dist(pos, currEntity.getPos()), move(currEntity.getPos())]
        listOfDistToZombies.push(pair);
      } else {
        let pair = [dist(pos, currEntity.getPos()), move(currEntity.getPos())]
        listOfDistToHumans.push(pair);
      }
    }
    listOfDistToZombies = listOfDistToZombies.sort();
    listOfDistToHumans = listOfDistToHumans.sort();
    return [listOfDistToZombies, listOfDistToHumans];
  }

  function getHumanById(id, humans) {
    for (let human of humans) {
      if (human.getId() === id) {
        return human;
      }
    }
    return null;
  }
  
  function mostThreatenedHumans(humans, zombies, myPos) {
    const zombieSpeed = 400;
    var res = [];
    for (let i = 0; i < humans.length; i++) {
      let distances = [];
      distances.push(
        posDistToEntities(humans[i].getPos(), zombies)[0].sort(
          // Shortest distance first in array
          (a, b) => a[0] - b[0]
        )
      );
      console.error("dist: " + distances[0][0][0]);
      console.error("my dist to human: " + dist(myPos, humans[i].getPos()));
      // Only add human to list if I can reach it within time.
      if (
        distances[0][0][0] / zombieSpeed >
        dist(myPos, humans[i].getPos()) / 1000
      ) {
        res.push([...distances, humans[i].getId()]);
      }
    }
    res.sort((a, b) => a[0][0][0] - b[0][0][0])
    return res;
  }
  

// game loop
while (true) {
    var inputs = readline().split(' ');
    const x = parseInt(inputs[0]);
    const y = parseInt(inputs[1]);
    const myPos = [x,y]
    const humanCount = parseInt(readline());
    const humans = [];
    for (let i = 0; i < humanCount; i++) {
        var inputs = readline().split(' ');
        const humanId = parseInt(inputs[0]);
        const humanX = parseInt(inputs[1]);
        const humanY = parseInt(inputs[2]);
        humans.push(new Human(humanId, humanX, humanY))
    }
    const zombieCount = parseInt(readline());
    const zombies = [];
    for (let i = 0; i < zombieCount; i++) {
        var inputs = readline().split(' ');
        const zombieId = parseInt(inputs[0]);
        const zombieX = parseInt(inputs[1]);
        const zombieY = parseInt(inputs[2]);
        const zombieXNext = parseInt(inputs[3]);
        const zombieYNext = parseInt(inputs[4]);
        zombies.push(new Zombie(zombieId, zombieX, zombieY, zombieXNext, zombieYNext))
    }
    console.error(myPos)
    console.error(humans)
    console.error(zombies)
    const entities = [...humans].concat(zombies)
    console.error(entities)
    const myDistancesAndPositions = posDistToEntities(myPos, entities)
    console.error(myDistancesAndPositions)
    // Sort zombie by
    myDistancesAndPositions[0].sort((a,b) => a[0]-b[0])
    console.error(myDistancesAndPositions)
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    aliveHumans = mostThreatenedHumans(humans, zombies, myPos);
    console.error(aliveHumans)

    if (humans.length >= 1) {
        if (aliveHumans.length > 0) {
            // id of closest human
            let id = aliveHumans[0][1]
            let human = getHumanById(id, humans)
            console.log(move(human.getPos()))
        } else {
            console.log(move(humans[0].getPos()));
        }  
    } else if (zombies.length > 0) {
        console.log(myDistancesAndPositions[0][0][1])
    } else {
        console.log(myPos)
    }

    //console.log('0 0');     // Your destination coordinates

}