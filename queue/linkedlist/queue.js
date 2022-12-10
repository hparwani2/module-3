const LinkedList = require('../../linkedlist/linkedlist');
class Queue {
    list
    constructor() {
        this.list = new LinkedList();
    }

    enqueue(data) {
        this.list.addNodeAtLast(data);
    }

    dequeue() {
        return this.list.deleteNodeAtFirst();
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