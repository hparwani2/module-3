/*
We are given an array of ‘n’ numbers .
Our task is to find the peak element from the given array 
of numbers and return its index .The array element is a 
peak element if it is not smaller than its neighbor 
element. Sometimes an array can multiple peak element 
so return the index of first peak element of the array.

arr = [1, 2, 1, 4, 5, 5, 5, 5, 5];

*/
function peakElement(arr) {
    let low = 0;
    let high = arr.length - 1;
    
    while(low <= high) {

        let mid = parseInt((low + high) / 2);
        
        if((arr[mid] >= arr[mid - 1] 
            && arr[mid] >= arr[mid+1]) 
            || mid === 0 
            || mid === arr.length - 1) {
            return arr[mid];
        } else if(arr[mid] > arr[mid - 1] 
            && arr[mid] <= arr[mid+1]) {
                low = mid + 1;
        } else if(arr[mid] > arr[mid - 1] 
            && arr[mid] <= arr[mid-1]) {
                high = mid - 1;
        }

    }
    return -1;
}

console.log(peakElement([1, 2, 1, 3, 5, 6, 10, 15, 16]));