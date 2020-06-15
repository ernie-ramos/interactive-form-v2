
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

/*
Some events are at the same day and time as others.
*/
const activities = document.querySelector('.activities');
const checkboxes = activities.querySelectorAll('input')
console.log(checkboxes);
activities.addEventListener('change', (e) => {
  console.log(e.target.checked);
})
/*
If the user selects a workshop, don't allow selection of a workshop at the same day and time
    -- you should disable the checkbox and
       visually indicate that the workshop in the competing time slot isn't available.
*/

/*
When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
*/

/*
As a user selects activities, a running total should display below the list of checkboxes. For example, if the user selects "Main Conference", then Total: $200 should appear. If they add 1 workshop, the total should change to Total: $300.
*/
