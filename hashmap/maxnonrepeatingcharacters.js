/*
str = a  b   c   d   b   a   f   e   g

start = 1
end = 8
max = end - start = 7


a, 5
b, 4
c, 2
d, 3
f, 6
e, 7
g, 8

*/

function maxLength(str) {

    // if(str.length === 1) {
    //     return 1;
    // }

    let max = Number.MIN_SAFE_INTEGER;
    let map = new Map();
    let start = -1;

    for(let end=0;end<str.length;end++) {

        if(map.has(str[end]) && map.get(str[end]) > start) {
            start = map.get(str[end]);
        }

        max = Math.max(max, end-start);
        map.set(str[end], end);
    }

    return max;
}

console.log(maxLength('ababcd'));