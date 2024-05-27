function getTheBiggetsWord(phrase) {
    let all = phrase.split(' ');
    let big;
    for (let index = 0; index < all.length - 1; index++) {
       if (all[index].length > all[index + 1].length) {
        big = all[index]
       }
    }
    return big;
}
console.log(getTheBiggetsWord("I love Leticia Luna"));
