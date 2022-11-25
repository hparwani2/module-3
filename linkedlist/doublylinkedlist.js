const DoublyNode = require('./doublenode');

class DoublyLinkedList {
    head;
    end;

    createListFromArray(arr) {
        for(let element of arr) {
            this.addNodeAtLast(element);
        }
    }

    addNodeAtFirst(element) {
        let node = new DoublyNode(element);
        if(!this.head && !this.end) {
            this.head = node;
            this.end = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    // null <--- 1 <---> 2 <----> 3 <----> 4e
    addNodeAtLast(element) {
        let node = new DoublyNode(element);
        if(!this.head && !this.end) {
            this.head = node;
            this.end = node;
            return;
        }
        this.end.next = node;
        node.prev = this.end;
        this.end = node;
    }

    printListStart() {
        let current = this.head;
        let str = '';
        while(current) {
            str+=current.element;
            current = current.next;
        }
        console.log(str);
    }

    printListEnd() {
        let current = this.end;
        let str = '';
        while(current) {
            str+=current.element+'--->';
            current = current.prev;
        }
        console.log(str);

    }
}


module.exports = DoublyLinkedList;