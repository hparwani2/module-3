const BinaryTree = require('./BinaryTree');
/*
        1
    2       3
4       5 6     7

[1, 2, 5]

*/

function printPath(root, arr, element) {

    if(root === null) {
        return false;
    }
    arr.push(root.data);

    if(root.data === element) {
        return true;
    }

    let isFoundLeft = printPath(root.left, arr, element);
    let isFoundRight = printPath(root.right, arr, element);

    if(isFoundLeft || isFoundRight) {
        return true;
    } else {
        arr.pop();
    }

    return false;
}

let binaryTree = new BinaryTree();
binaryTree.createViaArray([1,2,3,4,5,6,7]);
let arr = [];
printPath(binaryTree.root, arr, 5);
console.log(arr);


