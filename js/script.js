// Use JavaScript to select the 'Name' input element and place focus on it.
const name = document.getElementById("name");
name.focus();

// Target the ‘Other’ input field, and hide it initially, so that it will
// display if JavaScript is disabled, but be hidden initially with JS.
const otherJobRole = document.getElementById("other-title");
let jobRoleInput = otherJobRole.style;
jobRoleInput.display = "none";

// Text field will be revealed only when the "Other" option is selected
// from the "Job Role" drop down menu.
const otherJobRoleDisplay = document.querySelector("#title");
otherJobRoleDisplay.addEventListener("change", (e) => {
  const ifSelectedOption = e.target.value;

  ifSelectedOption === "other"
    ? (jobRoleInput.display = "block")
    : (jobRoleInput.display = "none");
});

// Hide the “Select Theme” `option` element in the “Design” menu.
const colors = document.getElementById("colors-js-puns");
colors.style.display = "none";

// gets passed the value of one of the options from the design menu
const handleDesignTheme = (theme, selectHTML) => {
  if (theme === "js puns") {
    // if 'js puns' gets passed, it displays Color menu with cornflowerblue,
    //  darkslategrey, and gold options
    const punsHTML = `<option value="cornflowerblue">Cornflower Blue</option>
    <option value="darkslategrey">Dark Slate Grey</option>
    <option value="gold">Gold</option>`;
    selectHTML.innerHTML = punsHTML;
    colors.style.display = "block";
  } else if (theme === "heart js") {
    // if 'heart js' gets passed, it displays Color menu with tomato,
    //  steelblue, and dimgrey options
    const heartHTML = `<option value="tomato">Tomato</option>
    <option value="steelblue">Steel Blue</option>
    <option value="dimgrey">Dim Grey</option>`;
    selectHTML.innerHTML = heartHTML;
    colors.style.display = "block";
  } else {
    // if 'Select Theme' gets passed, it displays Color menu with one
    //  option that says 'Please select a T-shirt theme'
    const selectThemeHTML = `<option value="selectTheme" disable="true">Please select a T-shirt theme</option>`;
    selectHTML.innerHTML = selectThemeHTML;
    colors.style.display = "block";
  }
};

const design = document.getElementById("design");
design.addEventListener("change", (e) => {
  const theme = e.target.value;
  const selectHTML = document.querySelector("#color");
  handleDesignTheme(theme, selectHTML);
});

const handleActivities = () => {
  const activities = document.querySelector(".activities");
  const checkboxes = activities.querySelectorAll("input");
  let isChecked = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      isChecked.push(checkboxes[i]);
    }
  }
  return isChecked;
};

const createEl = (el, id, text) => {
  const elem = document.createElement(el);
  elem.id = id;
  elem.textContent = text;
  return elem;
};

const removePreviousPrice = () => {
  if (document.querySelector("#price")) {
    const parent = document.querySelector("#price").parentNode;
    const child = document.querySelector("#price");
    parent.removeChild(child);
  }
};

let activitySelected = false;
const setNewPrice = () => {
  const isChecked = handleActivities();
  const activityCosts = [];
  for (let i = 0; i < isChecked.length; i++) {
    activityCosts.push(parseInt(isChecked[i].dataset.cost));
  }
  const totalCost = activityCosts.reduce(function (a, b) {
    return a + b;
  }, 0); //https://www.tutorialrepublic.com/faq/how-to-find-the-sum-of-an-array-of-numbers-in-javascript.php
  if (totalCost === 0) {
    const text = `Total Price: 🤪 Must Select At Least One Activity`;
    const priceHTML = createEl("label", "price", text);
    activities.appendChild(priceHTML);
    document.querySelector("#price").className += ' boldTextRed'; 
    activitySelected = false;
  } else {
    const text = `Total Price: $${totalCost}`;
    const priceHTML = createEl("label", "price", text);
    activities.appendChild(priceHTML);
    document.querySelector("#price").className += ' boldTextGreen'; 
    activitySelected = true;
  }
};

const handleTotalPrice = () => {
  removePreviousPrice();
  setNewPrice();
};

/*
Some events are at the same day and time as others.
*/
const activities = document.querySelector(".activities");
const checkboxes = activities.querySelectorAll("input");

