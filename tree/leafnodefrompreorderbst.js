/*
 890, 325, 290, 530, 965
*/
function leafNode(arr) {
    let stack = [];

    for(let i=0, j=1; j<arr.length;i++, j++) {

        let leafFound = false;

        if(arr[i] > arr[j]) {
            stack.push(arr[i]);
        }

        else {

            while(stack.length) {
                if(arr[j] > stack[stack.length -1 ]) {
                    stack.pop();
                    leafFound = true;
                } else {
                    break;
                }
            }
        }

        if(leafFound) {
            console.log(arr[i]);
        }
    }

    console.log(arr[arr.length - 1]);
}



leafNode([890, 325, 290, 530, 965]);