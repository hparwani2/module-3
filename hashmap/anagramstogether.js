function anagramsTogether(arr) {
    let map = new Map();
    for(let element of arr) {
        if(map.has(Array.from(element).sort().join(''))) {
            map.get(Array.from(element).sort().join('')).push(element);
        } else {
            let arr = [];
            arr.push(element);
            map.set(Array.from(element).sort().join(''), arr);
        }
    }
    return Array.from(map.values());
}
let arr = anagramsTogether(["eat","tea","tan","ate","nat","bat"]);
arr.forEach((inside) => console.log(inside));