const handleScheduling = (e) => {
  const dayAndTime = e.target.dataset.dayAndTime;
  const nameOfChecked = e.target.name;
  const targetChecked = e.target.checked;

  const frameworks = checkboxes[1];
  const dayAndTimeFrameworks = frameworks.dataset.dayAndTime;

  const libraries = checkboxes[2];
  const dayAndTimeLibs = libraries.dataset.dayAndTime;

  const express = checkboxes[3];
  const dayAndTimeExpress = express.dataset.dayAndTime;

  const node = checkboxes[4];
  const dayAndTimeNode = node.dataset.dayAndTime;

  if (nameOfChecked === "js-frameworks" && dayAndTime === dayAndTimeExpress) {
    express.disabled = true;
  }
  if (nameOfChecked === "js-frameworks" && !targetChecked) {
    express.disabled = false;
  }
  if (nameOfChecked === "js-libs" && dayAndTime === dayAndTimeNode) {
    node.disabled = true;
  }
  if (nameOfChecked === "js-libs" && !targetChecked) {
    node.disabled = false;
  }
  if (nameOfChecked === "express" && dayAndTime === dayAndTimeFrameworks) {
    frameworks.disabled = true;
  }
  if (nameOfChecked === "express" && !targetChecked) {
    frameworks.disabled = false;
  }
  if (nameOfChecked === "node" && dayAndTime === dayAndTimeLibs) {
    libraries.disabled = true;
  }
  if (nameOfChecked === "node" && !targetChecked) {
    libraries.disabled = false;
  }
};

// append `Total Price:` to page upon initial load
const text = `Total Price:`;
const priceHTML = createEl("label", "price", text);
activities.appendChild(priceHTML);

// track what activities have been checked off and total price
activities.addEventListener("change", (e) => {
  handleScheduling(e);
  handleTotalPrice();
});

// Make Credit Card the default option by removing "select method" option,
// and hidding paypal and bitcoin messages
const payments = document.querySelector("#payment");
const paymentOptions = payments.querySelectorAll("option");
payments.removeChild(paymentOptions[0]);
document.querySelector("#paypal").style.display = "none";
document.querySelector("#bitcoin").style.display = "none";

// Display payment sections based on the payment option chosen in the select menu.
let payWithCredit = true;
let payWithPaypal = false;
let payWithBitcoin = false;
payments.addEventListener("change", (e) => {
  // Display the #credit-card div, and hide the "PayPal" and "Bitcoin" information.
  if (e.target.value === "credit card") {
    document.querySelector("#credit-card").style.display = "block";
    document.querySelector("#paypal").style.display = "none";
    document.querySelector("#bitcoin").style.display = "none";
    payWithCredit = true;
    payWithPaypal = false;
    payWithBitcoin = false;
  }
  // When a user selects the "PayPal" payment option, the PayPal information should display, and the credit card and “Bitcoin” information should be hidden.
  if (e.target.value === "paypal") {
    document.querySelector("#paypal").style.display = "block";
    document.querySelector("#credit-card").style.display = "none";
    document.querySelector("#bitcoin").style.display = "none";
    payWithCredit = false;
    payWithPaypal = true;
    payWithBitcoin = false;
  }
  // When a user selects the "Bitcoin" payment option, the Bitcoin information should display, and the credit card and “PayPal” information should be hidden.
  if (e.target.value === "bitcoin") {
    document.querySelector("#bitcoin").style.display = "block";
    document.querySelector("#paypal").style.display = "none";
    document.querySelector("#credit-card").style.display = "none";
    payWithCredit = false;
    payWithPaypal = false;
    payWithBitcoin = true;
  }
});

// validation for name
let nameValid = false;
const nameValidation = document.querySelector("[id=name]");
nameValidation.placeholder = `X Æ A-ii`;
nameValidation.addEventListener("change", (e) => {
  if (nameValidation.value === "") {
    document.querySelector("[for=name]").textContent =
      "Name: 🤪 Username must have at least 1 character";
    nameValidation.style.borderColor = "red";
    nameValid = false;
  } else {
    document.querySelector("[for=name]").textContent = "Name: 😁 Nice name!";
    nameValidation.style.borderColor = "green";
    nameValid = true;
  }
});

