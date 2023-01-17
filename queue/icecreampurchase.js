function icecreamPurchase(notes) {
    let countFive = 0;
    let countTen = 0;

    for(let currency of notes) {

        if(currency === 5) {
            countFive++;
        } else if(currency === 10) {
            if(!countFive)
                return false;
            countFive--;
            countTen++;
        } else {
            if(countFive && countTen) {
                countFive--;
                countTen--;
            } else if(countFive >= 3) {
                countFive-=3;
            } else {
                return false;
            }
        }
    }
    return true;
}