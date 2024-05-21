let array2 : number[] = [] 

let userNumber : number = 0 

function chekcNumber(num : number) {
    for( let i :  number = 0 ; i < array2.length ; i++ ) {
        if( num === array[i]) {
            userNumber = array.push(Number(prompt("TYPE ANOTHER NUMBER")))
        } else {

        }
    }
}
for ( let i : number = 1 ; i <= 5 ; i++) {
    userNumber = array2.push(Number(prompt(`TYPE NUM ${i}`)))
    chekcNumber(userNumber)
}

