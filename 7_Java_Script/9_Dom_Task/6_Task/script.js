var divs = document.querySelectorAll('.tab');
var texts = document.querySelectorAll('h3');

texts[0].style.display = "block";
texts[0].style.width = "50%";

divs.forEach((div, index)=>{
    div.addEventListener('click', ()=>{
        hideAllText();
        texts[index].style.display = "block";
        texts[index].style.width = "50%";
    })
})

var hideAllText = ()=>{
    texts.forEach((text)=>{
        text.style.display = "none";
    })
}