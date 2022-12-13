/*

123, k=1




*/


function minimumNumberFormed(str, k) {

    let stack = [];
    for(let i=0;i<str.length;i++) {

        while(stack.length && k>0 && stack[stack.length - 1] > str[i]) {
            stack.pop();
            k--;
        }
        // first number cannot be zero.
        if(stack.length || str[i] !== '0') {
            stack.push(str[i]);
        }
    }

    while(k && stack.length) {
        k--;
        stack.pop();
    }

    if(!stack.length) {
        return '0';
    }
    return stack.join('');
}

console.log(minimumNumberFormed('123', 2));