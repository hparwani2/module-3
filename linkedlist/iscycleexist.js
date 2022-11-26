const LinkedList = require('./linkedlist');

let list = new LinkedList();
list.createListViaArray([1,2,3,4,5,6,7,8,9,10,11]);
list.pointEndToPos(4);

function isCycleExists(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) {
            fast = list.head;
            return startPoint(fast, slow);
        }
    }
    return false;
}

function startPoint(fast, slow) {
    while(fast !== slow) {
        fast = fast.next;
        slow = slow.next;
    }

    return slow;
}

console.log(isCycleExists(list.head));