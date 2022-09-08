const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const formSuccess = document.querySelector("#formSuccess");

const form = document.querySelector("#contactForm");
const button = document.querySelector(".submitButton");

form.addEventListener("submit", validateForm);

function validateForm () {

    event.preventDefault();

    if (checkLength (subject, 10)) {
        
        subjectError.style.display = "block";

    }

    else {

        subjectError.style.display = "none";

    }

    if (checkLength (adress, 25)) {
        
        adressError.style.display = "block";

    }

    else {

        adressError.style.display = "none";

    }

    if (validateEmail(email.value)) {

        emailError.style.display = "none";

    }

    else {

        emailError.style.display = "block";

    }

    if (validateEmail(email.value) && checkLength(subject, 10) === false && checkLength(adress, 25) === false) {
    
        formSuccess.style.display = "block";

    }
}

function checkLength (input, len) {

    let lengthOfInput = input.value.trim().length;

    if (lengthOfInput < len) {
        
        return true;

    }

    else {

        return false;

    }
}

function validateEmail(email) {

    const regEx = /\S+@\S+\.\S+/;

    const patternMatches = regEx.test(email);

    return patternMatches;

}
