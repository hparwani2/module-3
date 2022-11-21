function linearSearch(arr, element) {
    let result = [];
    for(let i=0;i<arr.length;i++) {
        if(arr[i] === element) {
            result.push(i);
        }
    }
    return result;
}