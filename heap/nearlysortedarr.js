const Heap = require('./heap');
function nearlySortedArray(arr, k) {
    const heap = new Heap((child, parent) => child<parent);
    let i;
    for(i=0;i<=k;i++) {
        heap.add(arr[i]);
    }

    let result = [];
    for(;i<arr.length-k;i++) {
        result.push(heap.poll());
        heap.add(arr[i]);
    }

    while(heap.size()) {
        result.push(heap.poll());
    }
    return result;
}