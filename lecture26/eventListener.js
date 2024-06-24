
// implimentaion 01
// how to apply eventListenr using function
// function changeText() {
//     console.log(event);
//     let fpara = document.getElementById("fpara");
//     fpara.textContent = "Waleykum Aslaam Akram Bhai "
// }



// implimentaion 02
// let fpara = document.getElementById("fpara");
// fpara.addEventListener('click', changeText);

// how to remove event listener
// fpara.removeEventListener('click', changeText);

// the best practices is create the funtion in other part
// (means both are not in single funtion) and then taking
// reference and then use addEventListener or removeEventListenr




// implimentaion 03
// change anchor tage behaviour
// let anchorElement = document.getElementById("fanchor")

// anchorElement.addEventListener('click', function (event) {
//     event.preventDefault();
//     anchorElement.textContent = "Click Done!"
// })
// this above fucntion " event.preventDefault() " is stop the default behaviour like anchor tage behaviour
// is link throught going the website


// implimentaion 04
// event listener

// let paras = document.querySelectorAll('p');
// // this is not a good practice

// for (let i = 0; i < paras.length; i++) {
//     let para = paras[i];

//     para.addEventListener('click', function () {
//         alert("you have clicked on Para: " + (i + 1));
//     })
// }


// this is a good practice
// let paras = document.querySelectorAll('p');

// function alertparas() {
//     alert("you have clicked on Para:" + event.target.textContent);
// }

// for (let i = 0; i < paras.length; i++) {
//     let para = paras[i];
//     para.addEventListener('click', alertparas)
// }



// implimentaion 05
// this is optimal solution
// function alertparas() {
//     alert("you have clicked on Para:" + event.target.textContent);
// }
// // target means which element you clicked

// let mydiv = document.getElementById('mydiv')
// document.addEventListener('click', alertparas);




// implimentaion 06
// if you want to show eventListener event only on span
// then use it event.nodeName === 'SPAN' for example
function alertparas() {
    if (event.target.nodeName === 'SPAN') {
        alert("you have clicked on Para:" + event.target.textContent);
    }

}

let mydiv = document.getElementById('mydiv')
document.addEventListener('click', alertparas);

