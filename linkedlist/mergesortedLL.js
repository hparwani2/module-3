const LinkedList = require('./linkedlist');


/*
    l1 = 5
    l2 = 

    result = 1 2 3 4 5

*/
function mergeSortedLinkedList(l1, l2) {
    let result = new LinkedList();

    if(l1.number <= l2.number) {
        let l1Next = l1.next;
        result.head = l1;
        l1 = l1Next;
    } else {
        let l2Next = l2.next;
        result.head = l2;
        l2 = l2Next;
    }

    let current = result.head;

    while(l1 !== null && l2 !== null) {

        if(l1.number <= l2.number) {
            let l1Next = l1.next;
            current.next = l1;
            l1 = l1Next;
        } else {
            let l2Next = l2.next;
            current.next = l2;
            l2 = l2Next;
        }
        current = current.next;
    }

    while(l1 !== null) {
        let l1Next = l1.next;
        current.next = l1;
        l1 = l1Next;
        current = current.next;
    }

    while(l2 !== null) {
        let l2Next = l2.next;
        current.next = l2;
        l2 = l2Next;
        current = current.next;
    }

    return [result, l1, l2];
    
}


let l1 = new LinkedList();
let l2 = new LinkedList();
l1.createListViaArray([1,3,5]);
l2.createListViaArray([2, 4]);
let result;
[ result, l1, l2 ] = mergeSortedLinkedList(l1.head, l2.head);

result.printList();