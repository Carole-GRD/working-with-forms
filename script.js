
// Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.

let firstnameInput = document.querySelector('#firstname');
let firstnameDisplay = document.querySelector('#display-firstname');

let firstnameDisplayContent;

firstnameInput.addEventListener('keyup', display);

function display() {
    firstnameDisplay.textContent = firstnameInput.value;
}


// Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.

let age = document.querySelector('#age');
let aHardTruth = document.querySelector('#a-hard-truth');

age.addEventListener('keyup', aHardTruthDisplay);

function aHardTruthDisplay() {

    if (age.value < 18) {
        aHardTruth.setAttribute('style', 'visibility: hidden');
    }
    else {
        aHardTruth.setAttribute('style', 'visibility: visible');
    }
}
