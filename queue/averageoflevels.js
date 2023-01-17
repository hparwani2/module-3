const Queue = require('./linkedlist/queue');

function averageOfLevels(root) {
    const queue = new Queue();

    queue.enqueue(root);
    
    while(queue.length) {
        let n = queue.length;
        let length = n;
        let sum = 0;
        while(n--) {
            let node = queue.dequeue();
            sum+=node.data;
            if(node.left) {
                queue.enqueue(node.left);
            }
            if(node.right) {
                queue.enqueue(node.right);
            }
        }
        console.log(Math.floor(sum/length));
    }
}