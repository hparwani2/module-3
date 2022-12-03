class Queue {
    data;
    rear;
    front;
    constructor() {
        this.data = [];
        this.rear = -1;
        this.front = -1;
    }

    enqueue(data) {
        this.data.push(data);
        this.front = 0;
        this.rear++;
    }

    dequeue(data) {
        
        let data = this.data[front];
        this.data[this.front] = null;
        this.front++;
        
        return data;
    }

    get front() {
        return this.data[front];
    }

    get rear() {
        return this.data[rear];
    }
}

module.exports = Queue;