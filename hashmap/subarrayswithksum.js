/*

1, -1, 0

1, 1




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
    
    map.put(0, 1);

    for(let i=0;i<prefix.length;i++) {
        currsum+=arr[i];
        if(map.has(currsum - k)) {
            res+=map.get(currsum - k);
        }
        if(map.has(currsum)) {
            map.set(currsum, map.get(currsum) + 1);
        } else {
            map.set(currsum, 1);
        }
    }
}