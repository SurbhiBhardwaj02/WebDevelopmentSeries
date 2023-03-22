// let fs= require("fs");
// //async
// // console.log("before");
// // fs.readFile("f1.txt",function(err,data){
// //     console.log(data);
// // })
// // console.log("before");

// let promise= fs.promises.readFile("f11.txt");
// console.log(promise);
// //settled
// //fulfilled
// promise.then(function(data){
//     console.log(""+data);
// })
// //rejected
// promise.catch(function(err){
//     console.Consolelog(err);
// })


function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink==='coffee'){
            resolve('Order Placed')
        }
        else{
            reject('Sorry ,we only serve coffees')
        }
    })
}
function processOrder(order){
    return new Promise(function(resolve){
        console.log("order is being Processed")
        resolve(`Coffee Served for this ${order}`)
    })
}

//Scenerio with promises
// placeOrder('coffee').then(function(order){
//     console.log('Request Received')
//     let orderIsProcessed= processOrder(order)
//     return orderIsProcessed;
// }).then(function(orderIsProcessed){
//     console.log(orderIsProcessed);
// }).catch(function(err){
//     console.log(err);
// })


//Async-await

async function serveOrder(){
    try{
        const orderReceived=await placeOrder('coffee')
        console.log(orderReceived);
        const ProcessedOrder = await processOrder(orderReceived);
        console.log(ProcessedOrder);
    }catch(err){
        console.log(err);
    }
    
}
serveOrder();