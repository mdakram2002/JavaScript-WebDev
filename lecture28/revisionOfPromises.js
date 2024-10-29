console.log("Revision class of the Promises")


// implimentation --1
// const cart = ["shose", "pants", "jackets"];

// createOder(cart, function (oderId) {
//     proceedToPayment(oderId, function (paymentInfo) {
//         showOderSummay(paymentInfo, function () {
//             updateWalletBalance();
//         });
//     });
// });

// here we're passing the callback function ' proceedToPayment(oderId) and more as' to another function
// here the facing of the inversion of controle
// createOder api is control of the proceedToPayment() api thai means proceedToPayment() api
// is depent on the createOrder() api. it is risky

// createOder(cart)
//     .then(function (oderId) {
//         return proceedToPayment(oderId)
//     })
//     .then(function (paymentInfo) {
//         return showOderSummay(paymentInfo)
//     })
//     .then(function (paymentInfo) {
//         return updateWalletBalance(paymentInfo)
//     });

// now this code is readable and understandable as
// compair to above nested function

// using arrow functions in same as above code
// it is also called promise chainging
// createOder(cart)
//     .then((oderId) => proceedToPayment(oderId))
//     .then((paymentInfo) => showOderSummay(paymentInfo))
//     .then((paymentInfo) => updateWalletBalance(paymentInfo));

// implimentation --2











const cart = ["shose", "pants", "jackets"];

createOder(cart)
    .then(function (oderId) {
        console.log(oderId);
        return oderId;
    })
    .then(function (oderId) {
        return proceedToPayment(oderId)
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo)
    })
    .catch(function (err) {
        console.log(err.message)
    })
    .then(function (oderId) {
        console.log("No matter what happens, i will defenietely be called");
    })


const promise = createOder(cart);
// console.log(promise);

promise.then(function (oderId) {
    // proceedToPayment(orderId);
    // console.log(oderId)
})


// producer
function createOder(cart) {
    const prom = new Promise(function (resolve, reject) {
        // createOder
        // validateCart
        // oderId
        if (!validateCart(cart)) {
            const err = new Error("cart is not valid");
            reject();
        }
        // create a logic for createOder
        const oderId = "12334";
        if (oderId) {
            setTimeout(function () {
                resolve(oderId);
            }, 5000);
            // take a 5 second for complitation of excecution of the code
        }
    });
    return prom;
}


function proceedToPayment(oderId) {
    return new Promise(function (resolve, reject) {
        resolve("payment successfully received");
    })
}

function validateCart() {
    return true;
    // for resolving the promise
}













// Implimentaion -- 3
// batter way to write the above code using promise
// const promise = createOrder(cart);

// promise.then(function (oderId) {
//     proceedToPayment(oderId);
// })
// here we're ataching the callback function to/with pormise object




// implimentation --4
// const GITHUB_API = "https://api.github.com/users/mdakram2002"
// const user = fetch(GITHUB_API);

// async function cart() {
//     try {
//         const user = await fetch(GITHUB_API);
//         const data = await user.json();
//         console.log(data)
//     }
//     catch (err) {
//         console.log("fetching error from github");
//     }
// }
// cart();


// user.then(function (data) {
//     console.log(data);
// })

