var array5 = [1, 2, 3, 4, 5, 6];
var arrayEven = [];
var arrayOdd = [];
for (let i = 0; i < array5.length; i++) {
    if (array5[i] % 2 === 0) {
        arrayEven.push(array5[i]);
    }
    else {
        arrayOdd.push(array5[i]);
    }
    console.log(array5, arrayEven, arrayOdd)
}
