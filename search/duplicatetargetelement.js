function duplicateTargetElement(arr, low, high, target) {

    if(low > high)
        return -1;

    let mid = parseInt((low + high)/2);

    if(arr[mid] === target) {
        if(arr[mid -1] === target || arr[mid+1] === target) {
            return true;
        } else {
            return false;
        }
    } else if(arr[mid] < target) {
        return duplicateTargetElement(arr, mid+1, high, target);
    } else {
        return duplicateTargetElement(arr, low, mid-1, target);
    }
} 