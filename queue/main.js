const Queue = require('./linkedlist/queue');

const Deque = require('./linkedlist/deque/deque');

let deque = new Deque();

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(`front ----> ${queue.front}`);
console.log(`rear ----> ${queue.rear}`);

queue.dequeue();

console.log(`front ----> ${queue.front}`);
console.log(`rear ----> ${queue.rear}`);



deque.addAtFirst(1);
deque.addAtFirst(2);
deque.addAtLast(3);
deque.addAtFirst(4);

console.log(`front ----> ${deque.front}`);
console.log(`rear ----> ${deque.rear}`);

deque.removeAtFirst();

console.log(`front ----> ${deque.front}`);
console.log(`rear ----> ${deque.rear}`);