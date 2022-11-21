/*
    triangle sum property
    3 sides

    any two sides of a triangle should 
    sum greater than the third.

    arr = 4 6 3 7
    posibilities = 3

    a + b > c
    b + c > a
    a + c > b

    arr = 10, 21, 22, 100, 101, 200, 300
    i=0, j=1, 1
    i=0, j=2, 0
    i=0, j=3, 1
    i=0, j=4, 0
    i=1, j=2, 0
    i=1, j=3, 1
    i=1, j=4, 0
    i=2, j=3, 1


    possibilties

*/

/*
    4 6 3 7 8

    3 5 6 7 8
    i=0,j=1,sum=8,low=2,high=4,mid=3
    i=0,j=1,sum=8,low=4,high=4,mid=4
    i=0,j=1,sum=8,low=4,high=3
*/
function noOfTriangles(arr) {
    arr.sort((a,b) => a-b);
    let count = 0;
    for(let i=0;i<arr.length-2;i++) {
        for(let j=i+1;j<arr.length-1;j++) {
            let sum = arr[i] + arr[j];
            let index = binarySearch(arr, j+1, arr.length - 1, sum);
            if(index !== j) {
                count+=index-j;
            }
            
        }
    }
    return count;
}

function binarySearch(arr, low, high, sum) {

    while(low <= high) {
        let mid = parseInt((low + high) / 2);
        if(arr[mid] < sum) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return Math.min(low, high);
}

console.log(noOfTriangles([10, 21, 22, 100, 101, 200, 300]));