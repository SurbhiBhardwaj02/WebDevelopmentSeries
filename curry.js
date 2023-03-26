//-->currying with bind method
// function add(a,b){
//     console.log(a+b);
// }
// add(2,4)

// let addwith2= add.bind(this, 2)
// let addwith= add.bind(this, 2,7)
// addwith2(5);
// addwith();



//-->curring with clouser
function add(x){
    return function(y){
        console.log(x+y) 
    }
}
let addwith2= add(2)
addwith2(3)