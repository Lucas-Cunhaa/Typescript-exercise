function GetUntilSquare ( n : number, d : number) {

let count : number = 0
let squares : number[] = []

for (let index : number = 0; index <= n ; index++){
    squares.push(index * index)
}

for (  numerals  of squares) {
    let strNumerals : string = numerals.toString()

    for (let j = 0; j < strNumerals.length; j++) {
        if( parseInt(strNumerals[j]) === d) {
            count++
        }
        
    }
   
}


return { count: count, squares: squares }

}

const result = GetUntilSquare(10, 1);

console.log(`Count: ${result.count}`)
