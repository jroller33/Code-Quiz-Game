const questionsArray = [
    {
        name: "q1",
        text: "What provides the basic structure of a webpage?",
        ansChoices: ["JavaScript", "CSS", "Perl", "HTML"],
        correctAns: "HTML",
    },
    {
        name: "q2",
        text: "What does HTML stand for?",
        ansChoices: [
            "Hyperlinks and Text Markup", 
            "Hyper Text Markup Language",
            "Home Test Mark Language",
            "Hello to Mr. Larson"
        ],
        correctAns: "Hyper Text Markup Language",
    },
    {
        name: "q3",
        text: "Which HTML element has the largest heading?",
        ansChoices: ["<heading>", "<h1>", "<head>", "<h6>"],
        correctAns: "<h1>",
    },
    {
        name: "q4",
        text: "How do you create a hyperlink in HTML?",
        ansChoices: [
            "<a url='http://www.google.com'>Google</a>",
            "<a name='http://www.google.com'>Google</a>",
            "<a>='http://www.google.com'>Google</a>",
            "<a href='http://www.google.com'>Google</a>"
        ],
        correctAns: "<a href='http://www.google.com'>Google</a>",
    },
    {
        name: "q5",
        text: "What is the correct HTML for making a checkbox?",
        ansChoices: [
            "<checkbox>",
            "<check>",
            "<input type='check'>",
            "<input type='checkbox'>"
        ],
        correctAns: "<input type='checkbox'>",
    },
    {
        name: "q6",
        text: "What does CSS stand for?",
        ansChoices: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Colorful Style Sheets",
            "Computer Style Sheets"
        ],
        correctAns: "Cascading Style Sheets",
    },
    {
        name: "q7",
        text: "Where in an HTML document should you refer to the external style sheet?",
        ansChoices: [
            "In the <body> section",
            "In the <head> section",
            "At the end",
            "It doesn't matter where it is"
        ],
        correctAns: "In the <head> section",
    },
    {
        name: "q8",
        text: "Which property is used to change the background color?",
        ansChoices: [
            "background-color",
            "color",
            "bgcolor",
            "backgroundcolor"
        ],
        correctAns: "background-color",
    },
    {
        name: "q9",
        text: "Which CSS property is used to change the text color of an element?",
        ansChoices: [
            "fgcolor",
            "text-color",
            "color",
            "textcolor"
        ],
        correctAns: "color",
    },
    {
        name: "q10",
        text: "How do you call a function named 'newFunction' in JavaScript?",
        ansChoices: [
            "call newFunction()",
            "newFunction",
            "newFunction()",
            "use newFunction()"
        ],
        correctAns: "newFunction()",
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
    clearInterval(timerId);
    questionTextEl.setAttribute("style", "display: none");
    highScoresEl.setAttribute("style", "display: block");

    addInitials();
}

function addInitials() {
    userScore = document.createElement("p");
    initials = document.createElement("p");
    userInitials = document.createElement("input");
    submitBtn = document.createElement("button");

    userScore.textContent = `Your time was ${time}`;
    initials.textContent = "Your initials: ";
    userInitials.setAttribute("name", "initials");
    userInitials.setAttribute("placeholder", "Type here");
    submitBtn.textContent = "Submit";
    submitBtn.setAttribute("class", "userChoice");
    submitBtn.setAttribute("id", "submitBtn");

    highScoresEl.appendChild(userScore);
    highScoresEl.appendChild(initials);
    highScoresEl.appendChild(userInitials);
    highScoresEl.appendChild(submitBtn);

    submitBtn.addEventListener("click", inputInitials);
}

function inputInitials() {
    if (userInitials.value.length < 2) {
        initials.textContent = "Add your initials";
    } else {
        saveUserScore();
    }
}

function saveUserScore() {
    let scoreArray = [];
    let userInfo = {
        userInitials: userInitials.value,
        score: time
    }

    let scoreStorage = localStorage.getItem("userInfo");
    scoreArray = [JSON.parse(scoreStorage)];

    localStorage.setItem("userInfo", JSON.stringify([userInfo]));

    userScore.setAttribute("style", "display: none");
    userInitials.setAttribute("style", "display: none");
    initials.setAttribute("style", "display: none");
    submitBtn.setAttribute("style", "display: none");

    showAllScores();
}

function showAllScores() {
    let scoreParentEl = document.getElementById("highScores");
    let scoreChildEl = document.getElementsByClassName("score");

    if (scoreChildEl.length > 0) {
        scoreParentEl.removeChild(scoreChildEl);
    }

    let userData = localStorage.getItem("userInfo");
    let userDataParse = JSON.parse(userData);
    userDataParse.forEach((data, i) => {
        let user = document.createElement("div");
        user.setAttribute("class", "score");
        user.textContent = (`${index + 1}. ${info.playerInit}, ${info.score}`);

        highScoresEl.appendChild(user);
    });

    replay();
}

function replay() {
    replayBtn = document.createElement("button");
    replayBtn.textContent = "Do you want to play again?";
    replayBtn.setAttribute("class", "choice");
    replayBtn.setAttribute("id", "replay");
    highScoresEl.appendChild(replayBtn);
    replayBtn.addEventListener("click", function() {
        replayBtn.setAttribute("style", "display: none");
        startQuiz();
    });
};

timerEl.setAttribute("style", "display: none");

highScoresEl.setAttribute("style", "display: none");

startBtn.addEventListener("click", startQuiz);



