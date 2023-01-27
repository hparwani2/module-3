function maxStorage(heights) {
    let left = 0;
    let right = heights.length - 1;
    let currArea;
    let maxArea = Number.MIN_SAFE_INTEGER;
    while(left < right) {
        currArea = Math.min(heights[left], heights[right]) * (right - left);
        maxArea = Math.max(maxArea, currArea);

        if(heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}