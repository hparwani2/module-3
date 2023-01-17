function uniqueElements(arr) {
    let result = 0;
    for(let element of arr) {
        result^=element;
    }
    return result;
}