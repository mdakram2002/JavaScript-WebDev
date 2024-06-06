/** @format */

/*
let sum = 0;
let a = prompt("Enter your Number:- ")
// a = Number.parseInt(a);

for(int i=0; i<a; i++){
    sum  += (i+1);
    console.log(i+1); 
}
*/

//for in loop ---->
let obj = {
  ajju: 25,
  akku: 33,
  faisu: 33,
  asduu: 22,
};
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a]);
}

//fot of loop --->
for (let b of "akku") {
  console.log(b);
}

let input = "";

while (input !== "yes" && input !== "no") {
  input = prompt("Please enter 'yes' or 'no':");
}
