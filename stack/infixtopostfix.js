function precedence(ch) {
    if(ch === '^')
        return 3;
    if(ch === '*' || ch === '/')
        return 2;
    if(ch === '+' || ch === '-')
        return 1;
    
    return 0; 
}


function infixToPostfix(str) {
    let result = '';
    let stack = [];
    for(let i=0;i<str.length;i++) {
        let ch = str[i];

        if((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
            result+=ch;
        } else if(ch === '(') {
            stack.push(ch);
        } else if(ch === ')') {
            while(stack[stack.length - 1] !== '(') {
                result+=stack.pop();
            }
            stack.pop();
        } else {
            while(stack.length && precedence(ch) < precedence(stack[stack.length - 1])) {
                result+=stack.pop();
            }
            stack.push(ch);
        }
    }
    while(stack.length) {
        result+=stack.pop();
    }
    return result;
}

console.log(infixToPostfix('(((a+b)-c*(d/e))+f)'));