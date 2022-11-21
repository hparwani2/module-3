/*
arr = [1, 8, 0, 2, 100000]

*/

function countSort(arr) {
    let maxElement = Math.max(...arr);
    let frequency = new Array(maxElement+1);
    frequency.fill(0);
    for(let i=0;i<arr.length;i++) {
        frequency[arr[i]]++;
    }

    let i=0;
    let index =0;
    while(i < frequency.length) {
        if(frequency[i] > 0) {
            arr[index] = i;
            frequency[i]--;
            index++;
        } else {
            i++;
        }
    }
}

let arr = [4, 2, 5, 2, 8, 10];
countSort(arr);
console.log(arr);