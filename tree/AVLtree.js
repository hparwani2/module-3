class AvlNode {
    constructor(data) {
        this.data = data;
        this.height = 1;
        this.left = null;
        this.right = null;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }
    insert(key) {
        return this.insertUtil(this.root, key);
    }

    insertUtil(root, key) {
        if(!root) {
            return new AvlNode(key);
        } 

        if(key < root.data) {
            root.left = this.insertUtil(root.left, key);
        } else if(key > root.data) {
            root.right = this.insertUtil(root.right, key);
        } else {
            return root;
        }

        root.height = Math.max(this.getHeight(root.left), 
                                this.getHeight(root.right)) + 1;

        let balance = this.getBalance(root);

        // LL case
        if(balance > 1 && root.left.data > key) {
            return this.rightRotate(root);
        }

        //RR case
        if(balance < -1 && root.right.data < key) {
            return this.leftRotate(node);
        }

        // LR
        if(balance > 1 && root.left.data < key) {
            root.left = this.leftRotate(root.left);
            return this.rightRotate(root);
        }

        // RL
        if(balance < -1 && root.right.data > key) {
            root.right = this.rightRotate(root.right);
            return this.leftRotate(root);
        }

        return root;
    }

    getBalance(node) {
        if(!node)
          return 0;
        
          return this.getHeight(node.left) - this.getHeight(node.right);
    }

    getHeight(node) {
        if(!node)
            return 0;
        return node.height;
    }

    /*
            9 - node
                11 - right
            10 - left   12

            11
        9       12
            10       
    */          

    leftRotate(node) {
        let right = node.right;
        let leftOfRight = right.left;

        right.left = node;
        node.right = leftOfRight;

        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
        right.height = Math.max(this.getHeight(right.left), this.getHeight(right.right)) + 1;

        return right;
    }

    rightRotate(node) {
        let left = node.left;
        let rightOfLeft = left.right;

        left.right = node;
        node.left = rightOfLeft;

        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
        left.height = Math.max(this.getHeight(left.left), this.getHeight(left.right)) + 1;

        return left;
    }

    preOrder(root) {
        if(!root) {
            return;
        }

        console.log(root.data);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }
}

module.exports = AVLTree;