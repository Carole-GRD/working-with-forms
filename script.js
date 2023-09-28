
// Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.

let firstnameInput = document.querySelector('#firstname');
let firstnameDisplay = document.querySelector('#display-firstname');

let firstnameDisplayContent;

firstnameInput.addEventListener('keyup', display);

function display() {
    firstnameDisplay.textContent = firstnameInput.value;
}
