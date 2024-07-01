
const Base_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.min.json
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");


// just show the country code list for understanding
// for (code in countryCodeList) {
//     console.log(code);
// }

for (let select of dropdowns) {
    for (currencyCode in countryCodeList) {
        let newOptions = document.createElement("option");
        newOptions.innerText = currencyCode;
        newOptions.value = currencyCode;

        if (select.name === "from" && currencyCode === "USD") {
            newOptions.selected = "selected";
        } else if (select.name === "to" && currencyCode === "INR") {
            newOptions.selected = "selected";
        }
        select.append(newOptions);
    };

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
};


const updateExchangeRate = async () => {
    let amount = document.querySelector("#amount input");
    let amotValue = amount.value;
    if (amotValue === "" || amotValue < 1) {
        amotValue = 1;
        amount.value = "1";
    }
    const URL = `${Base_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];

    let finalAmount = amotValue * rate;
    msg.innerText = `${amotValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

// handling counrty Flags
const updateFlag = (element) => {
    let currencyCode = element.value;
    let countryCode = countryCodeList[currencyCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click", (event) => {
    event.preventDefault();
    updateExchangeRate();
});

window.addEventListener("load", () => {
    updateExchangeRate();
});