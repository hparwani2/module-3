function binarySearchRecu(arr, low, high, element) {

    if(low > high) {
        return -1;
    }

    let mid = parseInt((low+high)/2);

    if(arr[mid] === element) {
        return mid;
    } else if(arr[mid] < element) {
        // right
        return binarySearchRecu(arr, mid+1, high, element);
    } else {
        // left
        return binarySearchRecu(arr, low, mid-1, element);
    }
}

let arr = [1,2,5,7,13,15,16,18,24,28,29];
console.log(binarySearchRecu(arr, 0, arr.length-1, 19));

/*
    arr = 1 2 5 7 13 15 16 18 24 28 29
    element = 19
    low = 0, high = 10, mid = 5
    low = 6, high = 10, mid = 8
    low = 6, high = 7, mid = 6
    low = 7, high = 7, mid = 7
    low = 8, high = 7


    2*c*log2(n) = no. of comparisions
*/

function binarySearchIter(arr, element) {
    let low = 0, high = arr.length - 1;

    while(low <= high) {
        let mid = parseInt((low+high)/2); 
        if(arr[mid] === element) {
            return mid;
        } else if(arr[mid] < element) {
            low = mid+1;
        } else {
            high = mid-1;
        }
    }
    return -1;
}

/*

    
    
*/