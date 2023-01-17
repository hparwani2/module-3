function coinChangeRec(sum, n, arr) {

    if(sum === 0)
        return 1;
    
    if(sum < 0)
        return 0;
    
    if(n < 0)
        return 0;

    return coinChangeRec(sum, n-1, arr) 
    + coinChangeRec(sum - arr[n], n, arr);
}


function coinChangeDp(sum, arr) {

    let dp = new Array(sum+1);
    dp.fill(0);
    dp[0] = 1;

    for(let i=0;i<arr.length;i++) {
        for(j=arr[i];j<=sum;j++) {
            dp[j]+=dp[j - arr[i]];
        }
    }
    return dp[sum];
}