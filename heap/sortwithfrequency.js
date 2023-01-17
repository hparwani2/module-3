/*
    


*/

const Heap = require('./heap');
function sortWithFrequency(arr) {
    const map = new Map();
    const heap = new Heap((child, parent) => child.freq > parent.freq);
    for(let i=arr.length-1;i>=0;i--) {
        let element = arr[i];
        if(map.has(element)) {
            map.set(element, map.get(element) + 1);
        } else {
            map.set(element, 1);
        }
    }

    map.forEach((value, key) => {
        heap.add({
            element: key,
            freq: value
        });
    });

    arr = [];
    while(heap.size()) {
        let current = heap.poll();
        for(let i=0;i<current.freq;i++) {
            arr.push(current.element);
        }
    }

    return arr;
    
}

console.log(sortWithFrequency([1,2,2,2,3,3,3,3,4]));
