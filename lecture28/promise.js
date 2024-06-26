
//implimentation 01
promise.catch(() => {
    console.log("rejected")
})


const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("i am a promise");
        resolve("success");
        // reject("nerwork error")
    })
};

let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled", res);
})


// let promise = new Promise((resolve, reject) => {
//     console.log("this is a promise")
//     resolve("sucess")
//     reject("some error occurred")
// })





//implimentation 02
// Resolve
function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data is:", dataId);
            resolve("success");
            if (getNextData) {
                getNextData();
            }
        }, 5000)
    })
}



// Reject
function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("Data is:", dataId);
            reject("error")
            if (getNextData) {
                getNextData();
            }
        }, 5000)
    })
}


// implimentation 03
// chaining of Promises
function asynFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data1");
            resolve("success");
        }, 4000);
    });
};


function asynFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data2");
            resolve("success");
        }, 4000);
    });
};

console.log("fetching data1....");
let p1 = asynFunc1();
p1.then((res) => {
    console.log(res)
    console.log("fetching data2....");
    let p2 = asynFunc2();
    p2.then((res) => {
        console.log(res)
    })
});

console.log("fetching data2....");
let p2 = asynFunc2();
p1.then((res) => {
    console.log(res)
});


// implimentation 04
// reduce the complexity of code
// chaining of Promises
function asynFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data1");
            resolve("success");
        }, 4000);
    });
};


function asynFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data2");
            resolve("success");
        }, 4000);
    });
};

console.log("fetching data1....");
asynFunc1().then((res) => {
    console.log("fetching data2....");
    let p2 = asynFunc2().then((res) => {
    })
});



// Implimentaion 05
function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data is:", dataId);
            resolve("success");
        }, 3000);
    });
};


console.log("fetching the data1....");
getData(12).then((res) => {
    console.log(res);
    console.log("fetchig the data2....");
    getData(13).then((res) => {
        console.log(res);
    })
});


// better way to write the above code or reduce the complexity
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
        console.log(res);
    })

// compair the above and below code which code
// is understable?

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