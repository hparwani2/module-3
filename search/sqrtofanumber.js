/*

number=16
sqrt = 4

number=15
sqrt=4

number=64
sqrt=8

number=10, precision=3

start=1,end=10,mid=5
start=1,end=4,mid=2
start=3,end=4,mid=3
start=4,end=4,mid=4
start=4,end=3

3.1
3.2
3.3
3.4
..
3.9

O(log2n + p)



*/
function sqrtOfNumber(number, precision) {

    let integerPart = findIntegerPart(number);
    let decimal = 0.1;
    let ans = integerPart;
    for(let i=1;i<=precision;i++) {
        while(ans*ans <= number) {
            ans+=decimal;
        }
        ans-=decimal;
        decimal = decimal / 10;
    }
    return ans.toFixed(precision);
}

function findIntegerPart(number) {

    let start = 1;
    let end = number;
    while(start <= end) {
        let mid = parseInt((start+end) / 2);
        if(mid*mid === number) {
            return mid;
        } else if(mid*mid < number) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return Math.min(start, end);
}

console.log(sqrtOfNumber(10, 3));