let  array5 : number[] = [] 
let arrayEven : number[] = []
let arrayOdd : number[] = []

for (let i : number = 0; i < array5.length; i++) {
    if ( array5[i] % 2 === 0) {
        arrayEven.push(array5[i])
    } else {
        arrayOdd.push(array5[i])
    }
    
}
