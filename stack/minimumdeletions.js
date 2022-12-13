/*
    

*/

function minimumDeletions(str) {
    let stack = [];
    let count = 0;
    for(let i=str.length-1;i>=0;i--) {
        if(!stack.length) {
            stack.push(str[i]);
        } else if(stack[stack.length-1] === 'a' 
                  && str[i] === 'b') {
            count++;
            stack.pop();
        } else {
            stack.push(str[i]);
        }
    }

    return count;
}

console.log(minimumDeletions('aababbab'));
