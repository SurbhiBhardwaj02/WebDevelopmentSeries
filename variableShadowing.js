
//_______CASE 1___
// let fruits="apple";
// console.log(fruits);
// {
//     // console.log(fruits);//temporal dead zone
//     let fruits;
//     console.log(fruits);
//     fruits="kiwi";
//     console.log(fruits);
// }
// console.log(fruits);

// In the block, fruits variable is shadowing global fruit varible
// same can be applied with const too
//____CASE2________
// const fruits="apple";
// console.log(fruits);
// {
//     // console.log(fruits);//temporal dead zone
//     const fruits="mango";
//     console.log(fruits);
    
// }
// console.log(fruits);

// //______case3_____
// var fruits="apple"; 
// console.log(fruits);
// {
//     // console.log(fruits);//temporal dead zone
//     const fruits="mango";
//     console.log(fruits);
    
// }
// console.log(fruits);


//____ILLegal case_  -->if inside block var is there
// let fruits="apple";
// console.log(fruits);
// {
//     // console.log(fruits);//temporal dead zone
//     var fruits="mango";
//     console.log(fruits);
    
// }
// console.log(fruits);
