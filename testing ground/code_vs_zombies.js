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
  getPosition() {
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
  getPosition() {
    return [this.x, this.y];
  }
  getNextPosition() {
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
  var myId = ents.shift().getId();
  const len = ents.length;
  for (let i = 0; i < len; i++) {
    let currEntity = ents[i];
    if (currEntity.getType() === "zombie") {
      listOfDistToZombies.push(dist(pos, currEntity.getPos()));
    } else {
      listOfDistToHumans.push(dist(pos, currEntity.getPos()));
    }
  }
  listOfDistToZombies = listOfDistToZombies.sort();
  listOfDistToHumans = listOfDistToHumans.sort();
  return [listOfDistToZombies, listOfDistToHumans];
}
