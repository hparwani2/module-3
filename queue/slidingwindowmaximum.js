const Deque = require('./linkedlist/deque/deque');
const Queue = require('./linkedlist/queue');

function slidingWindowMax(arr, k) {
    let deque = new Deque();
    let result = [];
    let i=0;
    for(;i<k;i++) {
        while(deque.length && arr[deque.rear] <= arr[i]) {
            deque.removeAtLast();
        }

        deque.addAtLast(i);
    }
    result.push(arr[deque.front]);

    for(;i<arr.length;i++) {

        while(deque.length && deque.front < i-k+1) {
            deque.removeAtFirst();
        }

        while(deque.length && arr[deque.rear] <= arr[i]) {
            deque.removeAtLast();
        }

        deque.addAtLast(i);

        result.push(arr[deque.front]);
    }

    return result;
}

console.log(slidingWindowMax([1, 2, 3, 1, 4, 5, 2, 3, 6], 3));