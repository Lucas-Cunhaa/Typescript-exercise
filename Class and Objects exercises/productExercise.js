const SalesMan = require('./store')

class Product {
    Name 
    Value 
    constructor( name, value ) {
        this.Name = name 
        this.Value = value 
    }
}

class Sale  { 
    SalesMan
    ProductList 
    TotalValue
    constructor(salesMan) {
        this.SalesMan = salesMan 
        this.ProductList = [] 
        this.TotalValue = 0
    }

    addProduct(name, value) {
        let myProduct = new Product(name, value)
        this.ProductList.push(myProduct)
    }

    getTotal() {
        for (let i = 0 ; i < this.ProductList.length ; i++) {
            this.TotalValue += this.ProductList[i].Value
        }
        console.log(this.TotalValue)
    }
    endSale() {
        console.log(this.SalesMan.Name, this.TotalValue)
    }

}

const sale1 = new Sale( SalesMan )

sale1.addProduct("nikeDunk", 1000) 
sale1.addProduct("Adidas Lancer", 880)

sale1.getTotal()
sale1.endSale()

