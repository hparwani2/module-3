/*
-2, -5, 6, -2, -3, 1, 5, -6
max_till_now = -2
curr_sum = 0

max_till_now = -2
curr_sum = 0

max_till_now = 6
curr_sum = 6

max_till_now = 6
curr_sum = 4

max_till_now = 6
curr_sum = 1

max_till_now = 6
curr_sum = 2

max_till_now = 7
curr_sum = 7

max_till_now = 7
curr_sum = 1



*/

function maxSubarraySum(arr) {
    let max_till_now = Number.MIN_SAFE_INTEGER;
    let curr_sum = 0;

    for(let i=0;i<arr.length;i++) {
        curr_sum+=arr[i];
        if(max_till_now < curr_sum) {
            max_till_now = curr_sum;
        }
        if(curr_sum < 0) {
            curr_sum = 0;
        }
    }

    return max_till_now;
}

console.log(maxSubarraySum([-2, -5, 6, -2, -3, 1, 5, -6]));