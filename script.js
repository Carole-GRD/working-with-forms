
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


// Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match.

let pwd = document.querySelector('#pwd');
let pwdConfirm = document.querySelector('#pwd-confirm');

pwd.addEventListener('keyup', tooShort);
pwdConfirm.addEventListener('keyup', confirm);

function tooShort() {
    console.log('pwd.value.length : ', pwd.value.length);
    if (pwd.value.length < 6) {
        pwd.style.backgroundColor = 'crimson';
    }
    else {
        pwd.style.backgroundColor = 'white';
    }
}

function confirm() {
    if (pwdConfirm.value && (pwd.value !== pwdConfirm.value)) {
        pwdConfirm.style.backgroundColor = 'crimson';
    }
    else {
        pwdConfirm.style.backgroundColor = 'white';
    }
}


// Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white.

let toggleDarkmode = document.querySelector('#toggle-darkmode');

toggleDarkmode.addEventListener('change', darkmode);

function darkmode() {
    console.log('toggleDarkmode.value : ', toggleDarkmode.value);
    if (toggleDarkmode.value === 'dark') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
    else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}