
// Implimentation of APIs
const URL = "https://cat-fact.herokuapp.com/facts";
const factsPara = document.querySelector("#facts");
const btn = document.querySelector("#btn");

// const getFacts = async () => {
//     let response = await fetch(URL);
//     console.log(response); // JSON format or AJAJ

//     let data = await response.json();
//     factsPara.inneraText = data[3].text;
//     console.log(data[3]);
// };

function getFacts() {
    fetch(URL).then((response) => {
        return response.json();
    })
        .then((data) => {
            console.log(data);
            factsPara.innerText = data[2].text;
            console.log(data[2])
        });
};

btn.addEventListener("click", getFacts);


