let  myArr= [1,2,3,4,5]

let sqArr = myArr.map(function(x){
    return x*x;
})

// console.log(myArr);
// console.log(sqArr);

//custom map
function myPolyfillmap(arr, cb){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        newArr.push(cb(arr[i]));
    }
    return newArr
}

function square(x){
    return x*x;
}
console.log(myPolyfillmap(myArr, square));


//custom filter

let fArr= [2,4,6,9,7,3];
function myPolyFillMap(arr,cb){
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        newArr.push(cb(arr[i]));
    }
    return newArr;
}
function isEven(x){
    return x%2==0 ? x : null
}
console.log(myPolyFillMap(fArr,isEven));

function customReduce(myArr, accumulator){
    for(let i=0;i<myArr.length;i++){
        accumulator+=myArr[i];
    }
    return accumulator;
}
console.log(customReduce(myArr,0));