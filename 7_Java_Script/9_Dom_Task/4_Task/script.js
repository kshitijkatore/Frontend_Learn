var add = document.querySelector("#add");
var remove = document.querySelector("#remove");
var inp = document.querySelector("input");
var li;
var ul = document.querySelector("ul");

add.addEventListener("click", ()=>{
    if(inp.value.trim() === ''){}
    else{
        li = document.createElement("li");
        li.innerText = inp.value;
        ul.appendChild(li);
        inp.value = '';


    }

})

remove.addEventListener("click", ()=>{
    ul.removeChild(li);
})