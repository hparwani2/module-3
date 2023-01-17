function queueVoilatingStudents(str) {
    if(str.length <= 1)
        return 0;
    let count;
    let stack = [];

    for(let i=str.length-1;i>=0;i--) {
        if(stack.length === 0)
            stack.push(str[i]);
        else if(stack[stack.length - 1] === 'B' && str[i] === 'G') {
            count++;
        } else {
            stack.push(str[i]);
        }
    }
    return count;

}