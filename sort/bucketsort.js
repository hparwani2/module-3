/*
arr = [9.8 , 0.6 , 10.1 , 1.9 , 3.07 , 3.04 , 5.0 , 8.0 , 4.8 , 7.68]
buckets = 5

1 ---> 0.6, 1.9

2 ---> 3.04, 3.07

3 ---> 4.8, 5.0

4 ---> 7.68, 8.0

5 ---> 9.8, 10.1

*/


function bucketSort(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let base = 10;
    let bucketLength = Math.floor(max/base) - Math.floor(min/base) + 1;
    min = Math.floor(min/base);
    let bucket = new Array(bucketLength);

    for(let i=0;i<bucket.length;i++) {
        bucket[i] = [];
    }

    // 29
    for(let i=0;i<arr.length;i++) {
        bucket[(Math.floor(arr[i]/base) - min)]
        .push(arr[i]);
    }

    for(let i=0;i<bucket.length;i++) {
        bucket[i].sort((a,b) => a-b);
    }

    let result = [];
    for(let i=0;i<bucket.length;i++) {
        for(j=0;j<bucket[i].length;j++) {
            result.push(bucket[i][j]);
        }
    }
    return result;
}
let arr = [29, 34, 19, 39, 21, 41];
console.log(bucketSort(arr));