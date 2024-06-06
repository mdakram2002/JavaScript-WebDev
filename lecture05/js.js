/** @format */
// Airthmatic opraters;

let a = 10;
let b = 11;

console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a**b =", a ** b);

console.log("a / b =", a / b);
console.log("a % b =", a % b);

console.log("a++ =", a++); // 10 11
console.log("++a =", ++a); // 11 12
console.log("--a =", --a); // 11 11
console.log("a-- =", a--); // 11 10

//assignment opraters;
let assignment = 1;

assignment += 5; // assinment += 5 is equal to 6;
console.log(assignment);

assignment -= 5; // assinment -= 5 is equal to 4;
console.log(assignment);

assignment *= 5; // assinment *= 5 is equal to 5;
console.log(assignment);

assignment /= 5; // assinment /= 5 is equal to 0.2;
console.log(assignment);

//comprision opraters;
let comp1 = 5;
let comp2 = 6;

console.log("value of comp1 :-",comp1);
console.log("value of comp2 :-",comp2);
console.log("comp1 == comp2:- ", comp1 == comp2); //false
console.log("comp1 != comp2:- ", comp1 != comp2); //true

console.log("comp1 === comp2:- ", comp1 === comp2); // false
console.log("comp1 !== comp2:- ", comp1 !== comp2); //true


//logical opraters-->

console.log("comp1 < comp2:- ", comp1 < comp2);
console.log("comp1 > comp2:- ", comp1 > comp2);

console.log("comp1 <= comp2:- ", comp1 <= comp2);
console.log("comp1 >= comp2:- ", comp1 >= comp2);

let x = 3;
let y = 4;

console.log(x<y && x!==y); // ture (both are ture then output is true) 
console.log(x<y && x==y); // false (if atlest one if false then output is false)

console.log(x>y || x!==y); // ture (if atlest one is ture then output will be ture)
console.log(x<y || x!==y); // ture (if both are true then output will be false)
