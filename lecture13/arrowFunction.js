console.log("EveryTHing is Fine: ");

const squarNumber = function (num) {
    let ans = num ** 2;
    return ans;
}
let ans = squarNumber(5);
console.log(ans);

// Arrow Function 
// function getExp(x, y) {
// let getExp = function (x, y) { // taking variable
let getExp = (x, y) => { // Arrow function
    let ans = x ** y;
    return ans;
}
console.log(getExp(2, 10));
