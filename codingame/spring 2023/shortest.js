// Dijkstra's algo modified for ants game

function generateEdges(cells) {
    const edges = []
    for (const cell of cells) {
       for (const neighbor of cell.neighbors) {
        edges.push([cell.index, neighbor, 1])
       }
    }
    return edges;
}

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