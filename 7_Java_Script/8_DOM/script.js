// DOM --> Document object model
//aisi javascript aapke webpage par chhejo ko badal sake, us js ko hum perform kar skte hai DOM ke sathh.

// dom manupulation --> body mein kuchh bhi change karna ya manupulate karna actully dom manipulation kahalata hai.

// Accessing Elements:

// Selection -- These is valid process to select.
// select by Id
//let abcd = document.getElementById('#abcd');


// select by className
//let class_abcd = document.getElementsByClassName('.abcd')

// select by TagName
//let tag = document.getElementsByTagName('h3')

// all select and save like ID,Calss ,TagName
//let btn = document.querySelector('button');

/*
var frstimg = document.querySelector("#abcd");
var secimg = document.querySelector(".abcd")

var frsth3 = document.querySelector(".defg");
var sech3 = documnet.querySelector("#defg");
*/

// Note --> agar apke pass bohat sare h3 hai aur aap select karna chahte ho to first h3 select honga.
// let h3= document.querySelector("h3");

// agar aap yek se jada query select karna chahte ho to..
// let h3 = document.querySelectorAll("h3");


// Modifying Elements
// kisi ko bhi change karne se pahile use select karna gota hai.

// var btn = document.querySelector("#btn");
// btn.textContent = "Starting...";

// let h1 = document.querySelector("h1");
// // h1.textContent = ("Change inner html text");
// h1.textContent += (" Kshitij");

// // InnerHTML
// let h2 = document.querySelector("h1");
// h2.innerHTML = '<i>Hey, xitij</i>';

// Manipulating Style and Classes:

// Style
// let h1 = document.querySelector("h1");
// h1.style.color = "red";
// h1.style.backgroundColor = "yellow";
// h1.style.fontSize = "50px";

// classList:
// let h2 = document.querySelector("h2");
// h2.classList.add('makeitred')
// h2.classList.remove('makeitred')
// h2.classList.toggle('makeitred')


// Creating and Deleting Elements:
// var h1 = document.createElement("h1");
// h1.textContent = "Hello World";
// h1.classList.add("makeitred");

// html file me add karo
// document.querySelector('body').appendChild(h1);
// document.querySelector('body').removeChild(h1);

// Event Handling:
/*
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
*/

/*
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
*/

document.querySelector("body")
.addEventListener("mousemove", function(){
    console.log("moving...");
})



