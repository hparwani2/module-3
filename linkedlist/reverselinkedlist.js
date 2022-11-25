const LinkedList = require('./linkedlist');

function reverseLinkedList(head) { // 1
    let current = head; // 1
    let previous = null; 
    let next;
    //null <- 1 <--2    3 -> 4 -> 5 -> 6 -> 7
    //null    p    p    c,n                 p
    while(current != null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
}

let linkedList = new LinkedList([1,2,3,4,5,6,7]);
linkedList.printList();
linkedList.head = reverseLinkedList(linkedList.head);
linkedList.printList();