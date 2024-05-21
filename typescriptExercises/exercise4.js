var arrayPositive = [1, 4, 0, 6, 9, 0];
for (let i = 0; i <= arrayPositive.length; i++) {
    if (arrayPositive[i] === 0) {
        for (let j = i; j < arrayPositive.length - 1; j++) {
            arrayPositive[j] = arrayPositive[j + 1];
        }
      
        arrayPositive.length -= 1;
        i--;
    }
}

console.log(arrayPositive)