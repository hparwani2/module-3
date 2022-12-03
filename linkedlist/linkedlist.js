const Node = require('./node');

class LinkedList {
    head;

    constructor() {}

    createListViaArray(arr) {
        for(let i=0;i<arr.length;i++) {
            this.addNodeAtLast(arr[i]);
        }
    }

    
    addNodeAtFirst(element) {
        let node = new Node(element);
        if(!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    // 1 2h ---> 3 ---> 4
    addNodeAtNth(element, n) {
        if(!this.head || n === 0) {
            this.addNodeAtFirst(element);
        }
        let current = this.head;
        let node = new Node(element);
        while(n-- > 1 && current) {
            current = current.next;
        }
        let next = current.next;
        current.next = node;
        node.next = next;
    }

    addNodeAtLast(number) {
        let node = new Node(number);
        if(!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
    }

    deleteNodeAtFirst() {
        if(!this.head) {
            throw new Error('No Node is there');
        }
        let data = this.head.number;
        let next = this.head.next;
        this.head.next = null;
        this.head = next;

        return data;
    }

    // 1 --> null
    deleteNodeAtLast() {
        if(!this.head) {
            throw new Error('No Node is there');
        }
        if(!this.head.next) {
            this.head = null;
            return;
        }
        let current = this.head;
        while(current.next.next) {
            current = current.next;
        }
        let data = current.next.number;
        current.next = null;
        return data;
    }

    printList() {
        let current = this.head;
        let str = '';
        while(current !== null) {
            str+=`${current.number}-->`;
            current = current.next;
        }
        console.log(str);
    }

    pointEndToPos(n) {
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        let end = current;
        current = this.head;
        while(n-- >= 1) {
            current = current.next;
        }
        end.next = current;
    }

    get last() {
        let current = this.head;
        while(current.next !== null) {
            current = current.next;
        }

        return current;
    }
}

module.exports = LinkedList;