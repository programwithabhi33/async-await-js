let firstPromise = new Promise((resolve, reject) => {
    // setTimeout(_=>{
    //     resolve("First promise resolved");
    // }, 5000);
    for (let index = 0; index <= 10000; index++) {
        console.log(index)
        if(index == 10000) resolve("First promise resolved");
        
    }
})
let secondPromise = new Promise((resolve, reject) => {
    setTimeout(_=>{
        resolve("second promise resolved");
    }, 7000);
})

async function test(){
    console.log("Async function start");
    let p1 = await firstPromise;
    console.log(p1);
    let p2 = await secondPromise;
    console.log(p2);
}
test();
console.log("after test function");