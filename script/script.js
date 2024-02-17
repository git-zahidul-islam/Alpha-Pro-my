
function handleKeyboardButtonPressed(event) {
    const pressedKey = event.key;
    // display alphabet
    const displayAlphabet = document.getElementById('display-show');
    const display = displayAlphabet.innerText.toLowerCase()
    if (pressedKey === display) {
        displayAlphabet.innerText = display
        // score increese 
        

        removeBackgroundColorById(display)
        continueGame()
    }
    else {
        console.log('you are looser')
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
