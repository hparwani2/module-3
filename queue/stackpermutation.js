function stackPermutation(input, output) {
    let stack = [];

    while(input.length) {
        let element = input.poll();

        if(element === output.peek()) {
            output.poll();

            while(stack.length) {
                if(stack[stack.length - 1] === output.peek()) {
                    stack.pop();
                    output.poll();
                } else {
                    break;
                }
            }
        } else {
            stack.push(element);
        }
    }

    return (!input.length && !stack.length);
}