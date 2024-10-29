console.log("Welcome to the Revision of Promises");


const cart = ["1", "2", "3", "4", "5"];

// function createOder(oderId) {
//     addAddress(oderId, function () {
//         proceedToPayment(paymentInfo, function () {
//             oderSummary(paymentInfo, function () {
//                 updateWalletBalance(paymentInfo);
//                 console.log(paymentInfo);
//             })
//         })
//     })
// };

const promise = createOder(cart);

promise.then(function (oderId) {
    // proceedToPayment(orderId);
    // console.log(oderId)
})

// promise chainging, this way to overcome the pyramid of doom / above code
createOder(cart)
    .then(function (oderId) {
        console.log(oderId);
        return oderId;
    })
    .then(function (oderId) {
        return proceedToPayment(oderId)
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(function (err) {
        console.log(err.massage);
    })


// createOder
// validateCart
// oderId
function createOder(cart) {
    const promise = new Promise((resolve, reject) => {

        if (!validateCart(cart)) {
            reject(new Error("cart is fetching error"));
            reject();
        }
        const oderId = "asd123";
        if (oderId) {
            setTimeout(() => {
                resolve(oderId);
            }, 5000)
        }
    });
    return promise;
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