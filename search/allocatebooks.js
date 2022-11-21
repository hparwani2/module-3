/*

books = [12, 34, 67, 90]
students = 2
{12, 34} {67, 90} = 157 
{12} {34, 67, 90} = 191
{12, 34, 67} {90} = 113

low = 0, high = 203, mid = 101
{12, 34} {67} {90}
*/
function allocateBooks(arr, k) {
    let high = arr.reduce((acc, num) => acc + num);
    let low = 0;
    let ans;
    while(low <= high) {
        let mid = parseInt((low+high) / 2);
        let isPossible = checkPossibility(arr, k, mid);
        if(isPossible) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}

/*
    low = 0, high = 10, mid=5, k=3
    1 2 3 4
*/
function checkPossibility(arr, k, mid) {
    let sum = 0;
    let count = 0;
    for(let i=0;i<arr.length;i++) {
        if(arr[i] > mid){
            return false;
        }
        if(sum + arr[i] <= mid) {
            sum+=arr[i];
        } else {
            sum = arr[i];
            count++;
        }
    }
    count++;
    if(count <= k)
        return true;
    else
        return false;
}

console.log(allocateBooks([12, 34, 67, 90], 2));