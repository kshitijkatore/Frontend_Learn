# Java Script The Langauge
✅ JavaScript The Language --> Code likhana seekhana, main features

✅ JavaScript The DOM --> Code likhakar cheejain banana seekhna

# Basics
### Grammer Understanding of Error
You can have all the tools in your box and grammer is  like ability to use them.

# Inbuilt Features
## console, alert, prompt
####  console
* consol.log --> its prints the msg
```bash
console.log("Xitij Katore");
```
* consol.warn --> its generate warning msg
```bash
console.warn("Xitij katore")
```

* consol.error --> its generates the error msg
```bash
console.error("Xitij katore")
```
#### alert
alert shows the popup msg to user
```bash
alert("Hey");
```
#### prompt 
prompt shows the poopup msg to user and also user inputs.
```bash
prompt("Hey");
```

# Variables & Constants
variable and constants hote hai. data store karne ke liye and variables mein data store hota hai and change bhi hojata hai and constants mein data store and change nahi hota and dono hi browser par memory lete hai and browser RAM par chalta hai to technically dono RAM par chalte hai yafir space lete hai.

```bash
var a = 12;
var b = 22;
```

```bash
const c = 20;
```

# Compilers and Interpreters
Js language english words use karti hai and computers english nahi samjte, wo samajhte hai 0 and 1 jisko current flow and current bypass bhi kah skte ho, and hum chaahte hai hum english mein likhke computer se bat karle, to hum ek transletor lagayenge jo ki humara code english mein lega and 0 and 1 mein convert kr ega.

* Compiler --> compiler code ko convert karta hai machine code fast chalta hai.but conversion rate slower hota hai.

* Interpreter -->Interpreters code ko Byte code me convert karta hai.but the conversion rate faster hota hai.
runs time byte code is slower works.
JavaScript mein interpreter hoat hai.
* machine code most hardware specific hota hai. byte code less hardware specefic hota hai.

* just in time(JIT) compiler --> interpreter ki shurvati taakat use karta hai. and compiler ki running taakat use karta hai.

# 🪟 Window
There are many features which are frequently used in js and they are not the part of js, they are not the part of js the language but they are available in the browser and when use them in js they are called from the browser and not js.

window is a collection of tools. which are offers by the browser to use in javascript.all thse features which are made available vai browser are put inside window.

#### Example
```bash
console.log("");
alert("");
prompt("");
```
# Data Types
Two types of data types 
1. Primitive data types --> string,12, 12.4, True, a, null, undefined.
#### Example
```bash
var a = 12;
var a = 12.3;
var a = false;
var a = null;
var a = undefined;
```
2. reference data types
[] () {} --> reference data types
#### Example
```bash
var a = []
var a = function(){};
```
* spread operator
#### Example
```bash
var arr = [11, 12, 13, 14];
var brr = [...arr];
```
# Conditional Statement
* if, else, else-if, ternary opertor, switch case.
* truthy and falsey

```bash
if(12)
```
#### Explaination
truthy and falsey values.\
har value ko true ya false banaya jaa skta hai, ye depend krta hai, ki wo value type kay hai, agar wo value, truthy hai to true banegi and falsey hai false.

null, undefined, Nan, 0, "", '', document.all, false --> falsey values and baki sab truthy value.

# Loops
loops --> repeatition is a loop
for while do-while foreach forin forof

* for loop
#### Example
```bash
Syntax:
for(initialization;condition;increment/decrement{      
    // code
}

example:
for(var num = 1; num < =10; num++){
    console.log(num);
}
```
* While loop
```bash
Syntax:
Start;
while(end){
    console.log("Hello");
    Change;
}

Example:
var i = 1;
while(i<11){
    console.log(i);
    i++;
}
```

# Functions in JavaScript
js mein function normal programing language jaise nahi hai, iska matlab hai, js mein functon banane ke liye type nahi batana padta bas aapko function word likhana padega.and aap usey koi naam deke bana skte ho.

indepth -- js mein function first class function ka darja diya gaya hai, jiska matlab hai, ki js mein function ko value/variable ki tarah treat kiya ja skta hai.


* What is function

    koi esa code jo apko baar baar use krna ho, ya fir koi aisa code jisko turnat na chalana ho par kadhi chalana ho, usey function mein daal skte hai.
```bash
fuction_defination:
function abcd(){
    console.log("Hey");
}

function_call:
abcd();
```
* Why we need

    To reuse code and to wrap the code which we want to run in future at some point of time.

* how to use
```bash
    function abcd(){
        // your code here..
    }
```

* parameters and arguments
```bash
function abc(val){
    console.log(12+val);
}
abc(12);
```

* es5 --> mainly three  types creating the function.

* 1)function statements.
```bash
   function abcd(){
    // function statement
    }
```

* 2)function expressions
```bash
    function abcd = (){
    // function statement
    }
```
* 3)anonymous function.
```bash
    function(){
    // anonymous function
    }
```


* es6 --> 1)fat arrow function.

* a) basic fat arrow.
```bash
var a = ()=>{
    // basic fat arrow
}
```

* b) fat arrow with one parameter.

    In one fat arrow me  uska fat-->() hata sakte hai.but jaruri nahi hai.
```bash
var g = (a)=>{}
g(12);
```
aise bhi likha sakte hai fat hata ke hai.
```bash
var g = a =>{}
g(13);
```
* c) fat arrow with implicit return.

    {} --> ye implicit rahta hai.
```bash
 var abcd = ()=>"Xitij";
 var ans = abcd();
```
# Return

