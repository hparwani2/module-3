const Heap = require('./heap');

function kthSmallestElement(arr, k) {
    if(k <= 0 || k > arr.length) {
        return null;
    }
    const heap = new Heap((child, parent) => child < parent);
    heap.createViaArray(arr);

    while(k-- !== 1) {
        heap.poll();
    } 
    return heap.poll();
}

let arr = [5, 2, 3, 6, 10, 9, 4];

console.log(kthSmallestElement(arr, 6));