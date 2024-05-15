class Employee {
    Name 
    Wage
    constructor (name, wage) {
        this.Name = name 
        this.Wage = wage
    }   
}

class Manager extends Employee { 
    Department 
    constructor ( name, wage , department) {
        super( name, wage )
        this.Department = department
    }
    showInfos() {
        console.log(this.Department, this.Name, this.Wage)
    }
}

class SalesMan extends Employee {
  
    Commission
    constructor ( name, wage , commission ) {
        super( name, wage )
        this.Commission = commission
    }
    showInfos() {
        console.log(this.Commission, this.Name, this.Wage)
    }
    showWage() {
        console.log( this.Wage * this.Commission)
    }
}
 let Lucas = new Employee("Lucas", 1000)

 let LucasG = new Manager ("Lucas", 1000, 1)

 let LucasS = new SalesMan ("Lucas", 1000, 1.5)

console.log(Lucas, LucasG, LucasS)

LucasG.showInfos()

LucasS.showWage()

