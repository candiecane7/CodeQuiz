//Grabbing elements to display
var timerCount = document.querySelector(".timer");
var startbtn = document.querySelector(".start-btn");
var highScoreClick = document.querySelector(".highscore");
var timeLeft = 75;
var mainContent = document.querySelector(".main-content");
currentIndex = 0;
var questionsContainer = document.querySelector(".questions-container");
var btnContainer = document.querySelector(".buttons");

startbtn.addEventListener("click", function () {
    var timer = setInterval(countdown, 1000);
    questionsStart();

});

//Starting with the timer
function countdown() {

    if (timeLeft >= 1) {
        timerCount.textContent = "Time: " + timeLeft;
        timeLeft--;
    }
    else {
        timerCount.textContent = "Time:" + 0;
        clearInterval(timer);
        endGame();
    }
}

var questions = [
    {
        question: "When was Taylor Swift born?",
        choices: ["Dec 13 1989", "Nov 5 1987", "Feb 14 1990", "June 24 1988"],
        answer: "Dec 13 1989"
    },
    {
        question: "What are Taylor Swift's favourite animal?",
        choices: ["Dogs", "Bunnies", "Cats", "Elephants"],
        answer: "Cats"
    },
    {
        question: "What was the name of Taylor Swift's 5th studio album?",
        choices: ["Reputation", "1989", "Folklore", "Taylor Swift"],
        answer: "1989"
    },
    {
        question: "How many Grammy's has Taylor Swift won?",
        choices: ["3", "5", "8", "11"],
        answer: "11"
    },
    // {
    //     question: "What is Taylor Swift's lucky number?",
    //     choices: ["7", "13", "3", "33"],
    //     answer: "13"
    // },
    // {
    //     question: "What was the name of the first song Taylor Swift ever wrote?",
    //     choices: ["Lucky You", "Our Song", "Tim McGraw", "Come Clean"],
    //     answer: "Lucky You"
    // }
]

//Once start is clicked, start showing questions one at a time
var questionsStart = function () {
    //clear page of title and paragraph
    mainContent.style.display = "none";
    questionsContainer.classList.remove("hide");
    // for loop that will loop over the questions
    for (i = 0; i < questions.length; i++) {
        var questionEl = document.querySelector(".questions-section")
        questionEl.textContent = (questions[i].question);
        var choice = document.createElement("button");
        choice.setAttribute("class", "btn");
        choice.setAttribute("value", questions[i].choices[i])
        choice.textContent = questions[i].choices[i]; 
       btnContainer.appendChild(choice);
       choice.onclick = answerCheck;
    }
}

var answerCheck = function() {
    if (event.target.value === questions[i].answer) {
        timeLeft +=10;
    } else {
        timeLeft -=10;
    }
}
var endGame = function(){

}