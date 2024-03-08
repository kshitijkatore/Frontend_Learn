// Data Types
// Types matlab data ka roop
// xitij - String
// 12    - integer
// 12.3  - float
// 22.0  - float
// true  - boolean
// a     - character
// "45gfdkjg34" - string

// Two types of data types 
// 1. Primitive data types
// 12, 12.4, xitij, True
var a = 12;
var b = a;

// 2. reference data types
// [] () {} --> reference data types
var arr = [1, 2, 3, 4 ,5];
var b = arr;

// spread operator
var ar = [12, 13, 14, 15];
var ba = [...ar];

// Conditional statement --> if else else-if ternary operator switch case
// if me hamesha true ya false aata hai.

// truthy and falsey values
// true false --> boolean
// 0 1 --> integer
// 0.0 1.0 --> float
// "" ' ' --> string
// [] --> array
// {}

// har value ko true ya false banaya jaa skta hai, ye depend krta hai, ki wo value type kay hai, agar wo value, truthy hai to true banegi and falsey hai false.
// null undefined Nan 0 "" '' document.all false --> falsey values and baki sad truthy value.

if(12>13){
    console.log("12 is greater than 13");
}
else{
    console.log("13 is greater than 12");
}

//  else-if me hamesha true ya false aata hai.
if(12>13){

}
else if(12>14){

}
else{

}

// Loops --> repeatation is a loop
// for while do-while foreach forin forof

// for(initialization; condition; increment/decrement){
//     // code
// }

for(var num = 5; num<11; num++){
    console.log(num);
}

// While loop
Start;
while(end){
    console.log("Hello");
    Change;
}

var i = 1;
while(i<11){
    i++;
}






