function consecutivePairSum(arr, low, high, sum) {

    if(low > high) {
        return -1;
    }

    let mid = parseInt((low+high) / 2);

    if(arr[mid] + arr[mid-1] === sum) {
        return [mid-1, mid];
    } else if(arr[mid] + arr[mid+1] === sum) {
        return [mid, mid+1];
    } else if(arr[mid] + arr[mid+1] < sum) {
        // right
        return consecutivePairSum(arr, mid+1, high, sum);
    } else {
        // left
        return consecutivePairSum(arr, low, mid-1, sum);
    }   
}