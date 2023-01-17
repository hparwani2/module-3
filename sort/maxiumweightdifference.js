function maximumWeightDiff(arr, k) {
    arr.sort((a,b) => a-b);
    let sum = arr.reduce((accum, num) => accum+num);

    let sumFront = 0;
    let sumBack = 0;
    for(let i=0;i<k;i++) {
        sumFront+=arr[i];
    }

    for(let i=arr.length-1;i>=arr.length-k;i--) {
        sumBack+=arr[i];
    }

    return Math.max(Math.abs(sumFront- (sum-sumFront)), 
    Math.abs(sumBack- (sum-sumBack)));
}