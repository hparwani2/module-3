class DoublyNode {
    element;
    prev; 
    next;
    constructor(element) {
        this.element = element;
        this.prev = null;
        this.next = null;
    }
}

module.exports = DoublyNode;