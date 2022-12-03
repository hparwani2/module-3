function stockSpan(arr) {
    let stack = [];

    for(let i=0;i<arr.length;i++) {

        let count = 1;
        while(stack.length !== 0 && stack[stack.length - 1][0] < arr[i]) {
            count+=stack.pop()[1];
        } 
        stack.push([arr[i], count]);

        arr[i] = count;
    }
    return arr;
}

console.log(stockSpan([100,80,60,70,60,75,85]));