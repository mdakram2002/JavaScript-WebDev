
// let companies = [
//     {
//         name: "Amazon",
//         catagry: "Product Based",
//         start: "1992",
//     },
//     {
//         name: "Google",
//         catagry: "Product Based",
//         start: "1981",
//     },
//     {
//         name: "Paytm",
//         catagry: "Product Based",
//         start: "1999",
//     },
//     {
//         name: "Uber",
//         catagry: "Product Based",
//         start: "2009",
//     },
//     {
//         name: "Atlassian",
//         catagry: "Product Based",
//         start: "2002",
//     },
// ];

// const ages = [11, 22, 23, 34, 45, 56, 67, 87, 33, 44, 55, 66, 77, 88, 99];

//for loop--->
//   for (let i = 0; i <= companies.length; i++) {
//     console.log(companies[i]);
//   }

//forEach loop functin--->
//   companies.forEach(function (company, index) {
//     console.log(company);
//   });

//Arrow function-->
//   companies.forEach((company, index) => {
// console.log(company);
// console.log(company.name);
// console.log(company.catagry);
// console.log(company.start);
//    });

//Arrow in one line of Arrow funtion-->
// companies.forEach((company, index) => console.log(company));

//filter functin--->
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 20) {
//     console.log(ages[i]);
//   }
// }

//diffrent way to access-->
// const age = ages.filter(function (age) {
//   if (age <= 20) {
//     return true;
//   }
//   console.log(age);
// });

//in one line way--->
// const finalAge = ages.filter((ages) => ages >= 20);
// console.log(finalAge);

//via function-->
//   const sb = companies.filter(function (company) {
//     if (company.catagry === "Porduct Besed") {
//       return true;
//     }
//   });
//   console.log(sb);

// Access via Arrow function-->
// const newCompnay = comp/anies.filter(
// (company) => company.catagry === "Product Based"
// );
// console.log(newCompnay);


// Perfome action on very element of the array using the forEach function.
let array = [10, 20, 30, 40];
array.forEach((value, index) => {
    // console.log("Number: ", value, "index: ", index)
})


let obj = {
    name: 'Akram Shaikh',
    age: 22,
    weight: 50,
    height: '5.7 feet',
    colour: 'sawla',
    relationShip: 'with Atiya Akram'
}
// console.log(obj);
// for-in loop --->
// for(let key in obj){
//     console.log(key, " ", obj[key]);
// }

let obj1 = {
    name: 'Atiya Akram',
    age: 17,
    weight: 52,
    height: '5.4 feet',
    colour: 'sawla',
    relationShip: 'with Akram Shaikh'
}
// console.log(obj1);

// for(let key in obj1){
//     console.log(key, " ", obj1[key]);
// }


//for-of loop --->
// let arrr = [10, 30, 40, 50];
// for(let value of arrr){
//     console.log(value);
// }

let fullName = 'Akram Shaikh';
for(let string of fullName){
    console.log(string);
}