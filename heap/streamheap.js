const Heap = require('./heap');
/*

5 3 1 7 8 0 9


max
    5
1       3







min
    7
8

*/
class StreamHeap {
    constructor() {
        this.maxHeap = new Heap((x, y) => x > y);
        this.minHeap = new Heap((x, y) => x < y);
    }

    insert(num) {
        this.maxHeap.add(num);
        this.minHeap.add(this.maxHeap.poll());
        if(this.maxHeap.size() !== this.minHeap.size()) {
            this.maxHeap.add(this.minHeap.poll());
        }
    }

    findMedian() {
        if(this.minHeap.size() === this.maxHeap.size()) {
            return ( this.minHeap.peek() + this.maxHeap.peek() ) / 2;
        } else {
            return this.maxHeap.peek();
        }
    }
}