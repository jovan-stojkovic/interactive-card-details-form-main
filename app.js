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
    if ((inputNumber.value.length === 16)) {
      cardNumber.innerText = inputNumber.value;
    } else if (inputNumber.value.length !== 16) {
      cardNumber.innerText = "---- ---- ---- ----";
      numberError.innerHTML =
        "Wrong format, Card Number must have exactly 16 characters";
    }
  } else {
    cardNumber.innerText = "---- ---- ---- ----";
    numberError.innerText = "Can't be blank";
  }

  if (inputName.value) {
    cardName.innerText = inputName.value.toUpperCase();
  } else {
    cardName.innerText = "-------";
    cardNameError.innerText = "Can't be blank";
  }

  if (inputDateMM.value) {
    if (inputDateMM.value.length > 1) {
      cardDateMM.innerText = inputDateMM.value;
    } else if ((inputDateMM.value.length = 1)) {
      cardDateMM.innerHTML = `0${inputDateMM.value}`;
    }
  } else {
    cardDateMM.innerText = "--";
    dateError.innerText = "Can't be blank";
  }

  if (inputDateYY.value) {
    if (inputDateYY.value.length > 1) {
      cardDateYY.innerText = inputDateYY.value;
    } else if ((inputDateYY.value.length = 1)) {
      cardDateYY.innerHTML = `0${inputDateYY.value}`;
    }
  } else {
    cardDateYY.innerText = "--";
    dateError.innerText = "Can't be blank";
  }

  if (inputCvc.value) {
    cardCvc.innerText = inputCvc.value;
  } else {
    cardCvc.innerText = "---";
    cvcError.innerText = "Can't be blank";
  }
}
