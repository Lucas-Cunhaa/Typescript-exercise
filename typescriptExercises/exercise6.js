var arrayE = [1, 2, 4, 6, 7, 8];
var arrayD = [1, 2, 4, 6, 7, 8];
var arrayED = [];
for (let i = 0; i < arrayE.length; i++) {
    for (let j = 0; j < arrayD.length; j++) {
        if (arrayE[i] === arrayD[j] && arrayE[i] > 5) {
            arrayED.push(arrayE[i]);
        }
    }
    console.log(arrayED);
}
