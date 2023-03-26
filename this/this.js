
//this keyword in node with non strict mode

// console.log(this) //return an empty object

// function showThis(){
//     console.log(this);
// }

// showThis();  //global object


// let obj={
//     name:"adam",
//     f:function(){
//         console.log(this)
//     }
// }
// obj.f();  //object itself


// let obj1={
//     name:"adam",
//     f:function(){
//         function g(){
//             console.log(this);
//         }
//         g();
//     }
// }
// obj1.f();  //global object



//this keyword in node with strict mode
"use strict"

console.log(this)// empty obj

function showThis(){
    console.log(this);
}
showThis() //undefined

let obj={
    name:"adam",
    f:function(){
        console.log(this)
    }
}
obj.f();  //object itself 


let obj1={
    name:"adam",
    f:function(){
        function g(){
            console.log(this);
        }
        g();
    }
}
obj1.f(); //undefined

