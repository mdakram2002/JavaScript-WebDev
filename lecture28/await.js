console.log("Hello this is console");
console.log("Akram is a heakoor");

// setTimeout(() => {
//     console.log("this is inside the setTimeout")
// }, 0);

// this setTimeout funtion refer to the next line of code for
// execution becouse of time delay, at-least 0 sec.

console.log("the End")


// Implimentation 02--------->
// function sum(a, b) {
//     console.log(a + b);
// }

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}
// calculator(16, 4, sum);
// callback function call only its name not with braket:- ()


calculator(17, 2, (a, b) => {
    console.log(a + b);
})





// Implimentation 03------>
// basic understanding of database for fetching the
// data from database, like this work this is just for
// example

// function getData(dataId) {
//     console.log("Data is:", dataId);
// }

function getData(dataId) {
    setTimeout(() => {
        console.log("Data is:", dataId);
    }, 2000)
}



// Implimentation 04 ---- >

// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("Data is:", dataId);
//         getNextData();
//     }, 2000)
// }
// // getData(1, getData(2)); // this is not execute it say getData is not a funtion

// getData(1, () => {
//     getData(2)
// });



// second form of writing this above code
function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("Data is:", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000)
}
// getData(1, getData(2)); // this is not execute it say getData is not a funtion

getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4, () => {
                getData(5, () => {
                    getData(6);
                })
            })
        });
    })
});
// this above code is called nesting or pyramid or DOOM
// every getData is taking 2sec for execution
// but this type of programming becomes difficult to understand & manage.

// promises is solve this type of "callback hell".