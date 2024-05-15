class Immobile { 
    Adress
    Cep 
    Size 
    Bathrooms 
    Rooms 
    Peoples
    Value 
    
    constructor ( adress, cep, size, bathrooms, rooms, value ) { 
        this.Adress = adress 
        this.Cep = cep  
        this.Size = size 
        this.Bathrooms = bathrooms 
        this.Rooms = rooms 
        this.Peoples = []
        this.Value = value 
    }

    addPeople(person) {
        this.Peoples.push(person)
    }

    removePeople(person) {
        for(let i = 0 ;  i <= this.Peoples.length - 1 ; i++ ){
            if(person === this.Peoples[i]){
                splice(i, 1)
            }
        }
    }
}

class Person {
    Name 
    Cpf 
    Birthday 

    constructor( name, cpf, birthday ) {
        this.Name = name 
        this.Cpf = cpf 
        this.Birthday = birthday
    }
}

class House extends Immobile { 
    BackYard 

    constructor( BackYard, adress, cep, size, bathrooms, rooms, value ) {
        super( adress, cep, size, bathrooms, rooms, value )
        this.BackYard = BackYard
        this.setBathrooms()
    }

    setBathrooms() {
        if ( this.Bathrooms > 5 ) {
            throw new Error( "Houses can not have more than 5 bathrooms" )
        }
    }

    getValue () {
        if ( !this.BackYard ) {
            console.log( this.Value )
        } else {
            console.log( this.Value * 1.3 )
        }
    }
}

class Apartament extends Immobile {
    Floor 
    Condominium
    constructor( floor, condominium, adress, cep, size, bathrooms, rooms, value ) {
        super( adress, cep, size, bathrooms, rooms, value )
        this.Floor = floor  
        this.Condominium = condominium
        this.setBathrooms()
    }

    setBathrooms () {
        if ( this.Bathrooms > 4 ) {
            throw new Error( "Apartaments can not have more than 4 bathrooms" )
        }
    }

    getValue () {
        console.log( this.Value + this.Condominium)
    }
}

class Kitnet extends Immobile { 
      constructor( adress, cep, size, bathrooms, rooms, value ) {
        super( adress, cep, size, bathrooms, rooms, value )
        this.Floor = floor  
        this.Condominium = condominium
        this.setBathrooms()
    } 

    setBathrooms () {
        if (this.Bathrooms > 2) {
            throw new Error( "Kitnet can not have more than 2 bathrooms" )
        }
    }

    getValue() {
        console.log(this.Value)
    }

}

let Lucas = new Person("Lucas", 123, 24 ) 
let Miguel = new Person ("Miguel", 456, 4)

let house1 = new House (true, 1,2, 30, 5, 2, 1000)
house1.addPeople(Lucas)
console.log( house1 )

house1.getValue()

