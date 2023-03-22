//-->declaration
let arr=[1,2,3,4,5];
console.log(arr);
console.log(arr.length);
let i=0;
while(i<arr.length){
    console.log("element at idx",i,arr[i]);
    i++;
}
//push, unshift ,pop , shift
arr.push("last val");
arr.unshift("first val");
console.log("---------------");
console.log(arr)
console.log("---------------");
arr.pop() // remove last ele
console.log(arr)
arr.shift()// removes first ele
console.log(arr)
console.log(arr.indexOf(2))

// slice and splice
// let partofarr=arr.slice(2,4)  //-> gives ele from starting index and ending index-1
let partofarr=arr.slice(1) //-> takes defaultly sec argument as last ele
console.log(partofarr)
//---->but it doesn't change original arr
console.log(arr)

//---->splice:here 2 tells that we want to del ele at 2 andd
// 1 tells the no. of element we want to del from 2.
//arr.splice(2,1)

arr.splice(2,3)
console.log(arr)
//---->but it does change original arr


