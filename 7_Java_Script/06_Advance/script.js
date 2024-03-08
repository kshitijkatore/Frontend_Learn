// This call apply bind

// keyword ka matlab hota hai aisa word koi matlab ho programing language mein
// this ki value baar baar badal sakti hai alag alag conditions mein, saari conditions ko seekh jaao to this ko samjh jaoge.

// global scope - window
// kisi bhi function scope mein na hona matlab global scope hota hai.
console.log(this); //global scope

// function --> window
function abcd(){
    console.log(this);
}
abcd();

// method - object
// aisa function jo object ke andar hota use ham method kahte hain.
var obj ={
    name: function(){
        console.log(this);
    },
    age: 25,
    email: "agfkgm"
}
obj.name();

// function inside method (es5) - window
var obj2 = {
    sName: function(){  // method

        console.log(this)  // method ke andar this ki value object.
        function childfnc(){
            console.log(this);  // iski value widow hai.
        }
        childfnc();
    },
    age:25
}
obj2.sName();


// function inside method (es6) - object
var obj3 = {
    sName:function(){

        const child = ()=>{
            console.log(this);  // iski value object hi hai in (es6).
        }
        child();
    }
}
obj3.sName();

// constructor function mein this ki value - new blank object
function add(){
    console.log(this);
}

const ans = new add();

// event listener mein this ki value  - that element jispar event listener laga hota hai.
document.querySelector("button")
.addEventListener("click", function(){
    console.log(this);
})

// call apply bind
// ye teen tareeke hai function ko call karne ke kisi object ko this maan kar.

// call --> this ki value kay rakh sakte ho ye pata kar sakte ho call karte waqt.
const obj4 = {name:"xitij"}
function abcd(){
    console.log(this);
}
abcd.call(obj4)

// apply --> ke andar this hota hai or array hota hai.

const obj5 = {name:"xitij"}

function abc(a,b,c){
    console.log(this,a,b,c);
}
abc.apply(obj5, [1,2,3])

// bind --> badme chalane ke liye bind use karte hai, turant nahi ans deta hai.
const obj6 = {name:"xitij"}
function ab(){
    console.log(this);
}
const bdmeChalaneKeeLiye =  ab.apply(obj6);
bdmeChalaneKeeLiye();

// Prototypal Inheritance
// hum objects create karte hai and kisi ek parent constructor function ke prototype mein kuchh add kr dete hai and jab bhi add hota hai to wo parent se banne wale sadhi children instance ko wo properties jo parent ko prototype mein di gayi thi wo milti hai saugaat mein.

// aisa koi bhi fucntion jisemein aap this ka upyog kar rah ho aur us function ko call karte waqt aap nwe ka upyog karein, to new ka matlab waha par rk blank object hojaata hai.

function makeHuman(name, age){
    this.name = name;
    this.age = age;
}

makeHuman.prototype.printMyName = function(){
    console.log(this.name);  // prototypal inheritance.
}
const human1 = new makeHuman("xitij", 20);
const human2 = new makeHuman("xitij", 20);

// Closures
// ek function jo return kare doosra function, aur use kare parent function ka koi variable.

function counter(){
     var count = 0;
     return function(){
        count++;
        console.log(count);
     }
}
var fnc = counter();
fnc();

// 
function timer(){
    a = 12;
    return setTimeout(function(){
        console.log(a);
    }, 2000)
}

var set = timer();
set();

// event delegation --> jab aap event listener se kai saare different elements ke events ko handal kar sake. event lisner ko parent par lagao and unko id, class ya fir tag ke basis par differentiate karkr different task.

var parent = document.querySelector("#parent");

parent.addEventListener("click", function(details){
    console.log("Works");
    console.log(details);
})

// Higher Order Function
// aisa koi function jo ki ek function ko parameter mein accept karle and/aur ek function ko return karde.

function HOF(param){

}
HOF(function(){

});

// Higher order function.
function HOF2(){
    return function(){

    }
}

// Try - catch  
function divide(a,b){
    try{
        if(b == 0){
            throw Error("koi gadbad hui");
        }
        console.log(a/b);
    }
    catch(err){
        console.log(err);
    }
}
divide(12, 0);

// Custom Event
// How -->
const evt = new Event("chacha");

document.querySelector("button")
.addEventListener("chacha", function(){
    alert("chacha event hua");
})
document.querySelector("button").dispatchEvent(evt);






