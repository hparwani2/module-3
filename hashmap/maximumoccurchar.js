function maximumOccurringChar(str) {
    let map = new Map();

    for(let i=0;i<str.length;i++) {
        if(map.has(str[i])) {
            map.set(str[i], map.get(str[i]) + 1);
        } else {
            map.set(str[i], 1);
        }
    }

    let ans = '';
    let max = Number.MIN_SAFE_INTEGER;
    map.forEach((value, key) => {
        if(max < value) {
            ans = key;
            max = value;
        }
    });

    return ans;
}

console.log(maximumOccurringChar('wefeqweeq'));