// validation for email
const emailInput = document.getElementById("mail");
emailInput.placeholder = `fully@stacked.com`;
let emailValid = false;
function validationCallback(isValidEmail) {
  return (e) => {
    const formInput = e.target.value;
    const isValid = isValidEmail(formInput);
    if (isValid) {
      document.querySelector(
        "[for=mail]"
      ).textContent = `Email: 😁 Nice Email!`;
      emailInput.style.borderColor = "green";
      emailValid = true;
    } else {
      document.querySelector(
        "[for=mail]"
      ).textContent = `Email: 🤪 sorry@try.again`;
      emailInput.style.borderColor = "red";
      emailValid = false;
    }
  };
}

function isValidEmail(email) {
  return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}

emailInput.addEventListener("input", validationCallback(isValidEmail));

//validation for credit card number
const ccNumInput = document.querySelector("#cc-num");
ccNumInput.placeholder = `0000 0000 0000 0000`;
let creditValid = false;
function validationCallbackCred(isValidCreditNum) {
  return (e) => {
    const formInput = e.target.value;
    const isValid = isValidCreditNum(formInput);
    if (isValid) {
      document.querySelector(
        "[for=cc-num]"
      ).textContent = `Card Number: 😁 Cha-ching!`;
      ccNumInput.style.borderColor = "green";
      creditValid = true;
    } else {
      document.querySelector(
        "[for=cc-num]"
      ).textContent = `Card Number: 🤪 Card Number must be 13-16 digits`;
      ccNumInput.style.borderColor = "red";
      creditValid = false;
    }
  };
}

function isValidCreditNum(ccNumValue) {
  return /^\d{13,16}$/.test(ccNumValue);
}

ccNumInput.addEventListener("input", validationCallbackCred(isValidCreditNum));

//validation for zip code
const zipInput = document.querySelector("#zip");
zipInput.placeholder = `12345`;
let zipValid = false;
function validationCallbackZip(isValidZipNum) {
  return (e) => {
    const formInput = e.target.value;
    const isValid = isValidZipNum(formInput);
    if (isValid) {
      document.querySelector("[for=zip]").textContent = `Zip Code: 😁`;
      zipInput.style.borderColor = "green";
      zipValid = true;
    } else {
      document.querySelector(
        "[for=zip]"
      ).textContent = `Zip Code: 🤪 5 digits only`;
      zipInput.style.borderColor = "red";
      zipValid = false;
    }
  };
}

function isValidZipNum(zipInput) {
  return /^\d{5}$/.test(zipInput);
}

zipInput.addEventListener("input", validationCallbackZip(isValidZipNum));

//validation for cvv
const cvvInput = document.querySelector("#cvv");
cvvInput.placeholder = `123`;
let cvvValid = false;
function validationCallbackCVV(isValidCVV) {
  return (e) => {
    const formInput = e.target.value;
    const isValid = isValidCVV(formInput);
    if (isValid) {
      document.querySelector("[for=cvv]").textContent = `CVV: 😁`;
      cvvInput.style.borderColor = "green";
      cvvValid = true;
    } else {
      document.querySelector("[for=cvv]").textContent = `CVV: 🤪 3 digits only`;
      cvvInput.style.borderColor = "red";
      cvvValid = false;
    }
  };
}

function isValidCVV(cvvInput) {
  return /^\d{3}$/.test(cvvInput);
}

cvvInput.addEventListener("change", validationCallbackCVV(isValidCVV));

const validPaymentMethod = () => {
  if (payWithCredit) {
    if (creditValid && zipValid && cvvValid) {
      return true;
    }
  } else if (payWithPaypal) {
    return true;
  } else if (payWithBitcoin) {
    return true;
  } else {
    return false;
  }
};

const readyToSubmit = () => {
  if (nameValid && emailValid && activitySelected && validPaymentMethod()) {
    return true;
  } else {
    return false;
  }
};

const registerButton = document.querySelector("button");
registerButton.textContent = `🤪 Form is Incomplete`;
registerButton.disabled = true;
const form = document.querySelector("form");
form.addEventListener("change", () => {
  if (readyToSubmit()) {
    registerButton.disabled = false;
    registerButton.textContent = `Register`;
    registerButton.style.borderColor = "green";
  } else {
    registerButton.disabled = true;
    registerButton.textContent = `🤪 Form is Incomplete`;
    registerButton.style.borderColor = "red";
  }
});
