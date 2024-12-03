let timerBox = document.querySelector(".demo");


let timeLeft = 60;
function startTimer() {
    const timer = setInterval(() => {
        if (timeLeft <= 0) {
            startTimerAgain();
            showQuestion();
        } else {
            timerBox.textContent = `time:${timeLeft}`;
            timeLeft--;
        }
    }, 1000);
}
startTimer();

