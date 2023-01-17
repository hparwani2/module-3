const Heap = require('./heap');

function rearrangeString(str) {
    const maxheap = new Heap((child, parent) => child.freq > parent.freq);
    let map = new Map();
    for(let i=0;i<str.length;i++) {
        if(map.has(str[i])) {
            map.set(str[i], map.get(str[i]) + 1);
        } else {
            map.set(str[i], 1);
        }
    }

    map.forEach((value, key) => {
        maxheap.add({
            element: key,
            freq: value
        });
    });

    let prev = {element: '#', freq: -1};
    let result = ''
    while(maxheap.size()) {
        let current = maxheap.poll();
        result+=current.element;
        
        if(prev.freq > 0) {
            maxheap.add(prev);
        }
        current.freq--;
        prev=current; 
    }

    if(str.length !== result.length)
        return -1;

    return result;
}

console.log(rearrangeString('aaabcb'));