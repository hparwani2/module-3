function adjacentDuplicates(str) {

    let stack = [];
    let result = "";
    for(let i=0;i<arr.length;i++) {
        
        if(stack.length === 0 || (stack.length !== 0 && stack[stack.length - 1] !== str[i])) {
            stack.push(str[i]);
        } else {
            while(stack[stack.length - 1] === str[i]) {
                stack.pop();
            }
        }
    }
    stack.reverse();
    while(stack.length !== 0) {
        result+=stack.pop();
    }
    return result;
}