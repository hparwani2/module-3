const LinkedList = require('../linkedlist/linkedlist');
function LRUCache(elements, size) {
    let list = new LinkedList();
    let obj = {};

    for(let i=0;i<elements.length;i++) {
        if(obj[elements[i]]) {
            list.deleteNode(elements[i]);
            list.addNodeAtFirst(elements[i]);
        } else {
            if(list.length === size) {
                list.deleteNodeAtLast();
            }
            list.addNodeAtFirst(elements[i]);
            obj[elements[i]] = 1;
        }
    }
}