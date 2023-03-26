let person1={
    name: "Adam",
    age:20
    
}

let showDetails = function(city, state){
    console.log(this.name +" is "+ this.age + " years old " +city + state);
}

// let showDetailsBind=showDetails.bind(person1)
// showDetailsBind()


Function.prototype.myBind = function(...args){
    let obj = this;
    params= args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params, ...args2]) 
    }
}

let showDetailsMyBind= showDetails.myBind(person1,"noida")
showDetailsMyBind("Uttarpradeah");