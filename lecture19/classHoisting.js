

function solve(number) {
    return function (number) {
        return number * number;
    }
}
let ans = solve();
let finalAns = ans(10);
console.log(finalAns);













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