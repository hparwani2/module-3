const LinkedList = require('../../linkedlist/linkedlist');
class Queue {
    list
    constructor() {
        this.list = new LinkedList();
    }

    createViaArray(arr) {
        for(let data of arr) {
            this.enqueue(data);
        }
    }

    enqueue(data) {
        this.list.addNodeAtLast(data);
    }

    dequeue() {
        return this.list.deleteNodeAtFirst();
    }

    print() {
        this.list.printList();
    }

    get front() {
        return this.list.head.number;
    }

    get rear() {
        return this.list.last.number;
    }

    get length() {
        return this.list.length;
    }
}

module.exports = Queue;