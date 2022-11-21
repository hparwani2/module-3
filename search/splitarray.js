/*
arr = [1, 2, 3, 4], K = 3
maximum subarray sum should be minimum


low=0, high=4, mid=2
{1} {2}
low=3, high=4, mid=3
{1,2}{3} 
low=4, high=4, mid=4
{1,2} {3} {4}

*/

function splitArray(arr, k) {
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

console.log(splitArray([1,2,3,4], 2));