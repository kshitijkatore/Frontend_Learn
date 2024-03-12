var btn = document.querySelector("button");
var p = document.querySelector("p");

btn.addEventListener("click", ()=>{
    p.textContent = "Hey, You are clicked on button";
    p.style.backgroundColor = "red";
    p.style.color = "white";
    p.style.border = "2px solid black";
    p.style.fontSize = "25px";
    p.style.padding = "5px";
})