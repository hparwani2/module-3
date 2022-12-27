const BinaryTree = require('./BinaryTree');

/*

sum = 0+495+491+40 = 1026

        4
    9       0
5       1

*/



let sum = 0;
function rootToLeafSum(root, number) {

    if(root.left === null && root.right === null) {
        sum+=Number(number+root.data);
        return;
    }

    rootToLeafSum(root.left, number+root.data);
    rootToLeafSum(root.right, number+root.data);
}

let binaryTree = new BinaryTree();
binaryTree.createViaArray([4,9,0,5,1]);
rootToLeafSum(binaryTree.root, '');
console.log(sum);