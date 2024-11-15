/* Variables */
let score = 0;
let activeButton = null;
let gameInterval;
let gameTime = 10;

/* Get ID */
const startButton = document.getElementById('startButton');
const scoreElement = document.getElementById('score');
const buttons = document.querySelectorAll('.game-button');

/* Start game sequence */
function startGame() {
    score = 0;
    scoreElement.textContent = 'Punktzahl: ' + score;
    startButton.disabled = true;

    buttons.forEach(button => button.classList.remove('active'));

    let timeLeft = gameTime;
    const timer = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
    /* New mole pops up every second */
    gameInterval = setInterval(highlightRandomButton, 1000,);
}
/* Function upon reaching the 10 second mark */
function endGame() {
    clearInterval(gameInterval);
    startButton.disabled = false;
    activeButton.classList.remove('active');
    alert('Spiel beendet! Deine Punktzahl: ' + score);
}
/* Upon clicking on the active button, it's active status is removed */
function highlightRandomButton() {
    if (activeButton) {
        activeButton.classList.remove('active');
    }
    /* Randomizer Function */
    const randomButtonIndex = Math.floor(Math.random() * buttons.length);
    activeButton = buttons[randomButtonIndex];
    activeButton.classList.add('active');
}
/* If an active button is pressed, score increases and a random button is selected to be active */
function handleButtonClick(event) {
    const button = event.target;
    if (button === activeButton) {
        score++;
        scoreElement.textContent = 'Punktzahl: ' + score;
        highlightRandomButton();
    }
}

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

startButton.addEventListener('click', startGame);

const follower = document.getElementById('follower');

document.addEventListener('mousemove', (e) => {
    const size = 20;
    follower.style.left = `${e.pageX - size / 2}px`;
    follower.style.top = `${e.pageY - size / 2}px`;
});