Return ka matlab hua, jaha par bhi return lagega uske aage jo bhi likhoge wo jaayega jaha par function call hua tha, return function ke andar lagta hai.
aisa function return kuch bhi nahi karta vo return undefined karta hai.

```bash
function abcd(){
    return 12;
}
var ans = abcd();
```
# Undefined/ notdefined/ Null
* Undefined is value.

    ye value tab di jaati hai jab variable ko koi value naa mili history, iska matlab hai, ye ek garbage value ki tarah treat ki jaati hai, aap isey default value bhi kah skte history.

* Not defined is an error.
    koi particular element/identity ko use karna without its declaration gives an errror, and that error is not defined error.
```bash
console.log(a);
```

* Nulll is also a value.
    * this is a value which resolve like, not found.
    * null is recieved when something is not found.


# Arrays
Array matlab jab bhi aapko ek se jaada value ek saath rakhni ho.

* What
```bash
var users = ["xitij", "abhishek", "adhokshaj"];
console.log(users[0]);
console.log(users[20]);
```
aisa variable jiski koi value nahi di uski default value undefined hoti hai.

* How
```bash
var arr = [1, 2, 3, 4, 5, "xitij", function(){}, [], 4];
```
* Why
// a lot of times the data is in the shape of than nummber, to contain all data altogether, save it in an array.

* How to loop an array
```bash
var arr = [1,  2, 3, 4, 5]
arr.forEach(function(elem){
    console.log("hey");
    console.log(elem);
});
```

* How to loop an array and do something with each element 
```bash
arr.forEach(function(val){
    console.log(val+1);
});
```

# Objects
What --> object ek tareeka hai jisse ki hum ek identity ki details ko ek saath rakh skte hai.

```bash
defined object:
var obj = {};
var obj2 = new Object();
``` 

```bash
var data = {
    company: "canon",
    price: 1200,
    for: "camera",
    isWorking: true,
};
console.log(data.company);

var a = [1, 22, 10, 4, 11]
for([index, item] of a.entries()){
    console.log(index, item);
}
```
# Advance Js
* Prototypes
* Prototypel Inheritance
* Asyncronous Js
* ES6 - Climax

# DOcument Object Model

DOM --> Document object model

aisi javascript aapke webpage par chhejo ko badal sake, us js ko hum perform kar skte hai DOM ke sathh.

Dom manupulation --> body mein kuchh bhi change karna ya manupulate karna actully dom manipulation kahalata hai.

* **Accessing Elements:**

  Selection -- These is valid process to select.
     * Select by Id
    ```bash
        let abcd = document.getElementById('#abcd');
    ```
  
     * Select by className:
    ```bash
       let class_abcd = document.getElementsByClassName('.abcd');
    ```

     * Select by TagName:
    ```bash
       let tag = document.getElementsByTagName('h3');
    ```

     * all select and save like ID,Calss ,TagName
    ```bash
       let btn = document.querySelector('button');
    ```


* **Modifying Elements**

    kisi ko bhi change karne se pahile use select karna gota hai.

```bash
var btn = document.querySelector("#btn");
btn.textContent = "Starting...";

let h1 = document.querySelector("h1");
h1.textContent = ("Change inner html text");
h1.textContent += (" Kshitij");

# InnerHTML
let h2 = document.querySelector("h1");
h2.innerHTML = '<i>Hey, xitij</i>';
```

* **Manipulating Style and Classes:**

   * Style
    ```bash
    let h1 = document.querySelector("h1");
    h1.style.color = "red";
    h1.style.backgroundColor = "yellow";
    h1.style.fontSize = "50px";
    ```

  * classList:
  ```bash
  let h2 = document.querySelector("h2");
  h2.classList.add('makeitred')
  h2.classList.remove('makeitred')
  h2.classList.toggle('makeitred')
  ```

* **Creating and Deleting Elements:**

```bash
var h1 = document.createElement("h1");
h1.textContent = "Hello World";
h1.classList.add("makeitred");

# html file me add karo
    document.querySelector('body').appendChild(h1);
    document.querySelector('body').removeChild(h1);
```

* **Event Handling**

Event handling in JavaScript refers to the process of capturing and responding to events that occur in a web application, such as user interactions (like clicks, key presses, mouse movements) or system events (like window loading, document scrolling). 

Here is a simple step-by-step explanation of event handling in JavaScript:

1. **Event Listener Registration**: You start by registering an event listener on a specific element or object that you want to monitor for events. This can be done using the `addEventListener` method.

2. **Event Triggering**: When the specified event occurs (e.g., a user clicks a button), the browser creates an event object and passes it to the event handling function.

3. **Event Handling Function**: You define a function that should be executed when the event occurs. This function is commonly referred to as an "event handler" or "event callback".

4. **Response to Event**: Inside the event handling function, you write the code that should be executed in response to the event. This can involve manipulating the DOM, changing CSS styles, fetching data from a server, or any other action you want to perform.

5. **Cleaning Up**: It's good practice to clean up event listeners when they are no longer needed to prevent memory leaks. This can be done using the `removeEventListener` method.

```bash
var btn = document.querySelector("button");
btn.addEventListener("click", ()=>{
    btn.textContent = "Clicked...";
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    btn.style.border = "2px solid black";
    btn.style.fontSize = "25px";
    btn.style.padding = "5px";
    btn.style.borderRadius = "10px";
})
```

```bash
var btn = document.querySelector("button");
btn.addEventListener("dblclick", ()=>{
    alert("Double Clicked");
})

btn.addEventListener("mouseover", ()=>{
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
})

btn.addEventListener("mouseleave", ()=>{
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
})

```
