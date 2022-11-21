/*
arr1 = { 1, 6, 7, 8, 9, 10 }
arr2 = { 2, 3, 4, 5, 7 }

o + o = e
e + e = e
merge = {1, 2, 3, 4, 5, 6, 7, 7, 8, 9}
*/

function medianOfSortedArrays(arr1, arr2, l1, h1, l2, h2) {
    
    if(h1-l1 === 0) {
        return (arr1[l1] + arr2[l2])/2;
    }
    if(h1-l1 === 1) {
        return (Math.max(arr1[l1], arr2[l2]) 
        + Math.min(arr1[h1], arr2[h2]))/2;
    }

    let median1 = median(arr1, l1, h1);
    let median2 = median(arr2, l2, h2);

    if(median1 === median2) {
        return median1;
    }

    if(median1 > median2) {
        return medianOfSortedArrays(arr1, arr2, 
            l1, (h1 + l1 + 1)/2,
            (h2 + l2 + 1)/2,h2);
    } else {
        return medianOfSortedArrays(arr1, arr2, 
            (h1 + l1 + 1)/2, h1,
            l2, (h2 + l2 + 1)/2);
    }
}

function median(arr, low, high) {
    let isEven = (high - low + 1) % 2;
    if(isEven) {
        return (arr[parseInt((high + low)/2)] 
        + arr[parseInt((high+low)/2 + 1)]) / 2;
    } else {
        return arr[parseInt((high + low)/2)];
    }
}