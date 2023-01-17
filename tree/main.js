// const BinaryTree = require('./BinaryTree');
const AVLTree = require('./AVLtree');

// let binaryTree = new BinaryTree();
let avlTree = new AVLTree();

avlTree.root = avlTree.insert(10);
avlTree.root = avlTree.insert(9);
avlTree.root = avlTree.insert(8);
avlTree.root = avlTree.insert(7);
avlTree.root = avlTree.insert(6);
avlTree.root = avlTree.insert(5);

avlTree.preOrder(avlTree.root);

// binaryTree.createViaArray([1,2,3,4,5,6,7]);

// binaryTree.levelOrder(binaryTree.root);


// const BinarySearchTree = require('./BinarySearchTree');

// let binarySearchTree = new BinarySearchTree();
// binarySearchTree.createViaArray([10, 7, 6, 9, 8, 12, 11]);
// binarySearchTree.inOrder(binarySearchTree.root);
// binarySearchTree.deleteNode(7);
// binarySearchTree.inOrder(binarySearchTree.root);

/*
            10
        7        12
    6       9 11
         8


*/

// binaryTree.constructPreorderInOrder([3,9,20,15,7], [9,3,15,20,7]);
// binaryTree.preOrder(binaryTree.root);
