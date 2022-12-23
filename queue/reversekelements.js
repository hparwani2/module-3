const Queue = require('./linkedlist/queue');

/*
[6,7,8,9,10,5,4,3,2,1], 5

stack = 5 4 3 2 1



*/
function reverseKElements(queue, k, n) {
    let stack = [];

    for(let i=0;i<k;i++) {
        stack.push(queue.dequeue());
    }

    while(stack.length) {
        queue.enqueue(stack.pop());
    }

    for(let i=0;i<n-k;i++) {
        queue.enqueue(queue.dequeue());
    }



}


let queue = new Queue();
queue.createViaArray([1,2,3,4,5,6,7,8,9,10]);
reverseKElements(queue, 5, 10);

queue.print();