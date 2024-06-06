/** @format */

console.log("this is my first");

/*
//function creating
function greet(name) {
  console.log(name + "is a good by");
}

let name = "Asaduu ";
let name2 = "Akkuu ";
let name3 = "Ajjuu ";
let name4 = "faisuu ";

//function calling
greet(name);
greet(name2);
greet(name3);
greet(name4);
*/

function greet(name, greetText) {
  console.log(greetText + " " + name);
  console.log(name + "is a good by");
}

let name = "Asaduu ";
let name2 = "Akkuu ";
let name3 = "Ajjuu ";
let name4 = "faisuu ";
let greetText = "Good Morning";

greet(name, greetText);
greet(name2, greetText);
greet(name3, greetText);
greet(name4, greetText);

//multipal time creating a console that's why creating a finction

// console.log(name + "is a good boy");
// console.log(name2 + "is a good boy");
// console.log(name3 + "is a good boy");
// console.log(name4 + "is a good boy");

function sum(a, b, c) {
  let d = a + b + c;
  console.log("sum of all variable " + d);
}

let involute = sum(11, 22, 33); //function calling with other variable like involute
console.log(involute);
