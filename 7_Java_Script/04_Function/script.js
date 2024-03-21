// Function in javascript  --> js mein function normal programing language jaise nahi hai, iska matlab hai, js mein functon banane ke liye type nahi batana padta bas aapko function word likhana padega and aap usey koi naam deke bana skte ho.
// indepth -- js mein function first class function ka darja diya gaya hai, jiska matlab hai, ki js mein function ko value/variable ki tarah treat kiya ja skta hai.

// What is function
// koi esa code jo apko baar baar use krna ho, ya fir koi aisa code jisko turnat na chalana ho par kadhi chalana ho, usey function mein daal skte hai.
function abcd(){
    console.log("Xitij katore")
}
// function call
abcd();

// Why we need
// To reuse code and to wrap the code which we want to run in future at some point of time.

// how to use
// function abcd(){ your code}

// parameters and arguments
function abc(val){
    console.log(12+val);
}
abc(12);


// es5 and es6
// es5 --> mainly three  types creating the function.
// 1.function statements
function abcd(){
    // function statement
}

//2.function expressions
var abcd = function(){
    // function expression
}

// 3.anonymous function. --> jiska koi naam nahi rahta hai.
function sumOfSomthing(a, b, callback){
    const val1 = callback(a);
    const val2 = callback(b);

    return val1 + val2;
}
let call = sumOfSomthing(1, 2, function(a){
    return a * b;
}) 
console.log(call);                                                                                                                        

// es6 --> 1. fat arrow function.
// a) basic fat arrow.
var a = ()=>{
    // basic fat arrow
}
// b) fat arrow with one parameter.
// In single fat arrow me  uska fat-->() hata sakte hai.but jaruri nahi hai.
var g = (a)=>{}
g(12);

// aise bhi likha sakte hai.fat hata ke hai.
var g = a =>{}
g(13);

// c) fat arrow with implicit return.
// {} --> ye implicit rahta hai.
var abcd = ()=>"Xitij";
var ans = abcd();

// Return --> return ka matlab hua, jaha par bhi return lagega uske aage jo bhi likhoge wo jaayega jaha par function call hua tha, return function ke andar lagta hai.

function abcd(){
    return 12;
}
var ans = abcd();
console.log(ans);

// Undefined is value
// ye value tab di jaati hai jab variable ko koi value naa mili history, iska matlab hai, ye ek garbage value ki tarah treat ki jaati hai, aap isey default value bhi kah skte history.

// not defined is an error. 
// koi particular element/identity ko use karna without its declaration gives an errror, and that error is not defined error.
console.log(a);

// nulll is aloso a value
// this is a value which resolve like, not found
// null is recieved when something is not found.


