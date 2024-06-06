/** @format */

let a = prompt("hey what's your age?"); // basically this is input type ,like you insert in your age and exetra;
a = Number.parseInt(a); //CONVERTING string into Number;

if (a < 18) {
  alert("you are a kid");
} else if (a < 40) {
  alert("you are a young man");
} else if (a < 60) {
  alert("you are old man");
} else if (a < 70) {
  alert("you'r older man");
} else {
  alert("you can rest on bad");
}

console.log("you can"( a < 18 ? "not drive a car" : "drive a car"));
// console.log(typeof a);

// console.log(a);
// alert("Can you insert your email in comment box");
// ternarty opraters;
