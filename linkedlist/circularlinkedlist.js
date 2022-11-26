const Node = require('./node');

class CircularLinkedList {
    head;
    length = 0;

    createListFromArray(arr) {
        for(let element of arr) {
            this.addNodeAtLast(element);
        }
    }

    addNodeAtFirst(element) {
        let node = new Node(element);
        if(!this.length && !this.head) {
            this.head = node;
            this.head.next = this.head;
            this.length++;
            return;
        }
        node.next = this.head;
        this.head = node;

        let previousFirst = this.head.next;
        let current = this.head.next;

        while(current) {
            current = current.next;
            if(current && current.next === previousFirst) {
                break;
            }
        }
        current.next = node;
        this.length++;
    }

    addNodeAtLast(element) {
        let node = new Node(element);
        if(!this.length && !this.head) {
            this.head = node;
            this.head.next = this.head;
            this.length++;
            return;
        }
        let current = this.head;
        while(current && current.next !== this.head) {
            current = current.next;
        }

        current.next = node;
        node.next = head;
        this.length++;
    }

    addNodeAtNth(element, n) {

    }

    printList() {
        let current = this.head;
        let str = current.number+'--->';
        current = current.next;
        while(current && current !== this.head) {
            str+=current.number+'--->';
            current = current.next;
        }
        console.log(str);
    }
}

module.exports = CircularLinkedList;