let array2 = [];
let userNumber = 0;

function chekcNumber(num) {
    for (let i = 0; i < array2.length  ; i++) {
        if (num === array2[i]) {
            let newNum = Number(prompt("TYPE ANOTHER NUMBER"))
            return chekcNumber(newNum)
        }
        
    }
    array2.push(num)
}


for (let i = 1; i <= 5; i++) {
    userNumber = (Number(prompt("TYPE NUM ".concat(i))));
    console.log(userNumber)
    console.log(array2)
    chekcNumber(userNumber);
}