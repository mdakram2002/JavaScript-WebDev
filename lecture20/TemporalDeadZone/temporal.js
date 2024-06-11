//Temporal Dead Zone example------------>

// console.log("Akram Shaikh");
// console.log(age);
let age = 22; // ReferenceError- So, we can sey Tempoeal  Dead Zone from line nu. 1 to 5 becouse of initialization keyWord of let and const
console.log(age);

// // Globle scope
// var age = 22;
// console.log(age);

// {
//     console.log(age)
// }
// {
//     if(true){
//         console.log(age);
//     }
// }
// for(let i=0; i<2; i++){
//     console.log(age);
// }
// function sayMyAge(){
//     console.log("This is my age: ", age);
// }
// sayMyAge()

//secend example 2 -->
function sayHello(){
    let fullName = "Earth";
    console.log("Hello Duniya! ", fullName);
}
// console.log(fullName); // out of function scope fullName is not accesible, dons't matter what keyword to use for initialization, like var, let, const.
sayHello();

// Example 3 -->
console.log(height) // but give the output undefined, becouse of variable declaration
{
    var height = 5.7;
}
console.log(height);


