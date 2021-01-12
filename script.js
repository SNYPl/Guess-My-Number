'use strict';

let message = document.querySelector(".message");
let hiddenNumber = document.querySelector(".number");
let mainScore = document.querySelector('.score');

let number = Math.trunc(Math.random() * 20 + 1);
let hidden = hiddenNumber = number;
let score = 20;

mainScore.textContent = score;

let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
    let guessNumber = Number(document.querySelector(".guess").value);

    if (guessNumber !== hidden) {

        message.textContent = guessNumber < hidden ? "📉 Too low!" : "📈 Too high!";
        score--;
        mainScore.textContent = score;

        if (score === 0) {
            message.textContent = "💥 You lost the game!";
            document.querySelector(".check").disabled = true;
            document.querySelector(".check").style.backgroundColor = "rgb(104, 103, 103)";
        }

    } else if (guessNumber === hidden) {
        document.querySelector(".number").textContent = hidden;
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".check").disabled = true;
        document.querySelector(".check").style.backgroundColor = "rgb(104, 103, 103)";
        message.textContent = "🎉 Correct Number!";

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
});



document.querySelector(".again").addEventListener("click", function () {
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem";
    hidden = Number(hiddenNumber = number);
    message.textContent = "Start guessing...";
    document.querySelector(".guess").value = "";
    document.querySelector(".check").disabled = false;
    document.querySelector(".check").style.backgroundColor = "#eee";
    number = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    mainScore.textContent = score;


});