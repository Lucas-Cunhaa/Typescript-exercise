function GetUntilSquare(n, d) {
    let count = 0;
    let squares = [];
    for (let index = 0; index <= n; index++) {
        squares.push(index * index);
    }
    for (let _i = 0, squares_1 = squares; _i < squares_1.length; _i++) {
        numerals = squares_1[_i];
        let strNumerals = numerals.toString();

        for (let j = 0; j < strNumerals.length; j++) {
            if (parseInt(strNumerals[j]) === d) {
                count++;
            }
        }
    }
    return { count: count, squares: squares };
}
const result = GetUntilSquare(10, 1);
console.log("Count: ".concat(result.count));
console.log(`Squares: ${result.squares}`)
