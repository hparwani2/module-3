/*
    
str = 6784/+-

ch = '6'



-3
*/

function postfixCalculation(str) {

    let stack = [];
    for(let i=0;i<str.length;i++) {
        let ch = str[i];
        if(!isNaN(parseInt(ch))) {
            stack.push(parseInt(ch));
        } else {
            let number2 = stack.pop();
            let number1 = stack.pop();
            let result;
            switch(ch) {
                case '+': {
                    result = number1 + number2;
                    break;
                }
                case '-': {
                    result = number1 - number2;
                    break;
                }
                case '*': {
                    result = number1 * number2;
                    break;
                }
                case '/': {
                    result = number1 / number2;
                    break;
                }
            }
            stack.push(parseInt(result));
        }
    }
    return stack.pop();
}

console.log(postfixCalculation('124*+'));