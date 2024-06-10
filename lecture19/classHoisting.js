

// function solve(number) {
//     return function (number) {
//         return number * number;
//     }
// }
// let ans = solve();
// let finalAns = ans(10);
// console.log(finalAns);

const { Container } = require("postcss")




// const arr = [
//     function(a, b) {
//         return a + b;
//     },
//     function(a, b) {
//         return a - b;
//     },
//     function(a, b) {
//         return a * b;
//     }
// ];
// let ans = arr[2];
// let finalAns = ans(10, 10);
// console.log(finalAns);




// let obj = {
//     name: "akram",
//     age: 22,
//     wet: 50,
//     het: 5.7,
//     greet(){
//         console.log("Hello je kese hain aap")
//     }
// }
// console.log(obj.greet);




// const obj1 = new Human();
// class Human {
// }
// You'll get ReferenceError: Cannot access 'Human' befor initialization at object

// function greetMe(greet, fullName) {
//     console.log("Hello", fullName);
//     greet();
// }

// function greet() {
//     console.log("Greeting for the Day!")
// }
// greetMe(greet, "Akram");
// greet();

// greet(); // function are not hoisting but variable is hoisting if we want, with the keyWord using 'var'.
// console.log(greet); // this is also not hoisting becouse of we initializing keyword is let that's why it give the ReferenceError.

// console.log(greet); // give the output 'undefined'
// let greet = function(){
//     console.log("Hello World!")
// }

// how we hoisting the function usig the keyWord 'var' --->
var greet;
console.log(greet); // give the output 'undefined'

var greet = function () {
    console.log("Hello World!")
}