const LinkedList = require('../linkedlist/linkedlist');
/*
    size = 3
    elements = 1 2 3 4 2 4
    obj = {
        2: 1,
        3: 1,
        4: 1
    }
    list = 4 2 3
*/


function LRUCache(elements, size) {
    let list = new LinkedList();
    let obj = {};

    for(let i=0;i<elements.length;i++) {
        if(obj[elements[i]]) {
            list.deleteNode(elements[i]);
            list.addNodeAtFirst(elements[i]);
        } else {
            if(list.length === size) {
                let last = list.deleteNodeAtLast();
                obj[last.number] = 0;
            }
            list.addNodeAtFirst(elements[i]);
            obj[elements[i]] = 1;
        }
    }
}