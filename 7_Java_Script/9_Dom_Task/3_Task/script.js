var form = document.querySelector("form");
// var inp1 = document.querySelector("#inp1");
// var inp2 = document.querySelector("#inp2");
var inps = document.querySelectorAll('input[type="text"]');
var h4 = document.querySelector("h4");

// form.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     // console.log(inp1.value, inp2.value);
//     if(inp1.value === '' || inp2.value === ''){
//         h4.textContent ="Error, Some fields are blank.";
//         h4.style.color = "red";
//     }
//     else{
//         h4.textContent = '';
//         h4.style.color = "black";
//     }
// })

// form.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     inps.forEach((inp)=>{
//         if(inp.value === ''){
//             h4.textContent = "Error, Some fields are blank.";
//             h4.style.color = "red";
//         }
//         else{
//             h4.textContent = '';
//             h4.style.color = "black";
//         }

//         })

// })

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    for(var i=0; i<inps; i++){
        if(inps[i].value === ''){
            h4.textContent = "Error, Some fields are blank.";
            h4.style.color = "red";
            break;
        }
    }
})
