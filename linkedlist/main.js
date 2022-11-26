const LinkedList = require('./linkedlist');
const DoublyLinkedList = require('./doublylinkedlist');
const CircularLinkedList = require('./circularlinkedlist');

// let list = new DoublyLinkedList();

// list.createListFromArray([1,2,3,4,5,6]);

// list.printListStart();
// list.printListEnd();

// list.createListViaArray([1]);
// list.printList();
// list.deleteNodeAtLast();
// list.printList();

let list = new CircularLinkedList();

list.addNodeAtFirst(1);
list.addNodeAtFirst(2);
list.addNodeAtFirst(3);

list.printList();

