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
const myEntity = new Entity("EXPLORER", 0, 7, 4, 250, 1, 1);
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

var myDistances = posDistToEntities(myEntity.getPos(), entitiesList);
console.log(myDistances);

var area = [
  "#########.#########",
  "#...#...#.#...#...#",
  "#.#...#.#.#.#...#.#",
  "#.##.##.###.##.##.#",
  "#.................#",
  "#.##.##.#.#.##.##.#",
  "#.##.#..#.#..#.##.#",
  "#......##.##......#",
  "####.###w.w###.####",
  "...#.....#.....#...",
  "####.###w.w###.####",
  "#......##.##......#",
  "#.##.#..#.#..#.##.#",
  "#.##.##.#.#.##.##.#",
  "#.................#",
  "#.##.##.###.##.##.#",
  "#.#...#.#.#.#...#.#",
  "#...#...#.#...#...#",
  "#########.#########",
];

function getNonWallNeighbors(pos, area) {
  var height = area.length;
  var width = area[0].length;
  //console.log(height, width);
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

console.log(getNonWallNeighbors([4, 4], area));

console.log(getNonWallNeighbors([1, 1], area));

console.log(Math.min([]));

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

var listOfPlays = generatePossiblePlays(myEntity, entitiesList);
console.log(listOfPlays);

listOfPlays.sort(function (a, b) {
  return b[0] - a[0];
});

const maxDistToWanderers = listOfPlays[0][0];
console.log(maxDistToWanderers);
const topListOfPlays = listOfPlays.filter((a) => a[0] == maxDistToWanderers);
topListOfPlays.sort(function (a, b) {
  return a[1] - b[1];
});

console.log(listOfPlays);
console.log(topListOfPlays);
/* console.log(
  [
    [5, 1, [8, 4]],
    [5, 10, [7, 5]],
  ].sort(function (a, b) {
    return a[1] - b[1];
  })
); */
