import { MinPriorityQueue } from "@datastructures-js/priority-queue";

//Probably contains errors, haven't tested

// Given a list of edges of a connected undirected graph,
// with nodes numbered from 1 to n,
// return a list edges making up the minimum spanning tree.
function shortestPath(edges, n, src) {
  let adj = {};
  //Adjacency list for each node
  for (i = 1; i < n + 1; i++) {
    adj[i] = [];
  }
  //Add neighbors to adjacency list, for every node
  for (let edge of edges) {
    let { n1, n2, weight } = edge;
    adj[n1].push([n2, weight]);
  }

  let shortest = {};
  let minHeap = new MinPriorityQueue({
    priority: (item) => item[0],
  });
  //src stands for source node. Here we enqueue the source node with distance 0 to itself
  minHeap.enqueue([0, src]);

  while (minHeap.front() !== null) {
    let { w1, n1 } = minHeap.dequeue().element;
    if (shortest.hasOwnProperty(n1)) {
      continue;
    }
    shortest[n1] = w1;
    for (let pair of adj[n1]) {
      let { neighbor, w2 } = pair;
      if (!shortest.hasOwnProperty(neighbor)) {
        minHeap.add([w1 + w2, n2]);
      }
    }
  }
  return shortest;
}
