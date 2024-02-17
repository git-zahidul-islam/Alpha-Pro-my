// add hidden class
function addElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
// remove hidden class
function removeElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}
// random alphabet generate
function randomNumberGenerator() {
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabet = alphabetString.split('')
    const index = Math.round(Math.random() * 25);
    const random = alphabet[index];
    return random;
}
// keyboard type
function keyboard(id) {
    addEventListener('keyup',)
}
// set background color
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400')
}
// remove background color
function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400')
}
// current element text to number
function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText
    const value = parseInt(elementText);
    return value;
}
function setTextElementValueById (elementId,value){
    const element = document.getElementById(elementId)
    element.innerText = value;
};