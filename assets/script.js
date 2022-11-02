const questions = [
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
let rightOrWrongEl = document.getElementById("rightOrWrong");
let highScoresEl = document.getElementById("highScores");

function startQuiz() {
    let time = 60;
    let currentQuestionIndex = 0;
    homepageEl.setAttribute("style", "display: none");
    highScoresEl.setAttribute("style", "display: none");
    
}