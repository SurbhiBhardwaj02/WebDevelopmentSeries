/*
*-->{LET AND CONST}
Temporal dead zone
Block scope
variable shadowing
var/let/const

*/
//->Temporal dead zone= let const -> just a safety measure that you cant access a variale before its initialization
console.log("Hello")

let varName;
console.log("variable on line number 10",varName);
varName=10;
varName=20;
console.log("variable on line number 13",varName);
//let varName;

// you might be thinking js is interpreted language means code will lun line by line
//so till line 13 code should run
// but no, this is because at the time of hoisting only ,it found two varname, thats why it gives error

const a=10;
// no reassign , no redeclare
console.log(a);