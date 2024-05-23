let arrayE : number[] = [1,2,4,6,7,8]
let arrayD : number[] = [1,2,4,6,7,8]
let arrayED : number[] = []

for (let i : number = 0; i < arrayE.length; i++) {

    for (let j : number = 0; j< arrayD.length; j++) {
        
        if( arrayE[i] === arrayD[j] && arrayE[i] > 5 ) {
            arrayED.push(arrayE[i])
        }
        
    }
    console.log(arrayED)
}