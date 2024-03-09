// Asyncronous js
// aisa koi bhi code jismein kuchh time lagta hai,js main use by default in most cases async code mankar side stack mein daal diya jaata hai.


// setTimeout - settimeout ka code kuchh der baad chalta hai.
// 1000 ms = 1 sec

// console.log("Hey1"); // syncronous code hai.
// console.log("Hey2"); // syncronous code hai.
// setTimeout(() => {
//     console.log("Hello");
// }, 1000) // asyncronous code hai.
// console.log("Hey3"); // syncronous code hai.

// setinterval - set interval ka code kuchh der baad chalta hai baar baar ek particular interval time main.

// console.log("Hey 1"); // syncronous code.
// var hamara_interval = setInterval(() => {
//     console.log("Hey 2");

// }, 1000) // asyncronous code.
// console.log("Hey 3"); // syncronous code.

// to stop the interval
// var count = 1;
// const hamarainterval = setInterval( ()=> {
//     ++count;
//     console.log(count);
//     if(count === 4){
//         clearInterval(hamarainterval);
//     }
// }, 1000)


// Fetch API - ye kisi url par jaa kar kuchha data laayega ya data hamare pass se us url par lekar jaayega.

// kyuki ye interval par jayenga aur fir data ko lekar aayenga to ismein time lagta hai to by default hi js mein fetch ko async bannaya gaya hai.

// fetch(`https://randomuser.me/api/`) // asyncronous code.
// .then(raw => raw.json())
// .then(redable => console.log(redable.info.seed))


// AXions (or other HTTP libraries) - ye bhi wahi karenga jo fetch karta hai bas ye hoda jaada developer friendly hai.

// axios.get(`https://randomuser.me/api/`)
// .then(result => {
// console.log(result.data.results[0].gender);
// })

// promise  - iske andar jo code likhonge wo apan kaam karenga aur khud side stack mein chale jaayege us code lekar aur jab andar se code resolve kiya jaayega tab ye chalenga.

// const parchi = new Promise((resolve , reject) =>{
//     // jaake ek user laao and agar wo male ho to green button 
//     fetch(`https://randomuser.me/api/`)
//     .then(raw => raw.json())
//     .then(result => {
//         if(result.results[0].gender === "male"){
//             resolve();
//         }else{
//             reject();
//         }
//     });
// });

// parchi.then(() =>{
//     console.log("green button");
// })
// .catch(() =>{
//     console.log("red button");
// })
// these all are the asyncronous functionlity --> ye sabhi use karenge jab hame kucha time lagenga.


// callbacks --> callbacks kucha khas nahi sirf ek function hota hai, bus thoda special jo hai wo ye ise pass kiya jaata hai as an argument jab particular async code chal jaaye.


// var abcd = (a, b) =>{
//     b();
// }

// abcd(1, () =>{
//     console.log("Callback function chala")
// });

// to usse kaise karte hai.. 
/* var doSomeAsyncTask = (url, callback) =>{
    fetch(url)
    .then(raw => raw.json())
    .then(result =>{
        callback()
    })
}
doSomeAsyncTask("some url", ()=>{

})
*/

/*
var gatData = (url, callback) => {
    fetch(url)
    .then(raw => raw.json())
    .then(result => {
        callback(result);
    })
}
getData("https://randomuser.me/api/", (result) =>{
    console.log(result.results[0].gender);
})
*/

// Aasync /await --> koi bhi function banalo and uske andar jo man mein aaye wo async code likhado, ab jab ap async likhte ho to baad waali line pahle chal jaati kyuki asyn side stack pe hota hai aur baad waali line agar async ke basis par hui to apka code fail ho jaayenga,  wo isliye kyuki aapka code fail hojayenga.

// with asyn await aap async code aise likh skte ho jaise ki aap normal

/*
async function data(){
    let a = await fetch(`https://randomuser.me/api/`);
    a = await a.json();
    console.log(a);
}
data();

*/

// Event loop
// In these process one main stack and other is callback queue, first main stack functionality runs and remove all one by one--> its checky by event loop remove or not, after that all of those element are in call back queue go to the main stack thise process follow us.

// callback vs Promises vs Async / Await

// with the help of callback
// var dataFetcher = (url, callback) =>{
//     fetch(url)
//     .then(raw => raw.json())
//     .then(result => {
//         callback(result);
//     })
// }

// dataFetcher("https://randomuser.me/api/", (result) =>{
//     console.log(result.results[0].gender);
  
// })

// with the help of Promicess

// var dataFetcher = (url) =>{
//     const parchi = new Promiss((resolve, reject) =>{
//         fetch(url)
//         .then(raw => raw.json())
//         .then(result =>{
//             resolve(result);
//         })
//     })
//     return parchi;
// }
// dataFetcher("https://randomuser.me/api/")
// .then( (result) =>{
//     console.log(result);
// })

// with the help of async / Await

// async function dataFetcher(url){
//     let data = await fetch(url);
//     let result = await data.json();
//     return result;
// }
// async function call(url){
//     let data = await dataFetcher("https://randomuser.me/api/");
//     console.log(data);
// }
// call();


// Generators
// aap program execution ko pause kar sakte ho and bol sakte ho ki agla step karo.

/*
function* printNumber(){
    console.log("started");
    yield 1;
    console.log("pahla chal chuka..");
    yield 2;
    console.log("Dusra chall chuka.."); 
    yield 3;
}

const ans = printNumber();
// console.log(ans.next().value);
// console.log(ans.next().value);
// console.log(ans.next().value);

console.log(ans.next()); // prints started.
console.log(ans.next()); // prints pahla chal chuka..
console.log(ans.next()); // prints Dusra chall chuka..
console.log(ans.next()); 
*/

// example
/*
function* allNUms(){
    for(var i =1; i<11; i++){
        yield i;
    }
}
const ans = allNUms();
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
*/


// Web workers
// thread --> thread 
// Usually hammara poora code single thread par chalta hai par koi barr kuchh bade calculations perform karne pad jaate hai jiski wajah se aapka mein threas busy hojata hai ya fir wo kaafi jaada loaded hojaata aur aapke baaki tasks ki performance kam ho jaati hai.

var nums = Array.from({length:100}, (_,k) => k+1);
const worker = new Worker("worker.js");

worker.postMessage(nums);

worker.onmessage = (data) =>{
    console.log(data.data);
}


