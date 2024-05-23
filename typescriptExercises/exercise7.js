var Students = [];
var Student = /** @class */ (function () {
    function Student(name, age, height, sex) {
        this.Name = name;
        this.Age = age;
        this.Height = height;
        this.Sex = sex;
    }
    return Student;
}());
var Lucas = new Student("Luas", 18, 1.92, "male");
var Lucas2 = new Student("Luas2", 18, 1.74, "male");
var Leticia = new Student("Leticia", 18, 1.60, "female");
var Leticia2 = new Student("Leticia2", 18, 1.64, "female");
Students.push(Lucas, Lucas2, Leticia, Leticia2);
var mediaHeight = 0;
var counter = 0;
for (var index = 0; index < Students.length; index++) {
    counter += Students[index].Height;
    mediaHeight = counter / Students.length;
}
console.log(mediaHeight);
function showByAgeAndHeight(array) {
    for (var index = 0; index < array.length; index++) {
        if (array[index].Age > 13 && array[index].Height < mediaHeight) {
            console.log(array[index]);
        }
    }
}
function showTallestWoman(array) {
    for (var index = 0; index < array.length; index++) {
        var counter_1 = 0;
        if (array[index].Sex === "female" && array[index].Height > counter_1) {
            counter_1 = array[index].Height;
            console.log(array[index]);
        }
    }
}
function showYoungestMan(array) {
    for (var index = 0; index < array.length; index++) {
        var counter_2 = 100;
        if (array[index].Sex === "male" && array[index].Age < counter_2) {
            counter_2 = array[index].Age;
            console.log(array[index]);
        }
    }
}
function showEven(array) {
    for (var index = 0; index < array.length; index++) {
        if (array[index].Age % 2 === 0 && array[index].Height > 1.90) {
            console.log(array[index]);
        }
    }
}
showByAgeAndHeight(Students);
showEven(Students);
showTallestWoman(Students);
showYoungestMan(Students);
