function continueGame() {
    const alphabet = randomNumberGenerator();
    // alphabet showing place
    const displayShow = document.getElementById('display-show');
    displayShow.innerText = alphabet
    // console.log('Display alphabet', alphabet);

    // set background
    setBackgroundColorById(alphabet);
}
function play() {
    addElementById('home-screen');
    removeElementById('play-ground')
    continueGame()
}
