//Grabbing elements to display
var timerCount = document.querySelector(".timer");
var startbtn = document.querySelector(".start-btn");
var highScoreClick = document.querySelector(".highscore");
var timeLeft = 75;
var mainContent = document.querySelector(".main-content");
var qId = 0;
var questionsContainer = document.querySelector(".questions-container");
var btnContainer = document.querySelector(".buttons");
var score = 0;

startbtn.addEventListener("click", timerBegin);

function timerBegin (){
    questionsStart();
    var timer = setInterval(function(){
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
    
    // return timer;
};

var questions = [
    {
        id:0,
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
    {   id: 3,
        question: "How many Grammy's has Taylor Swift won?",
        choices:
            [
                { text: "3", isTrue: false },
                { text: "5", isTrue: false },
                { text: "8", isTrue: false },
                { text: "11", isTrue: true }
            ]
    }
]

//Once start is clicked, start showing questions one at a time
var questionsStart = function () {
    //clear page of title and paragraph
    mainContent.style.display = "none";
    questionsContainer.classList.remove("hide");
    //reset choices

    // for loop that will loop over the questions
    // for (i = 0; i < questions.length; i++) {
        var questionEl = document.querySelector(".questions-section")
        questionEl.textContent = (questions[qId].question);

        for (x = 0; x < 4; x++) {
            var choice = document.createElement("button");
            choice.setAttribute("class", "btn");
            choice.setAttribute("value", questions[qId].choices[x].isTrue);
            choice.textContent = questions[qId].choices[x].text;
            btnContainer.appendChild(choice);  
        };
        choice.addEventListener("click", function(event){
            if (event.target.value === true) {
                timeLeft += 10;
            } else {
                timeLeft -= 10;
            }
        })
        
    // }
    // if(timeLeft>0){
    // questionsStart();
    // }else {
    //     endGame();
    // }
}

var answerCheck = function (event) {
    if (event.target.value === true) {
        timeLeft += 10;
    } else {
        timeLeft -= 10;
    }
}
var endGame = function () {

}