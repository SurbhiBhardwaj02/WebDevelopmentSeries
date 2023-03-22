//2015 es6
//hoisting
console.log("line num 3",varName);
//declare
var varName;
//assign
varName=10;
console.log("line num 8",varName);
//reassign
varName=20;
console.log("line number 11",varName);
var varName;
console.log("line num 13",varName);
//------>var scope 
function fn(){
    console.log(a);
    var a=10;
    console.log(a);
    if(a==10){
        var a;
        console.log(a);
    }
    console.log(a);
}
fn();
// var has function scope, inside function  var it can contain only one value 
