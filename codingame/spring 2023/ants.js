/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

//test import
class MinPriorityQueue {
    constructor() {
        this.elements = [];
        this.priorities = {};
      }
    
      enqueue(priority, element) {
        this.elements.push(element);
        this.priorities[element] = priority;
      }
    
      dequeue() {
        if (this.isEmpty()) {
          return null;
        }
    
        const highestPriorityElement = this.elements.reduce((acc, curr) => {
          return this.priorities[curr] < this.priorities[acc] ? curr : acc;
        });
    
        const index = this.elements.indexOf(highestPriorityElement);
        this.elements.splice(index, 1);
        const priority = this.priorities[highestPriorityElement];
        delete this.priorities[highestPriorityElement];
    
        return [priority, highestPriorityElement];
      }
    
      isEmpty() {
        return this.elements.length === 0;
      }
}

// Generate edges of graph (weight 1 for all) from list of cells
function generateEdges(cells) {
    const edges = []
    for (const cell of cells) {
       for (const neighbor of cell.neighbors) {
        edges.push([cell.index, neighbor, 1])
       }
    }
    return edges;
}

// Given a list of edges of a connected undirected graph,
// with nodes numbered from 0 to n-1,
// return a list edges making up the minimum spanning tree.
function shortestPath(cells, n, src) {
  const edges = generateEdges(cells)
  let adj = {};
  //Adjacency list for each node
  for (i = 0; i < n; i++) {
    adj[i] = [];
  }

  //Add neighbors to adjacency list, for every node
  for (let edge of edges) {
    //console.error(edge)
    let [ n1, n2, weight ] = edge;
    //console.error(n1,n2,weight)
    adj[n1].push([n2, weight]);
  }

  let shortest = {};
  let minHeap = new MinPriorityQueue();
  //src stands for source node. Here we enqueue the source node with distance 0 to itself
  minHeap.enqueue(0, src);

  while (!minHeap.isEmpty()) {
    let [ w1, n1 ] = minHeap.dequeue();
    if (shortest.hasOwnProperty(n1)) {
      continue;
    }
    shortest[n1] = w1;
    //console.error(adj[n1])
    for (let pair of adj[n1]) {
        //console.error(pair)
      let [ n2, w2 ] = pair;
      if (!shortest.hasOwnProperty(n2)) {
        minHeap.enqueue(w1 + w2, n2);
      }
    }
  }
  return shortest;
}



class Cell {
    constructor(index, type, resources, neighbors, myAnts, oppAnts) {
        this.index = index
        this.type = type
        this.resources = resources
        this.neighbors = neighbors
        this.myAnts = myAnts
        this.oppAnts = oppAnts
    }
  }
  
  const cells = []
  
  const numberOfCells = parseInt(readline()); // amount of hexagonal cells in this map
  for (let i = 0; i < numberOfCells; i++) {
    const inputs = readline().split(' ');
    const type = parseInt(inputs[0]); // 0 for empty, 1 for eggs, 2 for food
    const initialResources = parseInt(inputs[1]); // the initial amount of eggs/crystals on this cell
    const neigh0 = parseInt(inputs[2]); // the index of the neighbouring cell for each direction
    const neigh1 = parseInt(inputs[3]);
    const neigh2 = parseInt(inputs[4]);
    const neigh3 = parseInt(inputs[5]);
    const neigh4 = parseInt(inputs[6]);
    const neigh5 = parseInt(inputs[7]);
  
    const cell = new Cell(
        i,
        type,
        initialResources,
        [neigh0, neigh1, neigh2, neigh3, neigh4, neigh5].filter(id => id > -1),
        0,
        0
    )
    cells.push(cell)
  }
  
  const numberOfBases = parseInt(readline());
  const myBases = readline().split(' ').map(n => parseInt(n))
  const oppBases = readline().split(' ').map(n => parseInt(n))
  
  // game loop
  while (true) {
    for (let i = 0; i < numberOfCells; i++) {
        const inputs = readline().split(' ')
        const resources = parseInt(inputs[0]); // the current amount of eggs/crystals on this cell
        const myAnts = parseInt(inputs[1]); // the amount of your ants on this cell
        const oppAnts = parseInt(inputs[2]); // the amount of opponent ants on this cell
  
        cells[i].resources = resources
        cells[i].myAnts = myAnts
        cells[i].oppAnts = oppAnts
    }
    console.error(myBases)
    const distancesFromBase = shortestPath(cells, numberOfCells, myBases[0])
    console.error(distancesFromBase)
    //console.error(generateEdges(cells))
  
  
    // WAIT | LINE <sourceIdx> <targetIdx> <strength> | BEACON <cellIdx> <strength> | MESSAGE <text>
    const actions = []
  
    var egg_cells = []
    var crystal_cells = []
    for (const cell of cells) {
        //console.error(cell)
        if (cell.type == 1 && cell.resources > 0) {
            egg_cells.push(cell)
        }
        if (cell.type == 2 && cell.resources > 0) {
            crystal_cells.push(cell)
        }
    }

    /* for (const cell of cells) {
        if (cell.resources > 0) {
            actions.push(`LINE ${myBases[0]} ${cell.index} 1`)
            break
        }
    } */
  

    var eggExists = egg_cells.length > 0
    if (eggExists) {
        let cellsWithDistances = []
        for (const cell of egg_cells) {
            cellsWithDistances.push([cell.index, distancesFromBase[cell.index]])
        }
        cellsWithDistances.sort((a,b) => a[1]-b[1])
        const cellIndex = cellsWithDistances[0][0]
        actions.push(`LINE ${myBases[0]} ${cellIndex} 1`)
    }

    if (!eggExists) {
        let cellsWithDistances = []
        for (const cell of crystal_cells) {
            cellsWithDistances.push([cell.index, distancesFromBase[cell.index]])
        }
        cellsWithDistances.sort((a,b) => a[1]-b[1])
        const cellIndex = cellsWithDistances[0][0]
        actions.push(`LINE ${myBases[0]} ${cellIndex} 1`)
    }

    // TODO: choose actions to perform and push them into actions. E.g:
    /* for (const cell of cells) {
        if (cell.resources > 0) {
            actions.push(`LINE ${myBases[0]} ${cell.index} 1`)
            break
        }
    } */
  
    // To debug: console.error('Debug messages...');
    // WAIT | LINE <sourceIdx> <targetIdx> <strength> | BEACON <cellIdx> <strength> | MESSAGE <text>
    if (actions.length === 0) {
        console.log('WAIT');
    } else {
        console.log(actions.join(';'))
    }
  }

/* // game loop
while (true) {
    for (let i = 0; i < numberOfCells; i++) {
        var inputs = readline().split(' ');
        const resources = parseInt(inputs[0]); // the current amount of eggs/crystals on this cell
        const myAnts = parseInt(inputs[1]); // the amount of your ants on this cell
        const oppAnts = parseInt(inputs[2]); // the amount of opponent ants on this cell
    }

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');


    // WAIT | LINE <sourceIdx> <targetIdx> <strength> | BEACON <cellIdx> <strength> | MESSAGE <text>
    console.log('WAIT');
}
 */