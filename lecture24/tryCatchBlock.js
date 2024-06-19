// Part-1:
// try {
//     console.log("try block start here");
//     console.log(a);
//     console.log("try block end here");
//     //a
//     //b
// }
// catch (err) {

//     // define the error and what to do with error
//     // retry logic // fallback machanism // loggin
//     // custom error
//     console.log("i'm inside the catch block");
//     console.log("You'r Error is here: ", err);
// }


// Part-2:
// try {
//     console.log("try block start here");
//     console.log(a);
//     console.log("try block end here");
//     //a
//     //b

// }
// catch (err) {

//     // define the error and what to do with error
//     // retry logic // fallback machanism // loggin
//     // custom error
//     console.log("i'm inside the catch block");
//     console.log("You'r Error is here: ", err);
// }
// finally {
//     console.log("i'm finally block ");
//     // no matter what error is rise the in try block, finally block
//     // is always run
// }


// Part-3:
// try {
//     console.log("try block start here");
//     console.log("try block end here");
//     //a
//     //b
// }
// catch (err) {

//     // define the error and what to do with error
//     // retry logic // fallback machanism // loggin
//     // custom error
//     console.log("i'm inside the catch block");
//     console.log("You'r Error is here: ", err);
// }
// finally {
//     console.log("i'm finally block ");
//     // if no error in try block, then the without going catch block
//     // jump into the finally block and finally block is run
// }

// let's create a custom error
// try{
//     // Reference Error
//     console.log(a);

// }
// catch(err){
//     throw new Error("first-off all decleare the variable then the print")

// }

let errorCode = 404;
if(errorCode == 404){
    throw new Error("Invalid Link");
}