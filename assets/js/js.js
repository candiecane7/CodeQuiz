//Grabbing elements to display
var timerCount = document.querySelector(".timer");
var startbtn = document.querySelector(".start-btn");
var highScoreClick = document.querySelector(".highScore");
var timeLeft = 60;
var mainContent = document.querySelector(".main-content");
var qId = 0;
var questionsContainer = document.querySelector(".questions-container");
var btnContainer = document.querySelector(".buttons");
var score = 0;
var scoreHolder = document.querySelector(".score")
var finalContainer = document.querySelector(".final-container");
var finalScore = document.querySelector(".score-container");
var saveBtn = document.querySelector("#submit");
var viewHigh = document.querySelector(".last-container");
var id = 0;
var saveThis = [];



startbtn.addEventListener("click", timerBegin);

function timerBegin() {
    
    var timer = setInterval(function () {
        if (timeLeft >= 1) {
            timerCount.textContent = "Time: " + timeLeft;
            timeLeft--;
        }
        else {
            timerCount.textContent = "Time:" + 0;
            clearInterval(timer);
            endGame();
        }
    }, 1000);
    questionsStart();

    // return timer;
};

var questions = [
    {
        id: 0,
        question: "When was Taylor Swift born?",
        choices:
            [
                { text: "Dec 13 1989", isTrue: true },
                { text: "Nov 5 1987", isTrue: false },
                { text: "Feb 14 1990", isTrue: false },
                { text: "June 24 1988", isTrue: false }
            ]
    },
    {
        id: 1,
        question: "What are Taylor Swift's favourite animal?",
        choices:
            [
                { text: "Dogs", isTrue: false },
                { text: "Bunnies", isTrue: false },
                { text: "Cats", isTrue: true },
                { text: "Elephants", isTrue: false }
            ]
    },
    {
        id: 2,
        question: "What was the name of Taylor Swift's 5th studio album?",
        choices:
            [
                { text: "Reputation", isTrue: false },
                { text: "1989", isTrue: true },
                { text: "Folklore", isTrue: false },
                { text: "Taylor Swift", isTrue: false }
            ]
    },
    {
        id: 3,
        question: "How many Grammy's has Taylor Swift won?",
        choices:
            [
                { text: "3", isTrue: false },
                { text: "5", isTrue: false },
                { text: "8", isTrue: false },
                { text: "11", isTrue: true }
            ]
    },
    {
        id: 4,
        question: "What is Taylor Swift's lucky number?",
        choices:
            [
                { text: "7", isTrue: false },
                { text: "13", isTrue: true },
                { text: "3", isTrue: false },
                { text: "33", isTrue: false }
            ]
    },
    {
        id: 5,
        question: "What was the name of the first song Taylor Swift ever wrote?",
        choices:
            [
                { text: "Lucky You", isTrue: true },
                { text: "Our Song", isTrue: false },
                { text: "Tim McGraw", isTrue: false },
                { text: "Come Clean", isTrue: false }
            ]
    }
]

//Once start is clicked, start showing questions one at a time
var questionsStart = function () {
    //clear page of title and paragraph
    mainContent.style.display = "none";
    scoreHolder.textContent = "Score: " + score;
    questionsContainer.classList.remove("hide");
    questionsContainer.innerHTML = "";
    if (timeLeft > 0 && qId < 6) {
        var questionEl = document.createElement("div")
        questionEl.setAttribute("class", "questions-section")
        questionEl.textContent = (questions[qId].question);
        questionsContainer.appendChild(questionEl);
        var btnContainer = document.createElement("div");
        btnContainer.setAttribute("class", "buttons");
        questionEl.appendChild(btnContainer);
        for (x = 0; x < 4; x++) {
            var choice = document.createElement("button");
            choice.setAttribute("class", "btn");
            choice.setAttribute("value", questions[qId].choices[x].isTrue);
            choice.textContent = questions[qId].choices[x].text;
            btnContainer.appendChild(choice);
            choice.onclick = answerCheck;
        };


    } else {
        endGame();
    }

}


var answerCheck = function (event) {
    if (event.target.value == "true") {
        timeLeft += 10;
        score += 10;
    } else {
        timeLeft -= 10;
    }
    // choice.setAttribute("class", "hide");
    qId++;
    // debugger;
    // choice.remove("button");
    questionsStart();
}
var endGame = function () {
    questionsContainer.style.display = "none";
    timerCount.style.display = "none";
    finalContainer.classList.remove("hide");
    finalScore.textContent = "Final Score: " + score;
}

    var saveStats = function () {
        // id += 1;
        var localSaved = JSON.parse(localStorage.getItem("highscore"));
        console.log(localSaved);
        if (localSaved) {
            saveThis.push(localSaved);
            var nameSave = document.querySelector("input[name='name']").value;
            var scoreSave = score;
            saveThis.push(nameSave, scoreSave);
            localStorage.setItem("highscore", JSON.stringify(saveThis));
        } else {
            var nameSave = document.querySelector("input[name='name']").value;
            var scoreSave = score;
            saveThis.push(nameSave, scoreSave);
            localStorage.setItem("highscore", JSON.stringify(saveThis));
        }

    }

    var getHighScores = function () {
        finalContainer.classList.remove("hide")
        mainContent.style.display = "none";
        finalContainer.style.display = "none";
        questionsContainer.style.display = "none";
        viewHigh.classList.remove("hide");


    }

    highScoreClick.addEventListener("click", getHighScores);
    saveBtn.addEventListener("click", saveStats)