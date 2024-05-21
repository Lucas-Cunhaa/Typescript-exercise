let arrayA = [];
let arrayB = [];
let arrayC = [];
let stopAdd = 0;
do {
    let numA = (Number(prompt("Type a number for array A")));
    let numB = (Number(prompt('Type a number for array B')));
    arrayA.push(numA);
    arrayB.push(numB);
    stopAdd = Number(prompt('Add another Number? 1 for YES 0 for NO'));
} while (stopAdd === 1);
for (let i = 0; i <= arrayA.length - 1; i++) {
    for (let j = 0; j <= arrayA.length - 1; j++) {
        if (arrayA[i] === arrayB[j]) {
            if (!arrayC.includes(arrayA[i])) {
                arrayC.push(arrayA[i]);
                console.log(arrayC);
            }
        }
    }
}
