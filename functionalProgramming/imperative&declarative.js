// If the square of the num is even

//imperative way
const x=4;

const x_sq= x*x;

if(x_sq %2==0){
    isEven= true;
}
else{
    isEven=false;
}
console.log(isEven);    

//declarative
const isSquareEven = (x) => ((x*x)%2 == 0  ? true : false);

console.log(isSquareEven(4));