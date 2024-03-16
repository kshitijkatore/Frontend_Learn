// Working with Local storage
//local storage aisa space hai browser ke pass jismein tum data store kardo to data stored hi rahta hai, aap chahe to browser krdo, refresh kardo ya kucha bhit karo aapka data stored rahenga ab tak aap usey delet naa kar de.

const block = document.querySelector("#block");
const unblock = document.querySelector("#unblock");

block.addEventListener("click", () => {
  localStorage.setItem("block", true);
  show();
}); 

unblock.addEventListener("click", () => {
  localStorage.setItem("block", false);
  show();
});

function show(){
    if(localStorage.getItem("block") === 'false'){
        document.querySelector("#status span").textContent = "Not Blocked";
    }
    else{
        document.querySelector("#status span").textContent = "Blocked";
    }
}

show(); // by default show function
    