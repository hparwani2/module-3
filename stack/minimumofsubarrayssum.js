/*


*/

function minimumOfSubarraySum(arr) {
    let leftMax = findLeftMax(arr);
    let rightMax = findRightMax(arr);
    let sum = 0;
    for(let i=0;i<arr.length;i++) {
       sum+=leftMax[i] * rightMax[i] * arr[i];
    }

    return sum;

}
/*

arr = 11, 81, 94, 43, 3


0  11

*/
function findLeftMax(arr) {

    let left = Array(arr.length);
    let stack = [];

    for(let i=0;i<arr.length;i++) {
        let count = 1;
        while(stack.length !== 0 && stack[stack.length - 1][0] > arr[i]) {
            count+=stack.pop()[1];
        }
        stack.push([arr[i], count]);
        left[i] = count;
    }
    return left;
}

function findRightMax(arr) {

    let right = Array(arr.length);
    let stack = [];

    for(let i=arr.length-1;i>=0;i--) {
        let count = 1;
        while(stack.length !== 0 && stack[stack.length - 1][0] > arr[i]) {
            count+=stack.pop()[1];
        }
        stack.push([arr[i], count]);
        right[i] = count;
    }
    return right;

}

console.log(minimumOfSubarraySum([3, 1, 2, 4]));

/*

1, 3, 2, 4, 6

left(2) = 2
right(2) = 2 

2 + 2 + 2*2


*/