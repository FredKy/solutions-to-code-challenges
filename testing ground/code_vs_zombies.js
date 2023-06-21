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

function dist(p, q) {
  return Math.sqrt((q[0] - p[0]) ** 2 + (q[1] - p[1]) ** 2);
}

console.log(dist([0, 0], [1, 1]));

console.log(new Human(0, 0, 0));

function posDistToEntities(pos, entities) {
  var listOfDistToHumans = [];
  var listOfDistToZombies = [];
  var ents = [...entities];
  const len = ents.length;
  for (let i = 0; i < len; i++) {
    let currEntity = ents[i];
    if (currEntity.getType() === "zombie") {
      let pair = [dist(pos, currEntity.getPos()), move(currEntity.getPos())];
      listOfDistToZombies.push(pair);
    } else {
      let pair = [dist(pos, currEntity.getPos()), move(currEntity.getPos())];
      listOfDistToHumans.push(pair);
    }
  }
  listOfDistToZombies = listOfDistToZombies.sort();
  listOfDistToHumans = listOfDistToHumans.sort();
  return [listOfDistToZombies, listOfDistToHumans];
}

function move(pos) {
  return pos[0] + " " + pos[1];
}

var arr = [
  [
    [7253.2751223154355, "3100 7000"],
    [9626.006440887104, "11500 7100"],
  ],
  [
    [6797.793759742936, "8000 6100"],
    [7238.957107208193, "950 6000"],
  ],
];

arr[1].sort((a, b) => a[0] - b[0]);
console.log(arr);

var humans = [new Human(0, 3000, 4500), new Human(0, 14000, 4500)];
var zombies = [
  new Zombie(0, 2500, 4500, 2900, 4500),
  new Zombie(1, 15500, 6500, 15260, 6180),
];
const myPos = [8000, 4500];

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
console.log(mostThreatenedHumans(humans, zombies));
