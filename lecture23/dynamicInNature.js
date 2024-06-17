// let obj = {
//     name: 'Akram',
//     age: 22,
//     wt: 51,
//     ht: 6
// }
// console.log(obj)

// obj.colour = "white";
// console.log(obj);




// object cloning--->
// spread method-->
// let src = {
//     age: 22,
//     name: 'Akram',
//     ht: 6,
//     wt: 51
// }
// console.log("src",src);
// src.age = 25;

// let dest = {
//     ...src
// }
// console.log("dest",dest)

// // Add extra or new element in dest object
// dest.color = 'white';
// console.log("Exrea", dest);



// assign method of cloning
// let src = {
//     age: 22,
//     name: 'Akram',
//     ht: 6,
//     wt: 51
// }

// let dest = Object.assign({}, src);
// console.log("src",src);

// src.age = 25;
// console.log("src",src);
// console.log("dest",dest)

// console.log("Changes in destination:")
// dest.color = 'white';
// console.log("Exrea:", dest);



// two or more object are cloning-->
// let src = {
//     age: 22,
//     name: 'Akram',
//     ht: 6,
//     wt: 51
// }

// // second object
// let src2 = {
//     value: 'Done',
//     salary: '55k'
// }
// let dest = Object.assign({}, src, src2);

// console.log("src",src);
// console.log("dest",dest)


// cloning in  iteration
let src = {
    age: 22,
    name: 'Akram',
    ht: 6,
    wt: 51
}
let dest = {};

for (let key in src) {

    let newKey = key;
    let newValue = src[key];
    // insert new key and value in dest and create the clon
    dest[newKey] = newValue;
}
src.age = 25;

console.log("src", src);
console.log("dest", dest)
