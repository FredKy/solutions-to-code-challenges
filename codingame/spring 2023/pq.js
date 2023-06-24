//Modified prioroity queue to minimum

class PriorityQueue {
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
        //Change direction of inequality to go for max
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

const queue = new PriorityQueue();

queue.enqueue(1, "A");
queue.enqueue(2, "B");
queue.enqueue(0, "C");

console.log(queue.dequeue()); // Output: [0, "C"]
console.log(queue.dequeue()); // Output: [1, "A"]
console.log(queue.dequeue()); // Output: [2, "B"]
console.log(queue.dequeue()); // Output: null
