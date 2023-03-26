//impure func



 let a=4;
 function addNum(b){
  console.log("The sum is ",a+b)
 }
 addNum(4  );
//    In this we get the different result on passing same isArguments
//    bcs it depends on external factor a which is changable, therefore its a impure function


 //pure function

 function AddNum(a,b){
    console.log("sum", a+b);  //side effect
 }

 AddNum(2,3);
// In this we get the same result on passing same isArguments

//side effect:
// its using external factore console for displaying
// for removing side effect, apply return statement instead of console.log

function addNum(a,b){
    return a+b;
}
console.log(addNum(2,3));