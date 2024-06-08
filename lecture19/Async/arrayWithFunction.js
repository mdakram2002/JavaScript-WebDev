console.log("EveryThing is Fine: ");

let arr = [10, 20, 30, 40, 50];
function getSum() {
    let sum = 0;
    arr.forEach((value) => {
        sum = sum + value;
    });
    return sum;
}
let totalSum = getSum(arr);
console.log(totalSum);

// function getSum() {
//     let len = arr.length;
//     let sum = 0;
//     for (let index = 0; index < len; index++) {
//         sum = sum + arr[index];
//     }
//     return sum;
// }
// let totalSum = getSum(arr);
// console.log(totalSum);