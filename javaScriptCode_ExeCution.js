// console.log(global); // window 
// console.log(this);
console.log("Hi i am",a);
console.log("Hi i am",a);
var a;
console.log("Hi i am",a);// till here memory is allocated from stating and output will be undefined

a=10;
console.log("Hi i am",a);

fn();
//function statements
function fn(){
    console.log("I can be called before my declaration");
}
fn(); // Memory is alloacted for func before its execution


/*
Execution context(wrapper)
Javascript doesnt have main so the code runs in execution context
-->It have two imp. things
->global object 
jo bhi area function ke bhar, its  global area

->this={}

-->Global Execution Context
in node case, its global...... in browser case, its called window
this={}, in browser=window

-->Creation Phase
code chalne se phle, we get three things, global, this and memory allocate for the execution
 memory allocation here is called HOISTINg

*/

// console.log(varname);
// var varname;
// console.log(varname);
// varname="captain";
// console.log(varname);

// fn();
// function fn(){
//     console.log("hi")
// }
// fn();
// fn1();
// function fn1(){
//     console.log("Hello")
// }
// fn1();

// In case of variable, mem is allocated with undefined,
// In case of function, mem is allocated, not with undefined but the function functinalities