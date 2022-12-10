/*
    l1 = 1 2 3 4 5 6 7ca -> null
    l2 = 8 9 10
*/

const LinkedList = require("./linkedlist");

function alternatePosition(head1, head2) {
    currentA = head1;
    currentB = head2;
    while(currentA !== null && currentB !== null) {
        let a_next = currentA.next;
        let b_next = currentB.next;

        currentA.next = currentB;
        currentB.next = a_next;
    
        currentA = a_next;
        currentB = b_next;
    }

    if(currentA !== null) {
        currentB = currentA.next;
        currentA.next = null;
    }

    return [head1, currentB];
}

let l1 = new LinkedList();
let l2 = new LinkedList();


l1.createListViaArray([1,3,5,7,8,9,10]);
l2.createListViaArray([2,4,6]);

[l1.head, l2.head ] = alternatePosition(l1.head, l2.head);

l1.printList();
l2.printList();