
function handleKeyboardButtonPressed(event) {
    const pressedKey = event.key;
    // display alphabet
    const displayAlphabet = document.getElementById('display-show');
    const display = displayAlphabet.innerText.toLowerCase()
    if (pressedKey === display) {
        displayAlphabet.innerText = display
        const currentScore = getTextElementValueById('current-score');
        const updateScore = currentScore + 1;
        setTextElementValueById('current-score',updateScore);
        // // score increese 
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // // new score
        // const newScore = currentScore + 1;
        // // showing score
        // currentScoreElement.innerText = newScore;

        removeBackgroundColorById(display)
        continueGame()
    }
    else {
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // new life 
        // const newLife = currentLife - 1;
        // // showing element
        // currentLifeElement.innerText = newLife;

    }
}
document.addEventListener('keyup', handleKeyboardButtonPressed)
// continue game
function continueGame() {
    const alphabet = randomNumberGenerator();
    // alphabet showing place
    const displayShow = document.getElementById('display-show');
    displayShow.innerText = alphabet

    // set background
    setBackgroundColorById(alphabet);
}
function play() {
    addElementById('home-screen');
    removeElementById('play-ground')
    continueGame()
}
