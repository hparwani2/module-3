function ternarySearch(arr, low, high, element) {

    if(low > high) {
        return -1;
    }
    let mid1 = low + parseInt((high - low) / 3);
    let mid2 = high - parseInt((high - low)/3);

    if(arr[mid1] === element) {
        return mid1;
    } else if(arr[mid2] === element) {
        return mid2;
    } else if(arr[mid1] > element) {
        return ternarySearch(arr, low, mid1-1, element);
    } else if(arr[mid2] < element) {
        return ternarySearch(arr, mid2+1, high, element);
    } else {
        return ternarySearch(arr, mid1 + 1, mid2 - 1, element);
    }
}
/*
    4*c*log3(n) = 12, 20

    2*c*log2(n) = 10, 14
*/
let arr = [1,2,5,7,13,15,16,18,24,28,29];
console.log(ternarySearch(arr, 0, arr.length - 1, 19));