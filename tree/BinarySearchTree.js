const TreeNode = require('./TreeNode');

/*
[10, 7, 6, 9, 8, 12, 11]


            10
*/
class BinarySearchTree {
    root;

    createViaArray(arr) {
        for(let i=0;i<arr.length;i++) {
            this.root = this.appendNode(this.root, arr[i]);
        }
    }

    appendNode(root, element) {

        if(!root) {
            return new TreeNode(element);
        }

        if(root.data < element) {
            //right
            root.right = this.appendNode(root.right, element);
        } else {
            //left
            root.left = this.appendNode(root.left, element);
        }

        return root;
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

    deleteNode(element) {
        this.root = this.deleteNodeUtil(this.root, element);
    }

    deleteNodeUtil(root, element) {

        function minValue(root) {
            let min = root.data;
            while(root !== null) {
                min = root.data;
                root = root.left;
            }
            return min;
        }

        if(!root) {
            return null;
        }
        if(element < root.data) {
            root.left = this.deleteNodeUtil(root.left, element);
            // left
        } else if(element > root.data) {
            // right
            root.right = this.deleteNodeUtil(root.right, element);
        } else {
            if(root.left === null) {
                return root.right;
            } else if(root.right === null) {
                return root.left;
            }

            root.data = minValue(root.right);

            root.right = this.deleteNodeUtil(root.right, root.data);
        }

        return root;
    }
}

module.exports = BinarySearchTree;