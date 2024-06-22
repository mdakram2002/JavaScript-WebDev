// console.log("This is inner DOM")

// const div = document.getElementById("container");
// const d = document.getElementById("d");

// console.log(container.firstElementChild.nodeName);
// d.outerHTML = "<p> Hello this Is paragraph </p>";

// console.log(container.firstElementChild.nodeName);

let fdiv = document.querySelector('#fdiv');

let newElement = document.createElement('span')
newElement.textContent = "Hay, this is Akram Shaikh";

fdiv.insertAdjacentElement('beforebegin', newElement);