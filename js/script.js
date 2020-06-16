
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
