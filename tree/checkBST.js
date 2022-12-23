const BinaryTree = require('./BinaryTree');

function checkBST(root, min, max) {

    if(!root) {
        return true;
    }

    if(root.data < min || root.data > max) {
        return false;
    }

    return checkBST(root.left, min, root.data - 1)
          && checkBST(root.right, root.data + 1, max);
}

let binaryTree = new BinaryTree();
binaryTree.createViaArray([100, 65, 110, 9, 67]);
console.log(checkBST(binaryTree.root));
