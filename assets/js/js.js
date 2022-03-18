//Grabbing elements to display
var timerCount = document.querySelector(".timer");
var startbtn = document.querySelector(".start-btn");



//Starting with the timer
function countdown() {
    var timeLeft = 75;
    debugger;

    var timer = setInterval(function () {
        if (timeLeft >= 1) {
            timerCount.textContent ="Time: " + timeLeft;
            timeLeft--;
        }
        else {
            timerCount.textContent += '0';
            clearInterval(timer);
        }
    }
        , 1000);
}
countdown();