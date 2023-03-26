// let person1={
//     name: "Adam",
//     age:20,
//     showDetails : function(){
//         console.log(this.name +" is "+ this.age + " years old");
//     }
// }

// let person2={
//     name:"Steve",
//     age: 21
// }
// person1.showDetails.call(person2);// if we have to apply the same function for other function
// // there is where call comes
// //this is also called function borrowing



let person1={
    name: "Adam",
    age:20,
    
}

let person2={
    name:"Steve",
    age: 21
}

let showDetails = function(city, car){
    console.log(`${this.name} is ${this.age} years old, he lives in ${city} and he drives ${car}`);
}
showDetails.call(person1, "noida", "BMW");

showDetails.apply(person2,["jaipur", "Audi"])

let showDetailsBind=showDetails.bind(person1, "Noida","Mercedes")// we have to store it in some variable
// bcs bind will only bound the obj 

showDetailsBind()