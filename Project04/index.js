
const inputSlider = document.querySelector("[data-lengthSlider]");
const passWordLength = document.querySelector("[password-lengthNumber]");
const messesgecopy = document.querySelector("[data-copyMsg]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const upperCase = document.querySelector("[#uppercase]");
const lowerCase = document.querySelector("[#lowercase]");
const numberDigit = document.querySelector("[#numbers]");
const symbolsCheck = document.querySelector("[#symbols]");
const dataIndicator = document.querySelector("[data-indicator]");
const generatebtn = document.querySelector("[#generateButton]");
const allcheckboxes = document.querySelectorAll("input[type=checkbox]");
const symbols = '!@#$%^&*()_+{}|<>?~`[];:';

//function calling


let password = "";
let passLength = 12;
let countCheck = 1;
// let circle = "white";

handleSlider();

//set password Length
function handleSlider() { // Check if element is found before accessing its value
    inputSlider.value = passLength;
    passWordLength.innerText = passLength;
}

function setIndicator(color) {
    dataIndicator.style.backgroundcolor = color;
    // sadow
}

function getRdmIntger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
    return getRdmIntger(0, 9);
}

function generateLowerCase() {
    return String.fromCharCode(getRdmIntger(97, 123));
    // 97 is ascci value of a, and 123 is z
}

function generateLowerCase() {
    return String.fromCharCode(getRdmIntger(65, 91));
    // 97 is ascci value of A, and 123 is Z
}

function generateSymbol() {
    const rdmNumber = getRdmIntger(0, symbols.length);
    return symbols.charAt(rdmNumber);

}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if (upperCase.checked) hasUpper = true;
    if (lowerCase.checked) hasLower = true;
    if (numberDigit.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;

    if (hasUpper && hasLower && (hasNum || hasSym) && passLength >= 8) {
        setIndicator("#0f0");
    }
    else if ((hasLower || hasUpper) && (hasNum || hasSym) && passLength >= 6) {
        setIndicator("#ff0");
    }
    else {
        setIndicator("#f00");
    }
};


async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        messesgecopy.innerText = "copied";
    }
    catch (error) {
        messesgecopy.innerText = "failed";
    }
    messesgecopy.classList.add("active");

    setTimeout(() => {
        messesgecopy.classList.remove("active");
    }, 2000);
}

inputSlider.addEventListener('input', (event) => {
    passLength = event.target.value;
    handleSlider();

})

