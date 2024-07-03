
const questions = [
    {
        'que': 'Which is the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'What is the name of Cascading Style Sheet?',
        'a': 'PHP',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'HTML',
        'correct': 'b'
    },
    {
        'que': 'Which is the database system?',
        'a': 'SQL',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'Which library is used in JavaScript.',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'React.js',
        'd': 'PHP',
        'correct': 'c'
    },
    {
        'que': 'Which library is used in CSS',
        'a': 'DBMS',
        'b': 'Tailwin',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'b'
    },
];

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quizBox = document.getElementById("quizBox");
const optionInput = document.querySelectorAll('.Options')


const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    // setTrue();
    const data = questions[index];
    quizBox.innerHTML = `${index + 1}) ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
};


function getPrevious() {
    if (index > 0) {
        index--; // Move to the previous question
        loadQuestion();
    } else {
        console.log('No previous question available.');
    }
}

const quizSummit = () => {
    const data = questions[index];
    const answer = getAnswer();
    if (answer === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
};


function getNext() {
    if (index < total - 1) {
        index++; // Move to the next question
        loadQuestion();
    } else {
        console.log('No next question available.');
    }
}


const getAnswer = () => {
    let ans;
    optionInput.forEach(
        (input) => {
            if (input.checked) {
                ans = input.value;
            }
        }
    )
    return ans;
};

const reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
};

// setTrue is note working
// const setTrue = () => {
//     optionInput.forEach(
//         (input) => {
//             input.checked = true;
//         }
//     )
// };
/* why I create the above funtion setTrue?
 we just check the Quiz box's when we click the correct option and node summit
 but when we click the correct option but it's dos'n work

*/

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
        <div style="text-align: center; justify-content: center;">
            <h3> THANK YOU FOR PLAYING FOR QUIZ! </h3>
            <h2> ${right} / ${total} are correct </h2>
        </div>
    `;
}

// call the Questions
loadQuestion();
