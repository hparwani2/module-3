/*
    [-10,11,21,-20, -30]

    -30
    -10
*/

function asteroidCollision(asteroids) {

    let stack = [];

    for(let i=0;i<asteroids.length;i++) {
        while(stack.length 
            && stack[stack.length-1] > 0 
            && stack[stack.length-1] < -asteroids[i]) {
                stack.pop();
            }
        
        if(asteroids[i] > 0 
            || !stack.length 
            || stack[stack.length-1] < 0) {
            stack.push(asteroids[i]);
        }
    }
    return stack;
}

console.log(asteroidCollision([-10,11,21,-20,-30]));