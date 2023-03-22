console.log(varName)
var varName=10;
console.log(varName)
function b(){
    console.log("b",varName)//lexical scope
}  
console.log(varName)

function fn(){
    console.log(varName);
    var varName=20;
    
    b();
    console.log(varName);
}
fn();


//lexical scope means function will look for variable value near itself.
//scope chain is finding scope of variable near function 