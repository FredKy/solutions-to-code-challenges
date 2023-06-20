class Entity {
  constructor(type, id, x, y, param0, param1, param2) {
    this.type = type;
    this.id = id;
    this.x = x;
    this.y = y;
    this.param0 = param0;
    this.param1 = param1;
    this.param2 = param2;
  }
  getType() {
    return this.type;
  }
  getId() {
    return this.id;
  }
  getPos() {
    return [this.x, this.y];
  }
  getZero() {
    return this.param0;
  }
  getOne() {
    return this.param1;
  }
  getTwo() {
    return this.param2;
  }
}
const myEntity = new Entity("EXPLORER", 0, 5, 5, 250, 1, 1);
const mySecondEntity = new Entity("WANDERER", 4, 4, 3, 39, 1, 1);
const myThirdEntity = new Entity("WANDERER", 7, 10, 10, 39, 1, 1);

const entitiesList = [myEntity, mySecondEntity, myThirdEntity];
entitiesList.sort((a, b) => a.getId() - b.getId());

console.log(entitiesList[0].getId());
/* function distance(x1, y1, x2, y2) {
  return Math.abs(x2 - x1) + Math.abs(y2 - y1);
} */

function dist(p, q) {
  return Math.abs(q[0] - p[0]) + Math.abs(q[1] - p[1]);
}

console.log(dist([0, 0], [3, 4]));
console.log(dist(myEntity.getPos(), mySecondEntity.getPos()));

function dictOfDistances(entities) {
  var dict = {};
  const len = entities.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      dict[[entities[i].getId(), entities[j].getId()]] = dist(
        entities[i].getPos(),
        entities[j].getPos()
      );
    }
  }
  return dict;
}

function fetchDist(id1, id2, distances) {
  if (distances[id1 + "," + id2] != null) {
    return distances[id1 + "," + id2];
  } else if (distances[id2 + "," + id1] != null) {
    return distances[id2 + "," + id1];
  } else return null;
}
var distances = dictOfDistances(entitiesList);
console.log(distances);
/* console.log(fetchDist(4, 0, distances));
console.log(fetchDist(7, 0, distances)); */

function posDistToEntities(pos, entities) {
  var listOfDistToExplorers = [];
  var listOfDistToWanderers = [];
  var ents = [...entities];
  var myId = ents.shift().getId();
  const len = ents.length;
  for (let i = 0; i < len; i++) {
    let currEntity = ents[i];
    if (currEntity.getType() === "WANDERER") {
      listOfDistToWanderers.push(dist(pos, currEntity.getPos()));
    } else {
      listOfDistToExplorers.push(dist(pos, currEntity.getPos()));
    }
  }
  listOfDistToWanderers = listOfDistToWanderers.sort();
  listOfDistToExplorers = listOfDistToExplorers.sort();
  return [listOfDistToWanderers, listOfDistToExplorers];
}

var myDistances = posDistToEntities(entitiesList[0].getPos(), entitiesList);
console.log(myDistances);
