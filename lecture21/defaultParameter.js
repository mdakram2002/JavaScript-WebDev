//Example 01, Default Parameter
function sayName(myName = "Default Value / Name"){
    console.log("My name is",myName)
}
// sayName("Akram Shaikh");
sayName("Akram"); // if we not passing the value in the calling funciton the autometically function catch the default name, if we passing the parametera as a name then print passing value



// Example 02, Argument
function sayName(fName, lName){
    console.log("My name is",fName,"",lName)
}
// sayName("Akram Shaikh");
sayName("Akram","Shaikh");



// Example 03, Changing the parameter
function sayName(fName = "Akram", lName = fName.toUpperCase()){
    console.log("My name is",fName,"",lName)
}
sayName();
// sayName("Akram","Shaikh");



// // Example 04, Object
function solve(value = { name: 'Akram', age: 22, weight: 50, height: 6 }) {
    console.log("Hello jee this is object-", value);
}
solve();



// // Example 05, Array
function solve(value = ["Akram", 33, null, 7.5, "World"]) {
    console.log("Hello jee! this is Array", value);
}
solve();




// // Example 06, null
function solve(value = ["Akram", 33, null, 7.5, "World"]) {
    console.log("Hello jee! this is ", value);
}
solve(null);


// Example 07, undefined
function solve(value = ["Akram", 33, null, 7.5, "World"]) {
    console.log("Hello jee! this is ", value);
}
solve(undefined); // undefined is not accepted, accept the default parameter
















// console.log("EveryThing is Fine: ");

// class Human {
//     // Properties

//     name = "Akram"  // Public
//     #age = 22;      // Private (private mark = #)
//     #wt = 50;        // Private
//     #ht = 5.7;       // Private

//     constructor(newAge, newHeight, newWieght) {

//         this.age = newAge;
//         this.ht = newHeight;
//         this.#wt = newWieght;
//     }

//     // Behaviour
//     runnig() {
//         console.log("i'm runnig");
//     }
//     walking() {
//         console.log("i'm walking");
//     }

//     get fetchWt() {
//         return this.#wt;
//     }

//     set modifyWt(val) {
//         this.#wt = val;
//     }
// }

// let obj = new Human(22, 6, 50);

// console.log(obj.age);
// console.log(obj.ht);
// console.log(obj.fetchWt);