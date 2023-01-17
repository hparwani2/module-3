function longestCommonSubsequence(str1, str2, i, j, arr) {

    if(i >= str1.length || j >= str2.length) {
        return 0;
    }

    if(arr[i][j]) {
        return arr[i][j];
    }

    if(str1[i] === str2[j]) {
        return arr[i][j] = 1 + longestCommonSubsequence(str1, str2, i+1, j+1);
    } 
    return arr[i][j] = Math.max(longestCommonSubsequence(str1, str2, i+1, j), 
                    longestCommonSubsequence(str1, str2, i, j+1));
}

console.log(longestCommonSubsequence('AGGTAB', 'GXTXAYB', 0, 0));