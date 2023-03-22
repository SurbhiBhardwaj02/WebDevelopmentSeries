//---> group of key value pair
// ---> key:value -> Property
//---> key:function -> Method
let cap={
    name:"Steve",
    lName:"Rogers",
    address: {
        city: "Manhatten",
        state:"New York"
    },
    age: 35,
    isAvan:true,
    movies: ["First Avenger","winter soldir","civil war"],
    sayHi : function(){
        console.log("Cap says hi");
    }
};
//--->Get
// console.log(cap.name);
// console.log(cap.age);
// console.log(cap.movies[1]);
// cap.sayHi();
// console.log(cap);

//--->Set or Update
// cap.age=46;
// cap.isAvan=false;
// cap.friends=['tony','bruce','peter']
// console.log('--------------------');
// console.log(cap);
// console.log('--------------------');

//--->delete
// delete cap.address
// console.log(cap);

//---> update with loop
for(let  key in cap){
    console.log(key, ":",cap[key]);
}
let prpKey='age';
console.log(cap.age);
console.log(cap[prpKey]);//-> console.log(cap[age]);
//->both are same first will go directly to age taking age as value
// other will take age as variable and then go to the age

console.log(cap.xyz);

 




