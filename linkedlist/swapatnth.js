/*

1f 2 3 4 5 6sp 7s

*/

const LinkedList = require("./linkedlist");

function swapAtNth(head, k) {

    if(k === 0) {
        return head;
    }

    let first = head;
    let first_prev = null;
    let k_copy = k;

    while(k_copy-- > 1) {
        first_prev = first;
        first = first.next;
    }

    current = first;
    let second = head;
    let second_prev = null;

    while(current.next !== null) {
        current = current.next;
        second_prev = second;
        second = second.next;
    }

    let second_next = second.next;

    if(first_prev === null) {
        head = second;
    } else {
        first_prev.next = second;
    }
    second.next = first.next;

    second_prev.next = first;
    first.next = second_next;

    return head;
}

let list = new LinkedList();
list.createListViaArray([1,2,3,4,5,6,7]);

list.head = swapAtNth(list.head, 1);
list.printList();