
// Use JavaScript to select the 'Name' input element and place focus on it.
const name = document.getElementById('name');
name.focus();

// Target the ‘Other’ input field, and hide it initially, so that it will
// display if JavaScript is disabled, but be hidden initially with JS.
const otherJobRole = document.getElementById('other-title');
let jobRoleInput = otherJobRole.style;
jobRoleInput.display = 'none';

// Text field will be revealed only when the "Other" option is selected
// from the "Job Role" drop down menu.
const otherJobRoleDisplay = document.querySelector('#title');
otherJobRoleDisplay.addEventListener('change', (e) => {
  const ifSelectedOption = e.target.value;

  ifSelectedOption === 'other' ? jobRoleInput.display = 'block' : jobRoleInput.display = 'none'
})

// Hide the “Select Theme” `option` element in the “Design” menu.
const colors = document.getElementById('colors-js-puns');
colors.style.display = 'none';

// gets passed the value of one of the options from the design menu
const handleDesignTheme = (theme, selectHTML) => {
  if (theme === 'js puns') {
    // if 'js puns' gets passed, it displays Color menu with cornflowerblue,
    //  darkslategrey, and gold options
    const punsHTML = `<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
    <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>
    <option value="gold">Gold (JS Puns shirt only)</option>`
    selectHTML.innerHTML = punsHTML;
    colors.style.display = 'block';
  } else if (theme === 'heart js') {
    // if 'heart js' gets passed, it displays Color menu with tomato,
    //  steelblue, and dimgrey options
    const heartHTML = `<option value="tomato">Tomato (I &#9829; JS shirt only)</option>
    <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option>
    <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>`
    selectHTML.innerHTML = heartHTML;
    colors.style.display = 'block';
  } else {
    // if 'Select Theme' gets passed, it displays Color menu with one
    //  option that says 'Please select a T-shirt theme'
    const selectThemeHTML = `<option value="selectTheme" disable="true">Please select a T-shirt theme</option>`
    selectHTML.innerHTML = selectThemeHTML;
    colors.style.display = 'block';
  }
}

const design = document.getElementById('design');
design.addEventListener('change', (e) => {
    const theme = e.target.value;
    const selectHTML = document.querySelector('#color');
    handleDesignTheme(theme, selectHTML);
  })

const handleActivities = () => {
  const activities = document.querySelector('.activities');
  const checkboxes = activities.querySelectorAll('input')
  let isChecked = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) { isChecked.push(checkboxes[i]) }
  }
  return isChecked
}

const createEl = (el, id, text) => {
  const elem = document.createElement(el);
  elem.id = id;
  elem.textContent = text;
  return elem
}

const removePreviousPrice = () => {
  if (document.querySelector('#price')) {
    const parent = document.querySelector('#price').parentNode;
    const child = document.querySelector('#price');
    parent.removeChild(child);
  }
}

const setNewPrice = () => {
  const isChecked = handleActivities();
  const activityCosts = [];
  for (let i = 0; i < isChecked.length; i++) {
    activityCosts.push(parseInt(isChecked[i].dataset.cost));
  }
  const totalCost = activityCosts.reduce(function(a, b){
      return a + b;
  }, 0); //https://www.tutorialrepublic.com/faq/how-to-find-the-sum-of-an-array-of-numbers-in-javascript.php
  if (totalCost === 0) {
    const text = `Total Price:`
    const priceHTML =  createEl('label', "price", text);
    activities.appendChild(priceHTML)
  } else {
    const text = `Total Price: $${totalCost}`
    const priceHTML =  createEl('label', "price", text);
    activities.appendChild(priceHTML)
  }
}

const handleTotalPrice = () => {
  removePreviousPrice();
  setNewPrice();
}


/*
Some events are at the same day and time as others.
*/
const activities = document.querySelector('.activities');
const checkboxes = activities.querySelectorAll('input')

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

  if ( nameOfChecked === 'js-frameworks' && dayAndTime === dayAndTimeExpress ) {
    express.disabled = true;
  }
  if (nameOfChecked === 'js-frameworks' && !targetChecked) {
    express.disabled = false;
  }
  if ( nameOfChecked === 'js-libs' && dayAndTime === dayAndTimeNode ) {
    node.disabled = true;
  }
  if ( nameOfChecked === 'js-libs' && !targetChecked ) {
    node.disabled = false;
  }
  if ( nameOfChecked === 'express' && dayAndTime === dayAndTimeFrameworks ) {
    frameworks.disabled = true;
  }
  if ( nameOfChecked === 'express' && !targetChecked ) {
    frameworks.disabled = false;
  }
  if ( nameOfChecked === 'node' && dayAndTime === dayAndTimeLibs ) {
    libraries.disabled = true;
  }
  if ( nameOfChecked === 'node' && !targetChecked ) {
    libraries.disabled = false;
  }
}

