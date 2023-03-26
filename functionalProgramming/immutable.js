const person1= {
    name: "Adam",
    Age: 25
}

// const person2=person1;
// person2.name="Steve" // this will change name in person 1 also

// so for not changing in person 1 do this,

// const person2 = Object.assign({}, person1);

//using spread operator

const person2={...person1 }
person2.name="Steve"  


console.log(person1);
console.log(person2);