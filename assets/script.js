const questionsArray = [
    {
        name: "",
        text: "",
        ansChoices: [""],
        correctAns: "",
    },
    {
        name: "",
        text: "",
        ansChoices: [""],
        correctAns: "",
    },
    {
        name: "",
        text: "",
        ansChoices: [""],
        correctAns: "",
    },
    {
        name: "",
        text: "",
        ansChoices: [""],
        correctAns: "",
    },
    {
        name: "",
        text: "",
        ansChoices: [""],
        correctAns: "",
    },
    {
        name: "",
        text: "",
        ansChoices: [""],
        correctAns: "",
    },
    {
        name: "",
        text: "",
        ansChoices: [""],
        correctAns: "",
    },
    {
        name: "",
        text: "",
        ansChoices: [""],
        correctAns: "",
    },
    {
        name: "",
        text: "",
        ansChoices: [""],
        correctAns: "",
    },
    {
        name: "",
        text: "",
        ansChoices: [""],
        correctAns: "",
    }
];

let homepageEl = document.getElementById("homepage");
let timerEl = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let questionsEl = document.getElementById("questionsPage");
let choicesEl = document.getElementById("ansChoices");
let questionTextEl = document.getElementById("questionText");
// let rightOrWrongEl = document.getElementById("rightOrWrong");
let highScoresEl = document.getElementById("highScores");

let timerId;

function startQuiz() {
    let time = 60;
    let currentQuestionIndex = 0;
    homepageEl.setAttribute("style", "display: none");
    highScoresEl.setAttribute("style", "display: none");
    questionsEl.setAttribute("style", "display: block");
    timerEl.setAttribute("style", "display: inline-block");

    timerId = setInterval(function () {
        countdown()
    }, 1000);

    timerEl.textContent = time;
    newQuestion();
};

function countdown() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        endQuiz();
    }
}

function newQuestion() {
    let currentQuestion = questionsArray[currentQuestionIndex];
    let titleEl = document.getElementById("questionText");
    titleEl.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.text}`;

    choicesEl.innerHTML = "";
    currentQuestion.ansChoices.forEach(function (userChoice, i) {
        let userChoiceBtn = document.createElement("button");
        userChoiceBtn.setAttribute("class", "userChoice");
        userChoiceBtn.setAttribute("value", userChoice);
        userChoiceBtn.textContent = `${i + 1}. ${userChoice}`;
        choicesEl.appendChild(userChoiceBtn);
        userChoiceBtn.addEventListener("click", checkAnswer);
    });

    function checkAnswer() {
        if (this.value !== questionsArray[currentQuestionIndex].correctAns) {
            time -= 5;

            if (time <=0) {
                time = 0;
                endQuiz();
            }
            timerEl.textContent = time;
        } else {
            console.log("correct answer");
        }

        currentQuestionIndex++;

        if (currentQuestionIndex === questionsArray.length) {
            endQuiz();
        } else {
            newQuestion();
        }
    }
}

function endQuiz() {

}