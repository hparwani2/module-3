function trappingRainWater(heights) {
    let left = new Array(heights.length);
    let right = new Array(heights.length);
    left[0] = heights[0];
    let result = 0;
    for(let i=1;i<heights.length;i++) {
        left[i] = Math.max(heights[i], left[i-1]);
    }

    right[heights.length - 1] = heights[heights.length - 1];
    for(let i=heights.length - 2;i>=0;i--) {
        right[i] = Math.max(heights[i], right[i+1]);
    }

    for(let i=0;i<heights.length;i++) {
        result+=Math.min(left[i], right[i]) - heights[i];
    }

    return result;
}