// Procedural paradigm | OOPs Paradigm || Functional Programming

// -->> Functional Programming
//  Imperative & declarative code Writing

//  Pure function & their side effts

//  Mutability & Immutability

// map,filter, reduce

let  myArr= [1,2,3,4,5]

let newArr = myArr.map(function(x){
    return x*x;
})

console.log(myArr);
console.log(newArr);

//filter

let filterArr = myArr.filter(function(x){
    return x%2 ==0
})
console.log(filterArr)

//reduce
 let reduceArr = myArr.reduce(function(accumulator , x){
    return accumulator+x;
 },0)// this 0 is accumulator value

 console.log(reduceArr  )
