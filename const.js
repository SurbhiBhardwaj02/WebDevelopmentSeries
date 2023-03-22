// WE WILL LEARN INTERESTING THING ABOUT ARRAYS
// -->const a=10;
// -->const arr=[1,2,3,4,5]
// -->How is it possible??
// -->arr.shift();
// -->console.log(arr);


// objects--> key:value;
//string, number:valid types
// let object={
//     name:"Surbhi",
//     lastName:"Bhardwaj",
//     sayHey: function(){
//         console.log("Surbhi say Hi");
//     }
// }
// console.log(object);
// //loop
// for(let key in object){
//     console.log(key ,":",object[key])
// }
// object.sayHey();

//arrays
// let arr=[1,2,3,4,5];
// arr.myprop=89;
// arr.Print= function(){
//     console.log("hello from array");
// }
// console.log(arr);

// for(let key in arr){
//     console.log(key,":",arr[key]);
// }
// arr[95]=100;
// console.log(arr);
// console.log(arr[23])

// objects ko array ki tarah amulate kia jata hai

//function---> its an object,,Key:value
//its extra feature is code property thatt can be executed when you
//invoke the function
function fn(){
    console.log("Hello from fn");
}
fn.prop="Property of function";
fn.myfn=function(){
    console.log("I am method of a function ")
}
console.log(fn)
console.log(fn.prop);
fn.myfn();

//JS --> primitive or object 
//everything object->Dates,errors,modules
//except these 6 primitive-> number,string,boolean,undefined,null,symbol