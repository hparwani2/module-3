/*

cows=3
stalls = 1, 2, 4, 8, 9
{1} {4} {8} = 3
{1} {2} {4} = 1
{1} {8} {9} = 1
{2} {4} {9} = 2
ans = 3

ans = 1
count = 5

ans = 2
count = 3

ans = 3
count = 3

ans = 4
count = 2
*/

function aggressiveCows(stalls, cows) {
    let low = 0;
    let high = stalls.length;
    let ans;
    while(low <= high) {
        let mid = parseInt((low + high) / 2);
        if(isPossible(stalls, mid, cows)) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
}
// 1, 2, 4, 8, 9
function isPossible(stalls, ans, cows) {
    let count = 1;
    let lastPlacement = stalls[0];
    for(let i=1;i<stalls.length;i++) {
        if(stalls[i] - lastPlacement >= ans) {
            count++;
            lastPlacement = stalls[i];
        }
    }

    if(count >= cows)
        return true;
    return false;
}