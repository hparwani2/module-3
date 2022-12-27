const TreeNode = require('./TreeNode');
const Queue = require('../queue/linkedlist/queue');
class BinaryTree {
    root;

    /*
        [1,2,3,4,5,6,7]
    */
    createViaArray(arr) {
        let n = arr.length;
        this.root = new TreeNode(arr[0]); // 1
        for(let i=0;i<=((n - 3)/2);i++) {
            if(arr[i] !== -1) {
                if(arr[i*2+1] !== -1) {
                    this.appendLeft(this.root, arr[i], arr[i*2+1]);
                }
                if(arr[i*2+2] !== -1) {
                    this.appendRight(this.root, arr[i], arr[i*2+2]);
                }
            }
        }
    }

    appendLeft(root, parent, left) {
        if(!root) {
            return;
        }
        if(root.data === parent) {
            root.left = new TreeNode(left);
            return;
        }

        this.appendLeft(root.left, parent, left);
        this.appendLeft(root.right, parent, left);
    }

    appendRight(root, parent = 1, right = 3) {
        if(!root) {
            return;
        }
        /*
            1
        2       3
        */
        if(root.data === parent) {
            root.right = new TreeNode(right);
            return;
        }

        this.appendRight(root.left, parent, right);
        this.appendRight(root.right, parent, right);
    }
    preIndex = 0;
    constructPreorderInOrder(preOrder, inOrder) {
        this.root = this.constructUtil(preOrder, inOrder, 0, inOrder.length - 1);
    } 

    constructUtil(preOrder, inOrder, inStart, inEnd) {

        function searchInInOrder(inOrder, inStart, inEnd, data) {
            for(let i=inStart; i<=inEnd;i++) {
                if(inOrder[i] === data) {
                    return i;
                }
            }

            return new Error(`element is not found in InOrder ${data}`);
        }

        if(inStart > inEnd) {
            return null;
        }

        let treeNode = new TreeNode(preOrder[this.preIndex]);
        this.preIndex++;

        if(inStart === inEnd) {
            return treeNode;
        }

        let index = searchInInOrder(inOrder, inStart, inEnd, treeNode.data);

        treeNode.left = this.constructUtil(preOrder, inOrder, inStart, index-1);
        treeNode.right = this.constructUtil(preOrder, inOrder, index+1, inEnd);

        return treeNode;
    }

    preOrder(root) {

        if(!root) {
            return;
        }
        console.log(root.data);

        this.preOrder(root.left);
        this.preOrder(root.right);
    }

    inOrder(root) {

        if(!root) {
            return;
        }
        
        this.inOrder(root.left);
        console.log(root.data);
        this.inOrder(root.right);
    }

    postOrder(root) {

        if(!root) {
            return;
        }
        
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.data);
    }

    levelOrder(root) {
        const queue = new Queue();
        queue.enqueue(root);
        while(queue.length) {
            let n = queue.length;
            let str = '';
            for(let i=0;i<n;i++) {
                const element = queue.dequeue();
                str+=element.data;

                if(element.left) {
                    queue.enqueue(element.left);
                }

                if(element.right) {
                    queue.enqueue(element.right);
                }
            }
            console.log(str);
            
        }
        
    }

    height(root) {

        
        if(!root) {
            return 0;
        }


        return Math.max(this.height(root.left),
                this.height(root.right)) + 1;
    }
}

module.exports = BinaryTree;