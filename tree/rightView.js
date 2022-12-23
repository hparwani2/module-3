let max_m = Number.MIN_SAFE_INTEGER;
const BinaryTree = require('./BinaryTree');

function rightView(root, m) {

    if(!root) {
        return;
    } 
    if(m > max_m) {
        console.log(root.data);
        max_m = m;
    }
    rightView(root.right, m+1);
    rightView(root.left, m+1);
}

const binaryTree = new BinaryTree();
binaryTree.createViaArray([1, 2, 3, 4, -1, -1, 7, -1, 8]);
rightView(binaryTree.root, 0);
/*
        1
    2       3
4               7
    8
*/


function leftView(root, m) {

    if(!root) {
        return;
    } 
    if(m > max_m) {
        console.log(root.data);
        max_m = m;
    }
    leftView(root.left, m+1);
    leftView(root.right, m+1);
}