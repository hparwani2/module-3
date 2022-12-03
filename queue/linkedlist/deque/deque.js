const Queue = require('../queue');


class Deque extends Queue {
    constructor() {
        super();
    }

    addAtLast(data) {
        this.list.addNodeAtLast(data);
    } 

    addAtFirst(data) {
        this.list.addNodeAtFirst(data);
    }

    removeAtLast() {
        return this.list.deleteNodeAtLast();
    }

    removeAtFirst() {
        return this.list.deleteNodeAtFirst();
    }
}

module.exports = Deque;