var arrayComparison = ["1,2,3,4,5,6", "4,5,6,7,8"];
console.log(arrayComparison[1].split(','));
function Comparison(array) {
    let split1 = array[0].split(',');
    let split2 = array[1].split(',');
    let string = "";
    for (let index = 0; index < split1.length; index++) {
        for (let j = 0; j < split2.length  ; j++) {
            if (split1[index] === split2[j]) {
                string += "," +  split1[index];
            }
        }
    }
    return string;
}

console.log(Comparison(arrayComparison))