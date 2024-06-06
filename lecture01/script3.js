/** @format **/

// 1_this ways to print javaScript--->

// alert("helllo jee");
// document.write("this is document dot write ");

// 2_javaScript console API--->

// console.log("Hello World");
// console.warn("this is warning you");
// console.error("this is an error");
// // console.clear();
// console.assert(2 + 2 == 4);

//3_javaScript variabale--->

// var number1 = 345;
// var number2 = 5898;
// console.log(number1 + number2);

//4_string in javaScript --->

// var str1 = "this is first string ";
// var str2 = "this is also a string";

//5_this data types in javascript-->

// var num1 = 35325;
// var num2 = 343;

// objects--->
// var marks = {
//   akram: 97,
//   ajju: 99,
//   faisu: 99,
// };

//Boolean

// var a = true;
// var b = false;
// console.log(a, b);

// // var und = undefined;
// var und;
// console.log(und);

// // var n = null;
// // console.log(n);

/*
At a very high level language ,
 ther are two types of datatypes of javaScript
 1. Primitive data types: null, undefined, number,string ,boolean ,symbol, ; 
 2. Reference data tyeps:arrys and objects 
 */

// objects--->

// var arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);

// var arr1 = [3, 45, 5, 66, "akku", 8];
// console.log(arr1[4]);

//opraters of javaScript---
//airthmatic opraters --->

// var c = 4;
// var d = 4;
// console.log("the value of addition is", c + d);
// console.log("the value of substraction is", c - d);
// console.log("the value of multiplication is", c * d);
// console.log("the value of division is", c / d);

//Assiagment Oprators ;
// var c = d;
// c *= 2;
// c %= 2;
// c /= 2;
// c += 2;
// c -= 2;
// console.log(c);

//Comparision opratores

// var x = 24;
// var y = 46;

// console.log(x == y);
// console.log(x <= y);
// console.log(x >= y);
// console.log(x > y);
// console.log(x < y);

// logical oprators

//logical OR
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(true || true);

//logical AND
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// logical NOT
// console.log(!false);
// console.log(!true);

// let's start functtion of javaScript
// function avg(a, b) {
//   retrun(a + b) / 2;
// }
// c1 = (4, 6);
// c2 = (8, 6);

// console.log(c1, c2);

// condistional of JavaScript

// if else statement single line
// var age = 34;
// if (age > 7) {
//   console.log("you are  a kids");
// }

// if else ststement double line statement
// var age = 45;
// if (age > 12) {
//   console.log("the you can drink rasna water ");
// } else {
//   console.log("otherwise no");
// }

// if-else ladder statement
// var age = 5;
// if (age > 6) {
//   console.log("you are a bachha");
// } else if (age > 4) {
//   console.log("you are not a bachha");
// } else if (age > 23) {
//   console.log("you are a young man");
// }

// console.log("End opration");
// var  age (a , b){
//     if(age > a){
//         console.log("you are a young")
//     }
// }

// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//   if (i == 4) {
//     break;
//   }
//   console.log(arr([i]));
// }

// arr.forEach(function (element) {
//   console.log(element);
// });

// let j = 6;
// const;
// console.log(j);

// while (j < arr.length) {
//   console.log(arr(j));
//   j++;
// }

// var arr = [1, 2, 3, 4, 5, 6, 7];
// let j = 6;
// do {
//   console.log(arr[j]);
//   j++;
// } while (j < arr.length);

// let myArr = ["fun", 3, null, "akku", true];
// console.log(myArr);
// console.log(myArr.length);
// myArr.pop();            //last element is gone
// myArr.push("akram");    //this element is added in last
// myArr.shift();          //first element is gone
// console.log(myArr.unshift("akram"));     // new arry of lenth give
// console.log(myArr);
// myArr.toString();       //using in console panel
// myArr.sort();
// d.sort();

//String method in javaScript---->

// let myLovelyString = "akku is a good boy";

// console.log(myLovelyString.length);
// console.log(myLovelyString.lastIndexOf("boy"));
// console.log(myLovelyString.indexOf("boy"));

// console.log(myLovelyString.slice(2, 8)); // slice thats mens from two /2 index of elemnts to 8 index of element are print there
// d = myLovelyString.replace("akku", "akram");
// console.log(d, myLovelyString);

// let myDate = new Date();
// console.log(myDate.getDate());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());

// Dom(Documents Objects Model) Meniplation in JavaScript----->

// console.log(document);

// let elem = document.getElementById("click me");
// console.log(elem);

// let elemClass = document.getElementById("thisisfirst");
// console.log(elemClass);

// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success");

// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
// tn = document.getElementsByTagName("div");
// console.log(tn);

// createdElement = document.createdElement("thisisfirst");
// createdElement.innerText = "p";
// tn[0].appendChild(createdElement);

// createdElement2 = document.createdElement2("thisissecond");
// createdElement2.innerText = "b";
// tn[0].replaceChild(createdElement2);
// removeChild(Element); ----> remove an element

// selecter , Query selecter in javaScript----->

// sel = document.querySelector("container");
// console.log(sel);

// sel = document.querySelectorAll("container");
// console.log(sel);

// function clicked() {
//   console.log("the button was ciliked");
// }

// window.onload = function () {
//   console.log("the Document was loaded");
// };

// // Event in JavaScript------>
// firstContainer.addEventLeatener("click", function () {
//   document.querySelectorAll("#firstContainer")[1].innerHTML =
//     "<b> we have clicked</b>";
//   console.log("ciliked on container");
// });

// firstContainer.addEventListener("click", function () {
//   console.log("ckicked was done");
// });

// firstContainer.addEventListener(mouseover, function () {
//   console.log("click is done");
// });

// firstContainer.addEventListener(mouseout, function () {
//   console.log("click is done");
// });
// const age = 20;
// console.log("he is under 18" && "he is 20 year old");
// answer is "he is 20 year old"
// console.log("he is under 18" || "he is 20 year old");

// Aarrow function---->

// function summ(a, b) {
//   return a + b;
// }
// summ = (a, b) => {
//   return a + b;
// };

// function logKaro() {
//   console.log("i am your log");
// }
// setTimeout and setInterval------>

// logKaro = () => {
//   console.log(" i am your log");
// };
// setTimeout(logKaro, 2000);

// clr = setTimeout(logKaro, 2000);
// console.log(clr);

// setInterval(logKaro)
// for (age < 18; age < 20; age < 25) {
//   console.log("you are not kid");
//   console.log("you are not a kid");
//   console.log("you are a young man");
// }
// let elem = document.getElementById("click");
// console.log(elem);
// let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);

// logKaro = () => {
//   document.querySelector(".container")[1].innerHTML = (
//     <b> set InterVal fired </b>
//   );
//   console.log(" i am your log");
// };

let akku = "nike name of Akram";
console.log(akku);
