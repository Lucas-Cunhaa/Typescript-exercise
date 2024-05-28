let arrayComparison : string[] = ["1,2,3,4,5", "4,5,6,7,8"] 
console.log(arrayComparison[1].split(''))
function Comparison (array : string[]) : string {
    let split1 : string[] = array[0].split(',')
    let split2 : string[] = array[1].split(',')
    let number1 : number = split1.length
    let number2 : number = split2.length

    let string : string = ""




    for (let index: number = 0; index < split1.length; index++) {
        for (let j : number = 0; j < array.length  -1 ; j++) {
            if( split1[index]  === split2[j]) {
                string += "," +  split1[index];
            }
            
        }
        
    }

   return string
}