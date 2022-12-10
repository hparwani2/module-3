/*

list = 5 4 3 2 1 2 3 4 5        
k = 5

current = 6
sec_current = 5 6
sec_current_prev = 4
*/

const LinkedList = require("./linkedlist");

function KRightRotation(head, k, length) {

    if(k === 0 || k === length) {
        return head;
    }

    let current = head;
    let sec_curr_prev = null;
    while(k-- > 1) {
        current = current.next;
    }

    let sec_current = head;

    while(current.next !== null) {
        sec_curr_prev = sec_current;
        sec_current = sec_current.next;
        current = current.next;
    }

    if(sec_curr_prev !== null) {
        sec_curr_prev.next = null;
    }
    current.next = head;
    head = sec_current;

    return head;
}

const list = new LinkedList();
list.createListViaArray([1,2,3,4,5,6,7,8,9,10]);
list.head = KRightRotation(list.head, 10, list.length);

list.printList();