function car(brand, model, color){
    this.Brand= brand
    this.Model= model
    this.Color= color

    this.drive = function(){
        console.log("I am Driving"+ this.Model)
    }
}
let car1= new car("BMW" , " X5" , "white")// this-{}
let car2= new car("BMW" , " X^" , "black")
console.log(car1)
console.log(car2)

car2.drive()