let array = [2, -2, 3, -3, 4];
if (array.length > 5) {
    throw new Error('only 5 numbers');
}
for (let i = 1; i < array.length; i++) {
    if (array[i] < 0) {
        array[i] === -1;
    }
    else {
        array[i] === 1;
    }
}
console.log(array);
