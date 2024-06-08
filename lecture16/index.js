//   ES6
//   Rest and Spreade opraters

//   function addNumber(a, b, c, d, ...other) {
//     console.log(other);
//   }
//     function addNumber(a, b, c, d, ...other) {
//       console.log(arguments);
//       return a + b + c + d;
//   }
//   const res = addNumber(1, 2, 34, 5, 6, 9);
//   console.log(res);

//   spreade--->

let names = ["akku", "fasu", "ajju", "asduu"];
function getName(name1, name2, name3, name4) {
    console.log(name1, name2, name3, name4);
}
getName(...names);
getName(names);
getName(name[1], name[2], name[3], name[4]);

//   //object with issue--->
var students = {
    name: "akku",
    age: "21",
    roll: "Front-End Developer",
    salary: "25k/y",
    hobby: "[circket, football,lestning music]",
    location: "Bhopal",
};
//   //   const age = students.age;
const { ...rest } = students;
console.log(rest);

//   //Spread--->
let newStudent = {
    ...students,
    age: "22", //over wright the age here or edits
};
console.log(newStudent);