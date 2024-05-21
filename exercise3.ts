let arrayA : number[] = []
let arrayB : number[] = [] 
let arrayC : number[] = []
let stopAdd : number = 0



do{
    
    let numA : number = (Number(prompt(`Type a number for array A`)))
    let numB : number = (Number(prompt('Type a number for array B'))) 

    arrayA.push(numA);
    arrayB.push(numB);

    stopAdd = Number(prompt('Add another Number? 1 for YES 0 for NO'))

} while (stopAdd === 0)

for( let i : number = 0 ; i <= arrayA.length - 1 ; i++ ) {
    for( let j : number = 0 ; j<= arrayA.length - 1 ; j++) {
        
    }
}