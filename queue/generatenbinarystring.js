const Queue = require('./linkedlist/queue');

function generateNBinaryString(n) {
    let queue = new Queue();
    let count = 0;

    queue.enqueue('1');
    let result = [];
    while(count + queue.length < n) {
        let element = queue.dequeue();
        result.push(element);
        count++;
        queue.enqueue(element+'0');
        queue.enqueue(element+'1');
    }

    while(count < n) {
        let element = queue.dequeue();
        result.push(element);
        count++;
    }

    return result;

}

console.log(generateNBinaryString(7));

