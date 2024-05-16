class Client { 
    Name 
    Cpf 
    Birthday 
    
    constructor ( name, cpf, birthday ) {
        this.Name = name 
        this.Cpf = cpf 
        this.Birthday = birthday
    }
}

class TravelPackage { 
    Owner 
    Go 
    Back 
    Value 

    constructor ( owner, go, back ) {
        this.Owner = owner
        this.Go = go 
        this.Back = back 
        this.Value = 0
        this.checkClient ()
        this.getValue ()
    }

    checkClient () {
        if ( this.Owner !== this.Back.Passenger && this.Owner !== this.Go.Passenger  ) {
            throw new Error ( "CLIENTS DOES NOT MATCH" )
        }
    }

    getValue () {
        this.Value = this.Back.Value + this.Go.Value
    }
}

class Flight {
    Company 
    Number 
    Date 
    Time 
    PlaceOfDeparture 
    PlaceOfArrival
    
    constructor ( company, number, date, time, placeOfDeparture, placeOfArrival ) {
       this.Company  = company
       this.Number = number
       this.Date = date
       this.Time = time
       this.PlaceOfDeparture = placeOfDeparture
       this.PlaceOfArrival = placeOfArrival
    }
}

class Ticket  {
    Seat 
    FirstClass 
    Value 
    Passenger
    Flight 
    
    constructor (seat, firstClass, value, passenger, flight) {
        this.Seat = seat
        this.FirstClass = firstClass
        this.Value = value
        this.Passenger = passenger
        this.Flight = flight
        this.getValue ()
    }

    getValue () {
        if (!this.FirstClass) {
            console.log( this.Value)
        } else {
            this.Value = this.Value * 1.5
            console.log( this.Value)
        }
    }

    showData () {
        console.log( `Tickets in the name of ${this.Passenger.Name} on the ${this.Seat}, in the flight ${this.Flight.Number}, destined to ${this.Flight.PlaceOfArrival}`)
    }

}


let Lucas = new Client ("LUCAS", "123", "Birthday") 

let flightGo = new Flight ("GOL", "1", "01", "4:30","Recife","Roterdam")
let flightBack = new Flight ("KLM", "1", "10", "2:30","Amsterdam","Joao Pessoa")

let go = new Ticket(10, true, 1000, Lucas, flightGo)
let back = new Ticket(11, false, 1000, Lucas, flightBack)

let CVC = new TravelPackage (Lucas, go, back )

go.showData ()
console.log(CVC)