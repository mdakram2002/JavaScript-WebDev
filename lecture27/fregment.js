
//best code 
let fragment = document.createDocumentFragment();

for (let i=0; i<=100; i++) {

    let para = document.createElement('p');
    para.textContent = "This is Para: " + i;
    // No reflow and repaint tor the below line
    fragment.appendChild(para);
}

// the below line takes 1 reflow and 1 repaint
document.body.appendChild(fragment);