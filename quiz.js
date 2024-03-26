const questions = [{
    question: "Who is the first prime minister of India?",
    answers: [{
            text: "Dr B R Ambedkar",
            correct: false
        },
        {
            text: "Mahatma Gandhi",
            correct: false
        },
        {
            text: "Jawaharlal Nehru",
            correct: true
        },
        {
            text: "Narendra Modi",
            correct: false
        }
    ]
},
{
    question: "What is the National fruit?",
    answers: [{
            text: "Mango",
            correct: true
        },
        {
            text: "banana",
            correct: false
        },
        {
            text: "Peach",
            correct: false
        },
        {
            text: "Tomato",
            correct: false
        }
    ]
},
{
    question: "Which food is not consumed by Jains?",
    answers: [{
            text: "Cabbage",
            correct: false
        },
        {
            text: "Onion",
            correct: true
        },
        {
            text: "Chilli",
            correct: false
        },
        {
            text: "Brinjal",
            correct: false
        }
    ]
},
{
    question: "Which path is followed by Buddhists?",
    answers: [{
            text: "Middle",
            correct: true
        },
        {
            text: "Front",
            correct: false
        },
        {
            text: "Extreme right",
            correct: false
        },
        {
            text: "Extreme left",
            correct: false
        }
    ]
},
{
    question: "What is the sum of 25 +34.5?",
    answers: [{
            text: "59.5",
            correct: true
        },
        {
            text: "58.5",
            correct: false
        },
        {
            text: "60.5",
            correct: false
        },
        {
            text: "61.5",
            correct: false
        }
    ]
}
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
currentQuestionIndex = 0;
score = 0;
nextButton.innerHTML = "Next";
showQuestion();
}

function showQuestion() {
resetState();
let currentQuestion = questions[currentQuestionIndex];
let questionNumber = currentQuestionIndex + 1;
questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
})
}

function resetState() {
nextButton.style.display = "none";
while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
}
}

function selectAnswer(e) {
const selectBtn = e.target;
const isCorrect = selectBtn.dataset.correct === "true";
if (isCorrect) {
    selectBtn.classList.add("Correct");
    score++;
} else {
    selectBtn.classList.add("incorrect");
}
Array.from(answerButton.children).forEach(button => {
    if (button.dataset.correct === "true") {
        button.classList.add("correct");
    }
    button.disabled = "true";
});
nextButton.style.display = "block";
}

function showScore() {
resetState();
questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
nextButton.innerHTML = "Play Again"
nextButton.style.display = "block";
}

function handleNextButton() {
currentQuestionIndex++;
if (currentQuestionIndex < questions.length) {
    showQuestion();
} else {
    showScore();
}
}
nextButton.addEventListener("click", () => {
if (currentQuestionIndex < questions.length) {
    handleNextButton();
} else {
    startQuiz();
}
})
startQuiz();