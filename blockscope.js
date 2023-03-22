//{}---> block scope
//  if(true){
//     console.log("hi")
//  }

let fruits="apple";
console.log(fruits);
{
    // console.log(fruits);//temporal dead zone
    let fruits;
    console.log(fruits);
    fruits="kiwi";
    console.log(fruits);
}
console.log(fruits);