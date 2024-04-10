// async function sleep(millis) {
//     await new Promise(resolve => setTimeout(resolve, millis));
// }
console.log("Before Sleep");
// let t =  Date.now();
// sleep(10000).then(()=> { 
//     console.log(Date.now() - t); 
//     console.log("After Sleep"); 
// });

//simpler way without using async/await or promises, you can use the setTimeout function directly:
/*function sleep(millis) {
    const start = Date.now();
    //console.log(Date.now() - start < millis);
    while (Date.now() - start < millis) {}
}
console.log('Before sleep');
let t = Date.now()
// Sleep for 5000 milliseconds (5 seconds)
sleep(5000);
console.log('After sleep', Date.now() - t);*/

async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));
}

let t = Date.now();
sleep(1000).then(()=>{
    console.log(Date.now() - t);
    console.log("After Sleep");
});
