// const BinaryTree = require('./BinaryTree');

// let binaryTree = new BinaryTree();

// binaryTree.createViaArray([1,2,3,4,5,6,7]);

// binaryTree.levelOrder(binaryTree.root);


const BinarySearchTree = require('./BinarySearchTree');

let binarySearchTree = new BinarySearchTree();
binarySearchTree.createViaArray([10, 7, 6, 9, 8, 12, 11]);
binarySearchTree.inOrder(binarySearchTree.root);
binarySearchTree.deleteNode(7);
binarySearchTree.inOrder(binarySearchTree.root);

/*
            10
        7        12
    6       9 11
         8


*/
