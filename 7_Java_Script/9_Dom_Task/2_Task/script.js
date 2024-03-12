var img1 = document.querySelector('#one');
var img2 = document.querySelector('#two');

document.querySelector("button")
.addEventListener("click", function(){
    var src1= img1.src;
    var src2= img2.src;

    img1.src = src2;
    img2.src = src1;
});




// var img = document.querySelector('img');
// document.querySelector("button")
// .addEventListener("click", function(){
//     img.src = "prachi.jpg";
//     img.style.width = "500px";
//     img.style.height = "500px";
//     img.style.borderRadius = "50px";
//     img.style.margin = "auto";
//     img.style.display = "block";

// });