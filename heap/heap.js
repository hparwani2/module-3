/*
    5, 2, 3, 6, 10, 9, 4
    function comparator(child, parent) {
        if(child < parent) {
            return true;
        } 

        return false;
    }

                3
            5       4
        6       10 9  

    data = [3, 5, 3, 6, 10, 9]
*/

class Heap {
    constructor(comparator) {
        this.comparator = comparator;
        this.data = [];
    }

    createViaArray(arr) {
        for(let element of arr) {
            this.add(element);
        }
    }

    add(val) {
        this.data.push(val);
        this.bottomUp(this.data.length-1);
    }

    peek() {
        if(!this.data.length) {
            return null;
        }
        return this.data[0];
    }

    print() {
        console.log(this.data);
    }

    poll() {

        if(this.data.length === 1) {
            return this.data.pop();
        }

        const data = this.data[0];
        this.data[0] = this.data[this.data.length - 1];
        this.data.pop();
        this.topBotttom(0);

        return data;
    }

    size() {
        return this.data.length;
    }


    topBotttom(index) {
        if(index === null || index === undefined) {
            return;
        }

        const leftIndex = 2 * index + 1;
        const rightIndex = 2 * index + 2;

        let nextIndexToChoose = index;
        if(leftIndex < this.data.length 
            && this.comparator(this.data[leftIndex], this.data[index])) {
            nextIndexToChoose = leftIndex;
        }

        /*
            1. if rightIndex exist then check for swapping
            2. either leftIndex could be smaller in that case nextIndexToChoose would be undefined
               because of previous check
            3. or it could greater in that case we have to check does choosing right makes sense?
        */
        if(rightIndex < this.data.length 
            && this.comparator(this.data[rightIndex], this.data[nextIndexToChoose])) {
            nextIndexToChoose = rightIndex;
        }

        if(nextIndexToChoose !== index) {
            this.swap(nextIndexToChoose, index);
            this.topBotttom(nextIndexToChoose);
        }
    }

    swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
    }

    bottomUp(index) {

        if(index === 0)
            return;

        let parentIndex = Math.floor((index - 1) / 2);

        if(this.comparator(this.data[index], this.data[parentIndex])) {
            this.swap(index, parentIndex);
            this.bottomUp(parentIndex);
        }
    }


}

module.exports = Heap;