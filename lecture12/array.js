console.log('EveryThing is Fine:')

// Array creation -->
let array = [1, 2, 3, 4, "Akram",];
console.log(array);

// array constructor
let arr = new Array(22, 34, 5, 55, true, "Atiya");

arr.push('jaan'); // insert an element at the end index of the array.
console.log(arr);

arr.pop(); // delete the an element at the end index of the array.
console.log(arr);

arr.shift(); // delete the an element at the first index of the array.
console.log(arr);

arr.unshift('Akram'); // Add the an element of the at left or first index of the array.
console.log(arr);

console.log(arr.slice(2,4)); // slice that means to cut into the array from between index 2 to 4.
console.log(arr);

arr.splice(1,2,'Akram'); //change the content of the array from index like replece, insert and remove at the any position of the array.
console.log(arr);

arr.splice(2,0,'Shaikh'); //nothing remove only insert at the index 1.
console.log(arr);

// arr.join();
// arr.includes();


// arr.map()---->
let arrr = [10, 20, 30, 40, "Akram"];
arrr.map((number,index) => {
    console.log(number);
    console.log(index);
})

let ansArray = arrr.map((number) => {
    return number*number;
})
console.log(ansArray);


// arr.filter()------>
let arr2 = [10, 21, 30, 41, 22, 44, 55];
let evenArray = arr2.filter((number) => {
    if(number%2 == 0){
        return true;
    }
    else{
        return false;
    }
});
console.log(evenArray);

// same above code only 4 lines.
let evenArraay = arr2.filter((number) => {
    return number%2 === 0;
});
console.log(evenArraay);

let arr3 = [11, 'Akram', 'Atiya', 33, 344, null];
let ans = arr3.filter((value) => {
    if (typeof (value) == 'string') {
        return true;
    } else {
        false;
    }
})
console.log(ans);

// same as we can filter out the number like that->
let ans1 = arr3.filter((value) => {
    if (typeof (value) == 'number') {
        return true;
    } else {
        false;
    }
})
console.log(ans1);



// arr.reduce()---> `
let arr4 = [10, 20, 30, 40, 50];
let ans2 = arr4.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(ans);
// acc = accumulator
// curr = current
// initialize acc for 0,

let arr5 = [6,4,3,2,1,8,9,5,7,0,'akram'];
arr5.sort();
console.log(arr5);
// HomeWoek - How to do sorting in decending order ?

// // indexof() -->
let arr6 = [6, 4, 3, 2, 1, 8, 9, 5, 7, 0, 'akram'];
console.log(arr6.indexOf(6));
console.log(arr6.indexOf('akram'));


// find()-->
// let arr7 = [6, 4, 3, 2, 1, 8, 9, 5, 7, 0, 'akram'];
// arr7.find();
// console.log(arr7);