// append `Total Price:` to page upon initial load
const text = `Total Price:`
const priceHTML =  createEl('label', "price", text);
activities.appendChild(priceHTML)

// track what activities have been checked off and total price
activities.addEventListener('change', (e) => {
  handleScheduling(e);
  handleTotalPrice();
})

// Make Credit Card the default option by removing "select method" option,
// and hidding paypal and bitcoin messages
const payments = document.querySelector('#payment');
const paymentOptions = payments.querySelectorAll('option');
payments.removeChild(paymentOptions[0])
document.querySelector('#paypal').style.display = 'none'
document.querySelector('#bitcoin').style.display = 'none'

// Display payment sections based on the payment option chosen in the select menu.
payments.addEventListener('change', (e) => {
  console.log(e.target.value);
  // The "Credit Card" payment option should be selected by default. Display the #credit-card div, and hide the "PayPal" and "Bitcoin" information. Payment option in the select menu should match the payment option displayed on the page.
  if (e.target.value === 'credit card') {
    document.querySelector('#credit-card').style.display = 'block'
    document.querySelector('#paypal').style.display = 'none'
    document.querySelector('#bitcoin').style.display = 'none'
  }
  // When a user selects the "PayPal" payment option, the PayPal information should display, and the credit card and “Bitcoin” information should be hidden.
  if (e.target.value === 'paypal') {
    document.querySelector('#paypal').style.display = 'block'
    document.querySelector('#credit-card').style.display = 'none'
    document.querySelector('#bitcoin').style.display = 'none'
  }
  // When a user selects the "Bitcoin" payment option, the Bitcoin information should display, and the credit card and “PayPal” information should be hidden.
  if (e.target.value === 'bitcoin') {
    document.querySelector('#bitcoin').style.display = 'block'
    document.querySelector('#paypal').style.display = 'none'
    document.querySelector('#credit-card').style.display = 'none'

  }
})

const nameValidation = document.querySelector('[id=name]')
nameValidation.placeholder = `Full Name`
nameValidation.addEventListener('change', (e) => {
  if (nameValidation.value === '') {
    document.querySelector('[for=name]').textContent = "Name: 🤪"
  } else {
    document.querySelector('[for=name]').textContent = "Name: 😁"
  }
})


/*
American Express :- Starting with 34 or 37, length 15 digits.
  3434 123456 12345
Visa :- Starting with 4, length 13 or 16 digits.
  4000 1234 1234 1234 or 4234 12345 1234
MasterCard :- Starting with 51 through 55, length 16 digits.
  5123 1234 1234 1234
Discover :- Starting with 6011, length 16 digits or starting with 5, length 15 digits.
  6011 1234 1234 1234 or 5234 1234 1234 123
Diners Club :- Starting with 300 through 305, 36, or 38, length 14 digits.
  3634 123456 1234
JCB :- Starting with 2131 or 1800, length 15 digits or starting with 35, length 16 digits.
  3534 1234 1234 1234 or

https://www.w3resource.com/javascript/form/credit-card-validation.php
*/

// Credit card validation
const multOddsBy2 = (reversed) => {
  for (let i = 0; i < reversed.length; i+= 2) {
    reversed[i] = reversed[i] * 2;
  }
  return reversed;
}
const sub9IfOver9 = (oddsMultipliedBy2) => {
  for (let i = 0; i < oddsMultipliedBy2.length; i++) {
    if (oddsMultipliedBy2[i] > 9) {
      oddsMultipliedBy2[i] = oddsMultipliedBy2[i] - 9;
    }
  }
  return oddsMultipliedBy2;
}
const validateCreditCard = (mod10, lastNum) => {
  if (mod10 === lastNum) {
    return "Credit Card Number is Valid!";
  }
}


// Luhn algorith for credit card validation
const origNum = [4, 5, 5,	6, 7,	3, 7, 5, 8, 6, 8, 9, 9, 8, 5, 5];

const creditValidator = (arr) => {
  return validateCreditCard(sub9IfOver9(multOddsBy2(arr.reverse())).reduce(function(a, b){return a + b; }, 0) % 10, arr.pop());
}
//console.log(creditValidator(origNum));

const labelCcNum = document.querySelector('[for=cc-num]');

const ccNum = document.querySelector('[id=cc-num]');
ccNum.addEventListener('keyup', (e) => {
  const num = ccNum.value;
  const numArr = [];
  for (var i = 0; i < num.length; i++) {
    numArr.push(parseInt(num[i]));
  }
  const firstTwo = parseInt(numArr.splice(0,2).join('')) // use Regex
  if (firstTwo === 34 || firstTwo === 37) { // use Regex
    labelCcNum.textContent = 'Card Number: American Express';
  } else {
    labelCcNum.textContent = 'Card Number:';
  }

})

/*
  `\d{13,16}` digits between 13 and 16 numbers in length
  `\d{4} \d{4} \d{4} \d{4}` matches `1234 1234 1234 1234`
*/
