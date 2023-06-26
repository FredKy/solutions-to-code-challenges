/**
 * Survive the wrath of Kutulu
 * Coded fearlessly by JohnnyYuge & nmahoude (ok we might have been a bit scared by the old god...but don't say anything)
 **/

//Utility functions
function dist(p, q) {
  return Math.abs(q[0] - p[0]) + Math.abs(q[1] - p[1]);
}

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

function posDistToEntities(pos, entities) {
  var listOfDistToExplorers = [];
  var listOfDistToWanderers = [];
  var ents = [...entities];
  var myId = ents.shift().getId();
  const len = ents.length;
  for (let i = 0; i < len; i++) {
    let currEntity = ents[i];
    if (
      currEntity.getType() === "WANDERER" ||
      currEntity.getType() === "SLASHER"
    ) {
      listOfDistToWanderers.push(dist(pos, currEntity.getPos()));
    } else {
      listOfDistToExplorers.push(dist(pos, currEntity.getPos()));
    }
  }
  listOfDistToWanderers = listOfDistToWanderers.sort();
  listOfDistToExplorers = listOfDistToExplorers.sort();
  return [listOfDistToWanderers.sort(), listOfDistToExplorers.sort()];
}

function getNonWallNeighbors(pos, area) {
  var height = area.length;
  var width = area[0].length;
  const res = [];
  for (
    let j = Math.max(0, pos[1] - 1);
    j <= Math.min(height - 1, pos[1] + 1);
    j++
  ) {
    for (
      let i = Math.max(0, pos[0] - 1);
      i <= Math.min(width - 1, pos[0] + 1);
      i++
    ) {
      if (area[j].charAt(i) !== "#" && dist(pos, [i, j]) === 1) {
        res.push([i, j]);
      }
    }
  }
  return res;
}

function generatePossiblePlays(myEntity, entities) {
  const currentDistances = posDistToEntities(myEntity.getPos(), entities);
  currentDistances.push(myEntity.getPos());
  var plays = [currentDistances];
  var nonWallNeighbors = getNonWallNeighbors(myEntity.getPos(), area);
  for (let neighborPos of nonWallNeighbors) {
    const neighborDistances = posDistToEntities(neighborPos, entities);
    neighborDistances.push(neighborPos);
    plays.push(neighborDistances);
  }

  //replace list of distances to entities with distance to closest entity (min)
  for (let item of plays) {
    //console.log(Math.min(...item[0]));
    item[0].length > 0
      ? (item[0] = Math.min(...item[0]))
      : (item[0] = Infinity);
    item[1].length > 0
      ? (item[1] = Math.min(...item[1]))
      : (item[1] = Infinity);
  }

  // a play contains: [mindist to WANDERERS, mindist to EXPLORERS, from pos]
  return plays;
}

//Entity class
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

const width = parseInt(readline());
const height = parseInt(readline());
const area = [];
for (let i = 0; i < height; i++) {
  const line = readline();
  area.push(line);
}
console.error(area);

var inputs = readline().split(" ");
const sanityLossLonely = parseInt(inputs[0]); // how much sanity you lose every turn when alone, always 3 until wood 1
const sanityLossGroup = parseInt(inputs[1]); // how much sanity you lose every turn when near another player, always 1 until wood 1
const wandererSpawnTime = parseInt(inputs[2]); // how many turns the wanderer take to spawn, always 3 until wood 1
const wandererLifeTime = parseInt(inputs[3]); // how many turns the wanderer is on map after spawning, always 40 until wood 1
var hasYelled = false;
// game loop
while (true) {
  var entities = [];

  const entityCount = parseInt(readline()); // the first given entity corresponds to your explorer
  for (let i = 0; i < entityCount; i++) {
    var inputs = readline().split(" ");
    const entityType = inputs[0];
    const id = parseInt(inputs[1]);
    const x = parseInt(inputs[2]);
    const y = parseInt(inputs[3]);
    const param0 = parseInt(inputs[4]);
    const param1 = parseInt(inputs[5]);
    const param2 = parseInt(inputs[6]);
    /*         console.error(entityType)
        console.error(id)
        console.error(x + " " + y)
        console.error(param0)
        console.error(param1)
        console.error(param2) */
    entities.push(new Entity(entityType, id, x, y, param0, param1, param2));
  }
  const me = entities[0];
  console.error(entities);
  console.error(me);
  var distances = posDistToEntities(me.getPos(), entities);
  console.error(distances);
  var listOfPlays = generatePossiblePlays(me, entities);
  console.error(listOfPlays);

  //Sort by max min distance to WANDERERS/SLASHERS
  listOfPlays.sort(function (a, b) {
    return b[0] - a[0];
  });
  const maxDistToWanderers = listOfPlays[0][0];
  const topListOfPlays = listOfPlays.filter((a) => a[0] == maxDistToWanderers);
  //Of top plays, sort by min distance to EXPLORERS
  topListOfPlays.sort(function (a, b) {
    return a[1] - b[1];
  });

  //If top move is to wait do it, otherwise move
  const topMove = topListOfPlays[0][2];
  if (topMove[0] === me.getPos()[0] && topMove[1] === me.getPos()[1]) {
    if (topListOfPlays[0][0] <= 3) {
      if (me.getTwo() > 0) {
        console.log("LIGHT");
      } else {
        console.log("WAIT");
      }
    } else if (me.getOne() > 0) {
      console.log("PLAN");
    } else if (me.getZero() < 50 && !hasYelled) {
      hasYelled = true;
      console.log("YELL");
    } else {
      console.log("WAIT");
    }
  } else {
    console.log(`MOVE ${topMove[0]} ${topMove[1]}`);
  }

  /* var nonWallNeighbors = getNonWallNeighbors(me.getPos(), area)
    console.error(nonWallNeighbors) */

  // Write an action using console.log()
  // To debug: console.error('Debug messages...');

  //console.log('WAIT');     // MOVE <x> <y> | WAIT
}
