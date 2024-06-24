
// how much code 1 taking time to run?
const t1 = performance.now();

for (let i = 0; i <= 100; i++) {

    let para = document.createElement('p');
    para.textContent = "this is Para" + i;
    document.body.appendChild(para);
}
const t2 = performance.now();
console.log("total time taking by code 1: " + (t2 - t1));




// how much code 2 taking a time to run?
const t3 = performance.now();
let mydiv = document.createElement('div');

for (let i = 0; i <= 100; i++) {

    let para = document.createElement('p');
    para.textContent = "this is Para" + i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);

const t4 = performance.now();
console.log("total time taking by code 1: " + (t4 - t3));


//best code using Document Fragment
let fragment = document.createDocumentFragment();

for (let i = 0; i <= 100; i++) {

    let para = document.createElement('p');
    para.textContent = "This is Para: " + i;
    // No reflow and repaint tor the below line
    fragment.appendChild(para);
}

// the below line takes 1 reflow and 1 repaint
document.body.appendChild(fragment);