// INPUTS
const inputName = document.getElementById("name-input");
const inputNumber = document.getElementById("number-input");
const inputDateMM = document.getElementById("mm-input");
const inputDateYY = document.getElementById("yy-input");
const inputCvc = document.getElementById("cvc-input");

// CARD OUTPUTS
const cardNumber = document.getElementById('card-number')

// FORM ELEMENT
const form = document.querySelector("form");

//ERROR DIVS
const cardNameError = document.getElementById('name-error')
const numberError = document.getElementById('number-error')
const dateError = document.getElementById('date-error')
const cvcError = document.getElementById('cvc-error')



// SUBMIT
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
}
