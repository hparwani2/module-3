const BinaryTree = require('./BinaryTree');
/*
            3
        5       1
    6       2 0     8
        7      4 
*/
function findLCA(root, element1, element2) {

    if(!root) {
        return null;
    }

    if(root.data === element1 || root.data === element2) {
        return root;
    }

    let leftLCA = findLCA(root.left, element1, element2);
    let rightLCA = findLCA(root.right, element1, element2);

    if(leftLCA !== null && rightLCA !== null) {
        return root;
    }

    return leftLCA !== null ? leftLCA : rightLCA;
}

let binaryTree = new BinaryTree();
binaryTree.createViaArray([3,5,1,6,2,0,8,-1,-1,7,4]);
// binaryTree.preOrder(binaryTree.root);

console.log(findLCA(binaryTree.root, 5, 4).data);