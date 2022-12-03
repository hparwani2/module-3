/*

arr = 5, 6, 4, 7, 2, 8, 9
                        
6
5

stack = 3 

result = 6,7,7, , , ,
*/


function nextGreaterElement(arr) {

    let stack = [];
    let result = new Array(arr.length);

    for(let i=0;i<arr.length;i++) {
        if(stack.length === 0 || (stack.length !==0 && arr[stack[stack.length - 1]] >= arr[i])) {
            stack.push(i);
        } else {
            while(stack.length != 0 && arr[stack[stack.length - 1]] < arr[i]) {
                let index = stack.pop();
                result[index] = arr[i];
            }
            stack.push(i);
        }

    }

    while(stack.length !== 0) {
        let index = stack.pop();
        result[index] = -1;
    }

    return result;

}


console.log(nextGreaterElement([5, 6, 4, 7, 8, 2, 9]));
