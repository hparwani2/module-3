/*

arr = [4, 6, 1, 10, 9]
list = 4 ---> 6 ----> 10 ---> 9
    4
  5   8
*/
function Node(number) {
    this.number = number;
    this.next = null;
}

class LinkedList {
    head;

    addNodeAtLast(number) {
        let node = new Node(number);
        if(!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
    }

    printList() {
        let current = this.head;
        let str = '';
        while(current !== null) {
            str+=`${current.number}-->`;
            current = current.next;
        }
        console.log(str);
    }
}


const list = new LinkedList();
list.addNodeAtLast(4);
list.addNodeAtLast(6);
list.addNodeAtLast(1);
list.addNodeAtLast(10);
list.printList();