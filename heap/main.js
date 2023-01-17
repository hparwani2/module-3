const Heap = require('./heap');

const minHeap = new Heap((child, parent) => child < parent);
minHeap.add(5);
minHeap.add(2);
minHeap.add(3);
minHeap.add(6);
minHeap.add(10);
minHeap.add(9);
minHeap.add(4);

minHeap.print();

console.log(minHeap.poll());

minHeap.print();