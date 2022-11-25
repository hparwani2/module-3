const LinkedList = require('./linkedlist');
const DoublyLinkedList = require('./doublylinkedlist');

let list = new DoublyLinkedList();

list.createListFromArray([1,2,3,4,5,6]);

list.printListStart();
list.printListEnd();

// list.createListViaArray([1]);
// list.printList();
// list.deleteNodeAtLast();
// list.printList();