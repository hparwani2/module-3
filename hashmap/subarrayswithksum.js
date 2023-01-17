/*

0, 2

9, 4, -13, 13
9, 13, 0, 13

k = 13


*/

function subArrayWithKSum(arr, k) {
    // let prefix = [];
    let currsum = 0;
    let res = 0;
    // for(let i=0;i<arr.length;i++) {
    //     currsum+=arr[i];
    //     prefix.push(currsum);
    // }

    let map = new Map();

    map.set(0, 1);

    for(let i=0;i<nums.length;i++) {
        currsum+=nums[i];
        if(map.has(currsum - k)) {
            res+=map.get(currsum - k);
        }
        if(map.has(currsum)) {
            map.set(currsum, map.get(currsum) + 1);
        } else {
            map.set(currsum, 1);
        }
    }
    return res;
}