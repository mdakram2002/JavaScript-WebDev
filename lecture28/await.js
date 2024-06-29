// console.log("Hello this is console");
// console.log("Akram is a heakoor");

// setTimeout(() => {
//     console.log("this is inside the setTimeout")
// }, 0);

// this setTimeout funtion refer to the next line of code for
// execution becouse of time delay, at-least 0 sec.

// console.log("the End")


// Implimentation 02--------->
// function sum(a, b) {
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }
// calculator(16, 4, sum);
// callback function call only its name not with braket:- ()


// calculator(17, 2, (a, b) => {
//     console.log(a + b);
// })





// Implimentation 03------>
// basic understanding of database for fetching the
// data from database, like this work this is just for
// example

// function getData(dataId) {
//     console.log("Data is:", dataId);
// }

// function getData(dataId) {
//     setTimeout(() => {
//         console.log("Data is:", dataId);
//     }, 2000)
// }



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
// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("Data is:", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000)
// }
// getData(1, getData(2)); // this is not execute it say getData is not a funtion

// callback hell
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4, () => {
//                 getData(5, () => {
//                     getData(6);
//                 })
//             })
//         });
//     })
// });
// this above code is called nesting or pyramid or DOOM
// every getData is taking 2sec for execution
// but this type of programming becomes difficult to understand & manage.
// promises is solve this type of "callback hell".



// Implimentation of Async-Await Funtion--->
async function hello() {
    console.log("helllo");
};


function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather Data");
            resolve(123);
        }, 2000);
    });
};
async function getWeatherData() {
    await api(); // 1st
    await api(); // 2nd
}




// implimentaion of async-await 02---->
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data is:", dataId);
            resolve("success");
        }, 2000)
    })
}

// Here the below 3 code, which code is understable between
// callback hell, Promise chaining and Async-Await function

// Async-Await Funtion -->
// async function getAllData() {
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);
//     await getData(5);
//     await getData(6);
// }

// IIFE - (Immediately Inovked Funtion Expression)
(async function () {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    await getData(6);
}) ();

// callback hell
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

// Promise chaining
console.log("fetching the datas....");
getData(1)
    .then((res) => {
        return getData(2);
    })
    .then((res) => {
        return getData(3);
    })
    .then((res) => {
        return getData(4);
    })
    .then((res) => {
        return getData(5);
    })
    .then((res) => {
        return getData(6);
    });
