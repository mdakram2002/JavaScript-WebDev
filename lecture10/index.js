/** @format */

//STRING DISCUSION-->

let str1 = "this is string";
let str2 = " AKku";
console.log(str);

let postion = str1.indexOf("is");
// First occurece of substring
console.log(postion);

let postion1 = str1.lastIndexOf("is");
console.log(postion1);

console.log(str1.length); //length of define variable str1 eg- 5
console.log(str1.replace("this is string", "HEllo string")); //replace
console.log(str1.slice(1, 7)); //start from 0,1,2,3 etc,
console.log(str1.substring(1, 7)); //start from 0,1,2,3 etc,
console.log(str1.substr(0, 7)); //start from 0,1,2,3 etc to you want print the substr

console.log(str1.concat(str2)); // adding two string or both line print that means str1 and str2
console.log(str1.toUpperCase()); //print capital latter
console.log(str1.toLowerCase()); //print small latter

let rep3 = "He is akku";
let replaced = rep3.replace("He is akku", "My name is akku");

console.log(rep);
console.log(replaced);
let newstring = str1.concat(" New Srting");
console.log(newstring);

let str1WithWhiteSpace = "   this is akku whitespace    ";
console.log(str1WithWhiteSpace);
console.log(str1WithWhiteSpace.trim());

let rep = str1.charAt(3);
console.log(rep);

let rep2 = str1.charCodeAt(3); //charactor code in output generate
console.log(rep2);

console.log(str2[3]) 