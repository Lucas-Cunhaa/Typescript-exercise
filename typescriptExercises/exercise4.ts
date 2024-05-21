let arrayPositive : number[] = [1,4,5,6,9,0]

for (let i : number = 0; i <= arrayPositive.length ; i++) {
    if (arrayPositive[i] === 0 ) {
        for (let j : number = 0; j <= arrayPositive.length -1 ; j++) {
            arrayPositive[j] = arrayPositive[j + 1]
        }
    }
}
