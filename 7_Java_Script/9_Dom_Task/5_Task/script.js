var start = document.querySelector("#start");
var stop = document.querySelector("#stop");
var h3 = document.querySelector("h3");
var int;
start.addEventListener("click", () => {
  var count = 0;
  int = setInterval(() =>{
    h3.textContent = count;
    count++;
  }, 1000);
});


stop.addEventListener("click", () =>{
    clearInterval(int);
    
})
  