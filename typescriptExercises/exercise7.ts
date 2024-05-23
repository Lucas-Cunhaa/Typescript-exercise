let Students : object[] = []

class Student {
    Name : string 
    Age : number 
    Height : number 
    Sex : string 

    constructor(name : string , age : number , height : number , sex : string ) {
        this.Name = name 
        this.Age = age 
        this.Height = height 
        this.Sex = sex
    }

}

let Lucas = new Student ("Luas", 18, 1.92, "male")
let Lucas2 = new Student ("Luas2", 18, 1.74, "male")
let Leticia = new Student ("Leticia", 18, 1.60, "female")
let Leticia2 = new Student ("Leticia2", 18, 1.64, "female")
Students.push(Lucas, Lucas2, Leticia, Leticia2)



let mediaHeight : number = 0 
let counter : number = 0

for (let index : number = 0; index < Students.length; index++) {
   counter += Students[index].Height

   mediaHeight = counter / Students.length
 

    
}

console.log(mediaHeight)

function showByAgeAndHeight  (array : object[]) {
    for (let index : number = 0; index < array.length; index++) {
        if( array[index].Age > 13 && array[index].Height < mediaHeight) {
            console.log(array[index])
        }
        
    }
}

function showTallestWoman  (array : object[]) {
    for (let index : number = 0; index < array.length; index++) {
        let counter : number = 0
        if( array[index].Sex === "female" && array[index].Height > counter) {
            counter = array[index].Height 
            console.log(array[index])
        }
        
    }
}

function showYoungestMan (array : object[]) {
    for (let index : number = 0; index < array.length; index++) {
        let counter : number = 100
        if( array[index].Sex === "male" && array[index].Age < counter) {
            counter = array[index].Age
            console.log(array[index])
        }
        
    }
}

function showEven  (array : object[]) {
    for (let index : number = 0; index < array.length; index++) {
        if( array[index].Age % 2 === 0 && array[index].Height > 1.90) {
            console.log(array[index])
        }
        
    }
}





showByAgeAndHeight(Students) 
showEven(Students)
showTallestWoman(Students) 
showYoungestMan(Students)






