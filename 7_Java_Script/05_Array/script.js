// Arrays
// array matlab jab bhi aapko ek se jaada value ek saath rakhni ho.

// What
// var users = ["xitij", "abhishek", "adhokshaj"];
// console.log(users[0]);
// console.log(users[20]);
// aisa variable jiski koi value nahi di uski default value undefined hoti hai.

// How
// var arr = [1, 2, 3, 4, 5, "xitij", function(){}, [], 4];

// Why
// a lot of times the data is in the shape of than nummber, to contain all data altogether, save it in an array 
 
// how to loop an array
// var arr = [1,  2, 3, 4, 5]
// arr.forEach(function(val){
//     console.log("hey");
//     console.log(val);
// });

// How to loop an array and do something with each element 
// arr.forEach(function(val){
//     console.log(val+1);
// });

let a =["xitij", "Adhokshaj", "shailesh", "Kuldeep", function(){console.log("Kshtiij")}];
a.forEach(element =>{
    if (typeof element === "function"){
        element();
    }else{
        console.log(element);
    }
});

// Object
// What --> object ek tareeka hai jisse ki hum ek identity ki details ko ek saath rakh skte hai.
// kai logo ka data == array.

// var obj = {};
// var obj2 = new Object(); 

// var data = {
//     company: "canon",
//     price: 1200,
//     for: "camera",
//     isWorking: true,
// };
// console.log(data.company);


// var arr = [1, 22, 10, 4, 11]
// for([index, item] of arr.entries()){
//     console.log(index, item);
// }


// syncronous code mein mein code humesha line by line chalta hai.

// asyncronous code line by line nahi chalta,saara async code ek saath shuru kar diya jaata hai and jo pahle complete hojaaye uska answer dediya jaata hai.




