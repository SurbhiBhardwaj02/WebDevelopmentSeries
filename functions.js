//Non-Primitive=> array. function,objects
function sayHi(param){
    // console.log('hi');
    // console.log(param)
    let rval= Math.random()> 0.5 ? true : " less than 0.5"
    return rval
}
// sayHi()
let rval=sayHi([1,2,3,4,5])
console.log(rval);
// sayHi("OKYY")

//----> there is no need to define any type of parameter value and 
//returntype value.

//-->functions are first class citizen
//--.function are treated as variable
let a=[1,2,3];
let b=a;
console.log(b)
//similarly
let fnContainer= function fn(){
    console.log("i am expression")
    console.log("i am an// anonymous function")
}
fnContainer();

//IIFE->Immediately Invoked function expression
(function fn(){
    console.log("I am IIFE");
    console.log("I will run on my own");
})();

//->Arrow function
let fn= num => num*num;

//---> First class citizen
//fuction are treated as variable.
//1.asiignment -> fn expression
// -->2.function can be passed as parameter
//as variable can be returned from function similarly
// -->3. function can be returned from function->closure



function sayHello(param){
    console.log("hello",param);
    param();
    return "scsdf";
}
function smaller(){
    console.log("hello i am smaller");
}
sayHello(smaller);


function outer(){
    console.log("I am returning inner");
    return function inner(){
        console.log("I am function inner")
    }
}
let Rval=outer();
console.log(Rval);

// function real(){
//     console.log("Hi i am real")
// }
// real()
// function real(){
//     console.log("No,Hi i am real")
// }


// function real(){
//     console.log("oh,Hi i am real")
// }
