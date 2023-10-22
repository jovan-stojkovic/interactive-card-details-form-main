// INPUTS
const inputName = document.getElementById("name-input");
const inputNumber = document.getElementById("number-input");
const inputDateMM = document.getElementById("mm-input");
const inputDateYY = document.getElementById("yy-input");
const inputCvc = document.getElementById("cvc-input");

// CARD OUTPUTS
const cardNumber = document.getElementById("card-number");
const cardName = document.getElementById("card-name");
const cardDateMM = document.getElementById("mm-card");
const cardDateYY = document.getElementById("yy-card");
const cardCvc = document.getElementById("cvc-card");

// FORM ELEMENT
const form = document.querySelector("form");

//ERROR DIVS
const cardNameError = document.getElementById("name-error");
const numberError = document.getElementById("number-error");
const dateError = document.getElementById("date-error");
const cvcError = document.getElementById("cvc-error");

// SUBMIT
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  if (inputNumber.value) {
    cardNumber.innerText = inputNumber.value;
  } else {
    cardNumber.innerText = "---- ---- ---- ----";
  }

  if (inputName.value) {
    cardName.innerText = inputName.value.toUpperCase();
  } else {
    cardName.innerText = "-------";
  }

  if (inputDateMM.value) {
    if (inputDateMM.value.length > 1) {
      cardDateMM.innerText = inputDateMM.value;
    } else if ((inputDateMM.value.length = 1)) {
      cardDateMM.innerHTML = `0${inputDateMM.value}`;
    }
  } else {
    cardDateMM.innerText = "--";
  }

  if (inputDateYY.value) {
    if (inputDateYY.value.length > 1) {
      cardDateYY.innerText = inputDateYY.value;
    } else if ((inputDateYY.value.length = 1)) {
      cardDateYY.innerHTML = `0${inputDateYY.value}`;
    }
  } else {
    cardDateYY.innerText = "--";
  }

  if (inputCvc.value) {
    cardCvc.innerText = inputCvc.value;
  } else {
    cardCvc.innerText = "---";
  }
}
