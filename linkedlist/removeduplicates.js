const LinkedList = require('./linkedlist');

function removeDuplicates(list) {
    
    if(list.head === null) {
        return;
    }

    let current = list.head;

    while(current.next !== null) {
        if(current.number === current.next.number) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return list.head;
}

const list = new LinkedList();
list.createListViaArray([1,2,2,3,3,3,4,4]);

list.head = removeDuplicates(list);

list.printList();

