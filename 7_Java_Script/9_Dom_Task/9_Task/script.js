var textarea = document.querySelector("textarea");
var counter = document.querySelector("#counter");

textarea.addEventListener("input", ()=>{
    counter.textContent = textarea.value.length;
})